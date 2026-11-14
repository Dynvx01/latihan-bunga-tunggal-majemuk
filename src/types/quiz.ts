export type TopicId = 'bunga-tunggal' | 'bunga-majemuk';

export type Difficulty = 'Mudah' | 'Sedang' | 'Sulit';

export type DifficultyMode = Difficulty | 'Campuran';

export type OptionLabel = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  topic: TopicId;
  difficulty: Difficulty;
  contextTag: string;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
  formula: string;
  steps: string[];
  conclusion: string;
}

export interface SessionOption extends QuestionOption {
  label: OptionLabel;
}

export interface SessionQuestion extends Omit<Question, 'options'> {
  options: SessionOption[];
}

export interface TopicInfo {
  id: TopicId;
  title: string;
  shortDesc: string;
  formulas: string[];
  bankCount: number;
  sessionCount: number;
  highlightNote: string;
}

export interface EvaluatedQuestion {
  question: SessionQuestion;
  questionNumber: number;
  selectedOptionId: string | null;
  selectedLabel: OptionLabel | null;
  correctLabel: OptionLabel;
  isCorrect: boolean;
}

export interface QuizResult {
  topic: TopicId;
  difficultyMode: DifficultyMode;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  score: number;
  percentage: number;
  motivationTitle: string;
  motivationMessage: string;
  evaluations: EvaluatedQuestion[];
}

export type AppView = 'home' | 'formulas' | 'quiz' | 'result';
