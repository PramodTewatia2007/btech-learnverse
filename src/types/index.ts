export type Language = 'en' | 'hinglish' | 'hi';

export type SubjectCategory = 'Theory' | 'Laboratory';

export interface Subject {
  id: string;
  title: string;
  category: SubjectCategory;
  description: string;
  icon: string;
  color: string;
  isOfficial: boolean;
  syllabusSource: string;
  unitsCount: number;
  units: Unit[];
  experiments?: LabExperiment[];
  examQuestions: ExamQuestion[];
}

export interface Unit {
  id: string;
  unitNumber: string; // e.g. "Unit I", "Unit II"
  title: string;
  description: string;
  topics: string[];
  lessons: Lesson[];
  revision: UnitRevision;
  isPlaceholder?: boolean;
  placeholderMessage?: string;
}

export interface PracticeQuestion {
  id: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  question: Record<Language, string>;
  options: string[];
  correctAnswer?: number;
  correctIndex?: number;
  explanation: Record<Language, string>;
  hint: Record<Language, string>;
}

export interface QuizQuestion {
  id: string;
  question: Record<Language, string>;
  options: string[];
  correctIndex: number;
  explanation: Record<Language, string>;
  hint: Record<Language, string>;
}

export interface Lesson {
  id: string;
  unitId: string;
  subjectId: string;
  title: string;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: string[];
  realLifeQuestion: Record<Language, string>;
  simpleExplanation: Record<Language, string>;
  technicalDefinition?: {
    formalStatement?: Record<Language, string>;
    keyTerms?: { term: string; definition: Record<Language, string> }[];
  } | Record<Language, string> | string;
  familiarAnalogy: {
    analogy: Record<Language, string>;
    limitations: Record<Language, string>;
  };
  terminology: {
    term: string;
    definition: Record<Language, string>;
  }[];
  visualType: 
    | '3d-optics' 
    | '3d-laser' 
    | 'quantum' 
    | 'em-induction' 
    | 'circuit' 
    | '3d-transformer' 
    | 'semiconductor' 
    | 'nanoscale' 
    | 'c-code' 
    | 'math-graph' 
    | 'environmental' 
    | 'english-trainer' 
    | 'communication-process'
    | 'disruptive-tech'
    | 'atmosphere-layers'
    | 'custom-canvas';
  visualData?: Record<string, any>;
  underlyingPrinciple: Record<Language, string>;
  formula?: any;
  formulaLogic?: {
    formula: string;
    description: Record<Language, string>;
    symbols: { symbol: string; meaning: string; unit: string }[];
  };
  workedExample: {
    problem: Record<Language, string>;
    given?: string[];
    toFind?: string;
    formulaUsed?: string;
    steps: {
      stepNumber: number;
      title: string;
      explanation: Record<Language, string>;
      math?: string;
    }[];
    finalAnswer: string;
  };
  commonMistakes: {
    misconception: Record<Language, string>;
    correction: Record<Language, string>;
  }[];
  practiceQuestions: PracticeQuestion[];
  summary: Record<Language, string[]>;
  quiz: QuizQuestion[];
  nextLessonId?: string;
}

export interface LabExperiment {
  id: string;
  expNumber: number;
  title: string;
  aim: string;
  learningObjectives: string[];
  apparatus: string[];
  theory: Record<Language, string>;
  equations: { formula: string; symbolDefs: string }[];
  diagramDescription: string;
  safetyPrecautions: string[];
  procedure: string[];
  simulationType: string;
  defaultParams: Record<string, any>;
  observationColumns: { key: string; label: string; unit: string }[];
  sampleObservations: Record<string, any>[];
  calculationGuide: string;
  resultInterpretation: string;
  sourcesOfError: string[];
  vivaQuestions: { question: string; answer: string }[];
  revisionQuiz: QuizQuestion[];
  // C Programming and Advanced Lab extensions
  problemStatement?: string;
  prerequisites?: string[];
  algorithm?: string[];
  sourceCode?: string;
  statementExplanations?: { statement: string; explanation: string }[];
  sampleInput?: string;
  expectedOutput?: string;
  executionTrace?: { step: number; description: string; state: string }[];
  testCases?: { input: string; output: string; description: string }[];
  edgeCases?: string[];
  commonErrors?: string[];
  debuggingGuidance?: string[];
  practiceVariations?: string[];
}

export interface UnitRevision {
  onePageSummary: Record<Language, string>;
  shortNotes: { topic: string; content: Record<Language, string> }[];
  keyFormulas: { name: string; formula: string; units: string; note: string }[];
  mindMap: { node: string; children?: string[] }[];
  differences: {
    conceptA: string;
    conceptB: string;
    comparisonPoints: { feature: string; a: string; b: string }[];
  }[];
  flashcards: { front: string; back: string }[];
  shortAnswerQuestions: { question: string; answer: string }[];
  longAnswerQuestions?: { question: string; outline: string }[];
  numericalPractice?: { question: string; given: string; formula: string; solution: string }[];
}

export interface ExamQuestion {
  id: string;
  unitNumber: string;
  type: 'Short' | 'Long' | 'Numerical' | 'Viva' | 'Code';
  marks: number;
  question: string;
  solution: string;
  stepByStep?: string[];
}

export interface UserProgress {
  completedLessons: string[];
  completedExperiments: string[];
  quizScores: Record<string, { score: number; total: number; timestamp: number }>;
  bookmarks: string[];
  notes: Record<string, string>;
  recentSubjects: string[];
  lastVisited?: {
    subjectId: string;
    unitId?: string;
    lessonId?: string;
    experimentId?: string;
    tab?: string;
  };
}
