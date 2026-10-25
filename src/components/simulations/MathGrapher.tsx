import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RefreshCw, Eye, Info, Sigma, Layers, Compass, Grid, FunctionSquare, ArrowRight } from 'lucide-react';

export const MathGrapher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculus' | 'fourier' | 'complex' | 'vectors' | 'matrix'>('calculus');

  // Tab 1: Calculus states
  const [selectedFunction, setSelectedFunction] = useState<'quadratic' | 'sine' | 'cubic' | 'exponential'>('quadratic');
  const [xTangent, setXTangent] = useState<number>(1.5);
  const [integralA, setIntegralA] = useState<number>(0.0);
  const [integralB, setIntegralB] = useState<number>(3.0);
  const [showArea, setShowArea] = useState<boolean>(true);
  const [showTaylor, setShowTaylor] = useState<boolean>(false);
  const [taylorOrder, setTaylorOrder] = useState<number>(2);
  const [showMVT, setShowMVT] = useState<boolean>(false);

  // Tab 2: Fourier & Sequences states
  const [fourierType, setFourierType] = useState<'square' | 'sawtooth'>('square');
  const [fourierHarmonics, setFourierHarmonics] = useState<number>(5);

  // Tab 3: Complex Plane states
  const [poleRe, setPoleRe] = useState<number>(1.0);
  const [poleIm, setPoleIm] = useState<number>(1.0);
  const [contourRadius, setContourRadius] = useState<number>(2.0);

  // Tab 4: Vectors & Transformations states
  const [matA, setMatA] = useState<number>(1.5);
  const [matB, setMatB] = useState<number>(0.5);
  const [matC, setMatC] = useState<number>(0.0);
  const [matD, setMatD] = useState<number>(1.2);

  // Tab 5: Matrix Calculator states
  const [m11, setM11] = useState<number>(3);
  const [m12, setM12] = useState<number>(2);
  const [m21, setM21] = useState<number>(1);
  const [m22, setM22] = useState<number>(4);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Math evaluation functions for Calculus
  const evalF = (x: number): number => {
    switch (selectedFunction) {
      case 'quadratic': return x * x - 4 * x + 4; // (x-2)^2
      case 'sine': return Math.sin(x) * 2;
      case 'cubic': return 0.2 * (x * x * x - 6 * x);
      case 'exponential': return Math.exp(x * 0.5) - 1;
      default: return x;
    }
  };

  const evalFPrime = (x: number): number => {
    switch (selectedFunction) {
      case 'quadratic': return 2 * x - 4;
      case 'sine': return 2 * Math.cos(x);
      case 'cubic': return 0.2 * (3 * x * x - 6);
      case 'exponential': return 0.5 * Math.exp(x * 0.5);
      default: return 1;
    }
  };

  // Taylor Polynomial around x0 = 0
  const evalTaylor = (x: number, order: number): number => {
    if (selectedFunction === 'sine') {
      let val = 2 * x;
      if (order >= 3) val -= (2 * Math.pow(x, 3)) / 6;
      if (order >= 5) val += (2 * Math.pow(x, 5)) / 120;
      return val;
    } else if (selectedFunction === 'exponential') {
      let val = 0.5 * x;
      if (order >= 2) val += Math.pow(0.5 * x, 2) / 2;
      if (order >= 3) val += Math.pow(0.5 * x, 3) / 6;
      return val;
    } else {
      const f0 = evalF(xTangent);
      const f1 = evalFPrime(xTangent);
      let val = f0 + f1 * (x - xTangent);
      if (order >= 2) {
        const f2 = selectedFunction === 'quadratic' ? 2 : 0.2 * 6 * xTangent;
        val += 0.5 * f2 * Math.pow(x - xTangent, 2);
      }
      return val;
    }
  };

  // Approximate definite integral
  const numSlices = 100;
  const dx = (integralB - integralA) / numSlices;
  let computedArea = 0;
  for (let i = 0; i < numSlices; i++) {
    const midX = integralA + (i + 0.5) * dx;
    computedArea += evalF(midX) * dx;
  }

  // MVT Secant slope
  const mvtSecantSlope = integralB !== integralA ? (evalF(integralB) - evalF(integralA)) / (integralB - integralA) : 0;

  // Matrix calculations (Tab 5)
  const det2x2 = m11 * m22 - m12 * m21;
  const trace2x2 = m11 + m22;
  const disc2x2 = trace2x2 * trace2x2 - 4 * det2x2;
  const hasRealEigen = disc2x2 >= 0;
  const lambda1 = hasRealEigen ? ((trace2x2 + Math.sqrt(disc2x2)) / 2).toFixed(2) : 'Complex';
  const lambda2 = hasRealEigen ? ((trace2x2 - Math.sqrt(disc2x2)) / 2).toFixed(2) : 'Complex';
  const rank2x2 = (m11 === 0 && m12 === 0 && m21 === 0 && m22 === 0) ? 0 : det2x2 !== 0 ? 2 : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#060a14';
    ctx.fillRect(0, 0, width, height);

    const originX = width / 2;
    const originY = height / 2;
    const scaleX = width / 12;
    const scaleY = height / 10;

    // Grid lines
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -6; x <= 6; x++) {
      const cx = originX + x * scaleX;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      const cy = originY - y * scaleY;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    if (activeTab === 'complex') {
      ctx.fillText('Re(z)', width - 40, originY - 8);
      ctx.fillText('Im(z)', originX + 8, 16);
    } else {
      ctx.fillText('x', width - 20, originY - 8);
      ctx.fillText('y', originX + 8, 16);
    }

    // TAB 1: CALCULUS RENDER
    if (activeTab === 'calculus') {
      // Area Shading
      if (showArea && integralB > integralA) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.beginPath();
        const startPlotX = originX + integralA * scaleX;
        ctx.moveTo(startPlotX, originY);
        for (let px = startPlotX; px <= originX + integralB * scaleX; px += 2) {
          const worldX = (px - originX) / scaleX;
          const worldY = evalF(worldX);
          ctx.lineTo(px, originY - worldY * scaleY);
        }
        ctx.lineTo(originX + integralB * scaleX, originY);
        ctx.closePath();
        ctx.fill();
      }

      // Main Function Curve f(x)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      let first = true;
      for (let px = 0; px <= width; px += 2) {
        const worldX = (px - originX) / scaleX;
        const worldY = evalF(worldX);
        const py = originY - worldY * scaleY;
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Taylor Series Approximation Curve
      if (showTaylor) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        first = true;
        for (let px = 0; px <= width; px += 2) {
          const worldX = (px - originX) / scaleX;
          const worldY = evalTaylor(worldX, taylorOrder);
          const py = originY - worldY * scaleY;
          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Tangent Line at xTangent
      const ptX = originX + xTangent * scaleX;
      const ptY = originY - evalF(xTangent) * scaleY;
      const slope = evalFPrime(xTangent);

      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const tanX1 = -5;
      const tanY1 = evalF(xTangent) + slope * (tanX1 - xTangent);
      const tanX2 = 5;
      const tanY2 = evalF(xTangent) + slope * (tanX2 - xTangent);
      ctx.moveTo(originX + tanX1 * scaleX, originY - tanY1 * scaleY);
      ctx.lineTo(originX + tanX2 * scaleX, originY - tanY2 * scaleY);
      ctx.stroke();

      // Tangent Point Circle
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(ptX, ptY, 5, 0, Math.PI * 2);
      ctx.fill();

      // MVT Secant Chord
      if (showMVT && integralB !== integralA) {
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 3]);
        ctx.beginPath();
        ctx.moveTo(originX + integralA * scaleX, originY - evalF(integralA) * scaleY);
        ctx.lineTo(originX + integralB * scaleX, originY - evalF(integralB) * scaleY);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // TAB 2: FOURIER SERIES RENDER
    if (activeTab === 'fourier') {
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      let first = true;
      for (let px = 0; px <= width; px += 2) {
        const x = (px - originX) / scaleX;
        let y = 0;
        if (fourierType === 'square') {
          for (let k = 1; k <= fourierHarmonics; k++) {
            const n = 2 * k - 1;
            y += (4 / (Math.PI * n)) * Math.sin(n * x);
          }
        } else {
          for (let k = 1; k <= fourierHarmonics; k++) {
            y += (2 / (Math.PI * k)) * Math.pow(-1, k + 1) * Math.sin(k * x);
          }
        }
        const py = originY - y * scaleY * 1.5;
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Target Wave
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (let px = 0; px <= width; px += 2) {
        const x = (px - originX) / scaleX;
        let idealY = 0;
        if (fourierType === 'square') {
          idealY = Math.sin(x) >= 0 ? 1 : -1;
        } else {
          idealY = ((x % Math.PI) / Math.PI) * 2 - 1;
        }
        const py = originY - idealY * scaleY * 1.5;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // TAB 3: COMPLEX PLANE & CONTOUR INTEGRAL RENDER
    if (activeTab === 'complex') {
      const contourRadiusPx = contourRadius * scaleX;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(originX, originY, contourRadiusPx, 0, Math.PI * 2);
      ctx.stroke();

      const arrowAngle = Math.PI / 4;
      const ax = originX + contourRadiusPx * Math.cos(arrowAngle);
      const ay = originY - contourRadiusPx * Math.sin(arrowAngle);
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(ax, ay, 4, 0, Math.PI * 2);
      ctx.fill();

      const polePxX = originX + poleRe * scaleX;
      const polePxY = originY - poleIm * scaleY;
      const distFromOrigin = Math.sqrt(poleRe * poleRe + poleIm * poleIm);
      const isInside = distFromOrigin < contourRadius;

      ctx.strokeStyle = isInside ? '#ef4444' : '#64748b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(polePxX - 8, polePxY - 8);
      ctx.lineTo(polePxX + 8, polePxY + 8);
      ctx.moveTo(polePxX + 8, polePxY - 8);
      ctx.lineTo(polePxX - 8, polePxY + 8);
      ctx.stroke();

      ctx.fillStyle = isInside ? '#f87171' : '#94a3b8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Pole z₀ (${poleRe.toFixed(1)} + ${poleIm.toFixed(1)}i)`, polePxX + 12, polePxY - 4);
      ctx.font = '10px sans-serif';
      ctx.fillText(isInside ? 'Status: INSIDE contour (Residue ≠ 0)' : 'Status: OUTSIDE contour (Integral = 0)', polePxX + 12, polePxY + 12);
    }

    // TAB 4: LINEAR TRANSFORMATIONS & EIGENVECTOR RENDER
    if (activeTab === 'vectors') {
      const iTransX = originX + matA * scaleX;
      const iTransY = originY - matC * scaleY;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(iTransX, iTransY);
      ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.fillText(`T(î) = [${matA.toFixed(1)}, ${matC.toFixed(1)}]ᵀ`, iTransX + 8, iTransY);

      const jTransX = originX + matB * scaleX;
      const jTransY = originY - matD * scaleY;
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(jTransX, jTransY);
      ctx.stroke();
      ctx.fillStyle = '#10b981';
      ctx.fillText(`T(ĵ) = [${matB.toFixed(1)}, ${matD.toFixed(1)}]ᵀ`, jTransX + 8, jTransY);

      ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(iTransX, iTransY);
      ctx.lineTo(originX + (matA + matB) * scaleX, originY - (matC + matD) * scaleY);
      ctx.lineTo(jTransX, jTransY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }, [
    activeTab,
    selectedFunction,
    xTangent,
    integralA,
    integralB,
    showArea,
    showTaylor,
    taylorOrder,
    showMVT,
    fourierType,
    fourierHarmonics,
    poleRe,
    poleIm,
    contourRadius,
    matA,
    matB,
    matC,
    matD
  ]);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4">
      {/* Top Tab Navigator */}
      <div className="bg-slate-900 border-b border-slate-800 p-3 sm:p-4 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveTab('calculus')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'calculus' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            1. Calculus &amp; MVT
          </button>
          <button
            onClick={() => setActiveTab('fourier')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'fourier' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            2. Fourier &amp; Series
          </button>
          <button
            onClick={() => setActiveTab('complex')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'complex' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            3. Complex &amp; Residues
          </button>
          <button
            onClick={() => setActiveTab('vectors')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'vectors' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            4. Linear Transformations
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'matrix' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            5. Matrix &amp; Eigens
          </button>
        </div>

        <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-950/80 border border-sky-800 px-2.5 py-1 rounded-full whitespace-nowrap">
          Interactive Math Studio
        </span>
      </div>

      {/* Main Canvas & Visual Workspace */}
      {activeTab !== 'matrix' ? (
        <div className="px-4 sm:px-6">
          <div className="relative border border-slate-800 rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
            <canvas ref={canvasRef} width={800} height={420} className="w-full h-auto block" />
          </div>
        </div>
      ) : null}

      {/* Controls Container by Tab */}
      <div className="p-4 sm:p-6 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-300 space-y-4">
        {/* TAB 1: CALCULUS CONTROLS */}
        {activeTab === 'calculus' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Target Function f(x)</label>
                <select
                  value={selectedFunction}
                  onChange={(e: any) => setSelectedFunction(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                >
                  <option value="quadratic">Quadratic: f(x) = (x - 2)²</option>
                  <option value="sine">Sine Wave: f(x) = 2·sin(x)</option>
                  <option value="cubic">Cubic: f(x) = 0.2·(x³ - 6x)</option>
                  <option value="exponential">Exponential: f(x) = e^(0.5x) - 1</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Tangent Point x₀</span>
                  <span className="text-pink-400 font-mono">{xTangent.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="4"
                  step="0.1"
                  value={xTangent}
                  onChange={e => setXTangent(parseFloat(e.target.value))}
                  className="w-full accent-pink-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Integral Lower Limit a</span>
                  <span className="text-sky-400 font-mono">{integralA.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="3"
                  step="0.2"
                  value={integralA}
                  onChange={e => setIntegralA(parseFloat(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Integral Upper Limit b</span>
                  <span className="text-sky-400 font-mono">{integralB.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="5"
                  step="0.2"
                  value={integralB}
                  onChange={e => setIntegralB(parseFloat(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-800">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showArea}
                  onChange={e => setShowArea(e.target.checked)}
                  className="accent-sky-500 rounded"
                />
                <span>Riemann Integral Area = <strong className="text-sky-400 font-mono">{computedArea.toFixed(3)}</strong></span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showMVT}
                  onChange={e => setShowMVT(e.target.checked)}
                  className="accent-purple-500 rounded"
                />
                <span>MVT Secant Chord Slope = <strong className="text-purple-400 font-mono">{mvtSecantSlope.toFixed(3)}</strong></span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showTaylor}
                  onChange={e => setShowTaylor(e.target.checked)}
                  className="accent-amber-500 rounded"
                />
                <span>Taylor Polynomial Series (Order: {taylorOrder})</span>
              </label>
            </div>
          </div>
        )}

        {/* TAB 2: FOURIER SERIES CONTROLS */}
        {activeTab === 'fourier' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Target Periodic Waveform</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFourierType('square')}
                    className={`flex-1 py-1.5 rounded-lg font-bold ${
                      fourierType === 'square' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Square Wave (Odd Harmonics)
                  </button>
                  <button
                    onClick={() => setFourierType('sawtooth')}
                    className={`flex-1 py-1.5 rounded-lg font-bold ${
                      fourierType === 'sawtooth' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Sawtooth Wave (All Harmonics)
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Number of Harmonic Terms (N)</span>
                  <span className="text-emerald-400 font-mono">{fourierHarmonics} terms</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={fourierHarmonics}
                  onChange={e => setFourierHarmonics(parseInt(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <strong>Fourier Formula: </strong>
                {fourierType === 'square'
                  ? 'f(x) ≈ (4/π) [ sin(x) + sin(3x)/3 + sin(5x)/5 + ... + sin((2N-1)x)/(2N-1) ]'
                  : 'f(x) ≈ (2/π) [ sin(x) - sin(2x)/2 + sin(3x)/3 - sin(4x)/4 + ... ]'}
              </div>
              <div className="text-emerald-400 font-mono">
                Parseval Energy Sum: <strong>{(fourierHarmonics * 0.405).toFixed(3)}</strong>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPLEX VARIABLES CONTROLS */}
        {activeTab === 'complex' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Pole Real Part Re(z₀)</span>
                  <span className="text-purple-400 font-mono">{poleRe.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.2"
                  value={poleRe}
                  onChange={e => setPoleRe(parseFloat(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Pole Imaginary Part Im(z₀)</span>
                  <span className="text-purple-400 font-mono">{poleIm.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.2"
                  value={poleIm}
                  onChange={e => setPoleIm(parseFloat(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Closed Contour Radius R</span>
                  <span className="text-sky-400 font-mono">{contourRadius.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="4.0"
                  step="0.2"
                  value={contourRadius}
                  onChange={e => setContourRadius(parseFloat(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <strong>Cauchy Residue Theorem: </strong>
              ∮_C f(z) dz = 2πi · ∑ Res(f, z_k). If the singularity pole lies INSIDE the circle (|z₀| &lt; R), the integral is 2πi · Res. If OUTSIDE (|z₀| &gt; R), Cauchy-Goursat theorem guarantees ∮_C f(z) dz = 0!
            </div>
          </div>
        )}

        {/* TAB 4: LINEAR TRANSFORMATIONS CONTROLS */}
        {activeTab === 'vectors' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Matrix A₁₁ (Scale X)</label>
                <input
                  type="number"
                  step="0.2"
                  value={matA}
                  onChange={e => setMatA(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1.5 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Matrix A₁₂ (Shear X)</label>
                <input
                  type="number"
                  step="0.2"
                  value={matB}
                  onChange={e => setMatB(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1.5 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Matrix A₂₁ (Shear Y)</label>
                <input
                  type="number"
                  step="0.2"
                  value={matC}
                  onChange={e => setMatC(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1.5 text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Matrix A₂₂ (Scale Y)</label>
                <input
                  type="number"
                  step="0.2"
                  value={matD}
                  onChange={e => setMatD(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1.5 text-white font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <strong>Area Scale Factor (Determinant): </strong>
                <span className="font-mono text-indigo-400 font-bold">{(matA * matD - matB * matC).toFixed(2)}</span>
              </div>
              <div className="text-slate-400">
                Red arrow: T(î) • Green arrow: T(ĵ) • Shaded region: Unit square transformed area
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MATRIX CALCULATOR */}
        {activeTab === 'matrix' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="font-bold text-sm text-white flex items-center gap-2">
                  <Grid className="w-4 h-4 text-amber-400" />
                  <span>2 × 2 Square Matrix A</span>
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <input
                    type="number"
                    value={m11}
                    onChange={e => setM11(parseFloat(e.target.value) || 0)}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-center font-mono text-white text-base font-bold"
                  />
                  <input
                    type="number"
                    value={m12}
                    onChange={e => setM12(parseFloat(e.target.value) || 0)}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-center font-mono text-white text-base font-bold"
                  />
                  <input
                    type="number"
                    value={m21}
                    onChange={e => setM21(parseFloat(e.target.value) || 0)}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-center font-mono text-white text-base font-bold"
                  />
                  <input
                    type="number"
                    value={m22}
                    onChange={e => setM22(parseFloat(e.target.value) || 0)}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-center font-mono text-white text-base font-bold"
                  />
                </div>

                <div className="text-[11px] text-slate-400 text-center">
                  Edit values to calculate determinant, eigenvalues, trace, and rank step-by-step.
                </div>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="font-bold text-sm text-amber-400 flex items-center gap-2">
                  <Sigma className="w-4 h-4" />
                  <span>Analytical Calculation Steps</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80">
                    <strong>1. Determinant: </strong>
                    det(A) = ({m11} × {m22}) - ({m12} × {m21}) = <strong className="text-amber-400 font-mono">{det2x2}</strong>
                    {det2x2 === 0 ? ' (Singular matrix, non-invertible)' : ' (Non-singular, A⁻¹ exists)'}
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80">
                    <strong>2. Trace (Sum of diagonal elements): </strong>
                    tr(A) = {m11} + {m22} = <strong className="text-amber-400 font-mono">{trace2x2}</strong>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80">
                    <strong>3. Characteristic Equation: </strong>
                    λ² - tr(A)·λ + det(A) = 0 ⇒ λ² - ({trace2x2})λ + ({det2x2}) = 0
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80">
                    <strong>4. Eigenvalues: </strong>
                    λ₁ = <strong className="text-emerald-400 font-mono">{lambda1}</strong>, λ₂ = <strong className="text-emerald-400 font-mono">{lambda2}</strong>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex justify-between items-center">
                    <span><strong>5. Matrix Rank: </strong>Rank(A) = <strong className="text-sky-400 font-mono">{rank2x2}</strong></span>
                    <span><strong>Nullity: </strong>Nullity(A) = <strong className="text-purple-400 font-mono">{2 - rank2x2}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
