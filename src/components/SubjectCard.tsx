import React from 'react';
import { 
  Atom, 
  FlaskConical, 
  Zap, 
  Wrench, 
  Code2, 
  Terminal, 
  Leaf, 
  Cpu, 
  BookOpen, 
  Headphones, 
  Sigma, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  progressPercentage: number;
  completedCount: number;
  totalCount: number;
  onSelectSubject: (subjectId: string, view?: 'syllabus' | 'lessons' | 'lab' | 'revision' | 'exam') => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  progressPercentage,
  completedCount,
  totalCount,
  onSelectSubject
}) => {
  const isLab = subject.category === 'Laboratory';

  // Dynamic Lucide icon lookup
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Atom': return <Atom className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Terminal': return <Terminal className="w-6 h-6" />;
      case 'Leaf': return <Leaf className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Headphones': return <Headphones className="w-6 h-6" />;
      case 'Sigma': return <Sigma className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="group relative bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-indigo-500/5">
      {/* Top Meta: Icon + Category Badge + Official/Provisional Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${subject.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
            {renderIcon(subject.icon)}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase ${
              isLab 
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
            }`}>
              {subject.category}
            </span>

            {subject.isOfficial ? (
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full" title="Matches official university syllabus">
                <ShieldCheck className="w-3 h-3" />
                <span>Official Syllabus</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full" title="Standard provisional curriculum">
                <AlertCircle className="w-3 h-3" />
                <span>Provisional Standard</span>
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
          {subject.title}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {subject.description}
        </p>

        {/* Units / Experiments Metric Badge */}
        <div className="flex items-center gap-3 text-xs text-slate-300 mb-4 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>{isLab ? `${subject.unitsCount} Experiments` : `${subject.unitsCount} Units`}</span>
          </div>
          <div className="h-3 w-px bg-slate-800" />
          <div className="flex items-center gap-1.5 text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{completedCount} / {totalCount} Completed</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 mb-5">
          <div className="flex justify-between text-[11px] font-medium text-slate-400">
            <span>Course Progress</span>
            <span className="font-mono text-indigo-300 font-semibold">{progressPercentage}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(4, progressPercentage)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons: View Syllabus & Start Learning */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
        <button
          onClick={() => onSelectSubject(subject.id, 'syllabus')}
          className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold transition-colors text-center"
        >
          Syllabus
        </button>

        <button
          onClick={() => onSelectSubject(subject.id, isLab ? 'lab' : 'lessons')}
          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-sm text-center"
        >
          <span>{isLab ? 'Enter Lab' : 'Start Lesson'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
