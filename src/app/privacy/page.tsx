"use client";

import { useState } from "react";
import Link from "next/link";
import { Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const [lang, setLang] = useState<Language>("ko");
  const t = extraTranslations[lang].privacy;
  const title = lang === "ko" ? "타이어 튜닝 외경 계산기" : lang === "es" ? "Calculadora de Neumáticos" : "Tire Size Calculator";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header lang={lang} setLang={setLang} title={title} />
      <main className="flex-grow pt-28 pb-20 px-4 max-w-3xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-10 hover:translate-x-[-2px] transition-transform">
          ← Home
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{t.title}</h1>
        <p className="text-slate-400 text-sm mb-10">{t.lastUpdated}</p>
        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {typeof section.content === "string" ? section.content : section.content.join(" ")}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
