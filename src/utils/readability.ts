/**
 * Flesch Reading Ease based readability analyzer
 * Score 0–100: higher = easier
 * Works on English; gracefully degrades for CJK-heavy text
 */

export interface ReadabilityResult {
  score: number;            // Flesch Reading Ease (0–100+)
  level: ReadabilityLevel;
  label: string;            // short label
  description: string;      // 1-sentence plain language description
  color: string;            // tailwind text color class
  bg: string;               // tailwind bg color class
  ring: string;             // tailwind ring color class
  emoji: string;
  sentences: number;
  avgWordsPerSentence: number;
  avgSyllablesPerWord: number;
}

export type ReadabilityLevel =
  | "very-easy"
  | "easy"
  | "fairly-easy"
  | "standard"
  | "fairly-difficult"
  | "difficult"
  | "very-difficult";

/** Rough English syllable counter (heuristic) */
function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

/** Split text into sentences by . ! ? */
function splitSentences(text: string): string[] {
  return text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function levelFromScore(score: number): ReadabilityLevel {
  if (score >= 90) return "very-easy";
  if (score >= 80) return "easy";
  if (score >= 70) return "fairly-easy";
  if (score >= 60) return "standard";
  if (score >= 50) return "fairly-difficult";
  if (score >= 30) return "difficult";
  return "very-difficult";
}

interface LevelMeta {
  label: { ko: string; en: string; es: string };
  description: { ko: string; en: string; es: string };
  color: string;
  bg: string;
  ring: string;
  emoji: string;
}

const LEVEL_META: Record<ReadabilityLevel, LevelMeta> = {
  "very-easy": {
    label:       { ko: "매우 쉬움",     en: "Very Easy",         es: "Muy Fácil" },
    description: { ko: "누구나 쉽게 읽을 수 있는 글입니다. 초등학생도 이해할 수 있어요.", en: "Anyone can read this. Great for mass-market content.", es: "Cualquiera puede leerlo. Ideal para contenido masivo." },
    color: "text-emerald-600 dark:text-emerald-400",
    bg:    "bg-emerald-50 dark:bg-emerald-950/60",
    ring:  "ring-emerald-300 dark:ring-emerald-700",
    emoji: "🟢",
  },
  "easy": {
    label:       { ko: "쉬움",         en: "Easy",              es: "Fácil" },
    description: { ko: "읽기 쉬운 편입니다. 일반 대중을 대상으로 한 블로그에 적합합니다.", en: "Easy to read. Good for general blog audiences.", es: "Fácil de leer. Apto para blogs en general." },
    color: "text-green-600 dark:text-green-400",
    bg:    "bg-green-50 dark:bg-green-950/60",
    ring:  "ring-green-300 dark:ring-green-700",
    emoji: "🟢",
  },
  "fairly-easy": {
    label:       { ko: "비교적 쉬움",   en: "Fairly Easy",       es: "Bastante Fácil" },
    description: { ko: "대부분의 성인이 쉽게 읽을 수 있습니다. SEO에 유리한 수준입니다.", en: "Most adults can read this easily. SEO-friendly level.", es: "La mayoría de adultos puede leerlo. Nivel óptimo para SEO." },
    color: "text-teal-600 dark:text-teal-400",
    bg:    "bg-teal-50 dark:bg-teal-950/60",
    ring:  "ring-teal-300 dark:ring-teal-700",
    emoji: "🔵",
  },
  "standard": {
    label:       { ko: "보통",         en: "Standard",          es: "Normal" },
    description: { ko: "일반적인 신문 기사 수준입니다. 평균적인 독자를 대상으로 합니다.", en: "Typical newspaper level. Suitable for average readers.", es: "Nivel de periódico estándar. Apto para lectores promedio." },
    color: "text-blue-600 dark:text-blue-400",
    bg:    "bg-blue-50 dark:bg-blue-950/60",
    ring:  "ring-blue-300 dark:ring-blue-700",
    emoji: "🔵",
  },
  "fairly-difficult": {
    label:       { ko: "다소 어려움",   en: "Fairly Difficult",  es: "Algo Difícil" },
    description: { ko: "고등학생 이상의 독자를 대상으로 합니다. 문장을 조금 더 짧게 써보세요.", en: "Best for high school level readers. Consider shorter sentences.", es: "Mejor para lectores de bachillerato. Acorta tus frases." },
    color: "text-yellow-600 dark:text-yellow-400",
    bg:    "bg-yellow-50 dark:bg-yellow-950/60",
    ring:  "ring-yellow-300 dark:ring-yellow-700",
    emoji: "🟡",
  },
  "difficult": {
    label:       { ko: "어려움",       en: "Difficult",         es: "Difícil" },
    description: { ko: "대학교 교재 수준입니다. 일반 블로그라면 단어를 쉽게 바꿔 보세요.", en: "College-level text. Simplify vocabulary for wider reach.", es: "Nivel universitario. Simplifica el vocabulario para más alcance." },
    color: "text-orange-600 dark:text-orange-400",
    bg:    "bg-orange-50 dark:bg-orange-950/60",
    ring:  "ring-orange-300 dark:ring-orange-700",
    emoji: "🟠",
  },
  "very-difficult": {
    label:       { ko: "매우 어려움 (전문가 수준)", en: "Very Difficult (Expert)", es: "Muy Difícil (Experto)" },
    description: { ko: "전문적인 논문이나 법률 문서 수준입니다. 매우 어렵습니다.", en: "Professional or academic content. Very hard to read.", es: "Contenido profesional o académico. Muy difícil de leer." },
    color: "text-red-600 dark:text-red-400",
    bg:    "bg-red-50 dark:bg-red-950/60",
    ring:  "ring-red-300 dark:ring-red-700",
    emoji: "🔴",
  },
};

export function analyzeReadability(
  text: string,
  lang: "ko" | "en" | "es" = "en"
): ReadabilityResult | null {
  if (!text || text.trim().length < 20) return null;

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  if (wordCount < 5) return null;

  const sentences = splitSentences(text);
  const sentenceCount = Math.max(1, sentences.length);

  const totalSyllables = words.reduce((acc, w) => acc + countSyllables(w), 0);

  const avgWordsPerSentence = wordCount / sentenceCount;
  const avgSyllablesPerWord = totalSyllables / wordCount;

  // Flesch Reading Ease
  const score = Math.round(
    206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord
  );

  const clampedScore = Math.min(100, Math.max(0, score));
  const level = levelFromScore(clampedScore);
  const meta = LEVEL_META[level];

  return {
    score: clampedScore,
    level,
    label: meta.label[lang],
    description: meta.description[lang],
    color: meta.color,
    bg: meta.bg,
    ring: meta.ring,
    emoji: meta.emoji,
    sentences: sentenceCount,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100,
  };
}
