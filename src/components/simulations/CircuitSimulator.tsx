import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Zap, Eye, Info, Activity } from 'lucide-react';

interface CircuitSimulatorProps {
  initialMode?: 'dc-circuit' | 'rlc-resonance' | 'diode-vi';
  onParameterChange?: (params: Record<string, any>) => void;
}

export const CircuitSimulator: React.FC<CircuitSimulatorProps> = ({
  initialMode = 'dc-circuit',
  onParameterChange
}) => {
  const [mode, setMode] = useState<'dc-circuit' | 'rlc-resonance' | 'diode-vi'>(initialMode);

  // DC Circuit state
  const [voltage, setVoltage] = useState<number>(12); // Volts
  const [r1, setR1] = useState<number>(10); // Ohms
  const [r2, setR2] = useState<number>(20); // Ohms
  const [topology, setTopology] = useState<'series' | 'parallel'>('series');

  // RLC Resonance state
  const [resistance, setResistance] = useState<number>(25); // Ohms
  const [inductance, setInductance] = useState<number>(100); // mH
  const [capacitance, setCapacitance] = useState<number>(10); // microFarads
  const [frequency, setFrequency] = useState<number>(150); // Hz

  // Diode state
  const [diodeVoltage, setDiodeVoltage] = useState<number>(0.8); // Volts
  const [diodeMaterial, setDiodeMaterial] = useState<'silicon' | 'germanium'>('silicon');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // DC calculations
  const rEquivalent = topology === 'series' ? r1 + r2 : (r1 * r2) / (r1 + r2);
  const totalCurrent = voltage / rEquivalent;
  const powerTotal = voltage * totalCurrent;

  // RLC calculations
  const L_H = inductance * 1e-3;
  const C_F = capacitance * 1e-6;
  const f0 = 1 / (2 * Math.PI * Math.sqrt(L_H * C_F));
  const omega = 2 * Math.PI * frequency;
  const XL = omega * L_H;
  const XC = 1 / (omega * C_F);
  const impedanceZ = Math.sqrt(resistance * resistance + Math.pow(XL - XC, 2));
  const rlcCurrent = 100 / impedanceZ; // assume 100V AC RMS
  const qFactor = (1 / resistance) * Math.sqrt(L_H / C_F);

  // Diode calculations
  const kneeVoltage = diodeMaterial === 'silicon' ? 0.7 : 0.3;
  const diodeCurrent = diodeVoltage < kneeVoltage 
    ? 0.001 * Math.exp((diodeVoltage * 30)) 
    : (diodeVoltage - kneeVoltage) / 15 * 1000; // mA

  useEffect(() => {
    if (onParameterChange) {
      onParameterChange({
        mode,
        voltage,
        r1,
        r2,
        rEquivalent,
        totalCurrent,
        f0,
        impedanceZ,
        rlcCurrent,
        qFactor,
        diodeVoltage,
        diodeCurrent
      });
    }
  }, [mode, voltage, r1, r2, topology, resistance, inductance, capacitance, frequency, diodeVoltage, diodeMaterial]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (mode === 'dc-circuit') {
      // Draw Schematic Diagram & Live Currents
      ctx.fillStyle = '#080d1a';
      ctx.fillRect(0, 0, width, height);

      const topY = 70;
      const bottomY = height - 70;
      const leftX = 100;
      const rightX = width - 100;

      // Draw Main Circuit Loop
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(leftX, topY);
      ctx.lineTo(rightX, topY);
      ctx.lineTo(rightX, bottomY);
      ctx.lineTo(leftX, bottomY);
      ctx.lineTo(leftX, topY);
      ctx.stroke();

      // DC Voltage Source on Left
      const midY = (topY + bottomY) / 2;
      ctx.fillStyle = '#080d1a';
      ctx.fillRect(leftX - 25, midY - 35, 50, 70);

      // Battery plates
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(leftX - 18, midY - 12);
      ctx.lineTo(leftX + 18, midY - 12);
      ctx.moveTo(leftX - 10, midY + 12);
      ctx.lineTo(leftX + 10, midY + 12);
      ctx.stroke();

      ctx.fillStyle = '#facc15';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`+ ${voltage} V`, leftX - 65, midY - 5);
      ctx.fillText('-', leftX - 45, midY + 18);

      if (topology === 'series') {
        // Resistor 1 on top wire
        const r1X = (leftX + rightX) / 2 - 80;
        ctx.fillStyle = '#080d1a';
        ctx.fillRect(r1X - 35, topY - 15, 70, 30);
        ctx.strokeStyle = '#f97316';
        ctx.strokeRect(r1X - 35, topY - 15, 70, 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`R₁ = ${r1} Ω`, r1X - 28, topY + 4);
        const vDrop1 = totalCurrent * r1;
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '11px sans-serif';
        ctx.fillText(`V₁ = ${vDrop1.toFixed(2)} V`, r1X - 28, topY - 20);

        // Resistor 2 on top wire
        const r2X = (leftX + rightX) / 2 + 80;
        ctx.fillStyle = '#080d1a';
        ctx.fillRect(r2X - 35, topY - 15, 70, 30);
        ctx.strokeStyle = '#f97316';
        ctx.strokeRect(r2X - 35, topY - 15, 70, 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`R₂ = ${r2} Ω`, r2X - 28, topY + 4);
        const vDrop2 = totalCurrent * r2;
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '11px sans-serif';
        ctx.fillText(`V₂ = ${vDrop2.toFixed(2)} V`, r2X - 28, topY - 20);

      } else {
        // Parallel topology: central vertical branch
        const midBranchX = (leftX + rightX) / 2;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(midBranchX, topY);
        ctx.lineTo(midBranchX, bottomY);
        ctx.stroke();

        // R1 in branch 1
        ctx.fillStyle = '#080d1a';
        ctx.fillRect(midBranchX - 35, midY - 20, 70, 40);
        ctx.strokeStyle = '#f97316';
        ctx.strokeRect(midBranchX - 35, midY - 20, 70, 40);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`R₁ = ${r1} Ω`, midBranchX - 26, midY + 4);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`I₁ = ${(voltage / r1).toFixed(2)} A`, midBranchX + 42, midY + 4);

        // R2 in branch 2 (right leg)
        ctx.fillStyle = '#080d1a';
        ctx.fillRect(rightX - 35, midY - 20, 70, 40);
        ctx.strokeStyle = '#f97316';
        ctx.strokeRect(rightX - 35, midY - 20, 70, 40);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`R₂ = ${r2} Ω`, rightX - 26, midY + 4);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`I₂ = ${(voltage / r2).toFixed(2)} A`, rightX - 85, midY + 4);
      }

      // Current direction arrows
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.moveTo(leftX + 40, topY - 6);
      ctx.lineTo(leftX + 55, topY);
      ctx.lineTo(leftX + 40, topY + 6);
      ctx.fill();

      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`I_total = ${totalCurrent.toFixed(2)} A`, leftX + 15, topY - 14);

    } else if (mode === 'rlc-resonance') {
      // Draw RLC Resonance Response Curve (Current vs Frequency)
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      const marginL = 60;
      const marginR = 40;
      const marginT = 40;
      const marginB = 50;
      const plotW = width - marginL - marginR;
      const plotH = height - marginT - marginB;

      // Axes
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(marginL, marginT);
      ctx.lineTo(marginL, height - marginB);
      ctx.lineTo(width - marginR, height - marginB);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('Current I (A)', 10, marginT + 15);
      ctx.fillText('Frequency f (Hz)', width / 2 - 30, height - 15);

      // Plot Resonance Curve
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();

      const fMin = 20;
      const fMax = 500;

      for (let x = 0; x <= plotW; x++) {
        const curF = fMin + (x / plotW) * (fMax - fMin);
        const w = 2 * Math.PI * curF;
        const curXL = w * L_H;
        const curXC = 1 / (w * C_F);
        const curZ = Math.sqrt(resistance * resistance + Math.pow(curXL - curXC, 2));
        const curI = 100 / curZ; // assuming 100V
        const maxI = 100 / resistance;

        const plotY = height - marginB - (curI / maxI) * plotH * 0.9;
        const plotX = marginL + x;

        if (x === 0) ctx.moveTo(plotX, plotY);
        else ctx.lineTo(plotX, plotY);
      }
      ctx.stroke();

      // Mark resonant frequency f0
      const f0X = marginL + ((f0 - fMin) / (fMax - fMin)) * plotW;
      if (f0X >= marginL && f0X <= width - marginR) {
        ctx.strokeStyle = '#facc15';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(f0X, marginT);
        ctx.lineTo(f0X, height - marginB);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#facc15';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`f₀ = ${f0.toFixed(1)} Hz`, f0X - 35, marginT - 10);
      }

      // Mark current operating point
      const opX = marginL + ((frequency - fMin) / (fMax - fMin)) * plotW;
      const opY = height - marginB - (rlcCurrent / (100 / resistance)) * plotH * 0.9;
      if (opX >= marginL && opX <= width - marginR) {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(opX, opY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`f = ${frequency} Hz, I = ${rlcCurrent.toFixed(2)} A`, opX + 10, opY - 8);
      }

    } else if (mode === 'diode-vi') {
      // Draw Diode V-I Characteristics Curve
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, width, height);

      const originX = 140;
      const originY = height - 60;

      // Coordinate axes
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(originX, 30);
      ctx.lineTo(originX, height - 30);
      ctx.moveTo(30, originY);
      ctx.lineTo(width - 30, originY);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('Forward Current I (mA)', originX + 10, 45);
      ctx.fillText('Forward Voltage V_F (V)', width - 140, originY - 10);
      ctx.fillText('0', originX - 12, originY + 15);

      // Knee voltage label
      const kneeX = originX + (kneeVoltage / 1.5) * (width - originX - 60);
      ctx.strokeStyle = '#f59e0b';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(kneeX, 50);
      ctx.lineTo(kneeX, originY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(`Knee = ${kneeVoltage} V`, kneeX - 30, originY + 22);

      // Plot Diode Exponential curve
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let v = 0; v <= 1.4; v += 0.02) {
        const x = originX + (v / 1.5) * (width - originX - 60);
        let current = 0;
        if (v < kneeVoltage) {
          current = Math.exp((v / kneeVoltage) * 2.5);
        } else {
          current = Math.exp(2.5) + ((v - kneeVoltage) / 0.1) * 35;
        }
        const y = originY - (current / 250) * (originY - 60);
        if (v === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, Math.max(40, y));
      }
      ctx.stroke();

      // Current operating point
      const opVx = originX + (diodeVoltage / 1.5) * (width - originX - 60);
      const opVy = originY - (diodeCurrent / 250) * (originY - 60);
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(opVx, Math.max(40, opVy), 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`V = ${diodeVoltage.toFixed(2)} V | I = ${diodeCurrent.toFixed(1)} mA`, originX + 20, 85);
    }
  }, [mode, voltage, r1, r2, topology, totalCurrent, resistance, inductance, capacitance, frequency, f0, rlcCurrent, diodeVoltage, diodeMaterial, kneeVoltage, diodeCurrent]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-amber-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive BEEE Circuit & Resonance Simulator
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setMode('dc-circuit')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'dc-circuit' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            DC Network (Ohm/KCL)
          </button>
          <button
            onClick={() => setMode('rlc-resonance')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'rlc-resonance' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            RLC AC Resonance
          </button>
          <button
            onClick={() => setMode('diode-vi')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'diode-vi' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Diode V-I Curve
          </button>
        </div>
      </div>

      {/* Main Canvas */}
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
        {mode === 'dc-circuit' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="space-y-1 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Topology</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setTopology('series')}
                    className={`flex-1 py-1 rounded text-xs font-medium border ${topology === 'series' ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700 text-slate-400'}`}
                  >
                    Series
                  </button>
                  <button
                    onClick={() => setTopology('parallel')}
                    className={`flex-1 py-1 rounded text-xs font-medium border ${topology === 'parallel' ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700 text-slate-400'}`}
                  >
                    Parallel
                  </button>
                </div>
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">DC Voltage (V)</span>
                  <span className="font-mono text-amber-300 font-semibold">{voltage} V</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="48"
                  value={voltage}
                  onChange={(e) => setVoltage(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Resistor R₁</span>
                  <span className="font-mono text-indigo-300 font-semibold">{r1} Ω</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={r1}
                  onChange={(e) => setR1(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Resistor R₂</span>
                  <span className="font-mono text-indigo-300 font-semibold">{r2} Ω</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={r2}
                  onChange={(e) => setR2(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Live Circuit Measurements Bar */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Equivalent Resistance</div>
                <div className="font-mono font-bold text-amber-400 text-sm">R_eq = {rEquivalent.toFixed(2)} Ω</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Total Current (Ohm's Law)</div>
                <div className="font-mono font-bold text-green-400 text-sm">I = {totalCurrent.toFixed(2)} A</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Total Power Dissipated</div>
                <div className="font-mono font-bold text-cyan-400 text-sm">P = {powerTotal.toFixed(1)} W</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Current Law (KCL)</div>
                <div className="font-mono font-bold text-purple-400 text-sm">{"\\(\\sum I_{\\text{node}} = 0\\)"}</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'rlc-resonance' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">AC Frequency (f)</span>
                  <span className="font-mono text-cyan-300 font-semibold">{frequency} Hz</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={frequency}
                  onChange={(e) => setFrequency(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Resistance (R)</span>
                  <span className="font-mono text-amber-300 font-semibold">{resistance} Ω</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={resistance}
                  onChange={(e) => setResistance(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Inductance (L)</span>
                  <span className="font-mono text-indigo-300 font-semibold">{inductance} mH</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  value={inductance}
                  onChange={(e) => setInductance(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Capacitance (C)</span>
                  <span className="font-mono text-purple-300 font-semibold">{capacitance} µF</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={capacitance}
                  onChange={(e) => setCapacitance(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Resonant Frequency</div>
                <div className="font-mono font-bold text-amber-400 text-sm">f₀ = {f0.toFixed(1)} Hz</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Impedance Z</div>
                <div className="font-mono font-bold text-cyan-400 text-sm">Z = {impedanceZ.toFixed(1)} Ω</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Quality Factor (Q)</div>
                <div className="font-mono font-bold text-green-400 text-sm">Q = {qFactor.toFixed(2)}</div>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
                <div className="text-slate-400 text-[10px]">Power Factor (cos φ)</div>
                <div className="font-mono font-bold text-purple-400 text-sm">{(resistance / impedanceZ).toFixed(3)}</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'diode-vi' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Forward Bias Voltage (V_F)</span>
                <span className="font-mono text-green-400 font-semibold">{diodeVoltage.toFixed(2)} V</span>
              </div>
              <input
                type="range"
                min="0"
                max="1.4"
                step="0.05"
                value={diodeVoltage}
                onChange={(e) => setDiodeVoltage(Number(e.target.value))}
                className="w-full accent-green-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">Notice rapid current surge once V exceeds knee voltage</p>
            </div>

            <div className="space-y-1 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
              <div className="text-xs text-slate-300 mb-1">Semiconductor Material</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDiodeMaterial('silicon')}
                  className={`flex-1 py-1.5 rounded text-xs font-medium border ${diodeMaterial === 'silicon' ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700 text-slate-400'}`}
                >
                  Silicon (Knee = 0.7 V)
                </button>
                <button
                  onClick={() => setDiodeMaterial('germanium')}
                  className={`flex-1 py-1.5 rounded text-xs font-medium border ${diodeMaterial === 'germanium' ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700 text-slate-400'}`}
                >
                  Germanium (Knee = 0.3 V)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Insight */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-900/50 text-xs text-amber-200">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Observation: </span>
            {mode === 'dc-circuit' && (
              <span>In series, current is identical through both resistors while voltage divides: \(V_1 = I R_1\). In parallel, the voltage across both branches is equal to the source voltage, and currents add at the junction according to KCL.</span>
            )}
            {mode === 'rlc-resonance' && (
              <span>At resonance (\(f = f_0\)), inductive reactance \(X_L\) exactly cancels capacitive reactance \(X_C\), making impedance purely resistive (\(Z = R\)) and driving the current to its absolute maximum!</span>
            )}
            {mode === 'diode-vi' && (
              <span>Below the knee voltage (0.7 V for Si), the depletion barrier prevents charge carriers from crossing. Above 0.7 V, the electric field collapses and current shoots up exponentially.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
