import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Home,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { DIFFICULTY_MODES, TOPICS } from '../data/questions';
import { DifficultyMode, QuizResult, TopicId } from '../types/quiz';
import { MathFormula } from './MathFormula';

interface ResultViewProps {
  result: QuizResult;
  onRetryQuiz: (mode?: DifficultyMode) => void;
  onSwitchTopic: (topic: TopicId, mode?: DifficultyMode) => void;
  onBackHome: () => void;
}

type ReviewFilter = 'all' | 'correct' | 'wrong';

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetryQuiz,
  onSwitchTopic,
  onBackHome,
}) => {
  const [filter, setFilter] = useState<ReviewFilter>('all');

  const topicInfo = TOPICS[result.topic];
  const otherTopicId: TopicId =
    result.topic === 'bunga-tunggal' ? 'bunga-majemuk' : 'bunga-tunggal';
  const otherTopicInfo = TOPICS[otherTopicId];

  const filteredEvaluations = result.evaluations.filter((item) => {
    if (filter === 'correct') return item.isCorrect;
    if (filter === 'wrong') return !item.isCorrect;
    return true;
  });

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Result Hero & Motivation Banner */}
      <section className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold text-sky-700">
              Hasil Latihan · {topicInfo.title} · Mode {result.difficultyMode}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 text-balance">
              {result.motivationTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {result.motivationMessage}
            </p>
          </div>

          <div className="rounded-2xl bg-[#FEFCE8] border border-amber-200 px-6 py-5 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#FEF08A] text-amber-900 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-900">
                Nilai Akhir (0–100)
              </p>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                {result.score}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="rounded-xl bg-[#F4F9FF] border border-sky-100 p-4">
            <p className="text-xs font-medium text-slate-600">Nilai Akhir</p>
            <p className="font-mono text-2xl font-bold text-sky-900 tabular-nums mt-1">
              {result.score}
              <span className="text-sm font-normal text-slate-500"> / 100</span>
            </p>
          </div>

          <div className="rounded-xl bg-[#F4F9FF] border border-sky-100 p-4">
            <p className="text-xs font-medium text-slate-600">
              Persentase Keberhasilan
            </p>
            <p className="font-mono text-2xl font-bold text-sky-900 tabular-nums mt-1">
              {result.percentage}%
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-4">
            <p className="text-xs font-medium text-emerald-800">
              Jawaban Benar
            </p>
            <p className="font-mono text-2xl font-bold text-emerald-700 tabular-nums mt-1">
              {result.correctCount}
              <span className="text-sm font-normal text-emerald-700/80">
                {' '}
                soal
              </span>
            </p>
          </div>

          <div className="rounded-xl bg-rose-50/70 border border-rose-200 p-4">
            <p className="text-xs font-medium text-rose-800">Jawaban Salah</p>
            <p className="font-mono text-2xl font-bold text-rose-700 tabular-nums mt-1">
              {result.wrongCount}
              <span className="text-sm font-normal text-rose-700/80">
                {' '}
                soal
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons + Quick Difficulty Switch */}
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onRetryQuiz(result.difficultyMode)}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Latihan</span>
            </button>

            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-sky-900 bg-[#FEF9C3] hover:bg-[#FEF08A] border border-amber-200 rounded-xl transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>

            <button
              type="button"
              onClick={() => onSwitchTopic(otherTopicId, result.difficultyMode)}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-sky-50 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <span>Lanjut Materi {otherTopicInfo.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Try another difficulty mode directly */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-medium">Coba tingkat lain:</span>
            {DIFFICULTY_MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => onRetryQuiz(m.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                  m.id === result.difficultyMode
                    ? 'bg-sky-50 text-sky-900 border-sky-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pembahasan Soal Section */}
      <section aria-labelledby="pembahasan-heading" className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2
              id="pembahasan-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Pembahasan Setiap Soal
            </h2>
            <p className="text-sm text-slate-600">
              Pelajari rumus yang digunakan dan langkah-langkah perhitungannya.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            className="inline-flex items-center gap-1 p-1 bg-sky-100/80 rounded-xl self-start sm:self-auto"
            role="tablist"
            aria-label="Filter pembahasan soal"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-sky-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua ({result.totalQuestions})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'correct'}
              onClick={() => setFilter('correct')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'correct'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Benar ({result.correctCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'wrong'}
              onClick={() => setFilter('wrong')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'wrong'
                  ? 'bg-white text-rose-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Salah ({result.wrongCount})
            </button>
          </div>
        </div>

        {filteredEvaluations.length === 0 ? (
          <div className="rounded-2xl bg-white border border-sky-200 p-8 text-center text-sm text-slate-600">
            Tidak ada soal dalam kategori filter ini.
          </div>
        ) : (
          <div className="space-y-5">
            {filteredEvaluations.map((item) => {
              const { question, questionNumber, selectedOptionId, isCorrect } =
                item;
              const selectedOption = question.options.find(
                (o) => o.id === selectedOptionId
              );
              const correctOption = question.options.find(
                (o) => o.id === question.correctOptionId
              )!;

              return (
                <article
                  key={question.id}
                  className="rounded-2xl bg-white border border-sky-200/90 p-5 sm:p-7 space-y-5"
                >
                  {/* Card Header: Clean Metadata + Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="text-xs sm:text-sm font-medium text-slate-500">
                      Soal {questionNumber} · Tingkat {question.difficulty} ·{' '}
                      {question.contextTag}
                    </div>

                    {isCorrect ? (
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Benar</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-700">
                        <XCircle className="w-4 h-4" />
                        <span>
                          {selectedOption ? 'Salah' : 'Tidak Dijawab'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Question Text */}
                  <h3 className="text-base font-semibold text-slate-900 leading-relaxed">
                    {question.question}
                  </h3>

                  {/* Student Answer vs Correct Answer */}
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div
                      className={`rounded-xl p-3.5 border ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200'
                          : 'bg-rose-50/70 border-rose-200'
                      }`}
                    >
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        Jawaban Kamu
                      </p>
                      <p
                        className={`font-semibold ${
                          isCorrect ? 'text-emerald-900' : 'text-rose-900'
                        }`}
                      >
                        {selectedOption
                          ? `${selectedOption.label}. ${selectedOption.text}`
                          : 'Belum memilih jawaban'}
                      </p>
                    </div>

                    <div className="rounded-xl p-3.5 border bg-[#F4F9FF] border-sky-200">
                      <p className="text-xs font-semibold text-sky-900 mb-1">
                        Kunci Jawaban Benar
                      </p>
                      <p className="font-semibold text-slate-900">
                        {correctOption.label}. {correctOption.text}
                      </p>
                    </div>
                  </div>

                  {/* Formula Used */}
                  <div className="rounded-xl bg-[#FEFCE8] border border-amber-200 p-4 space-y-1">
                    <p className="text-xs font-semibold text-amber-900">
                      Rumus yang Digunakan
                    </p>
                    <p className="text-sm sm:text-base font-bold text-slate-900">
                      <MathFormula text={question.formula} />
                    </p>
                  </div>

                  {/* Step-by-step Solution */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700">
                      Langkah-langkah Penyelesaian
                    </p>
                    <ol className="space-y-2 text-sm text-slate-700 leading-relaxed">
                      {question.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-md bg-sky-100 text-sky-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="pt-2 text-sm font-semibold text-sky-900">
                      Kesimpulan: {question.conclusion}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};
