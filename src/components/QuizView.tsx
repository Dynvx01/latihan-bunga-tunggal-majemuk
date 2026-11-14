import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Flag,
} from 'lucide-react';
import { TOPICS } from '../data/questions';
import { DifficultyMode, SessionQuestion, TopicId } from '../types/quiz';
import { MathFormula } from './MathFormula';

interface QuizViewProps {
  topic: TopicId;
  difficultyMode: DifficultyMode;
  questions: SessionQuestion[];
  currentIndex: number;
  answers: Record<string, string>;
  onSelectAnswer: (questionId: string, optionId: string) => void;
  onChangeIndex: (index: number) => void;
  onFinishQuiz: () => void;
  onExitHome: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  topic,
  difficultyMode,
  questions,
  currentIndex,
  answers,
  onSelectAnswer,
  onChangeIndex,
  onFinishQuiz,
  onExitHome,
}) => {
  const [showFormulaHelper, setShowFormulaHelper] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  const topicInfo = TOPICS[topic];
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const selectedOptionId = answers[currentQuestion.id] ?? null;

  const handleFinishClick = () => {
    if (unansweredCount > 0) {
      setShowFinishConfirm(true);
    } else {
      onFinishQuiz();
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Quiz Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <button
            type="button"
            onClick={onExitHome}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-900 mb-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
            Latihan: {topicInfo.title} · Mode {difficultyMode}
          </h1>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setShowFormulaHelper((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-amber-950 bg-[#FEF9C3] hover:bg-[#FEF08A] border border-amber-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>Catatan Rumus</span>
            {showFormulaHelper ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={handleFinishClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <Flag className="w-4 h-4" />
            <span>Selesaikan Latihan</span>
          </button>
        </div>
      </div>

      {/* Collapsible Formula Helper */}
      {showFormulaHelper && (
        <div className="rounded-2xl bg-[#FEFCE8] border border-amber-200 p-4 sm:p-5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-sm font-bold text-amber-950">
              Catatan Rumus {topicInfo.title}
            </h2>
            <span className="text-xs text-amber-800">
              {topicInfo.highlightNote}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-semibold text-slate-900 pt-1">
            {topicInfo.formulas.map((f, idx) => (
              <React.Fragment key={f}>
                {idx > 0 && (
                  <span className="text-amber-400" aria-hidden="true">
                    ·
                  </span>
                )}
                <MathFormula text={f} />
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-700">
            M = Modal awal · B = Besar bunga · i = Suku bunga per periode · t =
            Lama waktu · <MathFormula text="Mn" /> = Modal akhir.
          </p>
        </div>
      )}

      {/* Progress Indicator */}
      <section className="rounded-2xl bg-white border border-sky-200/80 p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="font-semibold text-slate-900 tabular-nums">
            Soal {currentIndex + 1} dari {totalQuestions}
          </div>
          <div className="text-slate-600 text-xs sm:text-sm tabular-nums">
            Progres:{' '}
            <span className="font-semibold text-sky-700">
              {answeredCount}/{totalQuestions}
            </span>{' '}
            terjawab
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className="w-full h-2.5 bg-sky-100 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progres nomor soal"
        >
          <div
            className="h-full bg-sky-600 transition-all duration-200 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Number Quick Navigator */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = Boolean(answers[q.id]);

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onChangeIndex(idx)}
                aria-label={`Buka soal nomor ${idx + 1}${
                  isAnswered ? ' (sudah dijawab)' : ' (belum dijawab)'
                }`}
                className={`w-9 h-9 rounded-lg text-xs font-bold tabular-nums transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-sky-600 text-white border-sky-600 ring-2 ring-sky-200'
                    : isAnswered
                    ? 'bg-[#FEF9C3] text-amber-950 border-amber-300 hover:bg-[#FEF08A]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-sky-50 hover:text-sky-800'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </section>

      {/* Inline Finish Confirmation Warning if unanswered questions remain */}
      {showFinishConfirm && (
        <div
          role="alertdialog"
          aria-labelledby="confirm-finish-title"
          className="rounded-2xl bg-[#FEFCE8] border border-amber-300 p-5 space-y-3"
        >
          <h2
            id="confirm-finish-title"
            className="font-display text-base font-bold text-amber-950"
          >
            Masih ada {unansweredCount} soal yang belum dijawab
          </h2>
          <p className="text-sm text-slate-700">
            Soal yang belum dijawab akan dihitung salah. Apakah kamu yakin ingin
            menyelesaikan latihan sekarang atau memeriksa soal terlebih dahulu?
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => {
                setShowFinishConfirm(false);
                const firstUnanswered = questions.findIndex(
                  (q) => !answers[q.id]
                );
                if (firstUnanswered !== -1) {
                  onChangeIndex(firstUnanswered);
                }
              }}
              className="px-4 py-2 text-sm font-semibold text-sky-900 bg-white hover:bg-sky-50 border border-sky-200 rounded-xl transition-colors cursor-pointer"
            >
              Periksa Soal Kosong
            </button>
            <button
              type="button"
              onClick={() => {
                setShowFinishConfirm(false);
                onFinishQuiz();
              }}
              className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer"
            >
              Ya, Selesaikan Latihan
            </button>
          </div>
        </div>
      )}

      {/* Question Card */}
      <article className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 space-y-6 shadow-sm">
        {/* Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-500">
          <span>
            Soal {currentIndex + 1} · Tingkat {currentQuestion.difficulty} ·{' '}
            {currentQuestion.contextTag}
          </span>
          {selectedOptionId && (
            <span className="inline-flex items-center gap-1 text-sky-700 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Jawaban tersimpan</span>
            </span>
          )}
        </div>

        {/* Question Prompt */}
        <h2 className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* 4 Multiple Choice Options */}
        <div className="space-y-3" role="radiogroup" aria-label="Pilihan jawaban">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectAnswer(currentQuestion.id, option.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 min-h-[54px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  isSelected
                    ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-200 text-slate-900'
                    : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-[#F4F9FF] text-slate-800'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-sky-600 text-white'
                      : 'bg-[#EAF5FE] text-sky-900'
                  }`}
                >
                  {option.label}
                </span>
                <span className="text-sm sm:text-base font-medium leading-relaxed pt-0.5">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Prev / Next / Finish Controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => onChangeIndex(currentIndex - 1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-45 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {currentIndex < totalQuestions - 1 ? (
            <button
              type="button"
              onClick={() => onChangeIndex(currentIndex + 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-sky-600 hover:bg-sky-700 text-white transition-colors cursor-pointer"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#FEF08A] hover:bg-[#FDE047] text-amber-950 border border-amber-300 transition-colors cursor-pointer"
            >
              <Flag className="w-4 h-4" />
              <span>Selesaikan Latihan</span>
            </button>
          )}
        </div>
      </article>
    </main>
  );
};
