"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { ChevronDownIcon, Truck, Sun, Moon } from "lucide-react";
import { Language, translations } from "@/lib/translations";

const langLabelsLabel: Record<Language, string> = {
    en: "🇺🇸 English",
    ko: "🇰🇷 한국어",
    es: "🇪🇸 Español",
};

interface BlogNavProps {
    activePage?: "home" | "blog";
    translations?: Record<string, string>;
    currentLang?: Language;
    onLangChange?: (lang: Language) => void;
}

export default function BlogNav({ activePage = "blog", translations: blogTranslations, currentLang, onLangChange }: BlogNavProps) {
    const [lang, setLang] = useState<Language>(currentLang || "en");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const t = translations[lang];
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLangChange = (newLang: Language) => {
        setLang(newLang);
        setIsOpen(false);

        if (onLangChange) {
            onLangChange(newLang);
            return;
        }

        if (blogTranslations && blogTranslations[newLang]) {
            router.push(`/blog/${blogTranslations[newLang]}`);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Truck className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-tight text-black dark:text-white">
                        {t.title}
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className={`text-sm font-semibold transition-colors ${activePage === "home" ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                    >
                        {t.home}
                    </Link>
                    <Link
                        href="/blog"
                        className={`text-sm font-semibold transition-colors ${activePage === "blog" ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                    >
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
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all text-sm font-medium text-slate-700 dark:text-slate-200"
                        >
                            <span>{langLabelsLabel[lang]}</span>
                            <ChevronDownIcon className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-[100] overflow-hidden divide-y divide-slate-100 dark:divide-slate-700">
                                {(Object.keys(langLabelsLabel) as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => handleLangChange(l)}
                                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${l === lang ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                                    >
                                        {langLabelsLabel[l]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
