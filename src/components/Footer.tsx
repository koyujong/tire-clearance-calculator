"use client";

import Link from "next/link";
import { Language, translations } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import { Truck } from "lucide-react";

interface FooterProps {
    lang: Language;
}

export default function Footer({ lang }: FooterProps) {
    const et = extraTranslations[lang];
    const t = translations[lang];
    // Main brand name based on language
    const mainTitle = t.title;

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                                <Truck className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">{mainTitle}</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                            {et.footer.tagline}
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {et.footer.privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {et.footer.terms}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {t.blog}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {et.footer.about}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">{t.contact}</h3>
                        <a href="mailto:support@4kdrivewalk.com" className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            support@4kdrivewalk.com
                        </a>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 text-center">
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} {mainTitle}. {et.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
