import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteBar from "@/components/sections/QuoteBar";
import ContactForm from "@/components/ui/ContactForm";
import ArticleCard from "@/components/ui/ArticleCard";
import { getArticleBySlug, getArticles } from "@/lib/payload";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Hycore Construction",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
          <p className="text-xs text-white/50 mb-3">Published {article.publishedDate}</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Author sidebar */}
            <div className="md:col-span-1">
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={56}
                height={56}
                className="rounded-full object-cover mb-3"
              />
              <p className="text-sm font-bold text-brand-black">{article.author.name}</p>
              <p className="text-xs text-gray-500 mt-1">{article.author.role}</p>
            </div>

            {/* Content */}
            <article className="md:col-span-3 prose prose-sm max-w-none">
              <div
                className="text-sm leading-[1.8] text-gray-600 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-black [&_h2]:text-brand-black [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-5"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/\n## /g, '<h2>')
                    .replace(/\n/g, '</p><p>')
                    .replace(/<h2>/g, '</p><h2>')
                    .replace(/## /g, '<h2>')
                }}
              />

              {/* In-article image */}
              <div className="relative aspect-video mt-10 rounded overflow-hidden">
                <Image
                  src="https://picsum.photos/900/500?random=92"
                  alt="Article illustration"
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white tracking-tight mb-2">
                Let&apos;s Work Together.
              </h2>
              <p className="text-sm text-white/50 mb-8">
                We&apos;re here to help you bring your construction project to life! Whether you
                have questions, want to discuss your ideas.
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
