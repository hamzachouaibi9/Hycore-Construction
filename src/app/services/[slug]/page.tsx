import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import ArticleCard from "@/components/ui/ArticleCard";
import ContactForm from "@/components/ui/ContactForm";
import { getServiceBySlug, getServices, getArticles } from "@/lib/payload";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const [service, articles] = await Promise.all([
    getServiceBySlug(slug),
    getArticles(),
  ]);

  if (!service) notFound();

  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[45dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-[color] duration-200 mb-6 focus-visible:outline-none"
          >
            <ArrowLeft size={14} />
            Back to Services
          </Link>
          <h1 className="font-display text-3xl md:text-5xl font-black text-brand-white tracking-tight">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ── About the service ── */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-brand-black tracking-tight mb-4">
            About the service
          </h2>
          <p className="text-sm leading-[1.8] text-gray-500 max-w-3xl">
            At Hycore Construction, we believe architectural design is more than just creating
            buildings — it&apos;s about shaping environments that inspire, communicate seamlessly,
            and stand the test of time. Our approach balances innovation, aesthetics, and
            sustainability to craft spaces that reflect our clients&apos; visions while enhancing the
            surrounding landscape. Whether designing a residential home, commercial development,
            or cultural landmark, we bring a meticulous attention to detail and a passion for
            excellence.
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white pb-16 md:pb-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-brand-black tracking-tight mb-8">
            What&apos;s include in the services?
          </h2>
          <ul className="space-y-5">
            {service.whatIsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 text-primary flex-shrink-0">•</span>
                <div>
                  <span className="text-sm font-bold text-brand-black">{item.title}</span>
                  <span className="text-sm text-gray-500"> — {item.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm leading-[1.8] text-gray-500 max-w-3xl">
            At Hycore Construction, we don&apos;t just design buildings — we create experiences,
            shaping spaces that enhance the way people live, work, and interact.
          </p>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[400px]">
              <Image
                src="https://picsum.photos/700/600?random=91"
                alt="Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Form */}
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

      {/* ── Articles ── */}
      {recentArticles.length > 0 && (
        <section className="bg-brand-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-black tracking-tight text-center mb-14">
              STRENGTH AND STYLE IN
              <br />
              EVERY PROJECT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteBar />
    </>
  );
}
