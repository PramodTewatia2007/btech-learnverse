import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Zap, Eye, Info, Play, Pause } from 'lucide-react';

interface LaserFiberProps {
  initialMode?: 'fiber-propagation' | 'laser-levels' | 'fiber-types';
  onParameterChange?: (params: Record<string, any>) => void;
}

export const LaserFiber3DSimulation: React.FC<LaserFiberProps> = ({
  initialMode = 'fiber-propagation',
  onParameterChange
}) => {
  const [mode, setMode] = useState<'fiber-propagation' | 'laser-levels' | 'fiber-types'>(initialMode);
  
  // Fiber parameters
  const [coreIndex, setCoreIndex] = useState<number>(1.48); // n1
  const [claddingIndex, setCladdingIndex] = useState<number>(1.45); // n2
  const [launchAngle, setLaunchAngle] = useState<number>(10); // degrees
  
  // Laser parameters
  const [pumpPower, setPumpPower] = useState<number>(65); // %
  const [laserType, setLaserType] = useState<'ruby' | 'hene'>('hene');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const simTimeRef = useRef<number>(0);

  // Computed optical properties
  const numericalAperture = Math.sqrt(Math.max(0, coreIndex * coreIndex - claddingIndex * claddingIndex));
  const acceptanceAngleDeg = (Math.asin(Math.min(1, numericalAperture)) * 180) / Math.PI;
  const criticalAngleDeg = (Math.asin(Math.min(1, claddingIndex / coreIndex)) * 180) / Math.PI;
  const isTIR = launchAngle <= acceptanceAngleDeg;

  useEffect(() => {
    if (onParameterChange) {
      onParameterChange({
        mode,
        coreIndex,
        claddingIndex,
        launchAngle,
        numericalAperture,
        acceptanceAngleDeg,
        criticalAngleDeg,
        isTIR,
        pumpPower,
        laserType
      });
    }
  }, [mode, coreIndex, claddingIndex, launchAngle, numericalAperture, acceptanceAngleDeg, criticalAngleDeg, isTIR, pumpPower, laserType]);

  // Main canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;
      if (isPlaying) simTimeRef.current += 0.03;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      if (mode === 'fiber-propagation') {
        // Draw Optical Fiber with Core, Cladding, and Ray Tracing
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, width, height);

        const fiberStartX = 120;
        const fiberEndX = width - 40;
        const centerY = height / 2;
        const coreHalfH = 45;
        const cladHalfH = 95;

        // Cladding Top & Bottom
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(fiberStartX, centerY - cladHalfH, fiberEndX - fiberStartX, cladHalfH - coreHalfH);
        ctx.fillRect(fiberStartX, centerY + coreHalfH, fiberEndX - fiberStartX, cladHalfH - coreHalfH);
        
        ctx.fillStyle = '#64748b';
        ctx.font = '11px sans-serif';
        ctx.fillText(`Cladding (n₂ = ${claddingIndex.toFixed(3)})`, fiberStartX + 20, centerY - cladHalfH + 22);
        ctx.fillText(`Cladding (n₂ = ${claddingIndex.toFixed(3)})`, fiberStartX + 20, centerY + cladHalfH - 12);

        // Core
        const coreGradient = ctx.createLinearGradient(0, centerY - coreHalfH, 0, centerY + coreHalfH);
        coreGradient.addColorStop(0, '#1e1b4b');
        coreGradient.addColorStop(0.5, '#312e81');
        coreGradient.addColorStop(1, '#1e1b4b');
        ctx.fillStyle = coreGradient;
        ctx.fillRect(fiberStartX, centerY - coreHalfH, fiberEndX - fiberStartX, coreHalfH * 2);

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(fiberStartX, centerY - coreHalfH, fiberEndX - fiberStartX, coreHalfH * 2);

        ctx.fillStyle = '#c7d2fe';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Glass Core (n₁ = ${coreIndex.toFixed(3)})`, fiberStartX + 20, centerY + 4);

        // Acceptance Cone visualization at fiber entrance
        ctx.beginPath();
        const coneLength = 90;
        const coneYSpread = coneLength * Math.tan((acceptanceAngleDeg * Math.PI) / 180);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.moveTo(fiberStartX, centerY);
        ctx.lineTo(fiberStartX - coneLength, centerY - coneYSpread);
        ctx.lineTo(fiberStartX - coneLength, centerY + coneYSpread);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#0284c7';
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#38bdf8';
        ctx.font = '11px sans-serif';
        ctx.fillText(`Acceptance Cone (θₐ = ${acceptanceAngleDeg.toFixed(1)}°)`, 10, centerY - coneYSpread - 8);

        // Incident Ray from outside
        const rayAngleRad = (launchAngle * Math.PI) / 180;
        const entranceX = fiberStartX;
        const entranceY = centerY;
        const startX = entranceX - 90;
        const startY = entranceY - 90 * Math.tan(rayAngleRad);

        ctx.lineWidth = 3;
        ctx.strokeStyle = isTIR ? '#22c55e' : '#ef4444'; // Green if TIR, Red if leaky
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(entranceX, entranceY);
        ctx.stroke();

        // Refracted ray inside core by Snell's law: 1.0 * sin(theta) = n1 * sin(r)
        const rInsideRad = Math.asin(Math.sin(rayAngleRad) / coreIndex);
        const thetaInterfaceDeg = 90 - (rInsideRad * 180) / Math.PI;

        let curX = entranceX;
        let curY = entranceY;
        let dirY = 1; // 1 = going down, -1 = going up

        ctx.beginPath();
        ctx.moveTo(curX, curY);

        if (isTIR) {
          // Ray propagates via multiple Total Internal Reflections (TIR)
          const stepX = (coreHalfH * 2) / Math.tan(rInsideRad);
          let reflections = 0;

          while (curX < fiberEndX && reflections < 8) {
            const nextY = dirY === 1 ? centerY + coreHalfH : centerY - coreHalfH;
            const dy = nextY - curY;
            const dx = Math.abs(dy) / Math.tan(rInsideRad);
            const nextX = curX + dx;

            if (nextX > fiberEndX) {
              const remainingX = fiberEndX - curX;
              const finalY = curY + dirY * remainingX * Math.tan(rInsideRad);
              ctx.lineTo(fiberEndX, finalY);
              break;
            }

            ctx.lineTo(nextX, nextY);
            curX = nextX;
            curY = nextY;
            dirY = -dirY;
            reflections++;
          }
          ctx.strokeStyle = '#4ade80'; // Bright Green laser ray
          ctx.stroke();

          // Draw animated photons along ray
          const tOffset = (simTimeRef.current * 120) % (fiberEndX - fiberStartX);
          const photonX = fiberStartX + tOffset;
          const photonPhase = Math.sin((photonX / 40) * Math.PI);
          const photonY = centerY + photonPhase * (coreHalfH - 8);
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(photonX, photonY, 5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Leaky ray: angle inside exceeds critical angle, light escapes into cladding
          const nextY = centerY + coreHalfH;
          const dx = coreHalfH / Math.tan(rInsideRad);
          const hitX = curX + dx;
          ctx.lineTo(hitX, nextY);
          // Refracted into cladding (loss)
          ctx.lineTo(hitX + 50, nextY + 35);
          ctx.strokeStyle = '#ef4444';
          ctx.stroke();

          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`Light Escapes! (Angle at core-cladding boundary: ${thetaInterfaceDeg.toFixed(1)}° < θc = ${criticalAngleDeg.toFixed(1)}°)`, fiberStartX + 120, centerY + 25);
        }

      } else if (mode === 'laser-levels') {
        // Draw Laser 3-Level / 4-Level Quantum Transitions
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, width, height);

        const levelY_E0 = height - 50;
        const levelY_E1 = height - 120;
        const levelY_E2 = height - 200;
        const levelY_E3 = 60;

        const leftX = 100;
        const rightX = width - 100;

        // Energy level bars
        const drawLevel = (y: number, label: string, desc: string, isMetastable: boolean = false) => {
          ctx.lineWidth = isMetastable ? 4 : 2;
          ctx.strokeStyle = isMetastable ? '#38bdf8' : '#94a3b8';
          ctx.beginPath();
          ctx.moveTo(leftX, y);
          ctx.lineTo(rightX, y);
          ctx.stroke();

          ctx.fillStyle = isMetastable ? '#38bdf8' : '#ffffff';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText(label, leftX - 60, y + 5);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '11px sans-serif';
          ctx.fillText(desc, rightX + 15, y + 4);
        };

        if (laserType === 'ruby') {
          // 3-Level Ruby Laser (Cr3+ in Al2O3)
          drawLevel(levelY_E0, 'E₁', 'Ground State (⁴A₂)', false);
          drawLevel(levelY_E2, 'E₂', 'Metastable State (²E, Lifetime ~3 ms)', true);
          drawLevel(levelY_E3, 'E₃', 'Short-lived Pump Band (⁴F₂, ~10⁻⁸ s)', false);

          // Pumping arrow up
          ctx.strokeStyle = '#facc15';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(leftX + 80, levelY_E0);
          ctx.lineTo(leftX + 80, levelY_E3);
          ctx.stroke();
          ctx.fillStyle = '#facc15';
          ctx.fillText(`Optical Pumping (${pumpPower}%)`, leftX + 90, (levelY_E0 + levelY_E3) / 2);

          // Fast non-radiative decay down to E2
          ctx.strokeStyle = '#a855f7';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(leftX + 220, levelY_E3);
          ctx.lineTo(leftX + 220, levelY_E2);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = '#a855f7';
          ctx.fillText('Non-radiative decay', leftX + 230, (levelY_E3 + levelY_E2) / 2);

          // Laser emission transition E2 -> E1 (694.3 nm Red)
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(leftX + 380, levelY_E2);
          ctx.lineTo(leftX + 380, levelY_E0);
          ctx.stroke();
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText('Laser Transition (694.3 nm Red Photon)', leftX + 395, (levelY_E2 + levelY_E0) / 2);

        } else {
          // 4-Level He-Ne Gas Laser
          drawLevel(levelY_E0, 'E₀', 'Ground State', false);
          drawLevel(levelY_E1, 'E₁', 'Lower Laser Level (Rapid depopulation)', false);
          drawLevel(levelY_E2, 'E₂', 'Upper Metastable Level (He 2¹S → Ne 3s)', true);
          drawLevel(levelY_E3, 'E₃', 'Excited Helium State', false);

          // Collision transfer arrow
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(leftX + 100, levelY_E3);
          ctx.lineTo(leftX + 240, levelY_E2);
          ctx.stroke();
          ctx.fillStyle = '#38bdf8';
          ctx.fillText('Resonant Energy Transfer (He* + Ne → He + Ne*)', leftX + 80, 40);

          // Laser transition E2 -> E1 (632.8 nm Red)
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(leftX + 320, levelY_E2);
          ctx.lineTo(leftX + 320, levelY_E1);
          ctx.stroke();
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText('Stimulated Emission: λ = 632.8 nm (Red)', leftX + 335, (levelY_E2 + levelY_E1) / 2);

          // Fast decay to E0
          ctx.strokeStyle = '#94a3b8';
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(leftX + 440, levelY_E1);
          ctx.lineTo(leftX + 440, levelY_E0);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('Wall collisions (Fast decay)', leftX + 450, (levelY_E1 + levelY_E0) / 2);
        }

      } else if (mode === 'fiber-types') {
        // Step-Index vs Graded-Index Ray Path Comparison
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, width, height);

        // Top Half: Step-Index Fiber
        const midY1 = 80;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(40, midY1 - 45, width - 80, 90);
        ctx.fillStyle = '#312e81';
        ctx.fillRect(40, midY1 - 25, width - 80, 50);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('1. Step-Index Fiber (Abrupt n₁ to n₂ change at boundary)', 50, midY1 - 50);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText('Zig-zag ray paths cause modal dispersion (pulse spreading)', 50, midY1 + 55);

        // Zigzag ray
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        let zigX = 40;
        let zigY = midY1;
        let zigDir = -1;
        ctx.moveTo(zigX, zigY);
        while (zigX < width - 40) {
          zigX += 65;
          zigY = zigDir === -1 ? midY1 - 22 : midY1 + 22;
          ctx.lineTo(zigX, zigY);
          zigDir = -zigDir;
        }
        ctx.stroke();

        // Bottom Half: Graded-Index (GRIN) Fiber
        const midY2 = 230;
        // Parabolic index gradient
        const grinGrad = ctx.createLinearGradient(0, midY2 - 40, 0, midY2 + 40);
        grinGrad.addColorStop(0, '#1e293b');
        grinGrad.addColorStop(0.5, '#4338ca');
        grinGrad.addColorStop(1, '#1e293b');
        ctx.fillStyle = grinGrad;
        ctx.fillRect(40, midY2 - 45, width - 80, 90);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('2. Graded-Index (GRIN) Fiber (Parabolic n(r) = n₁[1 - 2Δ(r/a)²]¹/²)', 50, midY2 - 50);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText('Continuous refraction produces smooth sinusoidal helical curves (Equal transit times)', 50, midY2 + 55);

        // Sinusoidal curved ray
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let x = 40; x < width - 40; x += 2) {
          const y = midY2 + Math.sin((x - 40) * 0.05) * 22;
          if (x === 40) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mode, coreIndex, claddingIndex, launchAngle, isPlaying, laserType, pumpPower, acceptanceAngleDeg, criticalAngleDeg, isTIR]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive Lasers & Fiber Optics Simulator
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setMode('fiber-propagation')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'fiber-propagation' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Fiber Propagation & TIR
          </button>
          <button
            onClick={() => setMode('laser-levels')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'laser-levels' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Laser Transitions
          </button>
          <button
            onClick={() => setMode('fiber-types')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'fiber-types' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Step vs Graded Index
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative bg-slate-950 flex items-center justify-center p-3">
        <canvas
          ref={canvasRef}
          width={720}
          height={320}
          className="w-full max-w-3xl h-auto rounded-xl border border-slate-800/80 bg-slate-950 shadow-inner"
        />
        <div className="absolute top-5 right-5 flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white shadow"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Control Sliders & Interactive Metrics */}
      <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 space-y-4">
        {mode === 'fiber-propagation' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Launch Angle (\(\theta_0\))</span>
                  <span className={`font-mono font-semibold ${isTIR ? 'text-green-400' : 'text-red-400'}`}>
                    {launchAngle}° {isTIR ? '(TIR Occurs)' : '(Leaky Ray)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="45"
                  step="1"
                  value={launchAngle}
                  onChange={(e) => setLaunchAngle(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400">Must be ≤ Acceptance Angle ({acceptanceAngleDeg.toFixed(1)}°)</p>
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Core Refractive Index (n₁)</span>
                  <span className="font-mono text-indigo-300 font-semibold">{coreIndex.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="1.46"
                  max="1.60"
                  step="0.005"
                  value={coreIndex}
                  onChange={(e) => setCoreIndex(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400">Optical glass core (high density)</p>
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Cladding Index (n₂)</span>
                  <span className="font-mono text-cyan-300 font-semibold">{claddingIndex.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="1.42"
                  max={(coreIndex - 0.01).toFixed(3) as any}
                  step="0.005"
                  value={claddingIndex}
                  onChange={(e) => setCladdingIndex(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400">Must always satisfy n₂ &lt; n₁</p>
              </div>
            </div>

            {/* Computed Optical Formula Bar */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Numerical Aperture</div>
                <div className="font-mono font-bold text-indigo-400 text-sm">NA = {numericalAperture.toFixed(3)}</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Acceptance Angle</div>
                <div className="font-mono font-bold text-cyan-400 text-sm">\(\theta_a\) = {acceptanceAngleDeg.toFixed(1)}°</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Critical Angle</div>
                <div className="font-mono font-bold text-amber-400 text-sm">\(\theta_c\) = {criticalAngleDeg.toFixed(1)}°</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Fractional Index (\(\Delta\))</div>
                <div className="font-mono font-bold text-green-400 text-sm">{(((coreIndex - claddingIndex) / coreIndex) * 100).toFixed(2)}%</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'laser-levels' && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 font-semibold">Laser Active Medium:</span>
              <button
                onClick={() => setLaserType('ruby')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                  laserType === 'ruby' ? 'bg-rose-600 border-rose-500 text-white' : 'border-slate-700 text-slate-400'
                }`}
              >
                Ruby Laser (3-Level, 694.3 nm)
              </button>
              <button
                onClick={() => setLaserType('hene')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                  laserType === 'hene' ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700 text-slate-400'
                }`}
              >
                He-Ne Gas Laser (4-Level, 632.8 nm)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Pumping Rate:</span>
              <input
                type="range"
                min="20"
                max="100"
                value={pumpPower}
                onChange={(e) => setPumpPower(Number(e.target.value))}
                className="w-32 accent-indigo-500 cursor-pointer"
              />
              <span className="font-mono text-xs text-indigo-300">{pumpPower}%</span>
            </div>
          </div>
        )}

        {/* Insight */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-xs text-indigo-200">
          <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Engineering Principle: </span>
            {mode === 'fiber-propagation' && (
              <span>Light undergoes Total Internal Reflection (TIR) only if it enters within the acceptance cone (\(\theta_0 \le \theta_a\)) and hits the core-cladding boundary at an angle greater than critical angle \(\theta_c = \arcsin(n_2/n_1)\). Try increasing the launch angle to see light leak out!</span>
            )}
            {mode === 'laser-levels' && (
              <span>In a 4-level He-Ne laser, the lower laser level \(E_1\) rapidly empties to ground, meaning population inversion (\(N_2 &gt; N_1\)) is achieved at far lower pump powers than in a 3-level Ruby laser.</span>
            )}
            {mode === 'fiber-types' && (
              <span>In graded-index (GRIN) fibers, rays travelling farther near the outer boundary move faster because the refractive index \(n(r)\) is lower there (\(v = c/n\)). As a result, all optical modes arrive almost simultaneously, drastically cutting dispersion!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
