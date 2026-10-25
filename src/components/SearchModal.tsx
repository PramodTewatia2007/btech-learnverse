import React, { useState } from 'react';
import { Search, X, BookOpen, Layers, FlaskConical, ArrowRight } from 'lucide-react';
import { Subject } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onSelectResult: (subjectId: string, unitId?: string, lessonId?: string, experimentId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  onSelectResult
}) => {
  const [query, setQuery] = useState<string>('');

  if (!isOpen) return null;

  const qLower = query.toLowerCase().trim();

  // Search results
  const results: {
    type: 'subject' | 'unit' | 'lesson' | 'experiment';
    title: string;
    subtitle: string;
    subjectId: string;
    unitId?: string;
    lessonId?: string;
    experimentId?: string;
  }[] = [];

  if (qLower.length > 1) {
    subjects.forEach((subject) => {
      // Check subject
      if (subject.title.toLowerCase().includes(qLower) || subject.description.toLowerCase().includes(qLower)) {
        results.push({
          type: 'subject',
          title: subject.title,
          subtitle: `${subject.category} • ${subject.isOfficial ? 'Official' : 'Provisional'}`,
          subjectId: subject.id
        });
      }

      // Check units and lessons
      subject.units.forEach((unit) => {
        if (unit.title.toLowerCase().includes(qLower) || unit.topics.some(t => t.toLowerCase().includes(qLower))) {
          results.push({
            type: 'unit',
            title: `${unit.unitNumber}: ${unit.title}`,
            subtitle: `Subject: ${subject.title}`,
            subjectId: subject.id,
            unitId: unit.id
          });
        }

        unit.lessons.forEach((lesson) => {
          if (
            lesson.title.toLowerCase().includes(qLower) ||
            lesson.terminology.some(t => t.term.toLowerCase().includes(qLower))
          ) {
            results.push({
              type: 'lesson',
              title: lesson.title,
              subtitle: `${subject.title} • ${unit.unitNumber}`,
              subjectId: subject.id,
              unitId: unit.id,
              lessonId: lesson.id
            });
          }
        });
      });

      // Check experiments
      if (subject.experiments) {
        subject.experiments.forEach((exp) => {
          if (exp.title.toLowerCase().includes(qLower) || exp.aim.toLowerCase().includes(qLower)) {
            results.push({
              type: 'experiment',
              title: `Exp ${exp.expNumber}: ${exp.title}`,
              subtitle: `Lab: ${subject.title}`,
              subjectId: subject.id,
              experimentId: exp.id
            });
          }
        });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-3 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search all 11 subjects, lessons, formulas, or experiments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-medium"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {qLower.length <= 1 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              Type at least 2 letters to search across subjects, 12-step lessons, formulas, and virtual experiments...
            </div>
          ) : results.length > 0 ? (
            results.slice(0, 15).map((r, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectResult(r.subjectId, r.unitId, r.lessonId, r.experimentId);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-slate-800/80 cursor-pointer transition-all border border-transparent hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    {r.type === 'subject' && <BookOpen className="w-4 h-4" />}
                    {r.type === 'unit' && <Layers className="w-4 h-4" />}
                    {r.type === 'lesson' && <BookOpen className="w-4 h-4 text-emerald-400" />}
                    {r.type === 'experiment' && <FlaskConical className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-white group-hover:text-indigo-300 transition-colors">
                      {r.title}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{r.subtitle}</div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-xs text-slate-500">
              No results found for "{query}". Try checking your spelling or search for "Newton", "Pointer", or "Ohm".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
