import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { VARIABLE_LEGEND } from '../data/questions';
import { TopicId } from '../types/quiz';
import { formatRupiah } from '../utils/quizUtils';
import { MathFormula } from './MathFormula';

interface FormulaSimulatorViewProps {
  onBackHome: () => void;
  onStartQuiz: (topic: TopicId) => void;
}

export const FormulaSimulatorView: React.FC<FormulaSimulatorViewProps> = ({
  onBackHome,
  onStartQuiz,
}) => {
  const [modalAwal, setModalAwal] = useState<number>(5000000);
  const [ratePercent, setRatePercent] = useState<number>(10);
  const [years, setYears] = useState<number>(5);

  const simulationRows = useMemo(() => {
    const i = ratePercent / 100;
    const rows: {
      year: number;
      tunggal: number;
      majemuk: number;
      selisih: number;
    }[] = [];

    for (let t = 0; t <= years; t++) {
      const tunggal = modalAwal * (1 + i * t);
      const majemuk = modalAwal * Math.pow(1 + i, t);
      rows.push({
        year: t,
        tunggal: Math.round(tunggal),
        majemuk: Math.round(majemuk),
        selisih: Math.round(majemuk - tunggal),
      });
    }
    return rows;
  }, [modalAwal, ratePercent, years]);

  const finalRow = simulationRows[simulationRows.length - 1];

  // SVG Chart Geometry
  const chartWidth = 640;
  const chartHeight = 280;
  const padLeft = 72;
  const padRight = 24;
  const padTop = 24;
  const padBottom = 40;
  const plotW = chartWidth - padLeft - padRight;
  const plotH = chartHeight - padTop - padBottom;

  const minVal = modalAwal;
  const maxVal = Math.max(finalRow.majemuk, modalAwal * 1.1);
  const rangeY = maxVal - minVal || 1;

  const getX = (year: number) =>
    padLeft + (years === 0 ? 0 : (year / years) * plotW);
  const getY = (val: number) =>
    padTop + plotH - ((val - minVal) / rangeY) * plotH;

  const tunggalPoints = simulationRows
    .map((r) => `${getX(r.year)},${getY(r.tunggal)}`)
    .join(' ');
  const majemukPoints = simulationRows
    .map((r) => `${getX(r.year)},${getY(r.majemuk)}`)
    .join(' ');

  const handleReset = () => {
    setModalAwal(5000000);
    setRatePercent(10);
    setYears(5);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-900 mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Ringkasan Rumus & Simulasi Interaktif
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Pahami rumus dasar, keterangan variabel, dan bandingkan pertumbuhan
            bunga tunggal dengan bunga majemuk secara langsung.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onStartQuiz('bunga-tunggal')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Latihan Bunga Tunggal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onStartQuiz('bunga-majemuk')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-sky-900 bg-[#FEF9C3] hover:bg-[#FEF08A] border border-amber-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Latihan Bunga Majemuk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Formula Reference Cards */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white border border-sky-200 p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-sky-950">
              1. Bunga Tunggal
            </h2>
            <span className="text-xs font-medium text-slate-500">
              Pertumbuhan Tetap
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Besar bunga dihitung hanya dari modal awal (M) sehingga tambahan
            bunga setiap periode selalu sama.
          </p>
          <div className="rounded-xl bg-[#F4F9FF] border border-sky-100 p-4 space-y-2">
            <div className="text-base sm:text-lg font-semibold text-slate-900">
              <MathFormula text="B = M × i × t" />
            </div>
            <div className="text-base sm:text-lg font-semibold text-slate-900">
              <MathFormula text="Mn = M + B" />
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Catatan penting: Satuan suku bunga (i) dan waktu (t) harus sama.
            Jika i per tahun dan waktu dalam bulan, ubah t menjadi{' '}
            <span className="font-mono font-semibold text-slate-800">
              bulan / 12
            </span>
            .
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-amber-200 p-6 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-amber-950">
              2. Bunga Majemuk
            </h2>
            <span className="text-xs font-medium text-amber-800">
              Pertumbuhan Berbunga
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bunga yang terbentuk di akhir periode digabungkan dengan modal
            sehingga ikut menghasilkan bunga pada periode berikutnya.
          </p>
          <div className="rounded-xl bg-[#FEFCE8] border border-amber-200/80 p-4 space-y-2">
            <div className="text-base sm:text-lg font-semibold text-slate-900">
              <MathFormula text="Mn = M × (1 + i)^t" />
            </div>
            <div className="text-base sm:text-lg font-semibold text-slate-900">
              <MathFormula text="B = Mn - M" />
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Catatan penting: Jika bunga dimajemukkan per semester (2× setahun)
            atau triwulan (4× setahun), bagi suku bunga tahunan dan kalikan
            banyak periode sesuai jumlah pemajemukannya.
          </p>
        </div>
      </section>

      {/* Variable Legend */}
      <section className="rounded-2xl bg-white border border-sky-200/80 p-6">
        <h2 className="font-display text-lg font-bold text-slate-900 mb-4">
          Keterangan Simbol Matematika
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {VARIABLE_LEGEND.map((item) => (
            <div
              key={item.symbol}
              className="rounded-xl bg-[#F4F9FF] border border-sky-100 p-3.5"
            >
              <div className="font-mono text-base font-bold text-sky-800">
                <MathFormula text={item.symbol} />
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-Zone Interactive Sandbox: Chart + Sliders */}
      <section className="rounded-2xl bg-white border border-sky-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              Simulasi Perbandingan Tabungan
            </h2>
            <p className="text-sm text-slate-600">
              Geser slider di sebelah kanan untuk melihat perbandingan nilai
              akhir Bunga Tunggal vs Bunga Majemuk.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Simulasi</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Interactive Growth Chart */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl bg-[#F8FBFF] border border-sky-100 p-4">
              <div className="flex flex-wrap items-center gap-5 text-xs font-semibold mb-3">
                <span className="inline-flex items-center gap-2 text-sky-800">
                  <span className="w-4 h-1 bg-sky-600 inline-block rounded" />
                  <span>Garis Biru: Bunga Tunggal (Linear)</span>
                </span>
                <span className="inline-flex items-center gap-2 text-amber-800">
                  <span className="w-4 h-1 bg-amber-500 inline-block rounded" />
                  <span>Garis Kuning Emas: Bunga Majemuk (Eksponensial)</span>
                </span>
              </div>

              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-auto overflow-visible"
                role="img"
                aria-label="Grafik perbandingan pertumbuhan modal bunga tunggal dan bunga majemuk"
              >
                {/* Horizontal gridlines */}
                {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                  const val = minVal + rangeY * ratio;
                  const y = getY(val);
                  return (
                    <g key={ratio}>
                      <line
                        x1={padLeft}
                        y1={y}
                        x2={chartWidth - padRight}
                        y2={y}
                        stroke="#E2E8F0"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={padLeft - 8}
                        y={y + 4}
                        textAnchor="end"
                        className="fill-slate-500 text-[10px] font-mono tabular-nums"
                      >
                        {(val / 1000000).toFixed(1)} jt
                      </text>
                    </g>
                  );
                })}

                {/* X axis */}
                <line
                  x1={padLeft}
                  y1={padTop + plotH}
                  x2={chartWidth - padRight}
                  y2={padTop + plotH}
                  stroke="#94A3B8"
                />
                {/* Y axis */}
                <line
                  x1={padLeft}
                  y1={padTop}
                  x2={padLeft}
                  y2={padTop + plotH}
                  stroke="#94A3B8"
                />

                {/* Bunga Tunggal Line */}
                <polyline
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={tunggalPoints}
                />

                {/* Bunga Majemuk Line */}
                <polyline
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={majemukPoints}
                />

                {/* Data Points & X labels */}
                {simulationRows.map((r) => {
                  const cx = getX(r.year);
                  const cyT = getY(r.tunggal);
                  const cyM = getY(r.majemuk);
                  return (
                    <g key={r.year}>
                      <circle cx={cx} cy={cyT} r="4" fill="#0284C7" />
                      <circle cx={cx} cy={cyM} r="4" fill="#D97706" />
                      <text
                        x={cx}
                        y={padTop + plotH + 18}
                        textAnchor="middle"
                        className="fill-slate-600 text-[11px] font-mono tabular-nums"
                      >
                        Th {r.year}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Live Comparison Summary Cards */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#F4F9FF] border border-sky-200 p-3.5">
                <p className="text-xs text-slate-600">Akhir Bunga Tunggal</p>
                <p className="font-mono text-base font-bold text-sky-900 tabular-nums mt-0.5">
                  {formatRupiah(finalRow.tunggal)}
                </p>
              </div>
              <div className="rounded-xl bg-[#FEFCE8] border border-amber-200 p-3.5">
                <p className="text-xs text-amber-900">Akhir Bunga Majemuk</p>
                <p className="font-mono text-base font-bold text-amber-950 tabular-nums mt-0.5">
                  {formatRupiah(finalRow.majemuk)}
                </p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-3.5">
                <p className="text-xs text-slate-600">Selisih Keuntungan</p>
                <p className="font-mono text-base font-bold text-emerald-700 tabular-nums mt-0.5">
                  +{formatRupiah(finalRow.selisih)}
                </p>
              </div>
            </div>
          </div>

          {/* Right Zone: Controls & Table */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-4 rounded-xl bg-[#F4F9FF] border border-sky-100 p-5">
              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-800 mb-1.5">
                  <label htmlFor="sim-modal">Modal Awal (M)</label>
                  <span className="font-mono text-sky-800 tabular-nums">
                    {formatRupiah(modalAwal)}
                  </span>
                </div>
                <input
                  id="sim-modal"
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={500000}
                  value={modalAwal}
                  onChange={(e) => setModalAwal(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>Rp1 jt</span>
                  <span>Rp20 jt</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-800 mb-1.5">
                  <label htmlFor="sim-rate">Suku Bunga per Tahun (i)</label>
                  <span className="font-mono text-sky-800 tabular-nums">
                    {ratePercent}%
                  </span>
                </div>
                <input
                  id="sim-rate"
                  type="range"
                  min={2}
                  max={20}
                  step={1}
                  value={ratePercent}
                  onChange={(e) => setRatePercent(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>2%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-slate-800 mb-1.5">
                  <label htmlFor="sim-years">Lama Menabung (t)</label>
                  <span className="font-mono text-sky-800 tabular-nums">
                    {years} tahun
                  </span>
                </div>
                <input
                  id="sim-years"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>1 tahun</span>
                  <span>10 tahun</span>
                </div>
              </div>
            </div>

            {/* Yearly Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-sky-50 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 font-semibold">Tahun</th>
                    <th className="py-2.5 px-3 font-semibold text-right">
                      Tunggal
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-right">
                      Majemuk
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-mono tabular-nums">
                  {simulationRows.map((row) => (
                    <tr key={row.year} className="hover:bg-sky-50/40">
                      <td className="py-2 px-3 text-slate-700 font-sans font-medium">
                        Tahun ke-{row.year}
                      </td>
                      <td className="py-2 px-3 text-right text-sky-900">
                        {formatRupiah(row.tunggal)}
                      </td>
                      <td className="py-2 px-3 text-right text-amber-900 font-semibold">
                        {formatRupiah(row.majemuk)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
