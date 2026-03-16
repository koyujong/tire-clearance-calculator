interface ReadingTimeStats {
  minutes: number;
  seconds: number;
  totalSeconds: number;
  charCountWithSpaces: number;
  charCountWithoutSpaces: number;
  wordCount: number;
}

export interface CalcOptions {
  /** Words per minute (English default: 200 WPM). When provided, uses word-count based calculation. */
  wpm?: number;
}

export function calculateReadingTime(text: string, options?: CalcOptions): ReadingTimeStats {
  if (!text) {
    return {
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      charCountWithSpaces: 0,
      charCountWithoutSpaces: 0,
      wordCount: 0,
    };
  }

  const charCountWithSpaces = text.length;
  const textWithoutSpaces = text.replace(/\s+/g, '');
  const charCountWithoutSpaces = textWithoutSpaces.length;

  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;

  let totalSeconds: number;

  if (options?.wpm && options.wpm > 0) {
    // WPM-based calculation: word count / WPM * 60 seconds
    totalSeconds = Math.round((wordCount / options.wpm) * 60);
  } else {
    // Default: Korean/CJK character-based (~250 chars/min excluding spaces)
    const charsPerSecond = 250 / 60;
    totalSeconds = Math.round(charCountWithoutSpaces / charsPerSecond);
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return {
    minutes,
    seconds,
    totalSeconds,
    charCountWithSpaces,
    charCountWithoutSpaces,
    wordCount,
  };
}
