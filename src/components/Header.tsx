"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Language, translations } from "@/lib/translations";
import { ChevronDownIcon, Truck, Sun, Moon } from "lucide-react";

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
    title?: string;
}

export default function Header({ lang, setLang, title }: HeaderProps) {
    const t = translations[lang];
    const displayTitle = title || t.title;
    const [isLangOpen, setIsLangOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Truck className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-tight text-black dark:text-white">{displayTitle}</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {t.home}
                    </Link>
                    <Link href="/blog" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {t.blog}
                    </Link>

                    {/* Dark mode toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300"
                            aria-label="Toggle dark mode"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    )}

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all text-sm font-medium text-slate-700 dark:text-slate-200"
                        >
                            <span>{lang === 'ko' ? '🇰🇷 한국어' : lang === 'en' ? '🇺🇸 en' : '🇪🇸 es'}</span>
                            <ChevronDownIcon className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-[100] overflow-hidden divide-y divide-slate-100 dark:divide-slate-700">
                                <button onClick={() => { setLang('ko'); setIsLangOpen(false); }} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">한국어</button>
                                <button onClick={() => { setLang('en'); setIsLangOpen(false); }} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">English</button>
                                <button onClick={() => { setLang('es'); setIsLangOpen(false); }} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Español</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
