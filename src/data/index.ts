import { Subject, Unit, Lesson, LabExperiment } from '../types';
import { APPLIED_PHYSICS } from './physicsData';
import { APPLIED_PHYSICS_LAB } from './physicsLabData';
import { BEEE_SUBJECT } from './beeeData';
import { BEEE_LAB } from './beeeLabData';
import { C_PROGRAMMING } from './cProgrammingData';
import { C_PROGRAMMING_LAB } from './cProgrammingLabData';
import { ENVIRONMENTAL_SCIENCE, DISRUPTIVE_TECHNOLOGY } from './evsData';
import { ENGLISH_SUBJECT, ENGLISH_LAB } from './englishData';
import { MATHEMATICS_SUBJECT } from './mathData';

export const ALL_SUBJECTS: Subject[] = [
  APPLIED_PHYSICS,
  APPLIED_PHYSICS_LAB,
  BEEE_SUBJECT,
  BEEE_LAB,
  C_PROGRAMMING,
  C_PROGRAMMING_LAB,
  ENVIRONMENTAL_SCIENCE,
  DISRUPTIVE_TECHNOLOGY,
  ENGLISH_SUBJECT,
  ENGLISH_LAB,
  MATHEMATICS_SUBJECT
];

export function getSubjectById(id: string): Subject | undefined {
  return ALL_SUBJECTS.find(s => s.id === id);
}

export function getSubjectSummary() {
  return ALL_SUBJECTS.map(s => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    icon: s.icon,
    color: s.color,
    isOfficial: s.isOfficial,
    syllabusSource: s.syllabusSource,
    unitsCount: s.unitsCount,
    experimentsCount: s.experiments ? s.experiments.length : 0
  }));
}

export function getUnitById(subjectId: string, unitId: string): Unit | undefined {
  const subject = getSubjectById(subjectId);
  return subject?.units.find(u => u.id === unitId);
}

export function getLessonById(subjectId: string, unitId: string, lessonId: string): Lesson | undefined {
  const unit = getUnitById(subjectId, unitId);
  return unit?.lessons.find(l => l.id === lessonId);
}

export function getExperimentById(subjectId: string, experimentId: string): LabExperiment | undefined {
  const subject = getSubjectById(subjectId);
  return subject?.experiments?.find(e => e.id === experimentId);
}
