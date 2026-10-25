import React from 'react';
import { UserProgress, Subject } from '../types';
import { 
  Award, 
  CheckCircle2, 
  Bookmark, 
  FileText, 
  ArrowLeft, 
  Layers, 
  BookOpen, 
  Clock, 
  Trash2,
  ExternalLink
} from 'lucide-react';

interface ProgressViewProps {
  userProgress: UserProgress;
  subjects: Subject[];
  onBackToDashboard: () => void;
  onNavigateToSubject: (subjectId: string) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  userProgress,
  subjects,
  onBackToDashboard,
  onNavigateToSubject
}) => {
  const totalLessonsInCurriculum = subjects.reduce(
    (acc, s) => acc + (s.units ? s.units.filter(u => !u.isPlaceholder).reduce((uAcc, u) => uAcc + u.lessons.length, 0) : 0), 
    0
  );

  const completedLessonsCount = userProgress.completedLessons.length;
  const completedExperimentsCount = userProgress.completedExperiments.length;
  const overallPercentage = totalLessonsInCurriculum > 0 
    ? Math.round((completedLessonsCount / totalLessonsInCurriculum) * 100) 
    : 0;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </button>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Student Academic Dashboard & Progress</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Track your course completions, quiz mastery, bookmarked topics, and personal revision notes.
          </p>
        </div>

        {/* Global Progress Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Overall Progress</div>
            <div className="text-2xl font-black text-indigo-400 mt-1">{overallPercentage}%</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Across all 11 subjects</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Completed Lessons</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">{completedLessonsCount}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Out of {totalLessonsInCurriculum} lessons</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Completed Labs</div>
            <div className="text-2xl font-black text-cyan-400 mt-1">{completedExperimentsCount}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Virtual experiments</div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Bookmarks Saved</div>
            <div className="text-2xl font-black text-amber-400 mt-1">{userProgress.bookmarks.length}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Quick access items</div>
          </div>
        </div>
      </div>

      {/* Subject-Wise Progress Meters */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <h2 className="text-lg font-bold text-white">Subject-Wise Mastery Breakdown</h2>

        <div className="space-y-3">
          {subjects.map(s => {
            const isLab = s.category === 'Laboratory';
            const totalItems = isLab 
              ? (s.experiments ? s.experiments.length : 12)
              : s.units.filter(u => !u.isPlaceholder).reduce((acc, u) => acc + u.lessons.length, 0);

            const completed = isLab
              ? (s.experiments ? s.experiments.filter(e => userProgress.completedExperiments.includes(e.id)).length : 0)
              : s.units.filter(u => !u.isPlaceholder).reduce((acc, u) => acc + u.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0);

            const percent = totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;

            return (
              <div
                key={s.id}
                onClick={() => onNavigateToSubject(s.id)}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 cursor-pointer transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                      {s.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {s.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-400">{percent}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(3, percent)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Saved Notes Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          <FileText className="w-4 h-4 text-indigo-400" />
          <span>My Personal Study Notes</span>
        </div>

        {Object.keys(userProgress.notes).length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(userProgress.notes).map(([key, content]) => (
              <div key={key} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="font-mono text-xs text-indigo-400 font-bold">{key}</div>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">{content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">
            You haven't saved any personal notes yet. Use the note box at the bottom of any lesson to take notes.
          </p>
        )}
      </div>
    </div>
  );
};
