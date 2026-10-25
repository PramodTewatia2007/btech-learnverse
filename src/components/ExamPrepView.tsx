import React, { useState } from 'react';
import { ExamQuestion } from '../types';
import { 
  GraduationCap, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  Filter, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Award,
  Play,
  Check
} from 'lucide-react';

interface ExamPrepViewProps {
  questions: ExamQuestion[];
  subjectTitle: string;
  onBackToSyllabus: () => void;
}

export const ExamPrepView: React.FC<ExamPrepViewProps> = ({
  questions,
  subjectTitle,
  onBackToSyllabus
}) => {
  const [selectedUnit, setSelectedUnit] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [isMockMode, setIsMockMode] = useState<boolean>(false);
  const [mockTimer, setMockTimer] = useState<number>(1200); // 20 minutes in seconds

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = questions.filter(q => {
    if (selectedUnit !== 'All' && q.unitNumber !== selectedUnit) return false;
    if (selectedType !== 'All' && q.type !== selectedType) return false;
    return true;
  });

  // Extract unique units
  const uniqueUnits = ['All', ...Array.from(new Set(questions.map(q => q.unitNumber)))];
  const uniqueTypes = ['All', 'Short', 'Long', 'Numerical', 'Viva', 'Code'];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBackToSyllabus}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Syllabus</span>
          </button>

          <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full">
            {questions.length} Exam Questions Available
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">{subjectTitle} — University Exam Question Bank</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Carefully curated university examination problems with step-by-step model answers, derivations, and marking rubrics.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Unit:
            </span>
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              {uniqueUnits.map(unit => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
                    selectedUnit === unit ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5"
            >
              {uniqueTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const isRevealed = revealedSolutions[q.id];
          return (
            <div
              key={q.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-2.5 py-0.5 rounded-lg">
                    {q.unitNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                    {q.type} Question
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-900 px-2 py-0.5 rounded-lg">
                    {q.marks} Marks
                  </span>
                </div>

                <button
                  onClick={() => toggleSolution(q.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors border border-slate-700"
                >
                  <span>{isRevealed ? 'Hide Solution' : 'View Model Answer'}</span>
                  {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="font-bold text-sm sm:text-base text-white leading-relaxed">
                {q.question}
              </div>

              {/* Revealable Solution */}
              {isRevealed && (
                <div className="pt-3 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Model University Solution:
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line">
                    {q.solution}
                  </div>

                  {q.stepByStep && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Marking Scheme Breakdown:</div>
                      <ul className="space-y-1 text-xs text-slate-400 pl-4 list-disc">
                        {q.stepByStep.map((st, sIdx) => (
                          <li key={sIdx}>{st}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
