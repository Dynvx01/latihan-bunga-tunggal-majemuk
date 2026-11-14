import { DifficultyMode, Question, TopicId, TopicInfo } from '../types/quiz';

export const TOPICS: Record<TopicId, TopicInfo> = {
  'bunga-tunggal': {
    id: 'bunga-tunggal',
    title: 'Bunga Tunggal',
    shortDesc:
      'Pelajari perhitungan bunga yang nilainya tetap setiap periode karena hanya dihitung dari modal awal.',
    formulas: ['B = M × i × t', 'Mn = M + B'],
    bankCount: 30,
    sessionCount: 10,
    highlightNote: 'Fokus pada kesesuaian satuan waktu dan suku bunga',
  },
  'bunga-majemuk': {
    id: 'bunga-majemuk',
    title: 'Bunga Majemuk',
    shortDesc:
      'Pahami konsep bunga berbunga di mana bunga periode sebelumnya ikut menambah modal pada periode berikutnya.',
    formulas: ['Mn = M × (1 + i)^t', 'B = Mn - M'],
    bankCount: 30,
    sessionCount: 10,
    highlightNote: 'Fokus pada pertumbuhan eksponensial dan periode pemajemukan',
  },
};

export const DIFFICULTY_MODES: {
  id: DifficultyMode;
  label: string;
  desc: string;
}[] = [
  {
    id: 'Campuran',
    label: 'Campuran',
    desc: 'Gabungan 10 soal acak (Mudah, Sedang, Sulit) dari bank 30 soal',
  },
  {
    id: 'Mudah',
    label: 'Mudah',
    desc: '10 soal pemahaman konsep, rumus, dan perhitungan dasar',
  },
  {
    id: 'Sedang',
    label: 'Sedang',
    desc: '10 soal perhitungan bunga, modal akhir, waktu, dan konversi periode',
  },
  {
    id: 'Sulit',
    label: 'Sulit',
    desc: '10 soal cerita analisis mendalam dan perbandingan investasi',
  },
];

export const VARIABLE_LEGEND = [
  { symbol: 'M', meaning: 'Modal awal (uang yang ditabung atau diinvestasikan)' },
  { symbol: 'B', meaning: 'Besar bunga yang diperoleh' },
  { symbol: 'i', meaning: 'Suku bunga per periode (dalam desimal atau persen)' },
  { symbol: 't', meaning: 'Lama waktu atau banyaknya periode bunga' },
  { symbol: 'Mn', meaning: 'Modal akhir setelah periode ke-t' },
];

export const QUESTIONS: Question[] = [
  // =========================================================================
  // MATERI 1: BUNGA TUNGGAL (30 SOAL: 10 MUDAH, 10 SEDANG, 10 SULIT)
  // =========================================================================

  // --- BUNGA TUNGGAL: MUDAH (10 SOAL) ---
  {
    id: 'bt-m-1',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Identifikasi Rumus',
    question:
      'Rumus yang tepat untuk menghitung besar bunga (B) pada sistem bunga tunggal jika diketahui modal awal (M), suku bunga per periode (i), dan lama waktu (t) adalah ....',
    options: [
      { id: 'bt-m-1-a', text: 'B = M × i × t' },
      { id: 'bt-m-1-b', text: 'B = M × (1 + i)^t' },
      { id: 'bt-m-1-c', text: 'B = M + i + t' },
      { id: 'bt-m-1-d', text: 'B = (M × i) / t' },
    ],
    correctOptionId: 'bt-m-1-a',
    formula: 'B = M × i × t',
    steps: [
      'Pada sistem bunga tunggal, besar bunga hanya bergantung pada modal awal (M), suku bunga per periode (i), dan banyaknya periode (t).',
      'Bentuk M × (1 + i)^t adalah rumus modal akhir bunga majemuk, bukan bunga tunggal.',
      'Oleh karena itu, rumus besar bunga tunggal adalah B = M × i × t.',
    ],
    conclusion: 'Rumus yang benar adalah B = M × i × t.',
  },
  {
    id: 'bt-m-2',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Kesesuaian Periode',
    question:
      'Rina menabung di koperasi sekolah dengan suku bunga tunggal 6% per tahun. Jika ia ingin menghitung bunga selama 8 bulan menggunakan rumus B = M × i × t, nilai t (dalam tahun) yang tepat adalah ....',
    options: [
      { id: 'bt-m-2-a', text: '2/3 tahun' },
      { id: 'bt-m-2-b', text: '8 tahun' },
      { id: 'bt-m-2-c', text: '1/2 tahun' },
      { id: 'bt-m-2-d', text: '3/4 tahun' },
    ],
    correctOptionId: 'bt-m-2-a',
    formula: 't = (jumlah bulan) / 12 tahun',
    steps: [
      'Suku bunga diketahui dalam satuan per tahun, sehingga lama waktu (t) harus diubah menjadi satuan tahun.',
      'Karena 1 tahun = 12 bulan, maka 8 bulan = 8/12 tahun.',
      'Sederhanakan pecahan dengan membagi pembilang dan penyebut dengan 4: 8/12 = 2/3 tahun.',
    ],
    conclusion: 'Nilai t yang tepat adalah 2/3 tahun.',
  },
  {
    id: 'bt-m-3',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Pemahaman Konsep',
    question:
      'Pernyataan berikut yang paling tepat menggambarkan ciri khas bunga tunggal pada simpanan di bank adalah ....',
    options: [
      {
        id: 'bt-m-3-a',
        text: 'Besar bunga dihitung dari modal awal saja sehingga nominal bunganya selalu sama setiap periode',
      },
      {
        id: 'bt-m-3-b',
        text: 'Besar bunga dihitung dari modal awal ditambah akumulasi bunga periode sebelumnya',
      },
      {
        id: 'bt-m-3-c',
        text: 'Suku bunga tabungan akan selalu naik otomatis sebesar 1% setiap tahun',
      },
      {
        id: 'bt-m-3-d',
        text: 'Modal akhir diperoleh dengan cara membagi modal awal dengan lama waktu menabung',
      },
    ],
    correctOptionId: 'bt-m-3-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Pada bunga tunggal, dasar perhitungan bunga selalu tetap yaitu modal awal (M).',
      'Karena M dan i tetap, nominal bunga yang diperoleh setiap periode selalu konstan.',
      'Adapun bunga yang dihitung dari modal ditambah bunga sebelumnya merupakan ciri bunga majemuk.',
    ],
    conclusion:
      'Ciri khas bunga tunggal adalah nominal bunganya dihitung dari modal awal saja sehingga selalu sama setiap periode.',
  },
  {
    id: 'bt-m-4',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Identifikasi Rumus',
    question:
      'Rumus untuk menentukan modal akhir (Mn) pada tabungan bunga tunggal jika diketahui modal awal (M), suku bunga per periode (i), dan lama waktu (t) adalah ....',
    options: [
      { id: 'bt-m-4-a', text: 'Mn = M × (1 + i × t)' },
      { id: 'bt-m-4-b', text: 'Mn = M × (1 + i)^t' },
      { id: 'bt-m-4-c', text: 'Mn = M + (i × t)' },
      { id: 'bt-m-4-d', text: 'Mn = M / (1 + i × t)' },
    ],
    correctOptionId: 'bt-m-4-a',
    formula: 'Mn = M + B = M × (1 + i × t)',
    steps: [
      'Modal akhir adalah jumlah modal awal ditambah besar bunga: Mn = M + B.',
      'Substitusikan B = M × i × t sehingga diperoleh Mn = M + (M × i × t).',
      'Dengan memfaktorkan M keluar, didapat bentuk Mn = M × (1 + i × t).',
    ],
    conclusion: 'Rumus yang benar adalah Mn = M × (1 + i × t).',
  },
  {
    id: 'bt-m-5',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Pemahaman Konsep',
    question:
      'Modal awal sebesar Rp1.000.000 disimpan dengan bunga tunggal sebesar Rp50.000 per tahun. Besar bunga yang diterima khusus pada tahun ke-4 saja adalah ....',
    options: [
      { id: 'bt-m-5-a', text: 'Rp50.000' },
      { id: 'bt-m-5-b', text: 'Rp200.000' },
      { id: 'bt-m-5-c', text: 'Rp100.000' },
      { id: 'bt-m-5-d', text: 'Rp250.000' },
    ],
    correctOptionId: 'bt-m-5-a',
    formula: 'Bunga per periode selalu konstan = M × i',
    steps: [
      'Pada sistem bunga tunggal, besar bunga per tahun nilainya selalu sama karena tidak berbunga lagi.',
      'Rp200.000 adalah total bunga kumulatif selama 4 tahun, bukan bunga pada tahun ke-4 saja.',
      'Jadi, bunga yang diterima khusus pada tahun ke-4 tetap sebesar Rp50.000.',
    ],
    conclusion: 'Besar bunga pada tahun ke-4 saja adalah Rp50.000.',
  },
  {
    id: 'bt-m-6',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Bunga',
    question:
      'Rani menabung uang Rp3.000.000 di koperasi sekolah dengan bunga tunggal 4% per tahun. Besar bunga yang diperoleh Rani setelah 1 tahun adalah ....',
    options: [
      { id: 'bt-m-6-a', text: 'Rp120.000' },
      { id: 'bt-m-6-b', text: 'Rp12.000' },
      { id: 'bt-m-6-c', text: 'Rp240.000' },
      { id: 'bt-m-6-d', text: 'Rp3.120.000' },
    ],
    correctOptionId: 'bt-m-6-a',
    formula: 'B = M × i × t',
    steps: [
      'Diketahui: M = Rp3.000.000, i = 4% = 0,04 per tahun, t = 1 tahun.',
      'Substitusikan ke rumus: B = 3.000.000 × 0,04 × 1.',
      'B = Rp120.000.',
    ],
    conclusion: 'Besar bunga yang diperoleh Rani setelah 1 tahun adalah Rp120.000.',
  },
  {
    id: 'bt-m-7',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Modal Akhir',
    question:
      'Edo menyimpan Rp2.500.000 di bank dengan bunga tunggal 6% per tahun. Total tabungan Edo (modal akhir) setelah 1 tahun adalah ....',
    options: [
      { id: 'bt-m-7-a', text: 'Rp2.650.000' },
      { id: 'bt-m-7-b', text: 'Rp2.515.000' },
      { id: 'bt-m-7-c', text: 'Rp2.600.000' },
      { id: 'bt-m-7-d', text: 'Rp2.750.000' },
    ],
    correctOptionId: 'bt-m-7-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Diketahui: M = Rp2.500.000, i = 6% = 0,06 per tahun, t = 1 tahun.',
      'Langkah 1 — Hitung bunga: B = 2.500.000 × 0,06 × 1 = Rp150.000.',
      'Langkah 2 — Hitung modal akhir: Mn = 2.500.000 + 150.000 = Rp2.650.000.',
    ],
    conclusion: 'Total tabungan Edo setelah 1 tahun adalah Rp2.650.000.',
  },
  {
    id: 'bt-m-8',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Konversi Suku Bunga',
    question:
      'Sebuah tabungan pelajar memberikan bunga tunggal 0,5% per bulan. Suku bunga tersebut setara dengan berapa persen per tahun?',
    options: [
      { id: 'bt-m-8-a', text: '6% per tahun' },
      { id: 'bt-m-8-b', text: '5% per tahun' },
      { id: 'bt-m-8-c', text: '12% per tahun' },
      { id: 'bt-m-8-d', text: '0,6% per tahun' },
    ],
    correctOptionId: 'bt-m-8-a',
    formula: 'i_tahunan = i_bulanan × 12',
    steps: [
      'Dalam 1 tahun terdapat 12 bulan.',
      'Karena bunga bersifat tunggal, suku bunga per tahun tinggal dikalikan 12.',
      'i_tahunan = 0,5% × 12 = 6% per tahun.',
    ],
    conclusion: 'Suku bunga 0,5% per bulan setara dengan 6% per tahun.',
  },
  {
    id: 'bt-m-9',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Suku Bunga',
    question:
      'Modal awal Rp2.000.000 menghasilkan bunga tunggal sebesar Rp160.000 dalam waktu 1 tahun. Suku bunga per tahun pada simpanan tersebut adalah ....',
    options: [
      { id: 'bt-m-9-a', text: '8%' },
      { id: 'bt-m-9-b', text: '4%' },
      { id: 'bt-m-9-c', text: '10%' },
      { id: 'bt-m-9-d', text: '16%' },
    ],
    correctOptionId: 'bt-m-9-a',
    formula: 'i = B / (M × t)',
    steps: [
      'Diketahui: M = Rp2.000.000, B = Rp160.000, t = 1 tahun.',
      'Substitusi ke rumus: i = 160.000 / (2.000.000 × 1) = 160.000 / 2.000.000 = 0,08.',
      'Ubah ke bentuk persen: 0,08 × 100% = 8%.',
    ],
    conclusion: 'Suku bunga per tahun simpanan tersebut adalah 8%.',
  },
  {
    id: 'bt-m-10',
    topic: 'bunga-tunggal',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Lama Waktu',
    question:
      'Modal sebesar Rp1.000.000 disimpan dengan bunga tunggal 10% per tahun. Jika total bunga yang terkumpul mencapai Rp400.000, lama waktu menabung adalah ....',
    options: [
      { id: 'bt-m-10-a', text: '4 tahun' },
      { id: 'bt-m-10-b', text: '2 tahun' },
      { id: 'bt-m-10-c', text: '3 tahun' },
      { id: 'bt-m-10-d', text: '5 tahun' },
    ],
    correctOptionId: 'bt-m-10-a',
    formula: 't = B / (M × i)',
    steps: [
      'Diketahui: M = Rp1.000.000, i = 10% = 0,10 per tahun, B = Rp400.000.',
      'Hitung bunga per tahun: 1.000.000 × 0,10 = Rp100.000 per tahun.',
      'Hitung lama waktu: t = 400.000 / 100.000 = 4 tahun.',
    ],
    conclusion: 'Lama waktu menabung adalah 4 tahun.',
  },

  // --- BUNGA TUNGGAL: SEDANG (10 SOAL) ---
  {
    id: 'bt-s-1',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Tabungan Bank',
    question:
      'Budi menabung uang sebesar Rp2.000.000 di bank dengan bunga tunggal 5% per tahun. Besar bunga yang diperoleh Budi setelah 3 tahun adalah ....',
    options: [
      { id: 'bt-s-1-a', text: 'Rp300.000' },
      { id: 'bt-s-1-b', text: 'Rp100.000' },
      { id: 'bt-s-1-c', text: 'Rp250.000' },
      { id: 'bt-s-1-d', text: 'Rp315.250' },
    ],
    correctOptionId: 'bt-s-1-a',
    formula: 'B = M × i × t',
    steps: [
      'Diketahui: M = Rp2.000.000, i = 5% = 0,05 per tahun, t = 3 tahun.',
      'Hitung bunga per tahun: 2.000.000 × 0,05 = Rp100.000.',
      'Total bunga 3 tahun: B = 100.000 × 3 = Rp300.000.',
    ],
    conclusion: 'Besar bunga yang diperoleh Budi setelah 3 tahun adalah Rp300.000.',
  },
  {
    id: 'bt-s-2',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Koperasi Sekolah',
    question:
      'Siti menyimpan uang sebesar Rp4.000.000 di koperasi dengan suku bunga tunggal 8% per tahun. Total tabungan Siti (modal akhir) setelah 2 tahun adalah ....',
    options: [
      { id: 'bt-s-2-a', text: 'Rp4.640.000' },
      { id: 'bt-s-2-b', text: 'Rp4.320.000' },
      { id: 'bt-s-2-c', text: 'Rp4.665.600' },
      { id: 'bt-s-2-d', text: 'Rp4.800.000' },
    ],
    correctOptionId: 'bt-s-2-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Diketahui: M = Rp4.000.000, i = 8% = 0,08 per tahun, t = 2 tahun.',
      'Langkah 1 — Hitung bunga: B = 4.000.000 × 0,08 × 2 = Rp640.000.',
      'Langkah 2 — Hitung modal akhir: Mn = 4.000.000 + 640.000 = Rp4.640.000.',
    ],
    conclusion: 'Total tabungan Siti setelah 2 tahun adalah Rp4.640.000.',
  },
  {
    id: 'bt-s-3',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Deposito Bank',
    question:
      'Andi mendepositokan uang Rp6.000.000 di bank dengan bunga tunggal 9% per tahun. Besar bunga yang diterima Andi setelah 8 bulan adalah ....',
    options: [
      { id: 'bt-s-3-a', text: 'Rp360.000' },
      { id: 'bt-s-3-b', text: 'Rp540.000' },
      { id: 'bt-s-3-c', text: 'Rp450.000' },
      { id: 'bt-s-3-d', text: 'Rp480.000' },
    ],
    correctOptionId: 'bt-s-3-a',
    formula: 'B = M × i × t  (t dalam tahun)',
    steps: [
      'Diketahui: M = Rp6.000.000, i = 9% = 9/100 per tahun, lama waktu = 8 bulan.',
      'Langkah 1 — Konversi waktu ke tahun: t = 8/12 = 2/3 tahun.',
      'Langkah 2 — Hitung bunga: B = 6.000.000 × (9/100) × (2/3) = 540.000 × (2/3) = Rp360.000.',
    ],
    conclusion: 'Besar bunga yang diterima Andi setelah 8 bulan adalah Rp360.000.',
  },
  {
    id: 'bt-s-4',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Simpanan Bulanan',
    question:
      'Dewi menabung sebesar Rp1.500.000 di sebuah lembaga simpan pinjam dengan bunga tunggal 1,5% per bulan. Jumlah tabungan Dewi setelah 10 bulan adalah ....',
    options: [
      { id: 'bt-s-4-a', text: 'Rp1.725.000' },
      { id: 'bt-s-4-b', text: 'Rp1.650.000' },
      { id: 'bt-s-4-c', text: 'Rp1.750.000' },
      { id: 'bt-s-4-d', text: 'Rp1.825.000' },
    ],
    correctOptionId: 'bt-s-4-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Diketahui: M = Rp1.500.000, i = 1,5% = 0,015 per bulan, t = 10 bulan.',
      'Satuan i (per bulan) dan t (bulan) sudah sama.',
      'Langkah 1 — Hitung bunga: B = 1.500.000 × 0,015 × 10 = Rp225.000.',
      'Langkah 2 — Hitung modal akhir: Mn = 1.500.000 + 225.000 = Rp1.725.000.',
    ],
    conclusion: 'Jumlah tabungan Dewi setelah 10 bulan adalah Rp1.725.000.',
  },
  {
    id: 'bt-s-5',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Modal Awal',
    question:
      'Setelah menabung selama 2 tahun di koperasi dengan bunga tunggal 10% per tahun, besar bunga yang diterima Bagus adalah Rp900.000. Modal awal yang ditabung Bagus adalah ....',
    options: [
      { id: 'bt-s-5-a', text: 'Rp4.500.000' },
      { id: 'bt-s-5-b', text: 'Rp4.000.000' },
      { id: 'bt-s-5-c', text: 'Rp5.000.000' },
      { id: 'bt-s-5-d', text: 'Rp9.000.000' },
    ],
    correctOptionId: 'bt-s-5-a',
    formula: 'M = B / (i × t)',
    steps: [
      'Diketahui: B = Rp900.000, i = 10% = 0,10 per tahun, t = 2 tahun.',
      'Substitusi ke rumus B = M × i × t: 900.000 = M × 0,10 × 2.',
      '900.000 = M × 0,20  →  M = 900.000 / 0,20 = Rp4.500.000.',
    ],
    conclusion: 'Modal awal yang ditabung Bagus adalah Rp4.500.000.',
  },
  {
    id: 'bt-s-6',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Suku Bunga',
    question:
      'Modal sebesar Rp5.000.000 disimpan di bank dengan bunga tunggal. Setelah 2 tahun, tabungannya berkembang menjadi Rp5.750.000. Suku bunga per tahun yang diberikan bank tersebut adalah ....',
    options: [
      { id: 'bt-s-6-a', text: '7,5%' },
      { id: 'bt-s-6-b', text: '15%' },
      { id: 'bt-s-6-c', text: '6,5%' },
      { id: 'bt-s-6-d', text: '8%' },
    ],
    correctOptionId: 'bt-s-6-a',
    formula: 'B = Mn - M  dan  i = B / (M × t)',
    steps: [
      'Diketahui: M = Rp5.000.000, Mn = Rp5.750.000, t = 2 tahun.',
      'Langkah 1 — Hitung besar bunga: B = 5.750.000 - 5.000.000 = Rp750.000.',
      'Langkah 2 — Hitung suku bunga per tahun: i = 750.000 / (5.000.000 × 2) = 750.000 / 10.000.000 = 0,075 = 7,5%.',
    ],
    conclusion: 'Suku bunga per tahun yang diberikan bank adalah 7,5%.',
  },
  {
    id: 'bt-s-7',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Lama Waktu',
    question:
      'Dina menabung Rp3.000.000 di bank dengan bunga tunggal 8% per tahun. Jika ia ingin memperoleh bunga sebesar Rp180.000, berapa bulan Dina harus menabung?',
    options: [
      { id: 'bt-s-7-a', text: '9 bulan' },
      { id: 'bt-s-7-b', text: '6 bulan' },
      { id: 'bt-s-7-c', text: '8 bulan' },
      { id: 'bt-s-7-d', text: '12 bulan' },
    ],
    correctOptionId: 'bt-s-7-a',
    formula: 't = B / (M × i)',
    steps: [
      'Diketahui: M = Rp3.000.000, i = 8% = 0,08 per tahun, B = Rp180.000.',
      'Langkah 1 — Hitung bunga dalam 1 tahun: 3.000.000 × 0,08 = Rp240.000 per tahun.',
      'Langkah 2 — Hitung waktu dalam tahun: t = 180.000 / 240.000 = 3/4 tahun.',
      'Langkah 3 — Ubah ke bulan: (3/4) × 12 bulan = 9 bulan.',
    ],
    conclusion: 'Dina harus menabung selama 9 bulan.',
  },
  {
    id: 'bt-s-8',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Simpanan Triwulan',
    question:
      'Sebuah koperasi pegawai memberikan bunga tunggal 2% per triwulan (3 bulan). Jika Pak Hendra menyimpan Rp10.000.000 selama 1,5 tahun, besar bunga yang diperoleh adalah ....',
    options: [
      { id: 'bt-s-8-a', text: 'Rp1.200.000' },
      { id: 'bt-s-8-b', text: 'Rp300.000' },
      { id: 'bt-s-8-c', text: 'Rp600.000' },
      { id: 'bt-s-8-d', text: 'Rp1.800.000' },
    ],
    correctOptionId: 'bt-s-8-a',
    formula: 'B = M × i × t  (t dalam triwulan)',
    steps: [
      'Diketahui: M = Rp10.000.000, i = 2% = 0,02 per triwulan (3 bulan), lama = 1,5 tahun = 18 bulan.',
      'Langkah 1 — Ubah 18 bulan menjadi satuan triwulan: t = 18 / 3 = 6 triwulan.',
      'Langkah 2 — Hitung bunga: B = 10.000.000 × 0,02 × 6 = 200.000 × 6 = Rp1.200.000.',
    ],
    conclusion: 'Besar bunga yang diperoleh Pak Hendra adalah Rp1.200.000.',
  },
  {
    id: 'bt-s-9',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Simpanan Semester',
    question:
      'Tabungan sebesar Rp8.000.000 disimpan dengan bunga tunggal 3,5% per semester (6 bulan). Jumlah tabungan akhir setelah 2 tahun adalah ....',
    options: [
      { id: 'bt-s-9-a', text: 'Rp9.120.000' },
      { id: 'bt-s-9-b', text: 'Rp8.560.000' },
      { id: 'bt-s-9-c', text: 'Rp8.960.000' },
      { id: 'bt-s-9-d', text: 'Rp9.240.000' },
    ],
    correctOptionId: 'bt-s-9-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Diketahui: M = Rp8.000.000, i = 3,5% = 0,035 per semester, lama = 2 tahun.',
      'Langkah 1 — Karena 1 tahun = 2 semester, maka 2 tahun = 2 × 2 = 4 semester (t = 4).',
      'Langkah 2 — Hitung bunga: B = 8.000.000 × 0,035 × 4 = 280.000 × 4 = Rp1.120.000.',
      'Langkah 3 — Modal akhir: Mn = 8.000.000 + 1.120.000 = Rp9.120.000.',
    ],
    conclusion: 'Jumlah tabungan akhir setelah 2 tahun adalah Rp9.120.000.',
  },
  {
    id: 'bt-s-10',
    topic: 'bunga-tunggal',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Suku Bunga',
    question:
      'Yuda menabung Rp4.000.000 selama 9 bulan dan memperoleh total bunga tunggal sebesar Rp270.000. Besar suku bunga tunggal per bulan adalah ....',
    options: [
      { id: 'bt-s-10-a', text: '0,75% per bulan' },
      { id: 'bt-s-10-b', text: '0,5% per bulan' },
      { id: 'bt-s-10-c', text: '1% per bulan' },
      { id: 'bt-s-10-d', text: '1,25% per bulan' },
    ],
    correctOptionId: 'bt-s-10-a',
    formula: 'i = B / (M × t)',
    steps: [
      'Diketahui: M = Rp4.000.000, t = 9 bulan, B = Rp270.000.',
      'Langkah 1 — Hitung bunga per bulan: 270.000 / 9 = Rp30.000 per bulan.',
      'Langkah 2 — Hitung persentase bunga per bulan: i = 30.000 / 4.000.000 = 0,0075 = 0,75%.',
    ],
    conclusion: 'Suku bunga tunggalnya adalah 0,75% per bulan.',
  },

  // --- BUNGA TUNGGAL: SULIT (10 SOAL) ---
  {
    id: 'bt-d-1',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Analisis Modal Awal',
    question:
      'Setelah menabung selama 15 bulan di bank yang memberikan bunga tunggal 8% per tahun, tabungan Farhan menjadi Rp5.500.000. Modal awal yang ditabung Farhan adalah ....',
    options: [
      { id: 'bt-d-1-a', text: 'Rp5.000.000' },
      { id: 'bt-d-1-b', text: 'Rp4.950.000' },
      { id: 'bt-d-1-c', text: 'Rp4.800.000' },
      { id: 'bt-d-1-d', text: 'Rp5.100.000' },
    ],
    correctOptionId: 'bt-d-1-a',
    formula: 'Mn = M × (1 + i × t)',
    steps: [
      'Diketahui: Mn = Rp5.500.000, i = 8% = 0,08 per tahun, lama = 15 bulan.',
      'Langkah 1 — Ubah waktu ke tahun: t = 15/12 = 1,25 tahun.',
      'Langkah 2 — Hitung faktor pengali modal: 1 + (0,08 × 1,25) = 1 + 0,10 = 1,10.',
      'Langkah 3 — Cari modal awal: M = 5.500.000 / 1,10 = Rp5.000.000.',
    ],
    conclusion: 'Modal awal yang ditabung Farhan adalah Rp5.000.000.',
  },
  {
    id: 'bt-d-2',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Analisis Lama Waktu',
    question:
      'Ibu menabung uang sebesar Rp8.000.000 di bank dengan bunga tunggal 6% per tahun. Jika pada saat diambil tabungannya berjumlah Rp9.000.000, berapa bulan lama Ibu menabung?',
    options: [
      { id: 'bt-d-2-a', text: '25 bulan' },
      { id: 'bt-d-2-b', text: '20 bulan' },
      { id: 'bt-d-2-c', text: '24 bulan' },
      { id: 'bt-d-2-d', text: '30 bulan' },
    ],
    correctOptionId: 'bt-d-2-a',
    formula: 'B = Mn - M  dan  t = B / (M × i)',
    steps: [
      'Diketahui: M = Rp8.000.000, Mn = Rp9.000.000, i = 6% = 0,06 per tahun.',
      'Langkah 1 — Hitung besar bunga: B = 9.000.000 - 8.000.000 = Rp1.000.000.',
      'Langkah 2 — Hitung bunga per tahun: 8.000.000 × 0,06 = Rp480.000 per tahun.',
      'Langkah 3 — Hitung waktu: t = 1.000.000 / 480.000 = 25/12 tahun = (25/12) × 12 = 25 bulan.',
    ],
    conclusion: 'Lama Ibu menabung adalah 25 bulan.',
  },
  {
    id: 'bt-d-3',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Investasi Gabungan',
    question:
      'Pak Adi menginvestasikan modal Rp10.000.000 di Bank A dengan bunga tunggal 6% per tahun dan Rp10.000.000 di Bank B dengan bunga tunggal p% per tahun. Setelah 18 bulan, total bunga gabungan dari kedua bank adalah Rp2.100.000. Nilai suku bunga p di Bank B per tahun adalah ....',
    options: [
      { id: 'bt-d-3-a', text: '8%' },
      { id: 'bt-d-3-b', text: '7%' },
      { id: 'bt-d-3-c', text: '9%' },
      { id: 'bt-d-3-d', text: '10%' },
    ],
    correctOptionId: 'bt-d-3-a',
    formula: 'B_total = B_A + B_B  dengan  B = M × i × t',
    steps: [
      'Diketahui: M_A = M_B = Rp10.000.000, i_A = 6% = 0,06 per tahun, t = 18/12 = 1,5 tahun, B_total = Rp2.100.000.',
      'Langkah 1 — Hitung bunga Bank A: B_A = 10.000.000 × 0,06 × 1,5 = Rp900.000.',
      'Langkah 2 — Hitung bunga Bank B: B_B = 2.100.000 - 900.000 = Rp1.200.000.',
      'Langkah 3 — Cari i_B: 1.200.000 = 10.000.000 × i_B × 1,5  →  i_B = 1.200.000 / 15.000.000 = 0,08 = 8%.',
    ],
    conclusion: 'Nilai suku bunga p di Bank B adalah 8% per tahun.',
  },
  {
    id: 'bt-d-4',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Pinjaman Koperasi',
    question:
      'Sebuah koperasi memberikan pinjaman modal usaha sebesar Rp12.000.000 dengan bunga tunggal 10% per tahun dan harus dilunasi sekaligus beserta bunganya dalam waktu 18 bulan. Total uang yang harus dibayar saat pelunasan adalah ....',
    options: [
      { id: 'bt-d-4-a', text: 'Rp13.800.000' },
      { id: 'bt-d-4-b', text: 'Rp13.200.000' },
      { id: 'bt-d-4-c', text: 'Rp14.400.000' },
      { id: 'bt-d-4-d', text: 'Rp13.600.000' },
    ],
    correctOptionId: 'bt-d-4-a',
    formula: 'B = M × i × t  dan  Mn = M + B',
    steps: [
      'Diketahui: M = Rp12.000.000, i = 10% = 0,10 per tahun, lama = 18 bulan.',
      'Langkah 1 — Konversi waktu ke tahun: t = 18/12 = 1,5 tahun.',
      'Langkah 2 — Hitung total bunga: B = 12.000.000 × 0,10 × 1,5 = 1.200.000 × 1,5 = Rp1.800.000.',
      'Langkah 3 — Hitung total pelunasan: Mn = 12.000.000 + 1.800.000 = Rp13.800.000.',
    ],
    conclusion: 'Total uang yang harus dibayar saat pelunasan adalah Rp13.800.000.',
  },
  {
    id: 'bt-d-5',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Pajak Bunga Deposito',
    question:
      'Seorang nasabah menyimpan uang di bank dengan bunga tunggal 12% per tahun. Setelah 10 bulan, ia memperoleh bunga kotor Rp600.000 sebelum pajak. Jika bunga tersebut dikenai pajak 20%, total uang (modal awal + bunga bersih) pada akhir bulan ke-10 adalah ....',
    options: [
      { id: 'bt-d-5-a', text: 'Rp6.480.000' },
      { id: 'bt-d-5-b', text: 'Rp6.600.000' },
      { id: 'bt-d-5-c', text: 'Rp6.120.000' },
      { id: 'bt-d-5-d', text: 'Rp5.480.000' },
    ],
    correctOptionId: 'bt-d-5-a',
    formula: 'M = B / (i × t)  dan  B_bersih = B × (1 - pajak)',
    steps: [
      'Diketahui: B_kotor = Rp600.000, i = 12% = 0,12 per tahun, t = 10/12 tahun, pajak = 20%.',
      'Langkah 1 — Cari modal awal M: 600.000 = M × 0,12 × (10/12) = M × 0,10  →  M = Rp6.000.000.',
      'Langkah 2 — Hitung pajak bunga: 20% × Rp600.000 = Rp120.000.',
      'Langkah 3 — Bunga bersih = 600.000 - 120.000 = Rp480.000.',
      'Langkah 4 — Total uang akhir = 6.000.000 + 480.000 = Rp6.480.000.',
    ],
    conclusion: 'Total uang nasabah pada akhir bulan ke-10 adalah Rp6.480.000.',
  },
  {
    id: 'bt-d-6',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Target Saldo 2x Lipat',
    question:
      'Agar suatu tabungan dengan sistem bunga tunggal 12,5% per tahun nilainya menjadi dua kali lipat dari modal awal (Mn = 2M), berapa tahun waktu yang dibutuhkan?',
    options: [
      { id: 'bt-d-6-a', text: '8 tahun' },
      { id: 'bt-d-6-b', text: '6 tahun' },
      { id: 'bt-d-6-c', text: '10 tahun' },
      { id: 'bt-d-6-d', text: '12 tahun' },
    ],
    correctOptionId: 'bt-d-6-a',
    formula: 'Mn = 2M  berarti  B = M,  sehingga  M = M × i × t',
    steps: [
      'Modal menjadi 2 kali lipat berarti Mn = 2M, sehingga besar bunga harus sama dengan modal awal (B = Mn - M = M).',
      'Substitusi B = M ke rumus bunga tunggal: M = M × 0,125 × t.',
      'Bagi kedua ruas dengan M: 1 = 0,125 × t.',
      'Hitung t: t = 1 / 0,125 = 8 tahun.',
    ],
    conclusion: 'Waktu yang dibutuhkan agar modal menjadi dua kali lipat adalah 8 tahun.',
  },
  {
    id: 'bt-d-7',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Perbandingan Penawaran',
    question:
      'Arif ingin menabung Rp6.000.000 selama 16 bulan. Bank Melati menawarkan bunga tunggal 9% per tahun, sedangkan Bank Mawar menawarkan bunga tunggal 0,8% per bulan. Selisih bunga yang diperoleh Arif antara kedua bank tersebut adalah ....',
    options: [
      { id: 'bt-d-7-a', text: 'Rp48.000' },
      { id: 'bt-d-7-b', text: 'Rp24.000' },
      { id: 'bt-d-7-c', text: 'Rp72.000' },
      { id: 'bt-d-7-d', text: 'Rp96.000' },
    ],
    correctOptionId: 'bt-d-7-a',
    formula: 'Selisih = |B_Mawar - B_Melati|',
    steps: [
      'Diketahui: M = Rp6.000.000 dan lama menabung = 16 bulan.',
      'Langkah 1 — Hitung bunga Bank Melati (t = 16/12 = 4/3 tahun): B1 = 6.000.000 × 0,09 × (4/3) = 540.000 × (4/3) = Rp720.000.',
      'Langkah 2 — Hitung bunga Bank Mawar (t = 16 bulan): B2 = 6.000.000 × 0,008 × 16 = 48.000 × 16 = Rp768.000.',
      'Langkah 3 — Hitung selisihnya: 768.000 - 720.000 = Rp48.000.',
    ],
    conclusion: 'Selisih bunga antara kedua bank tersebut adalah Rp48.000.',
  },
  {
    id: 'bt-d-8',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Analisis Suku Bunga',
    question:
      'Modal sebesar Rp7.500.000 ditabung selama 20 bulan dengan sistem bunga tunggal sehingga saldonya menjadi Rp8.500.000. Suku bunga tunggal per tahun yang diberikan adalah ....',
    options: [
      { id: 'bt-d-8-a', text: '8% per tahun' },
      { id: 'bt-d-8-b', text: '6% per tahun' },
      { id: 'bt-d-8-c', text: '9% per tahun' },
      { id: 'bt-d-8-d', text: '10% per tahun' },
    ],
    correctOptionId: 'bt-d-8-a',
    formula: 'i = B / (M × t)',
    steps: [
      'Diketahui: M = Rp7.500.000, Mn = Rp8.500.000, t = 20/12 = 5/3 tahun.',
      'Langkah 1 — Hitung bunga: B = 8.500.000 - 7.500.000 = Rp1.000.000.',
      'Langkah 2 — Substitusi ke B = M × i × t: 1.000.000 = 7.500.000 × i × (5/3).',
      'Langkah 3 — 1.000.000 = 12.500.000 × i  →  i = 1.000.000 / 12.500.000 = 0,08 = 8% per tahun.',
    ],
    conclusion: 'Suku bunga tunggal yang diberikan adalah 8% per tahun.',
  },
  {
    id: 'bt-d-9',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Alokasi Dua Deposito',
    question:
      'Bu Maya memiliki dana Rp15.000.000 yang dibagi ke dua deposito. Sebagian disimpan dengan bunga tunggal 6% per tahun dan sisanya dengan bunga tunggal 10% per tahun. Setelah 1 tahun, total bunga dari kedua deposito adalah Rp1.220.000. Besar modal yang disimpan pada bunga 10% per tahun adalah ....',
    options: [
      { id: 'bt-d-9-a', text: 'Rp8.000.000' },
      { id: 'bt-d-9-b', text: 'Rp7.000.000' },
      { id: 'bt-d-9-c', text: 'Rp7.500.000' },
      { id: 'bt-d-9-d', text: 'Rp9.000.000' },
    ],
    correctOptionId: 'bt-d-9-a',
    formula: 'B_total = (M1 × i1 × 1) + (M2 × i2 × 1)',
    steps: [
      'Misalkan modal di bunga 10% adalah x, maka modal di bunga 6% adalah (15.000.000 - x).',
      'Langkah 1 — Buat persamaan total bunga: 0,10x + 0,06(15.000.000 - x) = 1.220.000.',
      'Langkah 2 — Jabarkan: 0,10x + 900.000 - 0,06x = 1.220.000.',
      'Langkah 3 — Sederhanakan: 0,04x = 320.000  →  x = 320.000 / 0,04 = Rp8.000.000.',
    ],
    conclusion: 'Modal yang disimpan pada bunga 10% per tahun adalah Rp8.000.000.',
  },
  {
    id: 'bt-d-10',
    topic: 'bunga-tunggal',
    difficulty: 'Sulit',
    contextTag: 'Setoran Tambahan',
    question:
      'Pada awal tahun, Kevin menabung Rp4.000.000 di bank dengan bunga tunggal 6% per tahun. Tepat setelah 6 bulan, ia menyetor tambahan uang sebesar Rp2.000.000 ke rekening yang sama. Total saldo tabungan Kevin pada akhir tahun ke-1 adalah ....',
    options: [
      { id: 'bt-d-10-a', text: 'Rp6.300.000' },
      { id: 'bt-d-10-b', text: 'Rp6.240.000' },
      { id: 'bt-d-10-c', text: 'Rp6.360.000' },
      { id: 'bt-d-10-d', text: 'Rp6.180.000' },
    ],
    correctOptionId: 'bt-d-10-a',
    formula: 'B_total = B_semester1 + B_semester2',
    steps: [
      'Bagi perhitungan menjadi dua periode masing-masing 6 bulan (t = 0,5 tahun).',
      'Langkah 1 — Bunga 6 bulan pertama (modal Rp4.000.000): B1 = 4.000.000 × 0,06 × 0,5 = Rp120.000.',
      'Langkah 2 — Setelah tambahan setoran, modal menjadi 4.000.000 + 2.000.000 = Rp6.000.000.',
      'Langkah 3 — Bunga 6 bulan kedua: B2 = 6.000.000 × 0,06 × 0,5 = Rp180.000.',
      'Langkah 4 — Total saldo akhir = 6.000.000 + 120.000 + 180.000 = Rp6.300.000.',
    ],
    conclusion: 'Total saldo tabungan Kevin pada akhir tahun ke-1 adalah Rp6.300.000.',
  },

  // =========================================================================
  // MATERI 2: BUNGA MAJEMUK (30 SOAL: 10 MUDAH, 10 SEDANG, 10 SULIT)
  // =========================================================================

  // --- BUNGA MAJEMUK: MUDAH (10 SOAL) ---
  {
    id: 'bm-m-1',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Identifikasi Rumus',
    question:
      'Rumus yang benar untuk menentukan modal akhir (Mn) pada investasi dengan sistem bunga majemuk, jika diketahui modal awal M, suku bunga per periode i, dan lama waktu t periode, adalah ....',
    options: [
      { id: 'bm-m-1-a', text: 'Mn = M × (1 + i)^t' },
      { id: 'bm-m-1-b', text: 'Mn = M × (1 + i × t)' },
      { id: 'bm-m-1-c', text: 'Mn = M × i × t' },
      { id: 'bm-m-1-d', text: 'Mn = M + (1 + i)^t' },
    ],
    correctOptionId: 'bm-m-1-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Pada bunga majemuk, modal berkembang secara bertingkat karena bunga setiap periode ikut digabungkan ke modal.',
      'Setiap 1 periode berlalu, modal dikalikan dengan faktor (1 + i).',
      'Setelah t periode, modal dikalikan (1 + i) sebanyak t kali sehingga menjadi Mn = M × (1 + i)^t.',
    ],
    conclusion: 'Rumus modal akhir bunga majemuk adalah Mn = M × (1 + i)^t.',
  },
  {
    id: 'bm-m-2',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Pemahaman Konsep',
    question:
      'Mengapa pada jangka waktu lebih dari 1 periode, tabungan dengan bunga majemuk menghasilkan bunga lebih besar dibanding bunga tunggal (dengan modal awal dan suku bunga yang sama)?',
    options: [
      {
        id: 'bm-m-2-a',
        text: 'Karena bunga pada periode sebelumnya ikut berbunga pada periode berikutnya',
      },
      {
        id: 'bm-m-2-b',
        text: 'Karena suku bunga majemuk selalu dikalikan dua setiap tahunnya',
      },
      {
        id: 'bm-m-2-c',
        text: 'Karena modal awal pada bunga majemuk otomatis mendapat subsidi',
      },
      {
        id: 'bm-m-2-d',
        text: 'Karena lama waktu t pada bunga majemuk tidak memengaruhi perhitungan',
      },
    ],
    correctOptionId: 'bm-m-2-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Pada periode pertama (t = 1), besar bunga tunggal dan bunga majemuk masih bernilai sama.',
      'Mulai periode kedua dan seterusnya, bunga majemuk dihitung dari modal awal ditambah bunga yang sudah terbentuk.',
      'Prinsip bunga berbunga inilah yang membuat nilainya tumbuh lebih cepat.',
    ],
    conclusion:
      'Bunga majemuk lebih besar karena bunga periode sebelumnya ikut berbunga pada periode berikutnya.',
  },
  {
    id: 'bm-m-3',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Periode Pemajemukan',
    question:
      'Suatu simpanan menawarkan suku bunga majemuk 8% per tahun yang dimajemukkan setiap semester (6 bulan sekali). Jika seseorang menabung selama 2 tahun, nilai suku bunga per periode (i) dan banyak periode (t) yang tepat adalah ....',
    options: [
      { id: 'bm-m-3-a', text: 'i = 4% dan t = 4 periode' },
      { id: 'bm-m-3-b', text: 'i = 8% dan t = 2 periode' },
      { id: 'bm-m-3-c', text: 'i = 4% dan t = 2 periode' },
      { id: 'bm-m-3-d', text: 'i = 2% dan t = 8 periode' },
    ],
    correctOptionId: 'bm-m-3-a',
    formula: 'i_periode = i_tahunan / m  dan  t = lama tahun × m',
    steps: [
      '1 tahun terdiri dari 2 semester (m = 2).',
      'Suku bunga per semester: i = 8% / 2 = 4%.',
      'Banyak periode selama 2 tahun: t = 2 × 2 = 4 periode.',
    ],
    conclusion: 'Nilai yang tepat adalah i = 4% dan t = 4 periode.',
  },
  {
    id: 'bm-m-4',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Bunga',
    question:
      'Modal awal Rp5.000.000 disimpan di bank dengan bunga majemuk 6% per tahun. Besar bunga yang diperoleh pada akhir tahun ke-1 adalah ....',
    options: [
      { id: 'bm-m-4-a', text: 'Rp300.000' },
      { id: 'bm-m-4-b', text: 'Rp600.000' },
      { id: 'bm-m-4-c', text: 'Rp318.000' },
      { id: 'bm-m-4-d', text: 'Rp5.300.000' },
    ],
    correctOptionId: 'bm-m-4-a',
    formula: 'Mn = M × (1 + i)^t  dan  B = Mn - M',
    steps: [
      'Untuk t = 1 tahun: M1 = 5.000.000 × (1 + 0,06)^1 = 5.000.000 × 1,06 = Rp5.300.000.',
      'Besar bunga pada tahun ke-1 adalah B = 5.300.000 - 5.000.000 = Rp300.000.',
    ],
    conclusion: 'Besar bunga pada akhir tahun ke-1 adalah Rp300.000.',
  },
  {
    id: 'bm-m-5',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Periode Pemajemukan',
    question:
      'Sebuah deposito memberikan bunga majemuk 12% per tahun yang dimajemukkan setiap triwulan (3 bulan). Nilai suku bunga per triwulan (i) dan banyak periode (t) selama 1 tahun adalah ....',
    options: [
      { id: 'bm-m-5-a', text: 'i = 3% dan t = 4 periode' },
      { id: 'bm-m-5-b', text: 'i = 4% dan t = 3 periode' },
      { id: 'bm-m-5-c', text: 'i = 6% dan t = 2 periode' },
      { id: 'bm-m-5-d', text: 'i = 12% dan t = 4 periode' },
    ],
    correctOptionId: 'bm-m-5-a',
    formula: '1 tahun = 4 triwulan',
    steps: [
      'Karena 1 triwulan = 3 bulan, maka dalam 1 tahun terdapat 12 / 3 = 4 triwulan.',
      'Suku bunga per triwulan: i = 12% / 4 = 3%.',
      'Banyak periode selama 1 tahun: t = 4 periode.',
    ],
    conclusion: 'Nilai yang tepat adalah i = 3% dan t = 4 periode.',
  },
  {
    id: 'bm-m-6',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Modal Akhir',
    question:
      'Modal sebesar Rp2.000.000 diinvestasikan dengan bunga majemuk 10% per tahun. Nilai modal akhir setelah 1 tahun adalah ....',
    options: [
      { id: 'bm-m-6-a', text: 'Rp2.200.000' },
      { id: 'bm-m-6-b', text: 'Rp2.020.000' },
      { id: 'bm-m-6-c', text: 'Rp2.420.000' },
      { id: 'bm-m-6-d', text: 'Rp200.000' },
    ],
    correctOptionId: 'bm-m-6-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp2.000.000, i = 10% = 0,10, t = 1.',
      'Substitusi ke rumus: M1 = 2.000.000 × (1 + 0,10)^1 = 2.000.000 × 1,10 = Rp2.200.000.',
    ],
    conclusion: 'Modal akhir setelah 1 tahun adalah Rp2.200.000.',
  },
  {
    id: 'bm-m-7',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Menghitung Modal Akhir',
    question:
      'Lina menyimpan uang Rp1.000.000 di bank dengan bunga majemuk 5% per tahun. Saldo tabungan Lina setelah 2 tahun adalah ....',
    options: [
      { id: 'bm-m-7-a', text: 'Rp1.102.500' },
      { id: 'bm-m-7-b', text: 'Rp1.100.000' },
      { id: 'bm-m-7-c', text: 'Rp1.050.000' },
      { id: 'bm-m-7-d', text: 'Rp1.157.625' },
    ],
    correctOptionId: 'bm-m-7-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp1.000.000, i = 5% = 0,05 per tahun, t = 2 tahun.',
      'Hitung (1 + 0,05)^2 = (1,05)^2 = 1,1025.',
      'M2 = 1.000.000 × 1,1025 = Rp1.102.500.',
    ],
    conclusion: 'Saldo tabungan Lina setelah 2 tahun adalah Rp1.102.500.',
  },
  {
    id: 'bm-m-8',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Identifikasi Rumus',
    question:
      'Jika diketahui modal awal M dan modal akhir bunga majemuk Mn, rumus yang tepat untuk menentukan besar bunga (B) yang diperoleh adalah ....',
    options: [
      { id: 'bm-m-8-a', text: 'B = Mn - M' },
      { id: 'bm-m-8-b', text: 'B = Mn + M' },
      { id: 'bm-m-8-c', text: 'B = Mn / M' },
      { id: 'bm-m-8-d', text: 'B = M × (1 + i)^t' },
    ],
    correctOptionId: 'bm-m-8-a',
    formula: 'B = Mn - M',
    steps: [
      'Modal akhir (Mn) terdiri dari modal awal (M) ditambah seluruh bunga majemuk (B) yang terkumpul.',
      'Oleh karena itu, besar bunga saja diperoleh dengan mengurangkan modal akhir dengan modal awal: B = Mn - M.',
    ],
    conclusion: 'Rumus yang tepat adalah B = Mn - M.',
  },
  {
    id: 'bm-m-9',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Pemahaman Konsep',
    question:
      'Sebuah produk tabungan memberikan bunga majemuk yang dihitung dan digabungkan ke modal setiap bulan. Banyaknya periode pemajemukan (t) jika menabung selama 2 tahun adalah ....',
    options: [
      { id: 'bm-m-9-a', text: '24 periode' },
      { id: 'bm-m-9-b', text: '12 periode' },
      { id: 'bm-m-9-c', text: '8 periode' },
      { id: 'bm-m-9-d', text: '4 periode' },
    ],
    correctOptionId: 'bm-m-9-a',
    formula: 't = lama tahun × 12 bulan',
    steps: [
      'Karena bunga dimajemukkan setiap bulan, 1 tahun memiliki 12 periode.',
      'Selama 2 tahun, banyak periode pemajemukan adalah t = 2 × 12 = 24 periode.',
    ],
    conclusion: 'Banyaknya periode pemajemukan selama 2 tahun adalah 24 periode.',
  },
  {
    id: 'bm-m-10',
    topic: 'bunga-majemuk',
    difficulty: 'Mudah',
    contextTag: 'Identifikasi Faktor Bunga',
    question:
      'Dalam menghitung modal akhir bunga majemuk Mn = M × (1 + i)^t untuk suku bunga 10% per tahun selama 2 tahun, nilai faktor (1 + i)^t adalah ....',
    options: [
      { id: 'bm-m-10-a', text: '1,21' },
      { id: 'bm-m-10-b', text: '1,20' },
      { id: 'bm-m-10-c', text: '1,10' },
      { id: 'bm-m-10-d', text: '1,331' },
    ],
    correctOptionId: 'bm-m-10-a',
    formula: '(1 + i)^t',
    steps: [
      'Diketahui i = 10% = 0,10 dan t = 2.',
      'Hitung (1 + 0,10)^2 = (1,1)^2 = 1,1 × 1,1 = 1,21.',
    ],
    conclusion: 'Nilai faktor (1 + i)^t adalah 1,21.',
  },

  // --- BUNGA MAJEMUK: SEDANG (10 SOAL) ---
  {
    id: 'bm-s-1',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Tabungan Pelajar',
    question:
      'Dinda menabung uang sebesar Rp1.000.000 di bank dengan suku bunga majemuk 10% per tahun. Jumlah tabungan Dinda setelah 2 tahun adalah ....',
    options: [
      { id: 'bm-s-1-a', text: 'Rp1.210.000' },
      { id: 'bm-s-1-b', text: 'Rp1.200.000' },
      { id: 'bm-s-1-c', text: 'Rp1.100.000' },
      { id: 'bm-s-1-d', text: 'Rp1.331.000' },
    ],
    correctOptionId: 'bm-s-1-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp1.000.000, i = 10% = 0,1 per tahun, t = 2 tahun.',
      'Langkah 1 — Hitung (1 + 0,1)^2 = (1,1)^2 = 1,21.',
      'Langkah 2 — M2 = 1.000.000 × 1,21 = Rp1.210.000.',
    ],
    conclusion: 'Jumlah tabungan Dinda setelah 2 tahun adalah Rp1.210.000.',
  },
  {
    id: 'bm-s-2',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Investasi Sederhana',
    question:
      'Raka berinvestasi sebesar Rp2.000.000 pada produk keuangan dengan imbal hasil bunga majemuk 10% per tahun. Nilai investasi Raka pada akhir tahun ke-3 adalah ....',
    options: [
      { id: 'bm-s-2-a', text: 'Rp2.662.000' },
      { id: 'bm-s-2-b', text: 'Rp2.600.000' },
      { id: 'bm-s-2-c', text: 'Rp2.420.000' },
      { id: 'bm-s-2-d', text: 'Rp2.660.000' },
    ],
    correctOptionId: 'bm-s-2-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp2.000.000, i = 10% = 0,1 per tahun, t = 3 tahun.',
      'Langkah 1 — Hitung (1,1)^3 = 1,1 × 1,1 × 1,1 = 1,331.',
      'Langkah 2 — M3 = 2.000.000 × 1,331 = Rp2.662.000.',
    ],
    conclusion: 'Nilai investasi Raka pada akhir tahun ke-3 adalah Rp2.662.000.',
  },
  {
    id: 'bm-s-3',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Besar Bunga',
    question:
      'Modal sebesar Rp5.000.000 disimpan di bank dengan bunga majemuk 4% per tahun selama 2 tahun. Besar bunga majemuk yang diperoleh setelah 2 tahun adalah ....',
    options: [
      { id: 'bm-s-3-a', text: 'Rp408.000' },
      { id: 'bm-s-3-b', text: 'Rp400.000' },
      { id: 'bm-s-3-c', text: 'Rp416.000' },
      { id: 'bm-s-3-d', text: 'Rp5.408.000' },
    ],
    correctOptionId: 'bm-s-3-a',
    formula: 'Mn = M × (1 + i)^t  dan  B = Mn - M',
    steps: [
      'Diketahui: M = Rp5.000.000, i = 4% = 0,04 per tahun, t = 2 tahun.',
      'Langkah 1 — Hitung modal akhir: M2 = 5.000.000 × (1,04)^2 = 5.000.000 × 1,0816 = Rp5.408.000.',
      'Langkah 2 — Hitung besar bunga: B = 5.408.000 - 5.000.000 = Rp408.000.',
    ],
    conclusion: 'Besar bunga majemuk yang diperoleh adalah Rp408.000.',
  },
  {
    id: 'bm-s-4',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Deposito Triwulan',
    question:
      'Ibu menyimpan uang Rp4.000.000 dalam deposito dengan bunga majemuk 2% per triwulan (3 bulan). Nilai tabungan Ibu setelah 6 bulan adalah ....',
    options: [
      { id: 'bm-s-4-a', text: 'Rp4.161.600' },
      { id: 'bm-s-4-b', text: 'Rp4.160.000' },
      { id: 'bm-s-4-c', text: 'Rp4.480.000' },
      { id: 'bm-s-4-d', text: 'Rp4.244.832' },
    ],
    correctOptionId: 'bm-s-4-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp4.000.000, i = 2% = 0,02 per triwulan, lama = 6 bulan.',
      'Langkah 1 — Ubah waktu 6 bulan ke triwulan: t = 6 / 3 = 2 periode.',
      'Langkah 2 — Hitung (1,02)^2 = 1,0404.',
      'Langkah 3 — M2 = 4.000.000 × 1,0404 = Rp4.161.600.',
    ],
    conclusion: 'Nilai tabungan Ibu setelah 6 bulan adalah Rp4.161.600.',
  },
  {
    id: 'bm-s-5',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Modal Akhir',
    question:
      'Modal sebesar Rp3.000.000 diinvestasikan dengan sistem bunga majemuk 20% per tahun. Nilai modal tersebut setelah 2 tahun adalah ....',
    options: [
      { id: 'bm-s-5-a', text: 'Rp4.320.000' },
      { id: 'bm-s-5-b', text: 'Rp4.200.000' },
      { id: 'bm-s-5-c', text: 'Rp3.600.000' },
      { id: 'bm-s-5-d', text: 'Rp5.184.000' },
    ],
    correctOptionId: 'bm-s-5-a',
    formula: 'Mn = M × (1 + i)^t',
    steps: [
      'Diketahui: M = Rp3.000.000, i = 20% = 0,20 per tahun, t = 2 tahun.',
      'Langkah 1 — Hitung (1 + 0,20)^2 = (1,2)^2 = 1,44.',
      'Langkah 2 — M2 = 3.000.000 × 1,44 = Rp4.320.000.',
    ],
    conclusion: 'Nilai modal setelah 2 tahun adalah Rp4.320.000.',
  },
  {
    id: 'bm-s-6',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Besar Bunga',
    question:
      'Tabungan sebesar Rp4.000.000 disimpan di bank dengan bunga majemuk 10% per tahun selama 3 tahun. Besar bunga majemuk yang dihasilkan adalah ....',
    options: [
      { id: 'bm-s-6-a', text: 'Rp1.324.000' },
      { id: 'bm-s-6-b', text: 'Rp1.200.000' },
      { id: 'bm-s-6-c', text: 'Rp5.324.000' },
      { id: 'bm-s-6-d', text: 'Rp1.331.000' },
    ],
    correctOptionId: 'bm-s-6-a',
    formula: 'Mn = M × (1 + i)^t  dan  B = Mn - M',
    steps: [
      'Diketahui: M = Rp4.000.000, i = 10% = 0,1 per tahun, t = 3 tahun.',
      'Langkah 1 — Hitung modal akhir: M3 = 4.000.000 × (1,1)^3 = 4.000.000 × 1,331 = Rp5.324.000.',
      'Langkah 2 — Hitung besar bunga: B = 5.324.000 - 4.000.000 = Rp1.324.000.',
    ],
    conclusion: 'Besar bunga majemuk yang dihasilkan adalah Rp1.324.000.',
  },
  {
    id: 'bm-s-7',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Modal Awal',
    question:
      'Setelah menabung selama 2 tahun di bank dengan bunga majemuk 10% per tahun, saldo tabungan Fajar menjadi Rp3.630.000. Modal awal Fajar adalah ....',
    options: [
      { id: 'bm-s-7-a', text: 'Rp3.000.000' },
      { id: 'bm-s-7-b', text: 'Rp3.025.000' },
      { id: 'bm-s-7-c', text: 'Rp2.900.000' },
      { id: 'bm-s-7-d', text: 'Rp3.300.000' },
    ],
    correctOptionId: 'bm-s-7-a',
    formula: 'M = Mn / (1 + i)^t',
    steps: [
      'Diketahui: M2 = Rp3.630.000, i = 10% = 0,1 per tahun, t = 2 tahun.',
      'Langkah 1 — Hitung (1 + 0,1)^2 = (1,1)^2 = 1,21.',
      'Langkah 2 — Cari modal awal: M = 3.630.000 / 1,21 = Rp3.000.000.',
    ],
    conclusion: 'Modal awal Fajar adalah Rp3.000.000.',
  },
  {
    id: 'bm-s-8',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Pemajemukan Semester',
    question:
      'Modal sebesar Rp5.000.000 disimpan dengan bunga 6% per tahun yang dimajemukkan setiap semester (6 bulan). Jumlah tabungan setelah 1 tahun adalah ....',
    options: [
      { id: 'bm-s-8-a', text: 'Rp5.304.500' },
      { id: 'bm-s-8-b', text: 'Rp5.300.000' },
      { id: 'bm-s-8-c', text: 'Rp5.618.000' },
      { id: 'bm-s-8-d', text: 'Rp5.150.000' },
    ],
    correctOptionId: 'bm-s-8-a',
    formula: 'Mn = M × (1 + i)^t  (i dan t per semester)',
    steps: [
      'Diketahui: M = Rp5.000.000, bunga tahunan = 6% dimajemukkan per semester, lama = 1 tahun.',
      'Langkah 1 — Suku bunga per semester: i = 6% / 2 = 3% = 0,03.',
      'Langkah 2 — Banyak periode dalam 1 tahun: t = 1 × 2 = 2 semester.',
      'Langkah 3 — M2 = 5.000.000 × (1,03)^2 = 5.000.000 × 1,0609 = Rp5.304.500.',
    ],
    conclusion: 'Jumlah tabungan setelah 1 tahun adalah Rp5.304.500.',
  },
  {
    id: 'bm-s-9',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Suku Bunga',
    question:
      'Modal awal Rp2.000.000 disimpan dengan sistem bunga majemuk selama 2 tahun hingga berkembang menjadi Rp2.420.000. Suku bunga majemuk per tahun yang diterapkan adalah ....',
    options: [
      { id: 'bm-s-9-a', text: '10% per tahun' },
      { id: 'bm-s-9-b', text: '10,5% per tahun' },
      { id: 'bm-s-9-c', text: '11% per tahun' },
      { id: 'bm-s-9-d', text: '21% per tahun' },
    ],
    correctOptionId: 'bm-s-9-a',
    formula: '(1 + i)^t = Mn / M',
    steps: [
      'Diketahui: M = Rp2.000.000, M2 = Rp2.420.000, t = 2 tahun.',
      'Langkah 1 — Substitusi ke rumus: (1 + i)^2 = 2.420.000 / 2.000.000 = 1,21.',
      'Langkah 2 — Tarik akar kuadrat kedua ruas: 1 + i = √1,21 = 1,1.',
      'Langkah 3 — i = 1,1 - 1 = 0,1 = 10% per tahun.',
    ],
    conclusion: 'Suku bunga majemuknya adalah 10% per tahun.',
  },
  {
    id: 'bm-s-10',
    topic: 'bunga-majemuk',
    difficulty: 'Sedang',
    contextTag: 'Menghitung Lama Waktu',
    question:
      'Modal sebesar Rp1.000.000 disimpan dengan bunga majemuk 20% per tahun. Setelah beberapa tahun, saldo tabungannya menjadi Rp1.728.000. Lama menabung tersebut adalah ....',
    options: [
      { id: 'bm-s-10-a', text: '3 tahun' },
      { id: 'bm-s-10-b', text: '2 tahun' },
      { id: 'bm-s-10-c', text: '4 tahun' },
      { id: 'bm-s-10-d', text: '5 tahun' },
    ],
    correctOptionId: 'bm-s-10-a',
    formula: '(1 + i)^t = Mn / M',
    steps: [
      'Diketahui: M = Rp1.000.000, Mn = Rp1.728.000, i = 20% = 0,2 per tahun.',
      'Langkah 1 — Hitung rasio modal: (1 + 0,2)^t = 1.728.000 / 1.000.000 = 1,728.',
      'Langkah 2 — Uji pangkat bilangan 1,2: (1,2)^2 = 1,44 dan (1,2)^3 = 1,44 × 1,2 = 1,728.',
      'Jadi, nilai t = 3 tahun.',
    ],
    conclusion: 'Lama menabung tersebut adalah 3 tahun.',
  },

  // --- BUNGA MAJEMUK: SULIT (10 SOAL) ---
  {
    id: 'bm-d-1',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Analisis Modal Awal',
    question:
      'Setelah 3 tahun menabung di bank dengan suku bunga majemuk 10% per tahun, saldo tabungan Gilang menjadi Rp6.655.000. Modal awal yang disetor Gilang pertama kali adalah ....',
    options: [
      { id: 'bm-d-1-a', text: 'Rp5.000.000' },
      { id: 'bm-d-1-b', text: 'Rp5.100.000' },
      { id: 'bm-d-1-c', text: 'Rp4.850.000' },
      { id: 'bm-d-1-d', text: 'Rp5.500.000' },
    ],
    correctOptionId: 'bm-d-1-a',
    formula: 'M = Mn / (1 + i)^t',
    steps: [
      'Diketahui: M3 = Rp6.655.000, i = 10% = 0,1 per tahun, t = 3 tahun.',
      'Langkah 1 — Hitung (1 + 0,1)^3 = (1,1)^3 = 1,331.',
      'Langkah 2 — Substitusi ke rumus: 6.655.000 = M × 1,331.',
      'Langkah 3 — M = 6.655.000 / 1,331 = Rp5.000.000.',
    ],
    conclusion: 'Modal awal yang disetor Gilang adalah Rp5.000.000.',
  },
  {
    id: 'bm-d-2',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Investasi Semester',
    question:
      'Nadia menginvestasikan uang Rp10.000.000 dengan bunga 10% per tahun yang dimajemukkan setiap 6 bulan (per semester). Jumlah investasi Nadia setelah 1,5 tahun adalah ....',
    options: [
      { id: 'bm-d-2-a', text: 'Rp11.576.250' },
      { id: 'bm-d-2-b', text: 'Rp11.500.000' },
      { id: 'bm-d-2-c', text: 'Rp11.550.000' },
      { id: 'bm-d-2-d', text: 'Rp13.310.000' },
    ],
    correctOptionId: 'bm-d-2-a',
    formula: 'Mn = M × (1 + i)^t  (i dan t per semester)',
    steps: [
      'Diketahui: M = Rp10.000.000, bunga tahunan = 10% dimajemukkan per semester, lama = 1,5 tahun.',
      'Langkah 1 — Suku bunga per semester: i = 10% / 2 = 5% = 0,05.',
      'Langkah 2 — Banyak periode semester: t = 1,5 × 2 = 3 semester.',
      'Langkah 3 — Hitung (1,05)^3 = 1,1025 × 1,05 = 1,157625.',
      'Langkah 4 — M3 = 10.000.000 × 1,157625 = Rp11.576.250.',
    ],
    conclusion: 'Jumlah investasi Nadia setelah 1,5 tahun adalah Rp11.576.250.',
  },
  {
    id: 'bm-d-3',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Perbandingan Investasi',
    question:
      'Tari menyimpan Rp8.000.000 di Bank X dengan bunga tunggal 5% per tahun, sedangkan Sinta menyimpan Rp8.000.000 di Bank Y dengan bunga majemuk 5% per tahun. Setelah 2 tahun, selisih jumlah tabungan Sinta dan Tari adalah ....',
    options: [
      { id: 'bm-d-3-a', text: 'Rp20.000' },
      { id: 'bm-d-3-b', text: 'Rp40.000' },
      { id: 'bm-d-3-c', text: 'Rp200.000' },
      { id: 'bm-d-3-d', text: 'Rp10.000' },
    ],
    correctOptionId: 'bm-d-3-a',
    formula: 'Selisih = Mn (Majemuk) - Mn (Tunggal)',
    steps: [
      'Diketahui: M = Rp8.000.000, i = 5% = 0,05 per tahun, t = 2 tahun.',
      'Langkah 1 — Tabungan Tari (Bunga Tunggal): Mn_Tari = 8.000.000 + (8.000.000 × 0,05 × 2) = Rp8.800.000.',
      'Langkah 2 — Tabungan Sinta (Bunga Majemuk): Mn_Sinta = 8.000.000 × (1,05)^2 = 8.000.000 × 1,1025 = Rp8.820.000.',
      'Langkah 3 — Selisih = 8.820.000 - 8.800.000 = Rp20.000.',
    ],
    conclusion: 'Selisih tabungan Sinta dan Tari adalah Rp20.000.',
  },
  {
    id: 'bm-d-4',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Analisis Suku Bunga',
    question:
      'Modal sebesar Rp4.000.000 diinvestasikan dengan bunga majemuk tahunan. Setelah 3 tahun, nilai investasi tersebut berkembang menjadi Rp5.324.000. Suku bunga majemuk per tahunnya adalah ....',
    options: [
      { id: 'bm-d-4-a', text: '10% per tahun' },
      { id: 'bm-d-4-b', text: '11% per tahun' },
      { id: 'bm-d-4-c', text: '8% per tahun' },
      { id: 'bm-d-4-d', text: '12% per tahun' },
    ],
    correctOptionId: 'bm-d-4-a',
    formula: '(1 + i)^t = Mn / M',
    steps: [
      'Diketahui: M = Rp4.000.000, M3 = Rp5.324.000, t = 3 tahun.',
      'Langkah 1 — Hitung (1 + i)^3 = 5.324.000 / 4.000.000 = 1,331.',
      'Langkah 2 — Tarik akar pangkat tiga: 1 + i = ∛1,331 = 1,1.',
      'Langkah 3 — i = 1,1 - 1 = 0,1 = 10% per tahun.',
    ],
    conclusion: 'Suku bunga majemuk investasi tersebut adalah 10% per tahun.',
  },
  {
    id: 'bm-d-5',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Modal Awal Triwulan',
    question:
      'Pak Reza menyimpan uang di bank dengan suku bunga 16% per tahun yang dimajemukkan setiap triwulan (3 bulan). Jika setelah 9 bulan saldonya menjadi Rp11.248.640, modal awal yang disetor Pak Reza adalah ....',
    options: [
      { id: 'bm-d-5-a', text: 'Rp10.000.000' },
      { id: 'bm-d-5-b', text: 'Rp9.600.000' },
      { id: 'bm-d-5-c', text: 'Rp10.200.000' },
      { id: 'bm-d-5-d', text: 'Rp9.800.000' },
    ],
    correctOptionId: 'bm-d-5-a',
    formula: 'M = Mn / (1 + i)^t  (i dan t per triwulan)',
    steps: [
      'Diketahui: M3 = Rp11.248.640, bunga tahunan = 16% dimajemukkan per triwulan, lama = 9 bulan.',
      'Langkah 1 — Suku bunga per triwulan: i = 16% / 4 = 4% = 0,04.',
      'Langkah 2 — Banyak periode dalam 9 bulan: t = 9 / 3 = 3 triwulan.',
      'Langkah 3 — Hitung (1,04)^3 = 1,0816 × 1,04 = 1,124864.',
      'Langkah 4 — M = 11.248.640 / 1,124864 = Rp10.000.000.',
    ],
    conclusion: 'Modal awal yang disetor Pak Reza adalah Rp10.000.000.',
  },
  {
    id: 'bm-d-6',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Analisis Lama Waktu',
    question:
      'Modal sebesar Rp5.000.000 diinvestasikan dengan bunga 20% per tahun yang dimajemukkan setiap semester (6 bulan). Jika nilai akhirnya menjadi Rp7.320.500, berapa tahun lama investasi tersebut berlangsung?',
    options: [
      { id: 'bm-d-6-a', text: '2 tahun' },
      { id: 'bm-d-6-b', text: '4 tahun' },
      { id: 'bm-d-6-c', text: '1,5 tahun' },
      { id: 'bm-d-6-d', text: '2,5 tahun' },
    ],
    correctOptionId: 'bm-d-6-a',
    formula: '(1 + i)^t = Mn / M  (t dalam semester)',
    steps: [
      'Diketahui: M = Rp5.000.000, Mn = Rp7.320.500, bunga = 20% per tahun dimajemukkan per semester.',
      'Langkah 1 — Suku bunga per semester: i = 20% / 2 = 10% = 0,10.',
      'Langkah 2 — Hitung rasio modal: (1,1)^t = 7.320.500 / 5.000.000 = 1,4641.',
      'Langkah 3 — Karena (1,1)^4 = 1,4641, maka t = 4 semester.',
      'Langkah 4 — Konversi ke tahun: 4 semester / 2 = 2 tahun.',
    ],
    conclusion: 'Investasi tersebut berlangsung selama 2 tahun.',
  },
  {
    id: 'bm-d-7',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Bunga Periode Tertentu',
    question:
      'Ibu menabung Rp10.000.000 di bank dengan bunga majemuk 10% per tahun. Besar bunga yang diperoleh khusus pada tahun ke-3 saja (pertambahan saldo dari akhir tahun ke-2 ke akhir tahun ke-3) adalah ....',
    options: [
      { id: 'bm-d-7-a', text: 'Rp1.210.000' },
      { id: 'bm-d-7-b', text: 'Rp1.000.000' },
      { id: 'bm-d-7-c', text: 'Rp1.100.000' },
      { id: 'bm-d-7-d', text: 'Rp3.310.000' },
    ],
    correctOptionId: 'bm-d-7-a',
    formula: 'Bunga tahun ke-3 = M3 - M2 = M2 × i',
    steps: [
      'Diketahui: M = Rp10.000.000, i = 10% = 0,10 per tahun.',
      'Langkah 1 — Hitung saldo akhir tahun ke-2: M2 = 10.000.000 × (1,1)^2 = 10.000.000 × 1,21 = Rp12.100.000.',
      'Langkah 2 — Bunga pada tahun ke-3 dihitung dari saldo akhir tahun ke-2: B_tahun3 = 12.100.000 × 10% = Rp1.210.000.',
      '(Dapat juga dicek melalui M3 - M2 = 13.310.000 - 12.100.000 = Rp1.210.000).',
    ],
    conclusion: 'Besar bunga khusus pada tahun ke-3 saja adalah Rp1.210.000.',
  },
  {
    id: 'bm-d-8',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Perbandingan Pemajemukan',
    question:
      'Modal Rp10.000.000 disimpan selama 1 tahun. Bank P menawarkan bunga majemuk 10% per tahun (dimajemukkan tahunan), sedangkan Bank Q menawarkan bunga 10% per tahun yang dimajemukkan setiap semester (6 bulan). Selisih saldo akhir antara Bank Q dan Bank P setelah 1 tahun adalah ....',
    options: [
      { id: 'bm-d-8-a', text: 'Rp25.000' },
      { id: 'bm-d-8-b', text: 'Rp50.000' },
      { id: 'bm-d-8-c', text: 'Rp250.000' },
      { id: 'bm-d-8-d', text: 'Rp0 (hasilnya sama)' },
    ],
    correctOptionId: 'bm-d-8-a',
    formula: 'Selisih = M_Q - M_P',
    steps: [
      'Diketahui: M = Rp10.000.000 dan lama = 1 tahun.',
      'Langkah 1 — Bank P (tahunan, i = 10%, t = 1): M_P = 10.000.000 × (1,10)^1 = Rp11.000.000.',
      'Langkah 2 — Bank Q (semesteran, i = 10%/2 = 5%, t = 2): M_Q = 10.000.000 × (1,05)^2 = 10.000.000 × 1,1025 = Rp11.025.000.',
      'Langkah 3 — Selisihnya = 11.025.000 - 11.000.000 = Rp25.000.',
    ],
    conclusion: 'Selisih saldo akhir antara Bank Q dan Bank P adalah Rp25.000.',
  },
  {
    id: 'bm-d-9',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Perubahan Suku Bunga',
    question:
      'Pada tahun pertama, modal Rp5.000.000 memperoleh bunga majemuk 10% per tahun. Memasuki tahun kedua, bank menaikkan suku bunga menjadi 20% per tahun. Saldo tabungan pada akhir tahun ke-2 adalah ....',
    options: [
      { id: 'bm-d-9-a', text: 'Rp6.600.000' },
      { id: 'bm-d-9-b', text: 'Rp6.500.000' },
      { id: 'bm-d-9-c', text: 'Rp6.050.000' },
      { id: 'bm-d-9-d', text: 'Rp7.200.000' },
    ],
    correctOptionId: 'bm-d-9-a',
    formula: 'M2 = M × (1 + i1) × (1 + i2)',
    steps: [
      'Karena suku bunga berubah pada tahun kedua, hitung saldo secara bertahap per tahun.',
      'Langkah 1 — Akhir tahun pertama (i1 = 10%): M1 = 5.000.000 × (1 + 0,10) = 5.000.000 × 1,10 = Rp5.500.000.',
      'Langkah 2 — Akhir tahun kedua (i2 = 20% dari M1): M2 = 5.500.000 × (1 + 0,20) = 5.500.000 × 1,20 = Rp6.600.000.',
    ],
    conclusion: 'Saldo tabungan pada akhir tahun ke-2 adalah Rp6.600.000.',
  },
  {
    id: 'bm-d-10',
    topic: 'bunga-majemuk',
    difficulty: 'Sulit',
    contextTag: 'Setoran Tambahan',
    question:
      'Dimas menginvestasikan Rp2.000.000 dengan bunga majemuk 10% per tahun. Tepat setelah 1 tahun berlalu (setelah bunga tahun pertama masuk), Dimas menyetor tambahan Rp800.000 ke rekening yang sama. Total saldo investasi Dimas pada akhir tahun ke-2 adalah ....',
    options: [
      { id: 'bm-d-10-a', text: 'Rp3.300.000' },
      { id: 'bm-d-10-b', text: 'Rp3.220.000' },
      { id: 'bm-d-10-c', text: 'Rp3.380.000' },
      { id: 'bm-d-10-d', text: 'Rp3.100.000' },
    ],
    correctOptionId: 'bm-d-10-a',
    formula: 'M1_baru = M × (1 + i) + Setoran,  lalu  M2 = M1_baru × (1 + i)',
    steps: [
      'Langkah 1 — Saldo akhir tahun ke-1 sebelum setoran tambahan: M1 = 2.000.000 × 1,10 = Rp2.200.000.',
      'Langkah 2 — Ditambah setoran Rp800.000, modal awal tahun ke-2 menjadi: 2.200.000 + 800.000 = Rp3.000.000.',
      'Langkah 3 — Saldo akhir tahun ke-2 (bunga 10%): M2 = 3.000.000 × 1,10 = Rp3.300.000.',
    ],
    conclusion: 'Total saldo investasi Dimas pada akhir tahun ke-2 adalah Rp3.300.000.',
  },
];
