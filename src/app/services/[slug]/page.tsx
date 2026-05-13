import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import ArticleCard from "@/components/ui/ArticleCard";
import ContactForm from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
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
    title: `${service.title} | Hycore Construction`,
    description: service.description,
  };
}

const subServiceIcons = [
  <svg key="a" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  <svg key="b" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="c" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  <svg key="d" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
  <svg key="e" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="f" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const [service, articles] = await Promise.all([
    getServiceBySlug(slug),
    getArticles(),
  ]);

  if (!service) notFound();

  const recentArticles = articles.slice(0, 3);
  const hasSubServices = service.subServices && service.subServices.length > 0;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-14 w-full">
          <Reveal onLoad delay={0.05}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-[color] duration-200 mb-6 focus-visible:outline-none"
            >
              <ArrowLeft size={14} />
              Back to Services
            </Link>
          </Reveal>
          <Reveal onLoad delay={0.15}>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              Hycore Construction
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-[1.05]">
              {service.title}
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.28}>
            <p className="mt-5 text-sm leading-[1.8] text-white/55 max-w-2xl">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Sub-services grid (when applicable) ── */}
      {hasSubServices && (
        <section className="bg-brand-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight mb-3">
                EXPLORE OUR
                <br />
                {service.title.toUpperCase()} SERVICES
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 max-w-xl mb-12">
                Each service below is delivered with Hycore&apos;s full commitment — dedicated crews,
                transparent timelines, and a single point of contact from start to finish.
                Select a service to see exactly what&apos;s included.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {service.subServices!.map((sub, i) => (
                <Reveal key={sub.id} delay={i * 0.05} className="h-full">
                  <Link
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="group block p-7 flex flex-col gap-3 border border-primary/20 rounded-xl hover:border-primary hover:bg-primary hover:scale-[1.02] transition-[background-color,border-color,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
                  >
                    <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-500 group-hover:border-white/30 group-hover:text-white transition-[border-color,color] duration-300 ease-out">
                      {subServiceIcons[i % subServiceIcons.length]}
                    </div>
                    <h3 className="font-display text-xs font-bold text-brand-black tracking-wide group-hover:text-white transition-[color] duration-300 ease-out">
                      {sub.title}
                    </h3>
                    <p className="text-xs leading-[1.8] text-gray-500 line-clamp-3 group-hover:text-white/80 transition-[color] duration-300 ease-out">
                      {sub.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-primary mt-auto group-hover:text-white transition-[color] duration-300 ease-out">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── About the service ── */}
      <section className={`py-16 md:py-24 ${hasSubServices ? "bg-brand-black" : "bg-brand-white"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <p className={`text-xs font-bold tracking-widest mb-3 uppercase ${hasSubServices ? "text-primary" : "text-primary"}`}>
                Our Approach
              </p>
              <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-5 leading-tight ${hasSubServices ? "text-brand-white" : "text-brand-black"}`}>
                WHAT SETS OUR
                <br />
                APPROACH APART
              </h2>
              <p className={`text-sm leading-[1.8] mb-5 ${hasSubServices ? "text-white/55" : "text-gray-500"}`}>
                At Hycore Construction, every project — regardless of scope — receives the same
                level of craftsmanship, transparency, and care. We balance innovation, functionality,
                and design integrity to deliver results that stand the test of time.
              </p>
              <p className={`text-sm leading-[1.8] ${hasSubServices ? "text-white/55" : "text-gray-500"}`}>
                From the materials we source to the crews we assign, every decision is made with
                your project&apos;s success in mind. We maintain clear, proactive communication at
                every phase — so you always know where your project stands and what&apos;s coming next.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={`https://picsum.photos/700/530?random=${service.id}50`}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className={`py-16 md:py-24 border-t ${hasSubServices ? "bg-brand-black border-white/10" : "bg-brand-white border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className={`font-display text-2xl md:text-3xl font-black tracking-tight mb-8 ${hasSubServices ? "text-brand-white" : "text-brand-black"}`}>
              What&apos;s Included
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.whatIsIncluded.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className={`flex items-start gap-4 p-5 rounded-xl border ${hasSubServices ? "border-white/10 bg-white/5" : "border-gray-100 bg-gray-50"}`}>
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <div>
                    <p className={`text-sm font-bold mb-1 ${hasSubServices ? "text-brand-white" : "text-brand-black"}`}>
                      {item.title}
                    </p>
                    <p className={`text-xs leading-[1.8] ${hasSubServices ? "text-white/50" : "text-gray-500"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {hasSubServices && (
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <HoverGlowButton
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  GET A FREE QUOTE
                </HoverGlowButton>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[400px]">
              <Image
                src="https://picsum.photos/700/600?random=91"
                alt="Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white tracking-tight mb-2">
                Ready to Move Forward?
              </h2>
              <p className="text-sm text-white/50 mb-8">
                Share your project details and our team will respond within one business day
                to discuss scope, timeline, and next steps. No pressure — just a real conversation
                about what you want to build.
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
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-black tracking-tight text-center mb-14">
                BUILT ON KNOWLEDGE,
                <br />
                DRIVEN BY CRAFT
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article, i) => (
                <Reveal key={article.id} delay={i * 0.1}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteBar />
    </>
  );
}
