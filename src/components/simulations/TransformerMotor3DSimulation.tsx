import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Zap, Eye, Info, RotateCw } from 'lucide-react';

interface TransformerMotorProps {
  initialMode?: 'transformer' | 'induction-motor';
  onParameterChange?: (params: Record<string, any>) => void;
}

export const TransformerMotor3DSimulation: React.FC<TransformerMotorProps> = ({
  initialMode = 'transformer',
  onParameterChange
}) => {
  const [mode, setMode] = useState<'transformer' | 'induction-motor'>(initialMode);

  // Transformer params
  const [primaryTurns, setPrimaryTurns] = useState<number>(200); // N1
  const [secondaryTurns, setSecondaryTurns] = useState<number>(400); // N2
  const [primaryVoltage, setPrimaryVoltage] = useState<number>(230); // V1 (RMS)
  const [loadResistance, setLoadResistance] = useState<number>(50); // RL

  // Motor params
  const [supplyFrequency, setSupplyFrequency] = useState<number>(50); // Hz
  const [motorPoles, setMotorPoles] = useState<number>(4); // P
  const [motorSlip, setMotorSlip] = useState<number>(0.04); // 4%

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Calculations
  const turnsRatio = secondaryTurns / primaryTurns; // k = N2 / N1
  const secondaryVoltage = primaryVoltage * turnsRatio;
  const isStepUp = turnsRatio > 1;
  const secondaryCurrent = secondaryVoltage / loadResistance;
  const primaryCurrent = secondaryCurrent * turnsRatio; // ideal transformer I1 = I2 * k

  const syncSpeedRPM = (120 * supplyFrequency) / motorPoles; // Ns = 120f / P
  const rotorSpeedRPM = syncSpeedRPM * (1 - motorSlip); // Nr = Ns*(1-s)

  useEffect(() => {
    if (onParameterChange) {
      onParameterChange({
        mode,
        primaryTurns,
        secondaryTurns,
        turnsRatio,
        primaryVoltage,
        secondaryVoltage,
        secondaryCurrent,
        primaryCurrent,
        isStepUp,
        syncSpeedRPM,
        rotorSpeedRPM,
        motorSlip
      });
    }
  }, [mode, primaryTurns, secondaryTurns, primaryVoltage, loadResistance, supplyFrequency, motorPoles, motorSlip]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;
      timeRef.current += 0.05;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      if (mode === 'transformer') {
        // Draw Transformer Laminated Core with Magnetic Flux Lines
        ctx.fillStyle = '#060a14';
        ctx.fillRect(0, 0, width, height);

        const coreW = 340;
        const coreH = 210;
        const coreX = (width - coreW) / 2;
        const coreY = (height - coreH) / 2;
        const limbThickness = 50;

        // Outer Core
        ctx.fillStyle = '#334155';
        ctx.fillRect(coreX, coreY, coreW, coreH);
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.strokeRect(coreX, coreY, coreW, coreH);

        // Core Window (Cutout)
        ctx.fillStyle = '#060a14';
        ctx.fillRect(coreX + limbThickness, coreY + limbThickness, coreW - limbThickness * 2, coreH - limbThickness * 2);
        ctx.strokeRect(coreX + limbThickness, coreY + limbThickness, coreW - limbThickness * 2, coreH - limbThickness * 2);

        // Magnetic Flux Animation (Concentric dashed glowing loops)
        const fluxPhase = (timeRef.current * 4) % 40;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([8, 8]);
        ctx.lineDashOffset = -fluxPhase;

        const fluxMidX = coreX + limbThickness / 2;
        const fluxMidY = coreY + limbThickness / 2;
        const fluxW = coreW - limbThickness;
        const fluxH = coreH - limbThickness;

        ctx.strokeRect(fluxMidX, fluxMidY, fluxW, fluxH);
        ctx.setLineDash([]);

        // Primary Winding (Copper turns on left limb)
        const numPrimaryCoils = Math.min(18, Math.floor(primaryTurns / 15));
        const coilStep = (coreH - 40) / numPrimaryCoils;
        ctx.fillStyle = '#f59e0b'; // Copper orange

        for (let i = 0; i < numPrimaryCoils; i++) {
          const cy = coreY + 20 + i * coilStep;
          ctx.beginPath();
          ctx.roundRect(coreX - 14, cy, limbThickness + 28, 8, 4);
          ctx.fill();
        }

        // Secondary Winding (Copper turns on right limb)
        const numSecondaryCoils = Math.min(22, Math.floor(secondaryTurns / 15));
        const sCoilStep = (coreH - 40) / numSecondaryCoils;
        ctx.fillStyle = '#fb923c';

        for (let i = 0; i < numSecondaryCoils; i++) {
          const cy = coreY + 20 + i * sCoilStep;
          ctx.beginPath();
          ctx.roundRect(coreX + coreW - limbThickness - 14, cy, limbThickness + 28, 8, 4);
          ctx.fill();
        }

        // Primary Terminals & Labels
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Primary Input: V₁ = ${primaryVoltage} V`, coreX - 140, coreY + 40);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText(`N₁ = ${primaryTurns} turns`, coreX - 140, coreY + 60);
        ctx.fillText(`I₁ = ${primaryCurrent.toFixed(2)} A`, coreX - 140, coreY + 80);

        // Secondary Terminals & Labels
        ctx.fillStyle = isStepUp ? '#4ade80' : '#facc15';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Secondary Output: V₂ = ${secondaryVoltage.toFixed(1)} V`, coreX + coreW + 25, coreY + 40);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.fillText(`N₂ = ${secondaryTurns} turns`, coreX + coreW + 25, coreY + 60);
        ctx.fillText(`I₂ = ${secondaryCurrent.toFixed(2)} A`, coreX + coreW + 25, coreY + 80);
        ctx.fillText(`Load R_L = ${loadResistance} Ω`, coreX + coreW + 25, coreY + 100);

        // Core Center Label
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('Mutual Magnetic Flux (Φ)', width / 2 - 65, height / 2);

      } else {
        // Draw 3-Phase Induction Motor RMF & Squirrel Cage Rotor
        ctx.fillStyle = '#060a14';
        ctx.fillRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const statorRadius = 110;
        const rotorRadius = 65;

        // Stator Iron Ring
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.arc(centerX, centerY, statorRadius, 0, Math.PI * 2);
        ctx.stroke();

        // 3-Phase Stator Windings (U, V, W spaced by 120 degrees)
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const sx = centerX + Math.cos(angle) * statorRadius;
          const sy = centerY + Math.sin(angle) * statorRadius;
          ctx.fillStyle = i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#eab308';
          ctx.beginPath();
          ctx.arc(sx, sy, 10, 0, Math.PI * 2);
          ctx.fill();
        }

        // Rotating Magnetic Field (RMF) Vector (rotates at Ns)
        const rmfAngle = (timeRef.current * (syncSpeedRPM / 60) * 0.1) % (Math.PI * 2);
        const rmfX = centerX + Math.cos(rmfAngle) * (rotorRadius + 22);
        const rmfY = centerY + Math.sin(rmfAngle) * (rotorRadius + 22);

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(rmfX, rmfY);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(rmfX, rmfY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Squirrel Cage Rotor (rotates at Nr < Ns due to slip s)
        const rotorAngle = (timeRef.current * (rotorSpeedRPM / 60) * 0.1) % (Math.PI * 2);
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(centerX, centerY, rotorRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Rotor Conductive Bars
        const numBars = 14;
        for (let b = 0; b < numBars; b++) {
          const bAngle = rotorAngle + (b * Math.PI * 2) / numBars;
          const bx = centerX + Math.cos(bAngle) * (rotorRadius - 8);
          const by = centerY + Math.sin(bAngle) * (rotorRadius - 8);
          ctx.fillStyle = '#f97316';
          ctx.beginPath();
          ctx.arc(bx, by, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Shaft in center
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
        ctx.fill();

        // Speed Legend
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Synchronous Field Ns = ${syncSpeedRPM.toFixed(0)} RPM`, 30, 40);
        ctx.fillStyle = '#f97316';
        ctx.fillText(`Rotor Speed Nr = ${rotorSpeedRPM.toFixed(0)} RPM`, 30, 65);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`Slip s = ${(motorSlip * 100).toFixed(1)}%`, 30, 90);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mode, primaryTurns, secondaryTurns, primaryVoltage, loadResistance, supplyFrequency, motorPoles, motorSlip, syncSpeedRPM, rotorSpeedRPM, isStepUp, primaryCurrent, secondaryVoltage, secondaryCurrent]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Transformer & Induction Motor Simulation
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setMode('transformer')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'transformer' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Single-Phase Transformer
          </button>
          <button
            onClick={() => setMode('induction-motor')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'induction-motor' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            3-Phase Induction Motor
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
        {mode === 'transformer' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Primary Turns (N₁)</span>
                  <span className="font-mono text-amber-300 font-semibold">{primaryTurns}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="400"
                  step="10"
                  value={primaryTurns}
                  onChange={(e) => setPrimaryTurns(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Secondary Turns (N₂)</span>
                  <span className="font-mono text-orange-300 font-semibold">{secondaryTurns}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={secondaryTurns}
                  onChange={(e) => setSecondaryTurns(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Input Voltage (V₁)</span>
                  <span className="font-mono text-cyan-300 font-semibold">{primaryVoltage} V</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="440"
                  step="10"
                  value={primaryVoltage}
                  onChange={(e) => setPrimaryVoltage(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Load Resistor (R_L)</span>
                  <span className="font-mono text-indigo-300 font-semibold">{loadResistance} Ω</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={loadResistance}
                  onChange={(e) => setLoadResistance(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Transformation Ratio (k)</div>
                <div className="font-mono font-bold text-amber-400 text-sm">k = {turnsRatio.toFixed(2)}</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Transformer Type</div>
                <div className={`font-mono font-bold text-sm ${isStepUp ? 'text-green-400' : 'text-cyan-400'}`}>
                  {isStepUp ? 'Step-Up Transformer' : 'Step-Down Transformer'}
                </div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Secondary Output (V₂)</div>
                <div className="font-mono font-bold text-indigo-400 text-sm">{secondaryVoltage.toFixed(1)} V</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Apparent Power</div>
                <div className="font-mono font-bold text-purple-400 text-sm">{(primaryVoltage * primaryCurrent).toFixed(0)} VA</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'induction-motor' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Supply Frequency (f)</span>
                <span className="font-mono text-cyan-300 font-semibold">{supplyFrequency} Hz</span>
              </div>
              <input
                type="range"
                min="25"
                max="60"
                value={supplyFrequency}
                onChange={(e) => setSupplyFrequency(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Number of Stator Poles (P)</span>
                <span className="font-mono text-amber-300 font-semibold">{motorPoles} Poles</span>
              </div>
              <div className="flex gap-2 pt-1">
                {[2, 4, 6].map((poles) => (
                  <button
                    key={poles}
                    onClick={() => setMotorPoles(poles)}
                    className={`flex-1 py-1 rounded text-xs font-medium border ${
                      motorPoles === poles ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    {poles} Poles
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Rotor Slip (s)</span>
                <span className="font-mono text-rose-300 font-semibold">{(motorSlip * 100).toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.10"
                step="0.005"
                value={motorSlip}
                onChange={(e) => setMotorSlip(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Insight */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/50 text-xs text-amber-200">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Engineering Fact: </span>
            {mode === 'transformer' && (
              <span>A transformer works strictly on AC due to Faraday's Law of Mutual Induction \(e = -M \, di/dt\). If DC is applied, \(di/dt = 0\), causing pure ohmic resistance to draw huge current and burn the winding!</span>
            )}
            {mode === 'induction-motor' && (
              <span>An induction motor can never run at synchronous speed (\(N_r = N_s\)). If it did, there would be zero relative motion between the rotating field and rotor bars, zero induced EMF, and zero driving torque! That is why it is called an asynchronous motor.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
