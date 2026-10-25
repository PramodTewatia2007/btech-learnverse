import React, { useState, useEffect } from 'react';
import { 
  Language, 
  Subject, 
  Unit, 
  Lesson, 
  LabExperiment, 
  UserProgress 
} from './types';
import { ALL_SUBJECTS, getSubjectById, getUnitById, getLessonById, getExperimentById } from './data/index';

// Components
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { SyllabusView } from './components/SyllabusView';
import { LessonView } from './components/LessonView';
import { VirtualLabView } from './components/VirtualLabView';
import { RevisionView } from './components/RevisionView';
import { ExamPrepView } from './components/ExamPrepView';
import { ProgressView } from './components/ProgressView';
import { AITutorModal } from './components/AITutorModal';
import { SearchModal } from './components/SearchModal';

const LOCAL_STORAGE_KEY = 'btech_learnverse_progress_v1';

export function App() {
  // Navigation & View state
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(null);
  const [activeUnitId, setActiveUnitId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeExperimentId, setActiveExperimentId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'dashboard' | 'syllabus' | 'lesson' | 'lab' | 'revision' | 'exam' | 'progress'>('dashboard');

  // Accessibility & Preferences state
  const [language, setLanguage] = useState<Language>('en');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('sm');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isAudioReading, setIsAudioReading] = useState<boolean>(false);

  // Modals state
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // User progress state
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {
      completedLessons: ['phy-u1-l1', 'c-u1-l1'],
      completedExperiments: ['phy-lab-exp-1'],
      quizScores: {},
      bookmarks: ['phy-u1-l2'],
      notes: {
        'phy-u1-l1': 'Remember: Reflection at denser medium introduces a phase shift of π (path diff λ/2).'
      },
      recentSubjects: ['applied-physics', 'programming-c', 'beee']
    };
  });

  // Persist progress to localStorage & optionally sync with server
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      // ignore
    }
  }, [userProgress]);

  // Global Ctrl+K shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers for Progress Updates
  const handleCompleteLesson = (lessonId: string, subjectId?: string) => {
    setUserProgress(prev => {
      const updatedLessons = prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId];
      
      const updatedRecent = subjectId && !prev.recentSubjects.includes(subjectId)
        ? [subjectId, ...prev.recentSubjects.slice(0, 4)]
        : prev.recentSubjects;

      return {
        ...prev,
        completedLessons: updatedLessons,
        recentSubjects: updatedRecent
      };
    });

    // Notify backend if online
    if (subjectId) {
      fetch('http://127.0.0.1:5000/api/progress/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, subjectId })
      }).catch(() => {});
    }
  };

  const handleCompleteExperiment = (expId: string) => {
    setUserProgress(prev => {
      if (prev.completedExperiments.includes(expId)) return prev;
      return {
        ...prev,
        completedExperiments: [...prev.completedExperiments, expId]
      };
    });

    fetch('http://127.0.0.1:5000/api/progress/complete-experiment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ experimentId: expId })
    }).catch(() => {});
  };

  const handleToggleBookmark = (id: string) => {
    setUserProgress(prev => {
      const exists = prev.bookmarks.includes(id);
      const updated = exists ? prev.bookmarks.filter(b => b !== id) : [...prev.bookmarks, id];
      return { ...prev, bookmarks: updated };
    });
  };

  const handleSaveNote = (key: string, note: string) => {
    setUserProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [key]: note }
    }));

    fetch('http://127.0.0.1:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, content: note })
    }).catch(() => {});
  };

  // Navigation callbacks
  const handleSelectSubject = (subjectId: string, view: 'syllabus' | 'lessons' | 'lab' | 'revision' | 'exam' = 'syllabus') => {
    const subject = getSubjectById(subjectId);
    if (!subject) return;

    setActiveSubjectId(subjectId);

    if (view === 'lab' && subject.experiments && subject.experiments.length > 0) {
      setActiveExperimentId(subject.experiments[0].id);
      setActiveView('lab');
    } else if (view === 'lessons' && subject.units.length > 0 && subject.units[0].lessons.length > 0) {
      setActiveUnitId(subject.units[0].id);
      setActiveLessonId(subject.units[0].lessons[0].id);
      setActiveView('lesson');
    } else if (view === 'revision' && subject.units.length > 0) {
      setActiveUnitId(subject.units[0].id);
      setActiveView('revision');
    } else if (view === 'exam') {
      setActiveView('exam');
    } else {
      setActiveView('syllabus');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUnit = (unitId: string) => {
    setActiveUnitId(unitId);
    setActiveView('syllabus');
  };

  const handleSelectLesson = (unitId: string, lessonId: string) => {
    setActiveUnitId(unitId);
    setActiveLessonId(lessonId);
    setActiveView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExperiment = (expId: string) => {
    setActiveExperimentId(expId);
    setActiveView('lab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRevision = (unitId: string) => {
    setActiveUnitId(unitId);
    setActiveView('revision');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExamPrep = () => {
    setActiveView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveSubjectId(null);
    setActiveUnitId(null);
    setActiveLessonId(null);
    setActiveExperimentId(null);
    setActiveView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchResultClick = (sId: string, uId?: string, lId?: string, expId?: string) => {
    setActiveSubjectId(sId);
    if (expId) {
      setActiveExperimentId(expId);
      setActiveView('lab');
    } else if (uId && lId) {
      setActiveUnitId(uId);
      setActiveLessonId(lId);
      setActiveView('lesson');
    } else if (uId) {
      setActiveUnitId(uId);
      setActiveView('syllabus');
    } else {
      setActiveView('syllabus');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Current entity lookups
  const currentSubject = activeSubjectId ? getSubjectById(activeSubjectId) : null;
  const currentUnit = activeSubjectId && activeUnitId ? getUnitById(activeSubjectId, activeUnitId) : null;
  const currentLesson = activeSubjectId && activeUnitId && activeLessonId ? getLessonById(activeSubjectId, activeUnitId, activeLessonId) : null;
  const currentExperiment = activeSubjectId && activeExperimentId ? getExperimentById(activeSubjectId, activeExperimentId) : null;

  // Next / Prev Lesson Lookups
  let prevLesson: Lesson | null = null;
  let nextLesson: Lesson | null = null;

  if (currentUnit && currentLesson) {
    const curIdx = currentUnit.lessons.findIndex(l => l.id === currentLesson.id);
    if (curIdx > 0) prevLesson = currentUnit.lessons[curIdx - 1];
    if (curIdx < currentUnit.lessons.length - 1) nextLesson = currentUnit.lessons[curIdx + 1];
  }

  // Build Dynamic Breadcrumbs
  const breadcrumbs: { label: string; onClick?: () => void; active?: boolean }[] = [];

  if (currentSubject) {
    breadcrumbs.push({
      label: currentSubject.title,
      onClick: () => {
        setActiveView('syllabus');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      active: activeView === 'syllabus'
    });

    if (activeView === 'lesson' && currentUnit && currentLesson) {
      breadcrumbs.push({
        label: currentUnit.unitNumber,
        onClick: () => {
          setActiveView('syllabus');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      breadcrumbs.push({
        label: currentLesson.title,
        active: true
      });
    } else if (activeView === 'lab' && currentExperiment) {
      breadcrumbs.push({
        label: `Exp ${currentExperiment.expNumber}: ${currentExperiment.title}`,
        active: true
      });
    } else if (activeView === 'revision' && currentUnit) {
      breadcrumbs.push({
        label: `${currentUnit.unitNumber} Revision`,
        active: true
      });
    } else if (activeView === 'exam') {
      breadcrumbs.push({
        label: 'Question Bank',
        active: true
      });
    }
  } else if (activeView === 'progress') {
    breadcrumbs.push({
      label: 'Academic Progress & Notes',
      active: true
    });
  }

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white`}>
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        isAudioReading={isAudioReading}
        onToggleAudioReading={() => setIsAudioReading(!isAudioReading)}
        breadcrumbs={breadcrumbs}
        onOpenAITutor={() => setIsAITutorOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateHome={handleNavigateHome}
        onOpenProgress={() => setActiveView('progress')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 sm:pt-8">
        {/* VIEW 1: Home Dashboard */}
        {activeView === 'dashboard' && (
          <HomeDashboard
            subjects={ALL_SUBJECTS}
            userProgress={userProgress}
            onSelectSubject={handleSelectSubject}
            onResumeLearning={() => {
              if (userProgress.recentSubjects.length > 0) {
                handleSelectSubject(userProgress.recentSubjects[0], 'lessons');
              } else {
                handleSelectSubject('applied-physics', 'lessons');
              }
            }}
            onOpenAITutor={() => setIsAITutorOpen(true)}
          />
        )}

        {/* VIEW 2: Syllabus Breakdown */}
        {activeView === 'syllabus' && currentSubject && (
          <SyllabusView
            subject={currentSubject}
            completedLessons={userProgress.completedLessons}
            completedExperiments={userProgress.completedExperiments}
            onSelectUnit={handleSelectUnit}
            onSelectLesson={handleSelectLesson}
            onSelectExperiment={handleSelectExperiment}
            onSelectRevision={handleSelectRevision}
            onSelectExamPrep={handleSelectExamPrep}
          />
        )}

        {/* VIEW 3: 12-Step Lesson Engine */}
        {activeView === 'lesson' && currentSubject && currentUnit && currentLesson && (
          <LessonView
            lesson={currentLesson}
            subjectTitle={currentSubject.title}
            unitNumber={currentUnit.unitNumber}
            language={language}
            onLanguageChange={setLanguage}
            fontSize={fontSize}
            isBookmarked={userProgress.bookmarks.includes(currentLesson.id)}
            onToggleBookmark={() => handleToggleBookmark(currentLesson.id)}
            savedNote={userProgress.notes[currentLesson.id] || ''}
            onSaveNote={(note) => handleSaveNote(currentLesson.id, note)}
            onCompleteLesson={() => handleCompleteLesson(currentLesson.id, currentSubject.id)}
            onNextLesson={nextLesson ? () => handleSelectLesson(currentUnit.id, nextLesson!.id) : undefined}
            onPrevLesson={prevLesson ? () => handleSelectLesson(currentUnit.id, prevLesson!.id) : undefined}
            onBackToUnit={() => setActiveView('syllabus')}
          />
        )}

        {/* VIEW 4: Virtual Laboratory Experiment */}
        {activeView === 'lab' && currentSubject && currentExperiment && (
          <VirtualLabView
            experiment={currentExperiment}
            subjectTitle={currentSubject.title}
            language={language}
            onBackToSyllabus={() => setActiveView('syllabus')}
            onCompleteExperiment={() => handleCompleteExperiment(currentExperiment.id)}
          />
        )}

        {/* VIEW 5: Unit Revision (5-min, 15-min, 30-min) */}
        {activeView === 'revision' && currentSubject && currentUnit && (
          <RevisionView
            revision={currentUnit.revision}
            unitNumber={currentUnit.unitNumber}
            unitTitle={currentUnit.title}
            subjectTitle={currentSubject.title}
            language={language}
            onBackToUnit={() => setActiveView('syllabus')}
          />
        )}

        {/* VIEW 6: University Exam Preparation */}
        {activeView === 'exam' && currentSubject && (
          <ExamPrepView
            questions={currentSubject.examQuestions}
            subjectTitle={currentSubject.title}
            onBackToSyllabus={() => setActiveView('syllabus')}
          />
        )}

        {/* VIEW 7: Student Progress & Notebook */}
        {activeView === 'progress' && (
          <ProgressView
            userProgress={userProgress}
            subjects={ALL_SUBJECTS}
            onBackToDashboard={handleNavigateHome}
            onNavigateToSubject={(sId) => handleSelectSubject(sId, 'syllabus')}
          />
        )}
      </main>

      {/* Global AI Tutor Modal */}
      <AITutorModal
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        currentContext={{
          subjectId: activeSubjectId || undefined,
          unitId: activeUnitId || undefined,
          lessonId: activeLessonId || undefined,
          topic: currentLesson ? currentLesson.title : currentSubject ? currentSubject.title : undefined
        }}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={ALL_SUBJECTS}
        onSelectResult={handleSearchResultClick}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">BTech LearnVerse</span>
            <span>•</span>
            <span>Learn Everything From Zero</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Official University Syllabus (B.Tech 1st Year)</span>
            <span>•</span>
            <span>All 11 Subjects Covered From Absolute Zero</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
