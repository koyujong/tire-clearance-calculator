import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlogNav from "@/components/BlogNav";
import { Metadata } from "next";
import AdBanner from "@/components/AdBanner";
import { translations } from "@/lib/translations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const related = blogPosts.filter(
    (p) => p.translationGroup === post.translationGroup
  );

  const languages: Record<string, string> = {};
  related.forEach((t) => {
    languages[t.language] = `https://tirecalc.4kdrivewalk.com/blog/${t.slug}`;
  });
  const enPost = related.find((t) => t.language === "en");
  if (enPost) {
    languages["x-default"] = `https://tirecalc.4kdrivewalk.com/blog/${enPost.slug}`;
  }

  return {
    title: `${post.title} | Tire Size Calculator Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://tirecalc.4kdrivewalk.com/blog/${post.slug}`,
      languages,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Translation map for switching languages within this post group
  const translationMap: Record<string, string> = {};
  blogPosts
    .filter((p) => p.translationGroup === post.translationGroup)
    .forEach((p) => { translationMap[p.language] = p.slug; });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "Lifted Truck Tire Clearance Calc" },
  };

  // Split content at 3rd <h2> for mid-article ad
  const contentParts = post.content.split(/(?=<h2\b[^>]*>)/i);
  let beforeAd = post.content;
  let afterAd = "";
  let h2Count = 0;
  for (let i = 0; i < contentParts.length; i++) {
    if (contentParts[i].toLowerCase().startsWith("<h2")) {
      h2Count++;
      if (h2Count === 3) {
        beforeAd = contentParts.slice(0, i).join("");
        afterAd = contentParts.slice(i).join("");
        break;
      }
    }
  }

  const t = translations[post.language];
  const backLabel = t.backToBlog;
  const ctaTitle = t.ctaTitle;
  const ctaSubtitle = t.ctaSubtitle;
  const ctaButton = t.ctaButton;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ BlogNav: Home/Blog 탭 + 번역 언어 스위처 포함 */}
      <BlogNav activePage="blog" translations={translationMap} currentLang={post.language} />

      <main className="flex-grow pt-32 pb-20 px-4 max-w-3xl mx-auto w-full">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-10 hover:translate-x-1 transition-transform">
          <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {backLabel}
        </Link>

        <div className="mb-10">
          <AdBanner slot="6780266694" />
        </div>

        <article className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              {post.description}
            </p>
          </header>

          <div
            className="prose dark:prose-invert max-w-none !text-black dark:!text-white"
            dangerouslySetInnerHTML={{ __html: beforeAd }}
          />

          {afterAd && (
            <>
              <div className="my-10">
                <AdBanner slot="4221082772" />
              </div>
              <div
                className="prose dark:prose-invert max-w-none !text-black dark:!text-white"
                dangerouslySetInnerHTML={{ __html: afterAd }}
              />
            </>
          )}

          {/* CTA Card */}
          <div className="mt-14 mb-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative group">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">{ctaTitle}</h2>
              <p className="text-indigo-100 mb-8 max-w-md">{ctaSubtitle}</p>
              <Link
                href="/"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                {ctaButton}
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span key={kw} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl text-xs font-semibold">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-12 mb-8">
          <AdBanner slot="7907422200" />
        </div>
      </main>

      <Footer lang={post.language} />
    </div>
  );
}
