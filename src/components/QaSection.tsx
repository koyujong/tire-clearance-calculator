"use client";

import { Language, translations } from "@/lib/translations";

interface QaSectionProps {
  lang: Language;
}

export default function QaSection({ lang }: QaSectionProps) {
  const t = translations[lang];

  return (
    <section className="mt-20 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t.faqTitle}</h2>
      </div>
      <div className="space-y-4">
        {t.faqs.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors group">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Q: {faq.q}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              A: {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
