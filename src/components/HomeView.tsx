import React from 'react';
import { ArrowRight, BookOpen, Calculator, CheckCircle2, TrendingUp } from 'lucide-react';
import { DIFFICULTY_MODES, TOPICS } from '../data/questions';
import { DifficultyMode, TopicId } from '../types/quiz';
import { MathFormula } from './MathFormula';

interface HomeViewProps {
  selectedTopic: TopicId;
  selectedMode: DifficultyMode;
  onSelectTopic: (topic: TopicId) => void;
  onSelectMode: (mode: DifficultyMode) => void;
  onStartQuiz: (topic: TopicId, mode?: DifficultyMode) => void;
  onOpenFormulas: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  selectedTopic,
  selectedMode,
  onSelectTopic,
  onSelectMode,
  onStartQuiz,
  onOpenFormulas,
}) => {
  const topicList = [TOPICS['bunga-tunggal'], TOPICS['bunga-majemuk']];
  const activeModeInfo =
    DIFFICULTY_MODES.find((m) => m.id === selectedMode) ?? DIFFICULTY_MODES[0];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Hero App Launch Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white border border-sky-200/90 shadow-sm">
        <div className="grid lg:grid-cols-12 items-stretch">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 bg-gradient-to-br from-white via-[#F7FBFF] to-[#E8F5FE]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-sky-700">
                Matematika Keuangan SMA · Bank 60 Soal Interaktif
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Math Finance – Yuk Berlatih!
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Latih kemampuanmu menyelesaikan soal tabungan, simpanan bank,
                dan investasi sederhana secara mandiri. Pilih tingkat kesulitan
                dan pelajari pembahasan langkah demi langkah.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onStartQuiz(selectedTopic, selectedMode)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] rounded-xl transition-all cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <span>Mulai Latihan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenFormulas}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-sky-900 bg-[#FEF9C3] hover:bg-[#FEF08A] border border-amber-200/80 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <BookOpen className="w-4 h-4 text-amber-800" />
                <span>Pelajari Rumus & Simulasi</span>
              </button>
            </div>
          </div>

          {/* Right Educational Formula Preview Panel */}
          <div className="lg:col-span-5 bg-[#EAF5FE] border-t lg:border-t-0 lg:border-l border-sky-200/80 p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-5">
            <div className="space-y-1">
              <h2 className="font-display text-lg font-bold text-sky-950">
                Ringkasan Materi Inti
              </h2>
              <p className="text-sm text-slate-600">
                Dua rumus utama yang akan kamu kuasai dalam sesi latihan ini:
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white p-4 border border-sky-200/70">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-semibold text-sky-900">
                    1. Bunga Tunggal
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    30 Soal di Bank
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-base font-semibold text-slate-900">
                  <MathFormula text="B = M × i × t" />
                  <span className="text-slate-300" aria-hidden="true">
                    |
                  </span>
                  <MathFormula text="Mn = M + B" />
                </div>
              </div>

              <div className="rounded-2xl bg-[#FEFCE8] p-4 border border-amber-200">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-semibold text-amber-950">
                    2. Bunga Majemuk
                  </span>
                  <span className="text-xs font-medium text-amber-800">
                    30 Soal di Bank
                  </span>
                </div>
                <div className="text-base font-semibold text-slate-900">
                  <MathFormula text="Mn = M × (1 + i)^t" />
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed pt-1">
              <strong className="text-slate-800">Keterangan:</strong> M = Modal
              awal · B = Besar bunga · i = Suku bunga per periode · t = Lama
              waktu · <MathFormula text="Mn" /> = Modal akhir.
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Mode Selector + Two Topic Selection Cards */}
      <section aria-labelledby="pilih-materi-heading" className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <h2
              id="pilih-materi-heading"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Pilih Tingkat Kesulitan & Materi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Setiap sesi mengambil 10 soal acak unik dari bank 30 soal
              masing-masing materi.
            </p>
          </div>

          {/* 4 Difficulty Modes Segmented Selector */}
          <div className="flex flex-col items-start lg:items-end gap-1.5">
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-sky-100/80 border border-sky-200/70 rounded-xl"
              role="radiogroup"
              aria-label="Pilih mode tingkat kesulitan"
            >
              {DIFFICULTY_MODES.map((mode) => {
                const active = selectedMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => onSelectMode(mode.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-sky-900 shadow-sm ring-1 ring-sky-200'
                        : 'text-slate-600 hover:text-sky-900'
                    }`}
                  >
                    {mode.label}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-slate-500">{activeModeInfo.desc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topicList.map((topic, index) => {
            const isSelected = selectedTopic === topic.id;
            const isTunggal = topic.id === 'bunga-tunggal';

            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-sky-500 ring-2 ring-sky-200 shadow-sm'
                    : 'bg-white border-sky-200/80 hover:border-sky-400'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isTunggal
                          ? 'bg-sky-100 text-sky-700'
                          : 'bg-[#FEF9C3] text-amber-800'
                      }`}
                    >
                      {isTunggal ? (
                        <Calculator className="w-6 h-6" />
                      ) : (
                        <TrendingUp className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Materi 0{index + 1} · {topic.bankCount} Soal Tersedia ·{' '}
                        {topic.sessionCount} Soal/Sesi
                      </p>
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Dipilih</span>
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {topic.shortDesc}
                </p>

                <div
                  className={`mt-5 rounded-xl p-3.5 border ${
                    isTunggal
                      ? 'bg-[#F4F9FF] border-sky-100'
                      : 'bg-[#FEFCE8] border-amber-200/70'
                  }`}
                >
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    Rumus Utama
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-semibold text-slate-900">
                    {topic.formulas.map((f, fIdx) => (
                      <React.Fragment key={f}>
                        {fIdx > 0 && (
                          <span className="text-slate-300" aria-hidden="true">
                            ·
                          </span>
                        )}
                        <MathFormula text={f} />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Mode aktif: <strong className="text-slate-700">{selectedMode}</strong> · 10 Soal Acak
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartQuiz(topic.id, selectedMode);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-sky-600 hover:bg-sky-700 text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Mulai {topic.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compact Study Guide Strip */}
      <section className="rounded-2xl bg-[#FEFCE8] border border-amber-200/80 p-6 sm:p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <h3 className="font-display text-base font-bold text-slate-900">
              01. Cek Kesesuaian Satuan
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Pastikan satuan suku bunga (<MathFormula text="i" />) dan lama
              waktu (<MathFormula text="t" />) selalu sama, misalnya sama-sama
              per tahun, per bulan, atau per semester.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-base font-bold text-slate-900">
              02. Pilih Mode Belajar
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Mulai dari mode Mudah untuk melatih konsep, lanjut ke Sedang &
              Sulit, atau pilih mode Campuran untuk simulasi ujian yang beragam.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-display text-base font-bold text-slate-900">
              03. Evaluasi Langkahnya
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Setelah selesai, perhatikan rumus dan langkah perhitungan pada
              setiap pembahasan agar pemahamanmu semakin kuat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
