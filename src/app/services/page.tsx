import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import ArticleCard from "@/components/ui/ArticleCard";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { Reveal } from "@/components/ui/Reveal";
import { getServices, getArticles } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Construction Services | Hycore Construction",
  description:
    "From custom home design to commercial builds, renovations, and storm damage repair — Hycore Construction delivers expert results across every scope and scale.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const [services, articles] = await Promise.all([getServices(), getArticles()]);
  const recentArticles = articles.slice(0, 3);

  const serviceIcons = [
    <svg key="k" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    <svg key="h" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    <svg key="b" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
    <svg key="r" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    <svg key="s" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    <svg key="p" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[85dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src="/heroimage.jpg"
          alt="Construction site"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/70 to-brand-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <Reveal onLoad delay={0.1}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-brand-white tracking-tight leading-[1.0]">
                  BUILT RIGHT.
                  <br />
                  FROM START
                  <br />
                  TO FINISH.
                </h1>
              </Reveal>
              <Reveal onLoad delay={0.25}>
                <p className="mt-6 text-sm leading-[1.8] text-white/50 max-w-lg">
                  From single-room remodels to ground-up commercial builds — every project gets
                  the same commitment: expert crews, clear communication, and a finished result
                  that exceeds expectations. No surprises. No shortcuts.
                </p>
              </Reveal>
              <Reveal onLoad delay={0.4}>
                <HoverGlowButton
                  href="/contact"
                  className="mt-8 inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  LET&apos;S BUILD
                </HoverGlowButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empowering Industries — Comprehensive Solutions ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start mb-12">
            <Reveal className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight leading-tight mb-5">
                ONE TEAM.
                <br />
                EVERY TRADE.
                <br />
                EVERY SCOPE.
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 max-w-xl">
                Hycore manages every phase of your build — from permits and planning through
                final inspection. One accountable team, transparent communication, and a
                commitment to delivering on time and on budget.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="hidden md:block relative aspect-video rounded overflow-hidden">
              <Image
                src="https://picsum.photos/600/400?random=5"
                alt="Construction interior"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </Reveal>
          </div>

          {/* 3×2 service grid — thin blue border, hover turns blue */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.07} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-8 flex flex-col gap-3 border border-primary/20 rounded-xl hover:border-primary hover:bg-primary hover:scale-[1.02] transition-[background-color,border-color,transform,box-shadow] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
                >
                  <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-500 group-hover:border-white/30 group-hover:text-white transition-[border-color,color] duration-300 ease-out">
                    {serviceIcons[i % serviceIcons.length]}
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-black tracking-wide group-hover:text-white transition-[color] duration-300 ease-out">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-gray-500 line-clamp-4 group-hover:text-white/80 transition-[color] duration-300 ease-out">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-primary mt-auto group-hover:text-white transition-[color] duration-300 ease-out">
                    Learn More <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Innovative Solutions ── */}
      <section className="bg-brand-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-white tracking-tight text-center mb-14">
              THE RIGHT SOLUTION
              <br />
              FOR EVERY PROJECT TYPE
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-xl p-7 border border-white/10 bg-white/5 hover:border-primary/60 hover:bg-primary transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
                >
                  <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center mb-6 text-white/50 group-hover:border-white/40 group-hover:text-white transition-[border-color,color] duration-300 ease-out">
                    {serviceIcons[i % serviceIcons.length]}
                  </div>
                  <h3 className="font-display text-base font-bold mb-2 text-brand-white group-hover:text-white transition-[color] duration-300 ease-out">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.8] mb-6 text-white/40 line-clamp-3 group-hover:text-white/80 transition-[color] duration-300 ease-out">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-white/50 group-hover:text-white transition-[color] duration-300 ease-out">
                    See What&apos;s Included
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* ── Articles Preview ── */}
      {recentArticles.length > 0 && (
        <section className="bg-brand-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight text-center mb-14">
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
