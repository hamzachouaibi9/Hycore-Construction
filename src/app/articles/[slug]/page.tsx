import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import ContactForm from "@/components/ui/ContactForm";
import ArticleCard from "@/components/ui/ArticleCard";
import { getArticleBySlug, getArticles } from "@/lib/payload";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parseContent(raw: string): string {
  const lines = raw.trim().split("\n");
  const out: string[] = [];
  let inList = false;

  const inline = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h2 class="article-h2">${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h3 class="article-h3">${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("- ")) {
      if (!inList) { out.push('<ul class="article-ul">'); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    } else if (line.trim() === "") {
      if (inList) { out.push("</ul>"); inList = false; }
    } else {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<p class="article-p">${inline(line)}</p>`);
    }
  }

  if (inList) out.push("</ul>");
  return out.join("");
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.heroImage }],
      publishedTime: article.publishedDate,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getArticles(),
  ]);

  if (!article) notFound();

  const otherArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 4);
  const mins = readingTime(article.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedDate,
    author: { "@type": "Person", name: article.author.name },
    publisher: { "@type": "Organization", name: "Hycore Construction" },
  };

  return (
    <>
      <style>{`
        .article-h2 {
          font-family: var(--font-outfit, system-ui, sans-serif);
          font-size: 0.9rem;
          font-weight: 900;
          color: #0b0b0b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        .article-h3 {
          font-family: var(--font-outfit, system-ui, sans-serif);
          font-size: 1rem;
          font-weight: 700;
          color: #0b0b0b;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .article-p {
          font-size: 0.875rem;
          line-height: 1.85;
          color: #4b5563;
          margin-bottom: 1.1rem;
        }
        .article-ul {
          margin: 1rem 0;
          padding-left: 1.25rem;
          list-style: disc;
        }
        .article-ul li {
          font-size: 0.875rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 0.4rem;
        }
        .article-p strong, .article-ul strong {
          color: #0b0b0b;
          font-weight: 600;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-brand-black overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/50" />

        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-sm text-white/50">Published {article.publishedDate}</p>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-brand-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Back link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-brand-black transition-colors duration-200 mb-10 focus-visible:outline-none"
          >
            <ArrowLeft size={13} />
            Back to Articles
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14">

            {/* Author sidebar */}
            <div className="md:col-span-1">
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={64}
                height={64}
                className="object-cover mb-3"
              />
              <p className="text-sm font-bold text-brand-black leading-snug">
                {article.author.name}
              </p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">
                {article.author.role}
              </p>
              <p className="text-xs text-gray-300 mt-3">{mins} min read</p>
            </div>

            {/* Content */}
            <article className="md:col-span-3">
              <div
                dangerouslySetInnerHTML={{ __html: parseContent(article.content) }}
              />

              {/* Inline image */}
              <div className="relative aspect-video mt-10 overflow-hidden">
                <Image
                  src={article.heroImage}
                  alt={`${article.title} — illustration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Other Articles ── */}
      {otherArticles.length > 0 && (
        <section className="bg-brand-white pb-20 md:pb-28 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-black tracking-tight text-center mb-12">
              OTHER ARTICLES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherArticles.map((a) => (
                <ArticleCard key={a.id} article={a} variant="small" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contact form ── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[400px]">
              <Image
                src="https://picsum.photos/700/600?random=93"
                alt="Construction project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Let&apos;s Work Together.
              </h2>
              <p className="text-sm text-white/50 mb-8">
                We&apos;re here to help you bring your construction project to life. Whether you
                have questions or want to discuss your ideas, reach out.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <QuoteBar />
    </>
  );
}
