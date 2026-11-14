import { QUESTIONS } from '../data/questions';
import {
  Difficulty,
  DifficultyMode,
  EvaluatedQuestion,
  OptionLabel,
  Question,
  QuizResult,
  SessionOption,
  SessionQuestion,
  TopicId,
} from '../types/quiz';

const OPTION_LABELS: OptionLabel[] = ['A', 'B', 'C', 'D'];
const SESSION_SIZE = 10;

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickPrioritizingUnseen(
  pool: Question[],
  count: number,
  previousIds: Set<string>
): Question[] {
  const unseen = shuffleArray(pool.filter((q) => !previousIds.has(q.id)));
  const seen = shuffleArray(pool.filter((q) => previousIds.has(q.id)));
  return [...unseen, ...seen].slice(0, count);
}

export function createShuffledSession(
  topic: TopicId,
  mode: DifficultyMode = 'Campuran',
  previousQuestionIds: string[] = []
): SessionQuestion[] {
  const topicQuestions = QUESTIONS.filter((q) => q.topic === topic);
  const previousSet = new Set(previousQuestionIds);

  let selectedQuestions: Question[] = [];

  if (mode === 'Campuran') {
    const mudahPool = topicQuestions.filter((q) => q.difficulty === 'Mudah');
    const sedangPool = topicQuestions.filter((q) => q.difficulty === 'Sedang');
    const sulitPool = topicQuestions.filter((q) => q.difficulty === 'Sulit');

    // Vary the 10-question mix slightly across Mudah/Sedang/Sulit (always sums to 10)
    const mixPatterns: Record<Difficulty, number>[] = [
      { Mudah: 3, Sedang: 4, Sulit: 3 },
      { Mudah: 4, Sedang: 3, Sulit: 3 },
      { Mudah: 3, Sedang: 3, Sulit: 4 },
    ];
    const chosenMix =
      mixPatterns[Math.floor(Math.random() * mixPatterns.length)];

    const pickedMudah = pickPrioritizingUnseen(
      mudahPool,
      chosenMix.Mudah,
      previousSet
    );
    const pickedSedang = pickPrioritizingUnseen(
      sedangPool,
      chosenMix.Sedang,
      previousSet
    );
    const pickedSulit = pickPrioritizingUnseen(
      sulitPool,
      chosenMix.Sulit,
      previousSet
    );

    selectedQuestions = shuffleArray([
      ...pickedMudah,
      ...pickedSedang,
      ...pickedSulit,
    ]);
  } else {
    const modePool = topicQuestions.filter((q) => q.difficulty === mode);
    selectedQuestions = shuffleArray(modePool).slice(0, SESSION_SIZE);

    // Avoid starting with the exact same first question if repeating the same difficulty
    if (
      previousQuestionIds.length > 0 &&
      selectedQuestions.length > 1 &&
      selectedQuestions[0].id === previousQuestionIds[0]
    ) {
      const [first, ...rest] = selectedQuestions;
      selectedQuestions = [...rest, first];
    }
  }

  return selectedQuestions.map((question) => {
    const shuffledOpts = shuffleArray(question.options);
    const labeledOptions: SessionOption[] = shuffledOpts.map((opt, idx) => ({
      ...opt,
      label: OPTION_LABELS[idx],
    }));

    return {
      ...question,
      options: labeledOptions,
    };
  });
}

export function getMotivationFeedback(score: number): {
  title: string;
  message: string;
} {
  if (score >= 90) {
    return {
      title: 'Luar Biasa! Penguasaan Materi Sangat Baik',
      message:
        'Kamu berhasil menyelesaikan soal dengan sangat teliti. Pemahamanmu terhadap rumus dan penyesuaian periode bunga sudah sangat mantap. Pertahankan prestasi belajarmu!',
    };
  }
  if (score >= 70) {
    return {
      title: 'Bagus Sekali! Terus Tingkatkan Ketelitian',
      message:
        'Hasilmu sudah melampaui batas tuntas! Cek kembali pembahasan pada soal yang masih keliru agar pemahamanmu semakin kuat menghadapi ujian.',
    };
  }
  if (score >= 50) {
    return {
      title: 'Cukup Baik! Yuk Perkuat Konsep Dasar',
      message:
        'Kamu sudah memahami sebagian materi, namun masih perlu latihan lagi terutama pada konversi satuan waktu dan langkah perhitungan. Baca pembahasan di bawah dengan saksama, lalu coba ulangi latihan!',
    };
  }
  return {
    title: 'Tetap Semangat! Belajar Adalah Proses',
    message:
      'Jangan berkecil hati! Matematika keuangan akan terasa jauh lebih mudah setelah memahami pola soalnya. Pelajari rumus dan langkah penyelesaian setiap soal di bawah ini, lalu coba ulangi kembali.',
  };
}

export function evaluateQuizSession(
  topic: TopicId,
  difficultyMode: DifficultyMode,
  questions: SessionQuestion[],
  answers: Record<string, string>
): QuizResult {
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  const evaluations: EvaluatedQuestion[] = questions.map((question, index) => {
    const selectedOptionId = answers[question.id] ?? null;
    const selectedOpt = question.options.find((o) => o.id === selectedOptionId);
    const correctOpt = question.options.find(
      (o) => o.id === question.correctOptionId
    )!;

    const isCorrect = selectedOptionId === question.correctOptionId;

    if (!selectedOptionId) {
      unansweredCount += 1;
      wrongCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
    } else {
      wrongCount += 1;
    }

    return {
      question,
      questionNumber: index + 1,
      selectedOptionId,
      selectedLabel: selectedOpt ? selectedOpt.label : null,
      correctLabel: correctOpt.label,
      isCorrect,
    };
  });

  const totalQuestions = questions.length;
  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const score = percentage; // Skala 0-100 menyesuaikan jumlah soal
  const motivation = getMotivationFeedback(score);

  return {
    topic,
    difficultyMode,
    totalQuestions,
    correctCount,
    wrongCount,
    unansweredCount,
    score,
    percentage,
    motivationTitle: motivation.title,
    motivationMessage: motivation.message,
    evaluations,
  };
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}
