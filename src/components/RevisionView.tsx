import React, { useState } from 'react';
import { UnitRevision, Language } from '../types';
import { 
  Sparkles, 
  RotateCw, 
  Check, 
  ArrowLeft, 
  Clock, 
  Layers, 
  BookOpen, 
  Sigma, 
  BrainCircuit, 
  HelpCircle, 
  CheckCircle2,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface RevisionViewProps {
  revision: UnitRevision;
  unitNumber: string;
  unitTitle: string;
  subjectTitle: string;
  language: Language;
  onBackToUnit: () => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({
  revision,
  unitNumber,
  unitTitle,
  subjectTitle,
  language,
  onBackToUnit
}) => {
  const [revisionMode, setRevisionMode] = useState<'5-min' | '15-min' | '30-min'>('5-min');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState<number>(0);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleCardFlip = (idx: number) => {
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalCards = revision.flashcards ? revision.flashcards.length : 0;
  const currentCard = totalCards > 0 ? revision.flashcards[activeFlashcardIndex] : null;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-24">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBackToUnit}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Unit</span>
          </button>

          <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full">
            {unitNumber} Revision
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">{unitTitle} — Revision Center</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Accelerated revision tailored for fast university exam preparation. Select your available time budget:
          </p>
        </div>

        {/* 3 Revision Mode Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => setRevisionMode('5-min')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
              revisionMode === '5-min'
                ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200 ring-1 ring-indigo-500 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <Clock className="w-3.5 h-3.5" />
                <span>5-Minute Flash</span>
              </div>
              <div className="font-bold text-sm text-white mt-1">Quick Summary & Formulas</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Key definitions + Essential equations</div>
            </div>
            {revisionMode === '5-min' && <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />}
          </button>

          <button
            onClick={() => setRevisionMode('15-min')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
              revisionMode === '15-min'
                ? 'bg-purple-600/20 border-purple-500 text-purple-200 ring-1 ring-purple-500 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Layers className="w-3.5 h-3.5" />
                <span>15-Minute Drill</span>
              </div>
              <div className="font-bold text-sm text-white mt-1">Differences & Flashcards</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Comparison table + Flip flashcards</div>
            </div>
            {revisionMode === '15-min' && <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />}
          </button>

          <button
            onClick={() => setRevisionMode('30-min')}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
              revisionMode === '30-min'
                ? 'bg-cyan-600/20 border-cyan-500 text-cyan-200 ring-1 ring-cyan-500 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>30-Minute Deep Revision</span>
              </div>
              <div className="font-bold text-sm text-white mt-1">Mind Map & Exam Numericals</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Hierarchical tree + Solved problems</div>
            </div>
            {revisionMode === '30-min' && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODE 1: 5-MINUTE FLASH REVISION
          ========================================================================= */}
      {revisionMode === '5-min' && (
        <div className="space-y-6">
          {/* One-Page Core Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>One-Page Essential Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
              {revision.onePageSummary[language]}
            </p>
          </div>

          {/* Key Formulas Sheet */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
              <Sigma className="w-4 h-4 text-indigo-400" />
              <span>Unit Key Formulas & Exam Units</span>
            </div>

            <div className="overflow-x-auto border border-slate-800 rounded-2xl">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase font-bold">
                  <tr>
                    <th className="p-3">Concept / Law</th>
                    <th className="p-3">Formula</th>
                    <th className="p-3">SI Units</th>
                    <th className="p-3">Exam Tip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {revision.keyFormulas.map((f, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-3 font-semibold text-white">{f.name}</td>
                      <td className="p-3 font-mono font-bold text-cyan-300">{f.formula}</td>
                      <td className="p-3 font-mono text-slate-400">{f.units}</td>
                      <td className="p-3 text-slate-300">{f.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 2: 15-MINUTE EXAM DRILL
          ========================================================================= */}
      {revisionMode === '15-min' && (
        <div className="space-y-6">
          {/* Interactive Flip Flashcards */}
          {totalCards > 0 && currentCard && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Interactive Flip Flashcards (Card {activeFlashcardIndex + 1} of {totalCards})
                </div>
                <div className="text-xs text-slate-400">Click card to reveal definition/formula</div>
              </div>

              {/* Flip Card Container */}
              <div
                onClick={() => toggleCardFlip(activeFlashcardIndex)}
                className="cursor-pointer min-h-[180px] sm:min-h-[220px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center transition-all bg-gradient-to-br from-slate-950 to-slate-900 border border-purple-500/30 hover:border-purple-400 shadow-xl"
              >
                <div className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                  {flippedCards[activeFlashcardIndex] ? 'BACK: Explanation & Answer' : 'FRONT: Term / Concept'}
                </div>

                <div className="font-bold text-base sm:text-lg text-white my-auto max-w-lg leading-relaxed">
                  {flippedCards[activeFlashcardIndex] ? currentCard.back : currentCard.front}
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Click anywhere to flip</span>
                </div>
              </div>

              {/* Card Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeFlashcardIndex === 0}
                  onClick={() => {
                    setActiveFlashcardIndex(prev => Math.max(0, prev - 1));
                    setFlippedCards({});
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-40 transition-colors"
                >
                  Previous Card
                </button>

                <button
                  disabled={activeFlashcardIndex === totalCards - 1}
                  onClick={() => {
                    setActiveFlashcardIndex(prev => Math.min(totalCards - 1, prev + 1));
                    setFlippedCards({});
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white disabled:opacity-40 transition-colors shadow-md"
                >
                  Next Card
                </button>
              </div>
            </div>
          )}

          {/* Key Differences Comparison Table */}
          {revision.differences && revision.differences.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Crucial University Differences & Comparisons
              </div>

              {revision.differences.map((diff, dIdx) => (
                <div key={dIdx} className="space-y-3">
                  <h3 className="font-bold text-base text-white">
                    {diff.conceptA} <span className="text-indigo-400">vs</span> {diff.conceptB}
                  </h3>

                  <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                    <table className="w-full text-xs text-left text-slate-300">
                      <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase font-bold">
                        <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3 text-indigo-300">{diff.conceptA}</th>
                          <th className="p-3 text-purple-300">{diff.conceptB}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {diff.comparisonPoints.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/40">
                            <td className="p-3 font-semibold text-white">{row.feature}</td>
                            <td className="p-3">{row.a}</td>
                            <td className="p-3">{row.b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          MODE 3: 30-MINUTE DEEP REVISION
          ========================================================================= */}
      {revisionMode === '30-min' && (
        <div className="space-y-6">
          {/* Concept Mind Map */}
          {revision.mindMap && revision.mindMap.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Interactive Hierarchical Concept Mind Map
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {revision.mindMap.map((node, nIdx) => (
                  <div key={nIdx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="font-bold text-sm text-cyan-300 flex items-center gap-1.5">
                      <BrainCircuit className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{node.node}</span>
                    </div>
                    {node.children && (
                      <ul className="space-y-1 text-xs text-slate-400 pl-4 border-l border-slate-800">
                        {node.children.map((child, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                            <span>{child}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solved Numericals for University Exams */}
          {revision.numericalPractice && revision.numericalPractice.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                University Solved Numericals with Step-by-Step Breakdown
              </div>

              <div className="space-y-3">
                {revision.numericalPractice.map((num, idx) => (
                  <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="font-bold text-sm text-white">Problem {idx + 1}: {num.question}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <div>
                        <span className="text-slate-400">Given Data: </span>
                        <span className="font-mono text-cyan-300">{num.given}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Applicable Formula: </span>
                        <span className="font-mono text-indigo-300">{num.formula}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-200 font-mono whitespace-pre-line">
                      <strong>Solution: </strong>{num.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
