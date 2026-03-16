"use client";

import { useEffect, useRef, useState } from "react";
import AdBanner from "@/components/AdBanner";
import { PlayIcon, PauseIcon, X, SlidersHorizontal } from "lucide-react";

interface TeleprompterModalProps {
  text: string;
  /** Total reading time in seconds */
  totalSeconds: number;
  onClose: () => void;
  lang: "ko" | "en" | "es";
}

const uiLabels = {
  ko: {
    title: "텔레프롬프터 모드",
    hint: "화면을 바라보고 읽어보세요 🎤",
    speed: "속도",
    play: "시작",
    pause: "일시정지",
    restart: "다시 시작",
    exit: "나가기",
    remaining: "남은 시간",
    elapsed: "경과",
    empty: "텍스트를 먼저 입력해 주세요.",
  },
  en: {
    title: "Teleprompter Mode",
    hint: "Look at the screen and read aloud 🎤",
    speed: "Speed",
    play: "Play",
    pause: "Pause",
    restart: "Restart",
    exit: "Exit",
    remaining: "Remaining",
    elapsed: "Elapsed",
    empty: "Please enter some text first.",
  },
  es: {
    title: "Modo Teleprompter",
    hint: "Mira la pantalla y lee en voz alta 🎤",
    speed: "Velocidad",
    play: "Reproducir",
    pause: "Pausar",
    restart: "Reiniciar",
    exit: "Salir",
    remaining: "Restante",
    elapsed: "Transcurrido",
    empty: "Por favor ingresa texto primero.",
  },
};

export default function TeleprompterModal({ text, totalSeconds, onClose, lang }: TeleprompterModalProps) {
  const ui = uiLabels[lang];
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0);
  const [elapsed, setElapsed] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Total scroll distance = content height - container height
  const getTotalScroll = () => {
    if (!contentRef.current || !containerRef.current) return 1;
    return Math.max(1, contentRef.current.scrollHeight - containerRef.current.clientHeight);
  };

  // Adjusted duration based on speed multiplier
  const adjustedDuration = totalSeconds / speedMultiplier;

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // RAF-based smooth scroll ticker
  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
      return;
    }

    const tick = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      const totalScroll = getTotalScroll();
      const scrollPerSecond = totalScroll / adjustedDuration;

      setScrollPos((prev) => {
        const next = prev + scrollPerSecond * delta;
        if (next >= totalScroll) {
          setIsPlaying(false);
          return totalScroll;
        }
        return next;
      });
      setElapsed((prev) => Math.min(prev + delta, adjustedDuration));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, adjustedDuration]);

  // Apply scroll position to container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPos;
    }
  }, [scrollPos]);

  const handlePlayPause = () => setIsPlaying((v) => !v);

  const handleRestart = () => {
    setIsPlaying(false);
    setScrollPos(0);
    setElapsed(0);
    if (containerRef.current) containerRef.current.scrollTop = 0;
    lastTimeRef.current = 0;
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); handlePlayPause(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isPlaying]);

  const remaining = Math.max(0, adjustedDuration - elapsed);
  const progress = adjustedDuration > 0 ? Math.min((elapsed / adjustedDuration) * 100, 100) : 0;

  if (!text.trim()) {
    return (
      <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-2xl mb-6">{ui.empty}</p>
          <button onClick={onClose} className="px-6 py-3 bg-indigo-600 rounded-xl font-bold text-white hover:bg-indigo-500 transition">{ui.exit}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col select-none">
      {/* ── Top Ad Banner ── */}
      <div className="w-full flex-shrink-0 bg-black/80 px-4 pt-2 pb-1">
        <AdBanner slot="9302830848" />
      </div>

      {/* ── Main Layout: [Ad Left] [Text] [Ad Right] ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left Ad (desktop only) */}
        <div className="hidden lg:flex w-36 xl:w-44 flex-shrink-0 items-center justify-center bg-black/60 p-2">
          <AdBanner slot="6780266694" />
        </div>

        {/* Teleprompter text area */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-black/80 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-white/70 text-sm font-semibold tracking-wide uppercase">{ui.title}</span>
            </div>
            <div className="flex items-center gap-3 text-white/50 text-xs">
              <span>{ui.elapsed}: <strong className="text-white/80">{formatTime(elapsed)}</strong></span>
              <span>|</span>
              <span>{ui.remaining}: <strong className="text-indigo-400">{formatTime(remaining)}</strong></span>
            </div>
            <button onClick={onClose} className="text-white/40 hover:text-white transition p-1 rounded-lg hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1 w-full bg-white/10 flex-shrink-0">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Fading edge overlays */}
          <div className="absolute top-[64px] left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-[100px] left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          {/* Scrollable text */}
          <div
            ref={containerRef}
            className="flex-1 overflow-hidden px-6 sm:px-12 lg:px-20 py-10"
            style={{ scrollBehavior: "auto" }}
          >
            <div ref={contentRef} className="max-w-3xl mx-auto">
              <p className="text-white/95 text-2xl sm:text-3xl lg:text-4xl leading-[1.9] font-medium tracking-wide whitespace-pre-wrap">
                {text}
              </p>
              {/* Extra padding so last line scrolls to middle */}
              <div className="h-[50vh]" />
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="flex-shrink-0 bg-black/80 border-t border-white/10 px-6 py-4 flex items-center justify-center gap-4 flex-wrap">
            {/* Restart */}
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {ui.restart}
            </button>

            {/* Play / Pause (large) */}
            <button
              onClick={handlePlayPause}
              className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-white font-black text-base transition active:scale-95 shadow-lg ${
                isPlaying
                  ? "bg-yellow-500 hover:bg-yellow-400 shadow-yellow-500/30"
                  : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/40"
              }`}
            >
              {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
              {isPlaying ? ui.pause : ui.play}
            </button>

            {/* Speed selector */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10">
              <SlidersHorizontal className="w-4 h-4 text-white/60" />
              <span className="text-xs font-bold text-white/60 mr-1">{ui.speed}</span>
              {[0.75, 1.0, 1.25, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeedMultiplier(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    speedMultiplier === s
                      ? "bg-indigo-600 text-white"
                      : "text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {s}×
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Ad (desktop only) */}
        <div className="hidden lg:flex w-36 xl:w-44 flex-shrink-0 items-center justify-center bg-black/60 p-2">
          <AdBanner slot="4221082772" />
        </div>
      </div>

      {/* ── Bottom Ad Banner ── */}
      <div className="w-full flex-shrink-0 bg-black/80 px-4 pt-1 pb-2">
        <AdBanner slot="5123984021" />
      </div>
    </div>
  );
}
