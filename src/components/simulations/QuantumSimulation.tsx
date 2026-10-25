import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Zap, Eye, Info, Sparkles } from 'lucide-react';

interface QuantumSimulationProps {
  initialMode?: 'photoelectric' | 'wave-packet';
  onParameterChange?: (params: Record<string, any>) => void;
}

export const QuantumSimulation: React.FC<QuantumSimulationProps> = ({
  initialMode = 'photoelectric',
  onParameterChange
}) => {
  const [mode, setMode] = useState<'photoelectric' | 'wave-packet'>(initialMode);

  // Photoelectric parameters
  const [targetMetal, setTargetMetal] = useState<'cesium' | 'copper' | 'zinc'>('cesium');
  const [lightWavelength, setLightWavelength] = useState<number>(350); // nm
  const [lightIntensity, setLightIntensity] = useState<number>(75); // %
  const [stoppingVoltage, setStoppingVoltage] = useState<number>(0); // V

  // Wave-packet parameters
  const [momentumSpread, setMomentumSpread] = useState<number>(30); // delta p
  const [particleSpeed, setParticleSpeed] = useState<number>(40);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Work functions in eV
  const workFunctions: Record<string, number> = {
    cesium: 2.14,
    zinc: 4.31,
    copper: 4.65
  };

  const phi_eV = workFunctions[targetMetal];
  const h_eVs = 4.1357e-15;
  const c_ms = 3e8;
  const photonEnergy_eV = (h_eVs * c_ms) / (lightWavelength * 1e-9); // E = hc/lambda
  const thresholdLambda_nm = (h_eVs * c_ms) / (phi_eV * 1e-9);
  const maxKE_eV = Math.max(0, photonEnergy_eV - phi_eV);
  const isEmission = photonEnergy_eV > phi_eV;
  const effectiveKE = Math.max(0, maxKE_eV - stoppingVoltage);
  const electronsReachAnode = isEmission && effectiveKE > 0;

  useEffect(() => {
    if (onParameterChange) {
      onParameterChange({
        mode,
        targetMetal,
        phi_eV,
        photonEnergy_eV,
        maxKE_eV,
        isEmission,
        stoppingVoltage,
        electronsReachAnode
      });
    }
  }, [mode, targetMetal, lightWavelength, lightIntensity, stoppingVoltage, photonEnergy_eV, maxKE_eV, isEmission, electronsReachAnode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;
      timeRef.current += 0.04;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      if (mode === 'photoelectric') {
        // Draw Vacuum Phototube Setup
        ctx.fillStyle = '#050811';
        ctx.fillRect(0, 0, width, height);

        // Glass Tube Outline
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 50, width - 160, height - 100, 40);
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText('Evacuated Quartz Glass Envelope', 100, 75);

        // Cathode (Emitter Metal Plate) on Left
        const cathodeX = 140;
        const cathodeY1 = 80;
        const cathodeY2 = height - 80;
        ctx.fillStyle = '#475569';
        ctx.fillRect(cathodeX - 10, cathodeY1, 20, cathodeY2 - cathodeY1);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(cathodeX - 10, cathodeY1, 20, cathodeY2 - cathodeY1);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Cathode (${targetMetal.toUpperCase()})`, cathodeX - 50, cathodeY1 - 10);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText(`Work Function Φ = ${phi_eV} eV`, cathodeX - 55, cathodeY2 + 25);

        // Anode (Collector Plate) on Right
        const anodeX = width - 160;
        ctx.fillStyle = '#475569';
        ctx.fillRect(anodeX - 8, cathodeY1, 16, cathodeY2 - cathodeY1);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(anodeX - 8, cathodeY1, 16, cathodeY2 - cathodeY1);
        ctx.fillStyle = '#f8fafc';
        ctx.fillText('Anode (Collector)', anodeX - 35, cathodeY1 - 10);

        // Light Source shining from top left
        const sourceX = 100;
        const sourceY = 20;
        ctx.fillStyle = `hsl(${Math.max(200, 360 - (lightWavelength - 200) * 0.4)}, 100%, 60%)`;
        ctx.beginPath();
        ctx.arc(sourceX, sourceY, 14, 0, Math.PI * 2);
        ctx.fill();

        // Incident Photons
        const numPhotons = Math.floor(lightIntensity / 15);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `hsl(${Math.max(200, 360 - (lightWavelength - 200) * 0.4)}, 100%, 70%)`;

        for (let i = 0; i < numPhotons; i++) {
          const t = (timeRef.current * 1.5 + i * 0.8) % 3;
          const px = sourceX + t * (cathodeX - sourceX);
          const py = sourceY + t * (cathodeY1 + 40 + i * 25 - sourceY);
          if (t <= 1) {
            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Emitted Photoelectrons
        if (isEmission) {
          const numElectrons = Math.floor(lightIntensity / 12);
          for (let i = 0; i < numElectrons; i++) {
            const speed = Math.sqrt(effectiveKE) * 70;
            const t = ((timeRef.current * (speed * 0.01 + 0.2) + i * 0.35) % 3);
            const ey = cathodeY1 + 25 + (i * 24);
            const ex = cathodeX + t * (anodeX - cathodeX);

            if (electronsReachAnode || t < 0.6) {
              ctx.fillStyle = '#38bdf8';
              ctx.beginPath();
              ctx.arc(ex, ey, 4, 0, Math.PI * 2);
              ctx.fill();

              // Negative charge symbol
              ctx.fillStyle = '#000000';
              ctx.font = 'bold 9px sans-serif';
              ctx.fillText('-', ex - 2, ey + 3);
            }
          }
        }

        // Ammeter & Voltmeter readout at bottom
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(width / 2 - 140, height - 45, 280, 35);
        ctx.strokeStyle = '#334155';
        ctx.strokeRect(width / 2 - 140, height - 45, 280, 35);

        ctx.fillStyle = electronsReachAnode ? '#22c55e' : '#ef4444';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(
          electronsReachAnode 
            ? `Photocurrent Detected: I = ${(lightIntensity * 0.12).toFixed(1)} µA` 
            : 'Photocurrent: 0 µA (Stopped by Retarding Potential)',
          width / 2 - 120,
          height - 23
        );

      } else {
        // Wave-packet & Heisenberg Uncertainty Principle
        ctx.fillStyle = '#050811';
        ctx.fillRect(0, 0, width, height);

        const centerY = height / 2;
        const sigma_x = 100 - momentumSpread * 1.8; // Delta x inversely proportional to Delta p
        const k0 = particleSpeed * 0.2;

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        const packetCenterX = width / 2 + Math.sin(timeRef.current) * 40;

        for (let x = 20; x < width - 20; x += 2) {
          const dx = x - packetCenterX;
          // Gaussian envelope: exp(-dx^2 / (2*sigma_x^2))
          const envelope = Math.exp(-Math.pow(dx, 2) / (2 * Math.pow(sigma_x, 2)));
          // Carrier wave: cos(k0 * dx - w*t)
          const wave = Math.cos(k0 * (dx * 0.1) - timeRef.current * 3);
          const y = centerY - envelope * wave * (height * 0.35);

          if (x === 20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw Envelope dashed lines
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        for (let x = 20; x < width - 20; x += 4) {
          const dx = x - packetCenterX;
          const envelope = Math.exp(-Math.pow(dx, 2) / (2 * Math.pow(sigma_x, 2)));
          const yTop = centerY - envelope * (height * 0.35);
          if (x === 20) ctx.moveTo(x, yTop);
          else ctx.lineTo(x, yTop);
        }
        ctx.stroke();
        ctx.beginPath();
        for (let x = 20; x < width - 20; x += 4) {
          const dx = x - packetCenterX;
          const envelope = Math.exp(-Math.pow(dx, 2) / (2 * Math.pow(sigma_x, 2)));
          const yBot = centerY + envelope * (height * 0.35);
          if (x === 20) ctx.moveTo(x, yBot);
          else ctx.lineTo(x, yBot);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText('de Broglie Matter Wave Packet: Ψ(x, t)', 30, 40);
        ctx.fillStyle = '#facc15';
        ctx.font = '12px sans-serif';
        ctx.fillText(`Spatial Localization Δx ≈ ${(sigma_x * 0.2).toFixed(1)} nm`, 30, 65);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`Momentum Spread Δp ≈ ${momentumSpread} %`, 30, 85);
        ctx.fillStyle = '#4ade80';
        ctx.fillText('Heisenberg Relation: Δx · Δp ≥ ℏ/2', width - 260, 40);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mode, targetMetal, lightWavelength, lightIntensity, stoppingVoltage, phi_eV, photonEnergy_eV, maxKE_eV, isEmission, effectiveKE, electronsReachAnode, momentumSpread, particleSpeed]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Quantum Physics & Matter Waves Simulation
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setMode('photoelectric')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'photoelectric' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Photoelectric Effect
          </button>
          <button
            onClick={() => setMode('wave-packet')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'wave-packet' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Wave-Packets & Uncertainty
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative bg-slate-950 flex items-center justify-center p-3">
        <canvas
          ref={canvasRef}
          width={720}
          height={300}
          className="w-full max-w-3xl h-auto rounded-xl border border-slate-800/80 bg-slate-950 shadow-inner"
        />
      </div>

      {/* Controls */}
      <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 space-y-4">
        {mode === 'photoelectric' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="space-y-1 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="text-xs text-slate-300 font-semibold">Cathode Target Metal</span>
                <select
                  value={targetMetal}
                  onChange={(e) => setTargetMetal(e.target.value as any)}
                  className="w-full bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg p-2 mt-1"
                >
                  <option value="cesium">Cesium (Φ = 2.14 eV)</option>
                  <option value="zinc">Zinc (Φ = 4.31 eV)</option>
                  <option value="copper">Copper (Φ = 4.65 eV)</option>
                </select>
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Wavelength (λ)</span>
                  <span className="font-mono text-cyan-300 font-semibold">{lightWavelength} nm</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="650"
                  step="10"
                  value={lightWavelength}
                  onChange={(e) => setLightWavelength(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Light Intensity</span>
                  <span className="font-mono text-amber-300 font-semibold">{lightIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={lightIntensity}
                  onChange={(e) => setLightIntensity(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Stopping Potential (V₀)</span>
                  <span className="font-mono text-rose-300 font-semibold">{stoppingVoltage.toFixed(2)} V</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4.0"
                  step="0.1"
                  value={stoppingVoltage}
                  onChange={(e) => setStoppingVoltage(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Live Quantum Values Bar */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Photon Energy (E = hc/λ)</div>
                <div className="font-mono font-bold text-cyan-400 text-sm">{photonEnergy_eV.toFixed(2)} eV</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Work Function (Φ)</div>
                <div className="font-mono font-bold text-amber-400 text-sm">{phi_eV.toFixed(2)} eV</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Max Kinetic Energy</div>
                <div className={`font-mono font-bold text-sm ${isEmission ? 'text-green-400' : 'text-red-400'}`}>
                  {isEmission ? `${maxKE_eV.toFixed(2)} eV` : '0 eV (No Emission)'}
                </div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Threshold Wavelength (λ₀)</div>
                <div className="font-mono font-bold text-purple-400 text-sm">{thresholdLambda_nm.toFixed(1)} nm</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'wave-packet' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Momentum Spread (\(\Delta p\))</span>
                <span className="font-mono text-indigo-300 font-semibold">{momentumSpread}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={momentumSpread}
                onChange={(e) => setMomentumSpread(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Notice: higher \(\Delta p\) narrows the wave packet (\(\Delta x\) shrinks)</p>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Group Velocity / Particle Speed</span>
                <span className="font-mono text-cyan-300 font-semibold">{particleSpeed}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={particleSpeed}
                onChange={(e) => setParticleSpeed(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Individual phase ripples move at phase velocity \(v_p = \omega/k\)</p>
            </div>
          </div>
        )}

        {/* Insight */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-xs text-indigo-200">
          <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Quantum Principle: </span>
            {mode === 'photoelectric' && (
              <span>Einstein's photoelectric equation {"\\(h\\nu = \\Phi + K_{\\text{max}}\\)"} proves light behaves as discrete quanta (photons). If photon energy is below \(\Phi\), no electrons are emitted no matter how intense the light beam is!</span>
            )}
            {mode === 'wave-packet' && (
              <span>A localized particle is mathematically represented by a superposition of matter waves called a wave packet. The envelope moves with the group velocity \(v_g = d\omega/dk\), which equals the physical classical velocity of the particle.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
