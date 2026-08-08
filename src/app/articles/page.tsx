import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import ArticleCard from "@/components/ui/ArticleCard";
import { Reveal } from "@/components/ui/Reveal";
import { getArticles } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Construction Insights | Hycore Construction",
  description:
    "Expert perspectives on construction management, technology, and industry trends — written by the professionals who build it every day.",
  alternates: { canonical: "/articles" },
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.id !== featured?.id).slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-brand-black py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal onLoad delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight mb-4">
              NEWS &amp; ARTICLES
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.25}>
            <p className="text-sm text-white/50 max-w-md leading-[1.8]">
              Exploring the future of construction, innovation, and sustainable building
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Featured Article ── */}
      {featured && (
        <section className="bg-brand-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Reveal>
              <Link
                href={`/articles/${featured.slug}`}
                className="group block relative rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={featured.heroImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
                    priority
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                </div>
                {/* Glassmorphism text panel */}
                <div
                  className="absolute bottom-4 right-4 p-6 md:p-8 max-w-sm md:max-w-md rounded-xl"
                  style={{ backdropFilter: "blur(14px)", background: "rgba(8,8,8,0.65)" }}
                >
                  <span className="inline-block text-xs font-bold tracking-widest bg-white/10 text-white px-2.5 py-1 rounded mb-3">
                    Featured
                  </span>
                  <h2 className="font-display text-lg md:text-2xl font-bold text-brand-white leading-snug mb-2">
                    {featured.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="font-medium">{featured.category}</span>
                    <span>|</span>
                    <span>{featured.publishedDate}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Article Cards — glassmorphism overlay variant ── */}
      {rest.length > 0 && (
        <section className="bg-brand-white pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.slice(0, 2).map((article, i) => (
                <Reveal key={article.id} delay={i * 0.1}>
                  <ArticleCard article={article} variant="overlay" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <QuoteBar />
    </>
  );
}
