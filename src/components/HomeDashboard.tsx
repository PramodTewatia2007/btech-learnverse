import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  FlaskConical, 
  Award, 
  Clock, 
  ArrowRight, 
  Search, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Bot,
  RotateCcw
} from 'lucide-react';
import { Subject, UserProgress } from '../types';
import { SubjectCard } from './SubjectCard';

interface HomeDashboardProps {
  subjects: Subject[];
  userProgress: UserProgress;
  onSelectSubject: (subjectId: string, view?: 'syllabus' | 'lessons' | 'lab' | 'revision' | 'exam') => void;
  onResumeLearning: () => void;
  onOpenAITutor: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  subjects,
  userProgress,
  onSelectSubject,
  onResumeLearning,
  onOpenAITutor
}) => {
  const [filter, setFilter] = useState<'all' | 'theory' | 'lab' | 'official'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSubjects = subjects.filter((s) => {
    // Search query filter
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === 'theory') return s.category === 'Theory';
    if (filter === 'lab') return s.category === 'Laboratory';
    if (filter === 'official') return s.isOfficial === true;
    return true;
  });

  // Calculate overall stats
  const totalCompletedLessons = userProgress.completedLessons.length;
  const totalCompletedLabs = userProgress.completedExperiments.length;
  const totalBookmarks = userProgress.bookmarks.length;

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Master Your Engineering Degree From Zero</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Learn Everything From Zero. <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Visual. Step-by-Step. Patient.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Designed for B.Tech students who want deep conceptual clarity, not just rote memorization. 
            Explore 11 independent subjects with interactive 3D simulations, real-world analogies, virtual labs, 
            multilingual explanations (English, Hinglish, Hindi), and university examination preparation.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectSubject('applied-physics', 'lessons')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Explore Applied Physics</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAITutor}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Ask Personal AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/60">
            <div className="text-xs text-slate-400">Total Subjects</div>
            <div className="text-xl sm:text-2xl font-black text-white mt-1">11 Courses</div>
            <div className="text-[11px] text-indigo-400 mt-0.5">6 Theory + 5 Labs</div>
          </div>
          <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/60">
            <div className="text-xs text-slate-400">Completed Lessons</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">{totalCompletedLessons} Topics</div>
            <div className="text-[11px] text-slate-400 mt-0.5">12-Step Pedagogy</div>
          </div>
          <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/60">
            <div className="text-xs text-slate-400">Virtual Lab Experiments</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-400 mt-1">{totalCompletedLabs} Completed</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Interactive Rigs & Vivas</div>
          </div>
          <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/60">
            <div className="text-xs text-slate-400">Language Modes</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400 mt-1">3 Modes</div>
            <div className="text-[11px] text-slate-400 mt-0.5">English, Hinglish, Hindi</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-2xl border border-slate-800 text-xs sm:text-sm w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
              filter === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Subjects (11)
          </button>
          <button
            onClick={() => setFilter('theory')}
            className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
              filter === 'theory' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Theory (6)
          </button>
          <button
            onClick={() => setFilter('lab')}
            className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
              filter === 'lab' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Laboratories (5)
          </button>
          <button
            onClick={() => setFilter('official')}
            className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
              filter === 'official' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Official Syllabus
          </button>
        </div>

        {/* Local Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search subject by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 text-xs sm:text-sm text-slate-200 placeholder-slate-500 pl-9 pr-4 py-2 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Grid of 11 Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((subject) => {
          const isLab = subject.category === 'Laboratory';
          const totalUnitsOrExp = isLab 
            ? (subject.experiments ? subject.experiments.length : 12)
            : subject.units.filter(u => !u.isPlaceholder).reduce((acc, u) => acc + u.lessons.length, 0);

          const completed = isLab
            ? (subject.experiments ? subject.experiments.filter(e => userProgress.completedExperiments.includes(e.id)).length : 0)
            : subject.units.filter(u => !u.isPlaceholder).reduce((acc, u) => acc + u.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0);

          const progressPercent = totalUnitsOrExp > 0 ? Math.round((completed / totalUnitsOrExp) * 100) : 0;

          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              progressPercentage={progressPercent}
              completedCount={completed}
              totalCount={totalUnitsOrExp}
              onSelectSubject={onSelectSubject}
            />
          );
        })}
      </div>
    </div>
  );
};
