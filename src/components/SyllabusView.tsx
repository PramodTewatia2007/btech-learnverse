import React, { useState } from 'react';
import { 
  Subject, 
  Unit, 
  LabExperiment 
} from '../types';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';

interface SyllabusViewProps {
  subject: Subject;
  completedLessons: string[];
  completedExperiments: string[];
  onSelectUnit: (unitId: string) => void;
  onSelectLesson: (unitId: string, lessonId: string) => void;
  onSelectExperiment: (experimentId: string) => void;
  onSelectRevision: (unitId: string) => void;
  onSelectExamPrep: () => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  subject,
  completedLessons,
  completedExperiments,
  onSelectUnit,
  onSelectLesson,
  onSelectExperiment,
  onSelectRevision,
  onSelectExamPrep
}) => {
  const isLab = subject.category === 'Laboratory';
  const [expandedUnitId, setExpandedUnitId] = useState<string>(
    subject.units && subject.units.length > 0 ? subject.units[0].id : ''
  );
  const [activeTab, setActiveTab] = useState<'syllabus' | 'exam-pattern' | 'revision-hub'>('syllabus');

  const toggleUnit = (id: string) => {
    setExpandedUnitId(expandedUnitId === id ? '' : id);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Subject Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase ${
                isLab 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                  : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
              }`}>
                {subject.category}
              </span>

              {subject.isOfficial ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Official University Syllabus</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Provisional Standard Curriculum</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {subject.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {subject.description}
            </p>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <span className="font-semibold text-slate-300">Syllabus Source:</span>
              <span className="font-mono text-indigo-300">{subject.syllabusSource}</span>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="flex flex-row md:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => {
                if (isLab && subject.experiments && subject.experiments.length > 0) {
                  onSelectExperiment(subject.experiments[0].id);
                } else if (subject.units && subject.units.length > 0 && subject.units[0].lessons.length > 0) {
                  onSelectLesson(subject.units[0].id, subject.units[0].lessons[0].id);
                }
              }}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all text-center"
            >
              <span>{isLab ? 'Open First Experiment' : 'Start First Lesson'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSelectExamPrep}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all text-center"
            >
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>University Question Bank</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-slate-800/80 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'syllabus' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isLab ? `Laboratory Experiments (${subject.experiments?.length ?? 0})` : `Units & Lessons Roadmap (${subject.unitsCount} Units)`}
          </button>
          <button
            onClick={() => setActiveTab('exam-pattern')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'exam-pattern' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Examination Weightage & Pattern
          </button>
          <button
            onClick={() => setActiveTab('revision-hub')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'revision-hub' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Formula Sheets & Mindmaps
          </button>
        </div>
      </div>

      {/* Tab 1: Syllabus Breakdown */}
      {activeTab === 'syllabus' && (
        <div className="space-y-4">
          {isLab ? (
            /* Laboratory Experiments List */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subject.experiments && subject.experiments.map((exp) => {
                const isDone = completedExperiments.includes(exp.id);
                return (
                  <div
                    key={exp.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded-lg">
                          Experiment {exp.expNumber}
                        </span>
                        {isDone && (
                          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Completed</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-base text-white mb-2">{exp.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2">{exp.aim}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500 font-mono">
                        {exp.apparatus.length} Apparatus Items
                      </div>
                      <button
                        onClick={() => onSelectExperiment(exp.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
                      >
                        <span>Perform Experiment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Theoretical Course Units I-V Accordion */
            <div className="space-y-4">
              {subject.units.map((unit) => {
                const isExpanded = expandedUnitId === unit.id;
                const completedInUnit = unit.lessons.filter((l) => completedLessons.includes(l.id)).length;
                const totalInUnit = unit.lessons.length;
                const isUnitComplete = totalInUnit > 0 && completedInUnit === totalInUnit;

                return (
                  <div
                    key={unit.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md transition-all"
                  >
                    {/* Unit Accordion Bar */}
                    <div
                      onClick={() => toggleUnit(unit.id)}
                      className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-black text-xs text-indigo-300 font-mono">
                          {unit.unitNumber.replace('Unit ', '')}
                        </div>
                        <div>
                          <div className="text-xs text-indigo-400 font-mono font-semibold">{unit.unitNumber}</div>
                          <h2 className="font-bold text-base sm:text-lg text-white">{unit.title}</h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {unit.isPlaceholder ? (
                          <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Awaiting Official Syllabus</span>
                          </span>
                        ) : (
                          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isUnitComplete ? 'text-emerald-400' : 'text-slate-600'}`} />
                            <span>{completedInUnit} / {totalInUnit} Lessons</span>
                          </div>
                        )}

                        <div className="p-1 rounded-lg text-slate-400 hover:text-white">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Unit Content */}
                    {isExpanded && (
                      <div className="p-5 pt-0 border-t border-slate-800 space-y-5">
                        {unit.isPlaceholder ? (
                          <div className="mt-3 p-5 rounded-2xl bg-amber-950/20 border border-amber-900/50 text-amber-200 text-xs sm:text-sm space-y-2">
                            <div className="flex items-center gap-2 font-bold text-amber-300 text-base">
                              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                              <span>Unit V — Awaiting Official Syllabus</span>
                            </div>
                            <p className="leading-relaxed">
                              {unit.placeholderMessage || "The official Unit V syllabus has not yet been provided. This unit will be populated when the student uploads the remaining syllabus."}
                            </p>
                            <div className="text-[11px] text-slate-400 pt-1">
                              Note: This placeholder is excluded from completed unit calculations and will be seamlessly updated once university course guidelines are supplied.
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs text-slate-300 leading-relaxed mt-3">{unit.description}</p>

                            {/* Covered Topics in University Syllabus */}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Official Topics Covered in this Unit:
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {unit.topics.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 rounded-lg bg-slate-950 text-[11px] text-slate-300 border border-slate-800"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Lesson Roadmap List */}
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                                Structured 12-Step Lessons:
                              </div>
                              <div className="space-y-2">
                                {unit.lessons.map((lesson) => {
                                  const isDone = completedLessons.includes(lesson.id);
                                  return (
                                    <div
                                      key={lesson.id}
                                      onClick={() => onSelectLesson(unit.id, lesson.id)}
                                      className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className={`w-2.5 h-2.5 rounded-full ${isDone ? 'bg-emerald-400 shadow-sm shadow-emerald-400' : 'bg-slate-700'}`} />
                                        <div>
                                          <div className="font-semibold text-xs sm:text-sm text-white group-hover:text-indigo-300 transition-colors">
                                            {lesson.title}
                                          </div>
                                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.durationMinutes} min</span>
                                            <span>•</span>
                                            <span className="text-indigo-400">{lesson.difficulty}</span>
                                            <span>•</span>
                                            <span>{lesson.practiceQuestions.length} Practice + Quiz</span>
                                          </div>
                                        </div>
                                      </div>

                                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Direct Jump to Unit Revision */}
                            <div className="pt-2 flex items-center justify-end gap-2">
                              <button
                                onClick={() => onSelectRevision(unit.id)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 font-semibold text-xs transition-colors border border-slate-700"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                <span>Open {unit.unitNumber} Flash Revision</span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Examination Pattern */}
      {activeTab === 'exam-pattern' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-white mb-2">University Examination Pattern & Marks Weightage</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard B.Tech 1st Year semester exam format for {subject.title}. 
              Total 100 Marks (70 External End-Sem + 30 Internal Assessments).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs text-indigo-400 font-bold uppercase">Part A: Compulsory Short Questions</div>
              <div className="font-mono text-2xl font-black text-white mt-1">20 Marks</div>
              <p className="text-xs text-slate-400 mt-2">
                10 questions × 2 marks each covering basic definitions, Rayleigh criterion, Stokes shift, KCL/KVL statements, and pointer syntax.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs text-amber-400 font-bold uppercase">Part B: Long Derivations & Numericals</div>
              <div className="font-mono text-2xl font-black text-white mt-1">50 Marks</div>
              <p className="text-xs text-slate-400 mt-2">
                5 units × 10 marks with internal choice. Derivations of Newton's rings diameter, Maxwell's curl equations, RLC resonance, and C sorting programs.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs text-emerald-400 font-bold uppercase">Continuous Internal Assessment</div>
              <div className="font-mono text-2xl font-black text-white mt-1">30 Marks</div>
              <p className="text-xs text-slate-400 mt-2">
                Mid-term exams (20 marks) + assignments, laboratory performance, viva voce, and attendance (10 marks).
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onSelectExamPrep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Practice Subject Question Bank</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Revision Material */}
      {activeTab === 'revision-hub' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white mb-2">Subject Revision & Formula Quick Cards</h2>
          <p className="text-xs text-slate-400">
            Select any unit to jump directly into interactive flip flashcards, key formulas tables, differences sheets, and mind maps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {subject.units.map((unit) => (
              <button
                key={unit.id}
                onClick={() => onSelectRevision(unit.id)}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500 text-left transition-all group"
              >
                <div className="text-xs font-mono text-indigo-400 font-semibold">{unit.unitNumber}</div>
                <div className="font-bold text-sm text-white group-hover:text-indigo-300 mt-1">{unit.title}</div>
                <div className="text-[11px] text-slate-400 mt-2">Flashcards, Formulas, Mindmap →</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
