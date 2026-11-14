import { useState } from 'react';
import { FormulaSimulatorView } from './components/FormulaSimulatorView';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import {
  AppView,
  DifficultyMode,
  QuizResult,
  SessionQuestion,
  TopicId,
} from './types/quiz';
import {
  createShuffledSession,
  evaluateQuizSession,
} from './utils/quizUtils';

export default function App() {
  const [view, setView] = useState<AppView>('home');
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('bunga-tunggal');
  const [selectedMode, setSelectedMode] = useState<DifficultyMode>('Campuran');
  const [activeTopic, setActiveTopic] = useState<TopicId | null>(null);
  const [activeMode, setActiveMode] = useState<DifficultyMode>('Campuran');
  const [lastSessionIds, setLastSessionIds] = useState<Record<TopicId, string[]>>({
    'bunga-tunggal': [],
    'bunga-majemuk': [],
  });
  const [sessionQuestions, setSessionQuestions] = useState<SessionQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startQuizForTopic = (
    topic: TopicId,
    mode: DifficultyMode = selectedMode
  ) => {
    const previousIds = lastSessionIds[topic] ?? [];
    const shuffled = createShuffledSession(topic, mode, previousIds);

    setSelectedTopic(topic);
    setSelectedMode(mode);
    setActiveTopic(topic);
    setActiveMode(mode);
    setLastSessionIds((prev) => ({
      ...prev,
      [topic]: shuffled.map((q) => q.id),
    }));
    setSessionQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setQuizResult(null);
    setView('quiz');
    scrollToTop();
  };

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleFinishQuiz = () => {
    if (!activeTopic) return;
    const result = evaluateQuizSession(
      activeTopic,
      activeMode,
      sessionQuestions,
      answers
    );
    setQuizResult(result);
    setView('result');
    scrollToTop();
  };

  const handleRetryQuiz = (mode?: DifficultyMode) => {
    if (!activeTopic) return;
    startQuizForTopic(activeTopic, mode ?? activeMode);
  };

  const handleNavigateHome = () => {
    setView('home');
    scrollToTop();
  };

  const handleNavigateFormulas = () => {
    setView('formulas');
    scrollToTop();
  };

  const handlePrimaryStart = () => {
    startQuizForTopic(selectedTopic, selectedMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F9FF] text-slate-900">
      <Header
        currentView={view}
        activeTopic={activeTopic}
        onNavigateHome={handleNavigateHome}
        onNavigateFormulas={handleNavigateFormulas}
        onStartTopic={(topic) => startQuizForTopic(topic, selectedMode)}
        onPrimaryStart={handlePrimaryStart}
      />

      <div className="flex-1">
        {view === 'home' && (
          <HomeView
            selectedTopic={selectedTopic}
            selectedMode={selectedMode}
            onSelectTopic={setSelectedTopic}
            onSelectMode={setSelectedMode}
            onStartQuiz={startQuizForTopic}
            onOpenFormulas={handleNavigateFormulas}
          />
        )}

        {view === 'formulas' && (
          <FormulaSimulatorView
            onBackHome={handleNavigateHome}
            onStartQuiz={(topic) => startQuizForTopic(topic, selectedMode)}
          />
        )}

        {view === 'quiz' && activeTopic && sessionQuestions.length > 0 && (
          <QuizView
            topic={activeTopic}
            difficultyMode={activeMode}
            questions={sessionQuestions}
            currentIndex={currentIndex}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onChangeIndex={(idx) => {
              setCurrentIndex(idx);
              scrollToTop();
            }}
            onFinishQuiz={handleFinishQuiz}
            onExitHome={handleNavigateHome}
          />
        )}

        {view === 'result' && quizResult && (
          <ResultView
            result={quizResult}
            onRetryQuiz={handleRetryQuiz}
            onSwitchTopic={startQuizForTopic}
            onBackHome={handleNavigateHome}
          />
        )}
      </div>

      <footer className="border-t border-sky-200/70 bg-white/80 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="font-medium text-slate-700">
            Math Finance – Yuk Berlatih! · Latihan Mandiri Matematika SMA
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleNavigateHome}
              className="hover:text-sky-800 transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={handleNavigateFormulas}
              className="hover:text-sky-800 transition-colors cursor-pointer"
            >
              Rumus & Simulasi
            </button>
            <button
              type="button"
              onClick={() => startQuizForTopic('bunga-tunggal', selectedMode)}
              className="hover:text-sky-800 transition-colors cursor-pointer"
            >
              Bunga Tunggal
            </button>
            <button
              type="button"
              onClick={() => startQuizForTopic('bunga-majemuk', selectedMode)}
              className="hover:text-sky-800 transition-colors cursor-pointer"
            >
              Bunga Majemuk
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
