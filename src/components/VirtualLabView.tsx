import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { LabExperiment, Language, QuizQuestion } from '../types';
import { 
  FlaskConical, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Table, 
  Calculator, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Download, 
  ArrowLeft, 
  Info,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Play,
  Copy,
  Check,
  Code2
} from 'lucide-react';

// Import simulations for Virtual Lab
import { Optics3DSimulation } from './simulations/Optics3DSimulation';
import { CircuitSimulator } from './simulations/CircuitSimulator';
import { LaserFiber3DSimulation } from './simulations/LaserFiber3DSimulation';
import { TransformerMotor3DSimulation } from './simulations/TransformerMotor3DSimulation';
import { CCodePlayground } from './simulations/CCodePlayground';
import { EnglishLabRig } from './simulations/EnglishLabRig';

interface VirtualLabViewProps {
  experiment: LabExperiment;
  subjectTitle: string;
  language: Language;
  onBackToSyllabus: () => void;
  onCompleteExperiment: () => void;
}

export const VirtualLabView: React.FC<VirtualLabViewProps> = ({
  experiment,
  subjectTitle,
  language,
  onBackToSyllabus,
  onCompleteExperiment
}) => {
  // Observation Table State
  const [recordedObservations, setRecordedObservations] = useState<Record<string, any>[]>(
    experiment.sampleObservations && experiment.sampleObservations.length > 0 
      ? [...experiment.sampleObservations] 
      : []
  );

  // Viva Voce reveal states
  const [revealedViva, setRevealedViva] = useState<Record<number, boolean>>({});

  // Lab Exit Quiz
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Active section tab
  const [activeTab, setActiveTab] = useState<'simulation' | 'theory' | 'observations' | 'viva'>('simulation');
  const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);
  const [isCodeDownloaded, setIsCodeDownloaded] = useState<boolean>(false);

  const handleCopyExpCode = () => {
    if (!experiment.sourceCode) return;
    navigator.clipboard.writeText(experiment.sourceCode);
    setIsCodeCopied(true);
    setTimeout(() => setIsCodeCopied(false), 2000);
  };

  const handleDownloadExpCode = () => {
    if (!experiment.sourceCode) return;
    const blob = new Blob([experiment.sourceCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `experiment_${experiment.expNumber}.c`;
    link.click();
    URL.revokeObjectURL(url);
    setIsCodeDownloaded(true);
    setTimeout(() => setIsCodeDownloaded(false), 2000);
  };

  const toggleViva = (index: number) => {
    setRevealedViva(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAddSampleReading = () => {
    const newRow: Record<string, any> = {};
    experiment.observationColumns.forEach((col, i) => {
      newRow[col.key] = (Math.random() * 50 + 10).toFixed(2);
    });
    setRecordedObservations(prev => [...prev, newRow]);
  };

  const handleClearObservations = () => {
    setRecordedObservations([]);
  };

  const handleSelectQuizOption = (qId: string, optIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optIndex }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    experiment.revisionQuiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === experiment.revisionQuiz.length && score > 0) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      onCompleteExperiment();
    }
  };

  // Determine which simulation rig to render
  const renderRig = () => {
    const simType = experiment.simulationType.toLowerCase();
    if (simType.includes('optics') || simType.includes('newton') || simType.includes('diffraction') || simType.includes('laser')) {
      return <Optics3DSimulation mode="diffraction" />;
    }
    if (simType.includes('lcr') || simType.includes('circuit') || simType.includes('diode') || simType.includes('ohm')) {
      return <CircuitSimulator initialMode="rlc-resonance" />;
    }
    if (simType.includes('motor') || simType.includes('transformer')) {
      return <TransformerMotor3DSimulation />;
    }
    if (simType.includes('c-code') || simType.includes('algorithm')) {
      return <CCodePlayground title={experiment.title} />;
    }
    if (simType.includes('english') || subjectTitle.toLowerCase().includes('english')) {
      return <EnglishLabRig activityNumber={experiment.expNumber} />;
    }
    // Default fallback
    return <CircuitSimulator initialMode="dc-circuit" />;
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-24">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBackToSyllabus}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Lab Syllabus</span>
          </button>

          <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-3 py-1 rounded-full">
            Experiment {experiment.expNumber}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">{experiment.title}</h1>
          <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
            <strong>Aim: </strong>{experiment.aim}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-xs sm:text-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'simulation' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Virtual Apparatus Rig
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'theory' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Theory & Procedure
          </button>
          <button
            onClick={() => setActiveTab('observations')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'observations' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Observation Table & Calculations
          </button>
          <button
            onClick={() => setActiveTab('viva')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'viva' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Viva Voce & Exit Quiz
          </button>
        </div>
      </div>

      {/* Tab 1: Virtual Apparatus Rig */}
      {activeTab === 'simulation' && (
        <div className="space-y-6">
          {/* Rig Canvas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Interactive Laboratory Apparatus Simulator
              </span>
              <span className="text-xs text-slate-400">Adjust sliders & observe physical changes</span>
            </div>
            {renderRig()}
          </div>

          {/* Apparatus Checklist */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Required Laboratory Apparatus
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {experiment.apparatus.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Theory & Procedure */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Theory */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <h2 className="text-lg font-bold text-white">Underlying Theoretical Principles</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {experiment.theory[language]}
            </p>

            {/* Formulae */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">Working Formulae:</div>
              {experiment.equations.map((eq, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-sm sm:text-base text-cyan-300 text-center">{eq.formula}</div>
                  <div className="text-xs text-slate-400 text-center">{eq.symbolDefs}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure & Safety Precautions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step-by-Step Procedure */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-3">
              <h3 className="text-base font-bold text-white">Laboratory Procedure</h3>
              <ol className="space-y-2 text-xs text-slate-300">
                {experiment.procedure.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="font-mono font-bold text-cyan-400 shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Safety Precautions */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span>Safety & Precautions</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {experiment.safetyPrecautions.map((safe, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-rose-950/20 border border-rose-900/40 p-2.5 rounded-xl text-rose-200">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{safe}</span>
                  </li>
                ))}
              </ul>

              {/* Sources of Error */}
              <div className="pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sources of Error:</div>
                <ul className="space-y-1 text-xs text-slate-400">
                  {experiment.sourcesOfError.map((err, idx) => (
                    <li key={idx}>• {err}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* C Programming Lab Specific Sections */}
          {experiment.sourceCode && (
            <div className="space-y-6">
              {/* Problem Statement & Algorithm */}
              {experiment.algorithm && experiment.algorithm.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-4">
                  {experiment.problemStatement && (
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-200">
                      <strong className="text-cyan-400 block mb-1">Problem Statement:</strong>
                      {experiment.problemStatement}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-white mb-2">Step-by-Step Algorithm</h3>
                    <ol className="space-y-1.5 text-xs text-slate-300">
                      {experiment.algorithm.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800/60">
                          <span className="font-mono text-cyan-400 font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Complete C Source Code Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-bold text-base text-white">Complete Verified C Source Code</h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={handleCopyExpCode}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                      {isCodeCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCodeCopied ? 'Copied' : 'Copy Code'}</span>
                    </button>

                    <button
                      onClick={handleDownloadExpCode}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow transition-colors"
                    >
                      {isCodeDownloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                      <span>Download .c</span>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <pre className="bg-black/80 border border-slate-800/80 rounded-2xl p-4 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                    <code>{experiment.sourceCode}</code>
                  </pre>
                </div>

                {/* Important Statement Explanations */}
                {experiment.statementExplanations && experiment.statementExplanations.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Explanation of Important Statements
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experiment.statementExplanations.map((item, idx) => (
                        <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                          <code className="text-amber-400 font-mono font-bold block">{item.statement}</code>
                          <span className="text-slate-400">{item.explanation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Input vs Expected Output */}
              {(experiment.sampleInput !== undefined || experiment.expectedOutput !== undefined) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiment.sampleInput && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Program Input:</span>
                      <pre className="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre-wrap">
                        {experiment.sampleInput}
                      </pre>
                    </div>
                  )}

                  {experiment.expectedOutput && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Expected Standard Output:</span>
                      <pre className="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre-wrap">
                        {experiment.expectedOutput}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {/* Edge Cases & Common Errors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiment.edgeCases && experiment.edgeCases.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Edge & Boundary Cases:</span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {experiment.edgeCases.map((ec, idx) => (
                        <li key={idx}>• {ec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {experiment.commonErrors && experiment.commonErrors.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Common Student Mistakes & Debugging:</span>
                    <ul className="space-y-1 text-xs text-rose-200">
                      {experiment.commonErrors.map((err, idx) => (
                        <li key={idx}>• {err}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Observation Table & Calculations */}
      {activeTab === 'observations' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">Observation Table</h2>
                <p className="text-xs text-slate-400">Record values during experimental runs or populate sample readings.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddSampleReading}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Reading</span>
                </button>
                <button
                  onClick={handleClearObservations}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
                  title="Clear Table"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-800 rounded-2xl">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase font-bold">
                  <tr>
                    <th className="p-3">S.No</th>
                    {experiment.observationColumns.map((col, idx) => (
                      <th key={idx} className="p-3">
                        {col.label} {col.unit ? `(${col.unit})` : ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {recordedObservations.length > 0 ? (
                    recordedObservations.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/40">
                        <td className="p-3 font-mono font-bold text-cyan-400">{rIdx + 1}</td>
                        {experiment.observationColumns.map((col, cIdx) => (
                          <td key={cIdx} className="p-3 font-mono">
                            {row[col.key] !== undefined ? row[col.key] : '-'}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={experiment.observationColumns.length + 1} className="p-6 text-center text-slate-500">
                        No observations recorded yet. Click "Add Reading" or adjust the virtual rig.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Calculation Guide */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <Calculator className="w-4 h-4" />
                <span>Calculation Guide & Formula Substitution</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono whitespace-pre-line">
                {experiment.calculationGuide}
              </div>
            </div>

            {/* Result & Interpretation */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 space-y-1">
              <div className="text-xs text-emerald-300 font-bold uppercase">Result & Physical Interpretation:</div>
              <p className="text-xs sm:text-sm text-emerald-100">{experiment.resultInterpretation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Viva Voce & Exit Quiz */}
      {activeTab === 'viva' && (
        <div className="space-y-6">
          {/* Viva Questions Accordion */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <h2 className="text-lg font-bold text-white">University Viva Voce Questions</h2>
            <p className="text-xs text-slate-400">Click on any question to reveal or hide the examiner answer.</p>

            <div className="space-y-3">
              {experiment.vivaQuestions.map((viva, idx) => {
                const isRevealed = revealedViva[idx];
                return (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                    <div
                      onClick={() => toggleViva(idx)}
                      className="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-900/60 transition-colors"
                    >
                      <div className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                        <span className="font-mono text-cyan-400">Q{idx + 1}:</span>
                        <span>{viva.question}</span>
                      </div>
                      <div className="text-slate-400">
                        {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>

                    {isRevealed && (
                      <div className="p-4 pt-0 border-t border-slate-800/80 text-xs text-emerald-300 bg-emerald-950/10 leading-relaxed">
                        <strong className="text-emerald-400">Examiner Answer: </strong>
                        {viva.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lab Exit Quiz */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Lab Exit Assessment Quiz</h2>
              {quizSubmitted && (
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  Score: {quizScore} / {experiment.revisionQuiz.length}
                </span>
              )}
            </div>

            <div className="space-y-4">
              {experiment.revisionQuiz.map((q, qIdx) => {
                const selectedOpt = quizAnswers[q.id];
                return (
                  <div key={q.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="text-xs text-slate-400 font-mono">Question {qIdx + 1}</div>
                    <div className="font-semibold text-sm text-white">{q.question[language]}</div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        let style = 'bg-slate-900 border-slate-800 text-slate-300';
                        if (quizSubmitted) {
                          if (oIdx === q.correctIndex) style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-semibold';
                          else if (oIdx === selectedOpt) style = 'bg-rose-950 border-rose-500 text-rose-200';
                        } else if (selectedOpt === oIdx) {
                          style = 'bg-cyan-600/30 border-cyan-500 text-cyan-200';
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizOption(q.id, oIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${style}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && oIdx === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSubmitQuiz}
                disabled={quizSubmitted || Object.keys(quizAnswers).length < experiment.revisionQuiz.length}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  quizSubmitted || Object.keys(quizAnswers).length < experiment.revisionQuiz.length
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                }`}
              >
                {quizSubmitted ? 'Assessment Submitted' : 'Submit Lab Quiz'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
