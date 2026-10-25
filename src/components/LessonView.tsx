import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Lesson, 
  Language, 
  PracticeQuestion, 
  QuizQuestion 
} from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  AlertTriangle, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Clock, 
  Check, 
  Save, 
  Share2,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  RotateCcw
} from 'lucide-react';

// Import simulations
import { Optics3DSimulation } from './simulations/Optics3DSimulation';
import { LaserFiber3DSimulation } from './simulations/LaserFiber3DSimulation';
import { CircuitSimulator } from './simulations/CircuitSimulator';
import { QuantumSimulation } from './simulations/QuantumSimulation';
import { TransformerMotor3DSimulation } from './simulations/TransformerMotor3DSimulation';
import { CCodePlayground } from './simulations/CCodePlayground';
import { MathGrapher } from './simulations/MathGrapher';
import { EnvironmentalSimulator } from './simulations/EnvironmentalSimulator';
import { EnglishAudioTrainer } from './simulations/EnglishAudioTrainer';
import { CommunicationProcessVisualizer } from './simulations/CommunicationProcessVisualizer';
import { DisruptiveTechVisualizer } from './simulations/DisruptiveTechVisualizer';
import { IndianWaterConservationVisualizer } from './simulations/IndianWaterConservationVisualizer';

interface LessonViewProps {
  lesson: Lesson;
  subjectTitle: string;
  unitNumber: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  fontSize: 'sm' | 'md' | 'lg';
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  savedNote: string;
  onSaveNote: (note: string) => void;
  onCompleteLesson: () => void;
  onNextLesson?: () => void;
  onPrevLesson?: () => void;
  onBackToUnit: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  subjectTitle,
  unitNumber,
  language,
  onLanguageChange,
  fontSize,
  isBookmarked,
  onToggleBookmark,
  savedNote,
  onSaveNote,
  onCompleteLesson,
  onNextLesson,
  onPrevLesson,
  onBackToUnit
}) => {
  // Practice Question Interactive State
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, number>>({});
  const [showPracticeHints, setShowPracticeHints] = useState<Record<string, boolean>>({});
  const [activeDifficulty, setActiveDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Note-taking state
  const [noteContent, setNoteContent] = useState<string>(savedNote || '');
  const [isNoteSaved, setIsNoteSaved] = useState<boolean>(false);

  // Audio reading state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    setNoteContent(savedNote || '');
    setPracticeAnswers({});
    setShowPracticeHints({});
    setQuizAnswers({});
    setQuizSubmitted(false);
  }, [lesson.id, savedNote]);

  const handleSelectPracticeOption = (questionId: string, optionIndex: number) => {
    setPracticeAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSelectQuizOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    lesson.quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === lesson.quiz.length && score > 0) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onCompleteLesson();
    }
  };

  const handleSaveUserNote = () => {
    onSaveNote(noteContent);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const toggleSpeakLesson = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this device.');
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${lesson.title}. Question: ${lesson.realLifeQuestion[language]}. ${lesson.simpleExplanation[language]}. Analogy: ${lesson.familiarAnalogy.analogy[language]}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.9;
      utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Font size classes
  const fontClasses = fontSize === 'lg' ? 'text-base sm:text-lg leading-relaxed' : fontSize === 'md' ? 'text-sm sm:text-base leading-relaxed' : 'text-xs sm:text-sm leading-relaxed';

  // Render Visualizer based on visualType
  const renderVisualizer = () => {
    switch (lesson.visualType) {
      case '3d-optics':
        return <Optics3DSimulation />;
      case '3d-laser':
        return <LaserFiber3DSimulation />;
      case 'circuit':
        return <CircuitSimulator />;
      case 'quantum':
        return <QuantumSimulation />;
      case '3d-transformer':
        return <TransformerMotor3DSimulation />;
      case 'c-code':
        return <CCodePlayground title={lesson.title} />;
      case 'math-graph':
        return <MathGrapher />;
      case 'environmental':
        return <EnvironmentalSimulator />;
      case 'english-trainer':
        return <EnglishAudioTrainer />;
      case 'communication-process':
        return <CommunicationProcessVisualizer />;
      case 'disruptive-tech':
        return <DisruptiveTechVisualizer />;
      case 'atmosphere-layers':
        return <IndianWaterConservationVisualizer />;
      default:
        return <Optics3DSimulation />;
    }
  };

  const filteredPractice = activeDifficulty === 'All'
    ? lesson.practiceQuestions
    : lesson.practiceQuestions.filter(q => q.level === activeDifficulty);

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-24">
      {/* Top Header & Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
            <button onClick={onBackToUnit} className="hover:underline flex items-center gap-1 text-slate-400 hover:text-white">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{subjectTitle}</span>
            </button>
            <span>•</span>
            <span className="font-mono">{unitNumber}</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800 text-[10px] text-indigo-300">
              {lesson.difficulty}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-white">{lesson.title}</h1>
        </div>

        {/* Toolbar: Language, Audio, Bookmark */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {(['en', 'hinglish', 'hi'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2.5 py-1 rounded-lg transition-all font-semibold ${
                  language === lang ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'hinglish' ? 'Hinglish' : 'हिंदी'}
              </button>
            ))}
          </div>

          {/* Audio TTS */}
          <button
            onClick={toggleSpeakLesson}
            className={`p-2 rounded-xl border transition-colors ${
              isSpeaking ? 'bg-indigo-600 border-indigo-500 text-white animate-pulse' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Read Lesson Aloud"
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Bookmark */}
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-xl border transition-colors ${
              isBookmarked ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Bookmark Lesson"
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          THE 12-STEP TEACHING METHODOLOGY
          ========================================================================= */}

      {/* Step 1: Start with a real-life question (Curiosity Hook) */}
      <section className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-800/50 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Step 1 • The Real-Life Question (Curiosity Trigger)</span>
        </div>
        <div className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
          "{lesson.realLifeQuestion[language]}"
        </div>
      </section>

      {/* Step 2: Explain in simple language */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <Lightbulb className="w-4 h-4 text-emerald-400" />
          <span>Step 2 • Plain Language Explanation</span>
        </div>
        <p className={`text-slate-200 ${fontClasses} leading-relaxed`}>
          {lesson.simpleExplanation[language]}
        </p>
      </section>

      {/* Step 3: Use a familiar analogy & point out limitations */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <BrainCircuit className="w-4 h-4 text-amber-400" />
          <span>Step 3 • Familiar Everyday Analogy</span>
        </div>
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/50 text-amber-100/90 text-sm sm:text-base leading-relaxed">
          {lesson.familiarAnalogy.analogy[language]}
        </div>
        <div className="text-xs text-slate-400 flex items-start gap-2 pt-1">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-300">Where this analogy breaks down: </strong>
            {lesson.familiarAnalogy.limitations[language]}
          </span>
        </div>
      </section>

      {/* Step 4: Technical terminology */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Step 4 • Formal Technical Terminology</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lesson.terminology.map((t, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="font-bold text-sm text-cyan-300 font-mono mb-1">{t.term}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{t.definition[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 5 & 6: Visual demonstration & Student Experimentation */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Steps 5 & 6 • Interactive Simulation & Experimentation</span>
          </div>
          <span className="text-xs text-slate-400">Manipulate controls to observe real-time response</span>
        </div>
        {renderVisualizer()}
      </section>

      {/* Step 7: Explain the underlying principle */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Step 7 • Underlying Scientific / Engineering Principle</span>
        </div>
        <p className={`text-slate-200 ${fontClasses} leading-relaxed`}>
          {lesson.underlyingPrinciple[language]}
        </p>
      </section>

      {/* Step 8: Explain formulas or logic */}
      {lesson.formulaLogic && (
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="font-mono text-sm font-bold">∑</span >
            <span>Step 8 • Mathematical Formula & Unit Breakdown</span>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center font-mono font-bold text-lg sm:text-xl text-indigo-300">
            {lesson.formulaLogic.formula}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lesson.formulaLogic.description[language]}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300 border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase font-bold">
                <tr>
                  <th className="p-3">Symbol</th>
                  <th className="p-3">Meaning</th>
                  <th className="p-3">Standard SI Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {lesson.formulaLogic.symbols.map((sym, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="p-3 font-mono font-bold text-indigo-400">{sym.symbol}</td>
                    <td className="p-3">{sym.meaning}</td>
                    <td className="p-3 font-mono text-slate-400">{sym.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Step 9: Provide a worked example */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Step 9 • Step-by-Step Worked University Example</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-semibold text-sm sm:text-base">
          {lesson.workedExample.problem[language]}
        </div>

        <div className="space-y-3">
          {lesson.workedExample.steps.map((st) => (
            <div key={st.stepNumber} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-1.5">
              <div className="font-bold text-xs text-indigo-400 font-mono">
                Step {st.stepNumber}: {st.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-300">{st.explanation[language]}</p>
              {st.math && (
                <div className="bg-slate-900 p-2 rounded-lg font-mono text-xs text-emerald-300 inline-block mt-1">
                  {st.math}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/60 flex items-center justify-between">
          <span className="text-xs text-emerald-300 font-semibold uppercase">Final Computed Answer:</span>
          <span className="font-mono font-bold text-base text-emerald-400">{lesson.workedExample.finalAnswer}</span>
        </div>
      </section>

      {/* Step 10: Identify common mistakes */}
      <section className="bg-rose-950/20 border border-rose-900/50 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Step 10 • Common Exam Mistakes & How to Avoid Them</span>
        </div>

        <div className="space-y-3">
          {lesson.commonMistakes.map((m, idx) => (
            <div key={idx} className="bg-slate-900/90 p-4 rounded-2xl border border-rose-900/40 space-y-2">
              <div className="flex items-start gap-2 text-xs text-rose-300">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Frequent Misunderstanding: </strong>
                  {m.misconception[language]}
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-emerald-300 pt-1 border-t border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Correct Understanding: </strong>
                  {m.correction[language]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step 11: Test understanding with adaptive checkpoints */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Step 11 • Adaptive Practice Checkpoints</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setActiveDifficulty(lvl)}
                className={`px-2.5 py-1 rounded-lg transition-all font-medium ${
                  activeDifficulty === lvl ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredPractice.map((pq, qIdx) => {
            const selectedOpt = practiceAnswers[pq.id];
            const correctOpt = pq.correctAnswer !== undefined ? pq.correctAnswer : pq.correctIndex;
            const hasAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === correctOpt;
            const showHint = showPracticeHints[pq.id];

            return (
              <div key={pq.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-slate-400">Practice Q{qIdx + 1}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900 border border-slate-800 text-indigo-400">
                    {pq.level}
                  </span>
                </div>

                <div className="font-semibold text-sm text-white">{pq.question[language]}</div>

                <div className="space-y-2 pt-1">
                  {pq.options.map((opt, oIdx) => {
                    let btnStyle = 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200';
                    if (hasAnswered) {
                      if (oIdx === correctOpt) {
                        btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold';
                      } else if (oIdx === selectedOpt) {
                        btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectPracticeOption(pq.id, oIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {hasAnswered && oIdx === correctOpt && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                        {hasAnswered && oIdx === selectedOpt && oIdx !== correctOpt && <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation or Hint */}
                {hasAnswered ? (
                  <div className={`p-3 rounded-xl text-xs ${isCorrect ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-900' : 'bg-rose-950/40 text-rose-300 border border-rose-900'}`}>
                    <div className="font-bold mb-0.5">{isCorrect ? 'Correct!' : 'Incorrect.'}</div>
                    <div>{pq.explanation[language]}</div>
                  </div>
                ) : (
                  <div className="pt-1">
                    <button
                      onClick={() => setShowPracticeHints(prev => ({ ...prev, [pq.id]: !prev[pq.id] }))}
                      className="text-xs text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                    </button>
                    {showHint && (
                      <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-200">
                        {pq.hint[language]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Step 12: Summarize and revise & Self-Test Quiz */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>Step 12 • Lesson Summary & Mastery Self-Test</span>
        </div>

        {/* Bulleted Summary */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Takeaways:</div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            {lesson.summary[language].map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Self-Test Quiz */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-white">Lesson Exit Quiz ({lesson.quiz.length} Questions)</h3>
            {quizSubmitted && (
              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                Score: {quizScore} / {lesson.quiz.length} ({Math.round((quizScore / lesson.quiz.length) * 100)}%)
              </span>
            )}
          </div>

          <div className="space-y-4">
            {lesson.quiz.map((q, qIdx) => {
              const selectedOpt = quizAnswers[q.id];
              const isCorrect = selectedOpt === q.correctIndex;
              return (
                <div key={q.id} className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400">Quiz Q{qIdx + 1}</div>
                  <div className="font-semibold text-sm text-white">{q.question[language]}</div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      let style = 'bg-slate-900 border-slate-800 text-slate-300';
                      if (quizSubmitted) {
                        if (oIdx === q.correctIndex) style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-semibold';
                        else if (oIdx === selectedOpt) style = 'bg-rose-950 border-rose-500 text-rose-200';
                      } else if (selectedOpt === oIdx) {
                        style = 'bg-indigo-600/30 border-indigo-500 text-indigo-200 font-medium';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuizOption(q.id, oIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && oIdx === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <strong>Explanation: </strong> {q.explanation[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handleSubmitQuiz}
              disabled={quizSubmitted || Object.keys(quizAnswers).length < lesson.quiz.length}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md ${
                quizSubmitted || Object.keys(quizAnswers).length < lesson.quiz.length
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {quizSubmitted ? 'Quiz Evaluated' : 'Submit Quiz Answers'}
            </button>

            {quizSubmitted && (
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Personal Student Note-Taking Box */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Personal Study Notes for This Lesson
          </div>
          <button
            onClick={handleSaveUserNote}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-all"
          >
            {isNoteSaved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Save className="w-3.5 h-3.5" />}
            <span>{isNoteSaved ? 'Saved!' : 'Save Notes'}</span>
          </button>
        </div>
        <textarea
          rows={3}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Jot down formulas, exam tricks, or personal doubts to remember..."
          className="w-full bg-slate-950 text-xs sm:text-sm text-slate-200 placeholder-slate-600 p-3.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </section>

      {/* Navigation Buttons: Previous & Next Lesson */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        {onPrevLesson ? (
          <button
            onClick={onPrevLesson}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Lesson</span>
          </button>
        ) : <div />}

        {onNextLesson ? (
          <button
            onClick={onNextLesson}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-indigo-600/25"
          >
            <span>Next Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onCompleteLesson}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-600/25"
          >
            <span>Complete Unit</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
