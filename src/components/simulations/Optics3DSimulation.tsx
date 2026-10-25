import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Eye, Info, Sparkles } from 'lucide-react';

interface OpticsSimulationProps {
  mode?: 'thin-film' | 'newtons-rings' | 'diffraction' | 'michelson' | 'polarization';
  initialParams?: Record<string, any>;
  onParameterChange?: (params: Record<string, any>) => void;
}

export const Optics3DSimulation: React.FC<OpticsSimulationProps> = ({
  mode: initialMode = 'thin-film',
  initialParams = {},
  onParameterChange
}) => {
  const [activeMode, setActiveMode] = useState<'thin-film' | 'newtons-rings' | 'diffraction' | 'michelson' | 'polarization'>(initialMode);
  
  // Thin film params
  const [filmThickness, setFilmThickness] = useState<number>(initialParams.filmThickness || 450); // nm
  const [refractiveIndex, setRefractiveIndex] = useState<number>(initialParams.refractiveIndex || 1.33); // water/soap
  const [incidentAngle, setIncidentAngle] = useState<number>(initialParams.incidentAngle || 0); // degrees

  // Newton's rings params
  const [lensRadius, setLensRadius] = useState<number>(initialParams.lensRadius || 100); // cm
  const [wavelength, setWavelength] = useState<number>(initialParams.wavelength || 589); // nm (Sodium D line)
  
  // Diffraction params
  const [slitWidth, setSlitWidth] = useState<number>(initialParams.slitWidth || 0.04); // mm
  const [slitCount, setSlitCount] = useState<number>(initialParams.slitCount || 1); // 1 = single slit, 2 = double slit

  // Michelson params
  const [mirrorShift, setMirrorShift] = useState<number>(initialParams.mirrorShift || 5.0); // micrometers

  // Polarization params
  const [polarizerAngle, setPolarizerAngle] = useState<number>(initialParams.polarizerAngle || 0); // degrees
  const [analyzerAngle, setAnalyzerAngle] = useState<number>(initialParams.analyzerAngle || 45); // degrees
  const [sugarConcentration, setSugarConcentration] = useState<number>(initialParams.sugarConcentration || 0.08); // g/cm³

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (onParameterChange) {
      onParameterChange({
        mode: activeMode,
        filmThickness,
        refractiveIndex,
        incidentAngle,
        lensRadius,
        wavelength,
        slitWidth,
        slitCount,
        mirrorShift
      });
    }
  }, [activeMode, filmThickness, refractiveIndex, incidentAngle, lensRadius, wavelength, slitWidth, slitCount, mirrorShift]);

  // Render simulation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (activeMode === 'thin-film') {
      // 1. Draw Thin Film Simulation & Color
      // Calculate effective optical path difference: 2 * mu * t * cos(r) + lambda/2
      const rRad = Math.asin(Math.sin((incidentAngle * Math.PI) / 180) / refractiveIndex);
      const delta = 2 * refractiveIndex * filmThickness * Math.cos(rRad); // in nm
      
      // Determine reflected color based on dominant constructive interference
      // lambda_max = 2*mu*t*cos(r) / (m + 0.5)
      const m = Math.floor(delta / 550);
      const dominantLambda = delta / (Math.max(1, m) + 0.5);
      
      let hue = 200;
      if (dominantLambda >= 380 && dominantLambda <= 750) {
        // Map 380nm (violet/blue ~270) to 700nm (red ~0)
        hue = Math.max(0, Math.min(360, (700 - dominantLambda) * 1.1));
      }

      // Draw Film Layer Cross Section
      const topY = 60;
      const bottomY = Math.min(220, topY + filmThickness / 3.5);

      // Air above
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, topY);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('Medium 1: Air (n₁ = 1.0)', 16, 30);

      // Thin Film
      const filmGradient = ctx.createLinearGradient(0, topY, 0, bottomY);
      filmGradient.addColorStop(0, `hsla(${hue}, 80%, 55%, 0.75)`);
      filmGradient.addColorStop(1, `hsla(${(hue + 40) % 360}, 90%, 45%, 0.85)`);
      ctx.fillStyle = filmGradient;
      ctx.fillRect(0, topY, width, bottomY - topY);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(`Thin Film Layer (n₂ = ${refractiveIndex.toFixed(2)}, t = ${filmThickness} nm)`, 16, topY + 24);

      // Medium below (Substrate / Glass)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, bottomY, width, height - bottomY);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('Medium 3: Substrate (n₃ = 1.52 Glass)', 16, bottomY + 30);

      // Light Rays
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#facc15'; // Incident ray (Yellow)
      ctx.beginPath();
      const incidentX = width / 2 - 80;
      ctx.moveTo(incidentX - 80, 10);
      ctx.lineTo(incidentX, topY);
      ctx.stroke();

      // Ray 1: Reflected from top surface (Phase shift of pi)
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(incidentX, topY);
      ctx.lineTo(incidentX + 80, 10);
      ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('Ray 1 (Phase shift π)', incidentX + 85, 25);

      // Refracted ray inside film
      const bottomX = incidentX + (bottomY - topY) * Math.tan(rRad);
      ctx.strokeStyle = '#facc15';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(incidentX, topY);
      ctx.lineTo(bottomX, bottomY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Ray 2: Reflected from bottom surface and exiting
      const exitX = bottomX + (bottomY - topY) * Math.tan(rRad);
      ctx.strokeStyle = '#facc15';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(bottomX, bottomY);
      ctx.lineTo(exitX, topY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = '#4ade80';
      ctx.beginPath();
      ctx.moveTo(exitX, topY);
      ctx.lineTo(exitX + 80, 10);
      ctx.stroke();
      ctx.fillStyle = '#4ade80';
      ctx.fillText('Ray 2 (Interferes with Ray 1)', exitX + 50, 45);

    } else if (activeMode === 'newtons-rings') {
      // 2. Newton's Rings Simulation
      const centerX = width / 2;
      const centerY = height / 2;
      const maxR = Math.min(centerX, centerY) - 20;

      // Dark background
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      // Central dark spot (destructive interference at t=0 due to pi phase change)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw concentric rings based on Dn = sqrt(4 * n * R * lambda)
      // scaled for canvas display
      const scaleFactor = Math.sqrt((lensRadius * wavelength) / 58900) * 16;
      const numRings = 16;

      for (let n = 1; n <= numRings; n++) {
        // Bright ring radius: r_bright = sqrt((2n - 1) * lambda * R / 2)
        const rBright = Math.sqrt((2 * n - 1) * 0.5) * scaleFactor;
        // Dark ring radius: r_dark = sqrt(n * lambda * R)
        const rDark = Math.sqrt(n) * scaleFactor;

        if (rDark > maxR) break;

        // Draw bright ring
        ctx.strokeStyle = `rgba(250, 204, 21, ${Math.max(0.2, 0.9 - (n / numRings) * 0.6)})`;
        ctx.lineWidth = Math.max(1.5, scaleFactor / (Math.sqrt(n) * 3));
        ctx.beginPath();
        ctx.arc(centerX, centerY, rBright, 0, Math.PI * 2);
        ctx.stroke();

        // Draw dark spacer ring
        ctx.strokeStyle = '#050811';
        ctx.lineWidth = Math.max(1, scaleFactor / (Math.sqrt(n) * 3.5));
        ctx.beginPath();
        ctx.arc(centerX, centerY, rDark, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Ring label & Dark Center marker
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px sans-serif';
      ctx.fillText('Central Spot: DARK (destructive interference)', centerX - 120, height - 16);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(`λ = ${wavelength} nm | R = ${lensRadius} cm`, 16, 26);

    } else if (activeMode === 'diffraction') {
      // 3. Fraunhofer Diffraction Pattern & Intensity Profile
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      const centerY = height * 0.45;
      const screenX = width / 2;

      // Draw intensity curve: I = I0 * (sin(beta)/beta)^2 * (cos(gamma))^2
      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;

      const intensityPoints: { x: number; y: number }[] = [];

      for (let x = 20; x < width - 20; x++) {
        const theta = ((x - screenX) / (width * 0.35)) * (0.08 / slitWidth);
        const beta = (Math.PI * (slitWidth * 1e-3) * Math.sin(theta)) / (wavelength * 1e-9);
        const singleSlitTerm = beta === 0 ? 1 : Math.pow(Math.sin(beta) / beta, 2);

        let doubleSlitTerm = 1;
        if (slitCount === 2) {
          const separation = slitWidth * 4; // d = 4*a
          const gamma = (Math.PI * (separation * 1e-3) * Math.sin(theta)) / (wavelength * 1e-9);
          doubleSlitTerm = Math.pow(Math.cos(gamma), 2);
        }

        const intensity = singleSlitTerm * doubleSlitTerm;
        const plotY = centerY - intensity * (height * 0.38);
        intensityPoints.push({ x, y: plotY });

        if (x === 20) ctx.moveTo(x, plotY);
        else ctx.lineTo(x, plotY);
      }
      ctx.stroke();

      // Draw baseline
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(20, centerY);
      ctx.lineTo(width - 20, centerY);
      ctx.stroke();

      // Draw visual fringe strip at bottom
      const fringeY = height * 0.75;
      const fringeH = 32;

      for (let x = 20; x < width - 20; x += 2) {
        const theta = ((x - screenX) / (width * 0.35)) * (0.08 / slitWidth);
        const beta = (Math.PI * (slitWidth * 1e-3) * Math.sin(theta)) / (wavelength * 1e-9);
        const singleSlit = beta === 0 ? 1 : Math.pow(Math.sin(beta) / beta, 2);
        let interference = 1;
        if (slitCount === 2) {
          const gamma = (Math.PI * (slitWidth * 4e-3) * Math.sin(theta)) / (wavelength * 1e-9);
          interference = Math.pow(Math.cos(gamma), 2);
        }
        const brightness = singleSlit * interference;
        ctx.fillStyle = `rgba(56, 189, 248, ${Math.max(0.04, brightness)})`;
        ctx.fillRect(x, fringeY, 2, fringeH);
      }

      ctx.strokeStyle = '#64748b';
      ctx.strokeRect(20, fringeY, width - 40, fringeH);

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px sans-serif';
      ctx.fillText('Central Maximum (Broad & Bright)', screenX - 85, centerY - height * 0.4);
      ctx.fillText(`Diffraction Fringe Pattern on Screen (${slitCount === 1 ? 'Single Slit' : 'Double Slit'})`, 24, fringeY - 10);

    } else if (activeMode === 'michelson') {
      // 4. Michelson Interferometer Fringe Shift Simulation
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fringesShifted = (2 * mirrorShift * 1000) / wavelength; // N = 2*d/lambda

      // Circular fringes expanding or contracting
      const numFringes = 12;
      for (let i = 1; i <= numFringes; i++) {
        const phase = (i * 24 + fringesShifted * 12) % (Math.min(centerX, centerY) - 20);
        const alpha = Math.max(0.1, 1 - phase / (height / 2));
        ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(centerX, centerY, phase, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Beam splitter diagram overlay in corner
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(16, 16, 210, 110);
      ctx.strokeStyle = '#475569';
      ctx.strokeRect(16, 16, 210, 110);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Michelson Interferometer', 24, 38);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText(`Mirror Shift (d): ${mirrorShift.toFixed(2)} µm`, 24, 60);
      ctx.fillText(`Fringe Count (N = 2d/λ): ${fringesShifted.toFixed(1)} fringes`, 24, 80);
      ctx.fillText(`λ = ${wavelength} nm (Laser)`, 24, 100);
    } else if (activeMode === 'polarization') {
      // 5. Polarization, Malus's Law & Laurent Half-Shade Polarimeter Simulation
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      // Specific rotation of cane sugar S = 66° / (dm · g/cm³)
      // Tube length l = 2 dm (20 cm)
      const opticalRotationDeg = 66 * 2 * sugarConcentration;
      const effectiveInputAngle = polarizerAngle + opticalRotationDeg;
      const angleDiffDeg = Math.abs(analyzerAngle - effectiveInputAngle);
      const angleDiffRad = (angleDiffDeg * Math.PI) / 180;
      
      // Malus's Law intensity: I = I0 * cos²(θ)
      const malusIntensity = Math.pow(Math.cos(angleDiffRad), 2);

      // Draw Bench Diagram on left
      const benchY = height * 0.35;
      
      // Light source
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(40, benchY, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.fillText('Source', 24, benchY + 28);

      // Unpolarized ray
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(54, benchY);
      ctx.lineTo(110, benchY);
      ctx.stroke();

      // Polarizer plate
      ctx.fillStyle = '#334155';
      ctx.fillRect(110, benchY - 35, 14, 70);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.strokeRect(110, benchY - 35, 14, 70);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(`P (${polarizerAngle}°)`, 100, benchY + 48);

      // Polarized ray to Sugar tube
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(124, benchY);
      ctx.lineTo(170, benchY);
      ctx.stroke();

      // Optically active sugar tube (20 cm)
      ctx.fillStyle = '#064e3b';
      ctx.fillRect(170, benchY - 20, 90, 40);
      ctx.strokeStyle = '#10b981';
      ctx.strokeRect(170, benchY - 20, 90, 40);
      ctx.fillStyle = '#6ee7b7';
      ctx.fillText('Sugar Sol.', 186, benchY + 5);
      ctx.fillText(`Rot: +${opticalRotationDeg.toFixed(1)}°`, 180, benchY + 34);

      // Rotated ray to Analyzer
      ctx.strokeStyle = '#a855f7';
      ctx.beginPath();
      ctx.moveTo(260, benchY);
      ctx.lineTo(310, benchY);
      ctx.stroke();

      // Analyzer plate
      ctx.fillStyle = '#334155';
      ctx.fillRect(310, benchY - 35, 14, 70);
      ctx.strokeStyle = '#ec4899';
      ctx.strokeRect(310, benchY - 35, 14, 70);
      ctx.fillStyle = '#ec4899';
      ctx.fillText(`A (${analyzerAngle}°)`, 300, benchY + 48);

      // Output ray
      ctx.strokeStyle = `rgba(251, 191, 36, ${Math.max(0.1, malusIntensity)})`;
      ctx.lineWidth = Math.max(1, 4 * malusIntensity);
      ctx.beginPath();
      ctx.moveTo(324, benchY);
      ctx.lineTo(380, benchY);
      ctx.stroke();

      // Laurent's Half-Shade Field of View (Right side circle)
      const circleX = width - 110;
      const circleY = height * 0.45;
      const circleR = 60;

      // Outer bezel of eyepiece
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR + 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Left Semicircle: Glass plate (polarization at analyzer angle)
      const leftIntensity = Math.pow(Math.cos(((analyzerAngle - effectiveInputAngle) * Math.PI) / 180), 2);
      ctx.fillStyle = `rgba(250, 204, 21, ${Math.max(0.04, leftIntensity)})`;
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR, Math.PI * 0.5, Math.PI * 1.5, false);
      ctx.fill();

      // Right Semicircle: Quartz half-wave plate (polarization rotated by 2*θ0)
      const halfShadeOffset = 6.0; // degrees
      const rightIntensity = Math.pow(Math.cos(((analyzerAngle - effectiveInputAngle - halfShadeOffset) * Math.PI) / 180), 2);
      ctx.fillStyle = `rgba(250, 204, 21, ${Math.max(0.04, rightIntensity)})`;
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR, Math.PI * 1.5, Math.PI * 0.5, false);
      ctx.fill();

      // Dividing dividing line
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(circleX, circleY - circleR);
      ctx.lineTo(circleX, circleY + circleR);
      ctx.stroke();

      // Eyepiece Crosswire
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(circleX - circleR, circleY);
      ctx.lineTo(circleX + circleR, circleY);
      ctx.stroke();

      // Text label for Half-Shade Eyepiece
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Eyepiece View: Laurent Half-Shade', circleX - 85, circleY + circleR + 20);
      
      const isMatched = Math.abs(leftIntensity - rightIntensity) < 0.04;
      ctx.fillStyle = isMatched ? '#4ade80' : '#f87171';
      ctx.font = '11px sans-serif';
      ctx.fillText(
        isMatched ? 'MATCHED (Uniform Semi-Dark)' : 'UNMATCHED (Different Brightness)',
        circleX - 80,
        circleY + circleR + 36
      );

      // Malus's Law Readout Panel
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(16, height - 70, 360, 56);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(16, height - 70, 360, 56);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`Malus's Law: I = I₀ · cos²(Δθ)`, 26, height - 50);
      ctx.fillStyle = '#facc15';
      ctx.font = '11px sans-serif';
      ctx.fillText(
        `Δθ = ${angleDiffDeg.toFixed(1)}° => Transmitted Intensity = ${(malusIntensity * 100).toFixed(1)}%`,
        26,
        height - 30
      );
    }
  }, [activeMode, filmThickness, refractiveIndex, incidentAngle, lensRadius, wavelength, slitWidth, slitCount, mirrorShift, polarizerAngle, analyzerAngle, sugarConcentration]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header Mode Selector */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive Wave Optics Lab Simulation
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setActiveMode('thin-film')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeMode === 'thin-film'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Thin Film
          </button>
          <button
            onClick={() => setActiveMode('newtons-rings')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeMode === 'newtons-rings'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Newton's Rings
          </button>
          <button
            onClick={() => setActiveMode('diffraction')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeMode === 'diffraction'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Diffraction
          </button>
          <button
            onClick={() => setActiveMode('michelson')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeMode === 'michelson'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Michelson
          </button>
          <button
            onClick={() => setActiveMode('polarization')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeMode === 'polarization'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Polarization
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative bg-slate-950 flex items-center justify-center p-3">
        <canvas
          ref={canvasRef}
          width={720}
          height={320}
          className="w-full max-w-3xl h-auto rounded-xl border border-slate-800/80 bg-slate-950 shadow-inner"
        />
        <div className="absolute bottom-5 right-5 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs text-slate-300 flex items-center gap-1.5 shadow">
          <Eye className="w-3.5 h-3.5 text-indigo-400" />
          <span>Real-time Wave Optics Renderer</span>
        </div>
      </div>

      {/* Interactive Parameter Controls */}
      <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            <span>Interactive Experiment Controls (Change values to observe wave changes)</span>
          </div>
          <button
            onClick={() => {
              setFilmThickness(450);
              setRefractiveIndex(1.33);
              setIncidentAngle(0);
              setLensRadius(100);
              setWavelength(589);
              setSlitWidth(0.04);
              setSlitCount(1);
              setMirrorShift(5.0);
            }}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {activeMode === 'thin-film' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Film Thickness (t)</span>
                <span className="font-mono text-indigo-300 font-semibold">{filmThickness} nm</span>
              </div>
              <input
                type="range"
                min="100"
                max="900"
                step="10"
                value={filmThickness}
                onChange={(e) => setFilmThickness(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Controls optical path difference \(\Delta = 2\mu t\cos r\)</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Refractive Index (\(\mu\))</span>
                <span className="font-mono text-indigo-300 font-semibold">{refractiveIndex.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.0"
                step="0.05"
                value={refractiveIndex}
                onChange={(e) => setRefractiveIndex(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Water (1.33), Soap (1.35), Oil (1.45)</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Incident Angle (i)</span>
                <span className="font-mono text-indigo-300 font-semibold">{incidentAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={incidentAngle}
                onChange={(e) => setIncidentAngle(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Changes angle of refraction inside thin film</p>
            </div>
          </div>
        )}

        {activeMode === 'newtons-rings' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Lens Radius of Curvature (R)</span>
                <span className="font-mono text-indigo-300 font-semibold">{lensRadius} cm</span>
              </div>
              <input
                type="range"
                min="50"
                max="200"
                step="10"
                value={lensRadius}
                onChange={(e) => setLensRadius(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Higher R creates wider, more distinct rings</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Light Wavelength (\(\lambda\))</span>
                <span className="font-mono text-amber-300 font-semibold">{wavelength} nm</span>
              </div>
              <input
                type="range"
                min="400"
                max="700"
                step="10"
                value={wavelength}
                onChange={(e) => setWavelength(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Sodium D: 589 nm (Yellow), He-Ne: 632.8 nm (Red)</p>
            </div>
          </div>
        )}

        {activeMode === 'diffraction' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Slit Width (a)</span>
                <span className="font-mono text-cyan-300 font-semibold">{slitWidth.toFixed(2)} mm</span>
              </div>
              <input
                type="range"
                min="0.02"
                max="0.12"
                step="0.01"
                value={slitWidth}
                onChange={(e) => setSlitWidth(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Narrower slit spreads central maximum wider</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Number of Slits</span>
                <span className="font-mono text-indigo-300 font-semibold">{slitCount === 1 ? 'Single Slit' : 'Double Slit'}</span>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => setSlitCount(1)}
                  className={`flex-1 py-1 rounded text-xs font-medium border ${slitCount === 1 ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700 text-slate-400'}`}
                >
                  Single Slit
                </button>
                <button
                  onClick={() => setSlitCount(2)}
                  className={`flex-1 py-1 rounded text-xs font-medium border ${slitCount === 2 ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700 text-slate-400'}`}
                >
                  Double Slit
                </button>
              </div>
              <p className="text-[11px] text-slate-400">Double slit adds interference fringes inside envelope</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Wavelength (\(\lambda\))</span>
                <span className="font-mono text-cyan-300 font-semibold">{wavelength} nm</span>
              </div>
              <input
                type="range"
                min="400"
                max="750"
                step="10"
                value={wavelength}
                onChange={(e) => setWavelength(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Larger wavelength produces greater angular spread</p>
            </div>
          </div>
        )}

        {activeMode === 'michelson' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Movable Mirror Displacement (d)</span>
                <span className="font-mono text-rose-300 font-semibold">{mirrorShift.toFixed(2)} µm</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="15.0"
                step="0.25"
                value={mirrorShift}
                onChange={(e) => setMirrorShift(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Displacement of \\(d = \\lambda/2\\) shifts one full fringe</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Source Laser Wavelength (\(\lambda\))</span>
                <span className="font-mono text-rose-300 font-semibold">{wavelength} nm</span>
              </div>
              <input
                type="range"
                min="400"
                max="700"
                step="10"
                value={wavelength}
                onChange={(e) => setWavelength(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">He-Ne laser standard is 632.8 nm</p>
            </div>
          </div>
        )}

        {activeMode === 'polarization' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Analyzer Angle (θ)</span>
                <span className="font-mono text-pink-300 font-semibold">{analyzerAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                step="2"
                value={analyzerAngle}
                onChange={(e) => setAnalyzerAngle(Number(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Rotates analyzer transmission axis</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Sugar Concentration (c)</span>
                <span className="font-mono text-emerald-300 font-semibold">{sugarConcentration.toFixed(2)} g/cm³</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.30"
                step="0.01"
                value={sugarConcentration}
                onChange={(e) => setSugarConcentration(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Optical rotation in 20 cm tube: θ = S · l · c</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Polarizer Orientation</span>
                <span className="font-mono text-sky-300 font-semibold">{polarizerAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                value={polarizerAngle}
                onChange={(e) => setPolarizerAngle(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Initial linear polarization plane</p>
            </div>
          </div>
        )}

        {/* Real-time Pedagogical Insight */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-xs text-indigo-200">
          <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">What to observe: </span>
            {activeMode === 'thin-film' && (
              <span>Notice how changing the film thickness changes the reflected color! At zero thickness, destructive interference dominates because reflection at a denser medium adds a \(\pi\) phase change.</span>
            )}
            {activeMode === 'newtons-rings' && (
              <span>Look at the center of Newton's rings: it is always pitch dark. As you increase the lens radius \(R\), the rings spread further apart, making it easier to measure with a travelling microscope.</span>
            )}
            {activeMode === 'diffraction' && (
              <span>Notice that making the slit narrower spreads the central maximum wider on the screen. This is a direct consequence of wave diffraction and the uncertainty principle.</span>
            )}
            {activeMode === 'michelson' && (
              <span>Watch the circular fringes move across the crosshairs as the mirror translates. Each time the mirror moves by \(\lambda/2\), exactly one fringe shifts across the center.</span>
            )}
            {activeMode === 'polarization' && (
              <span>Observe the Laurent Half-Shade circular field: adjust the Analyzer Angle until the left and right semicircles have identical uniform semi-dark shade. That precise angle gives the optical rotation \(\theta\) of the sugar solution!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
