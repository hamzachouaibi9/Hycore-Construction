import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, Star, ArrowRight, ChevronRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import ServicesAccordion from "@/components/ui/ServicesAccordion";
import ArticleCard from "@/components/ui/ArticleCard";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { Reveal } from "@/components/ui/Reveal";
import { getServices, getProjects, getArticles } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Hycore Construction | Tampa General Contractor & Home Builder",
  description:
    "Hycore Construction delivers precision residential and commercial construction across Tampa Bay — new builds, remodels, and additions on time and on budget. 500+ projects completed.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [services, projects, articles] = await Promise.all([
    getServices(),
    getProjects(),
    getArticles(),
  ]);

  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden bg-brand-black">
        <Image
          src="/projects/2413-47th-new-build/01.jpg"
          alt="Construction site"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/30" />

        {/* Large HYCORE watermark — floats up on load */}
        <div
          className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-white/[0.04] leading-none animate-hero-word"
            style={{ fontSize: "clamp(6rem, 20vw, 18rem)", marginTop: "5rem" }}
          >
            HYCORE
          </span>
        </div>

        {/* Hero content — positioned in lower portion */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Left */}
          <div>
            <Reveal onLoad delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-[1.05] mb-6">
                TURNING YOUR
                <br />
                VISION INTO
                <br />
                REALITY
              </h1>
            </Reveal>
            <Reveal onLoad delay={0.25}>
              <div className="flex items-center gap-3 mb-6">
                <CheckSquare size={20} className="text-primary flex-shrink-0" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-white/60">500+ Projects Delivered</span>
              </div>
            </Reveal>
            <Reveal onLoad delay={0.4}>
              <HoverGlowButton
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-base font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Let&apos;s Build
              </HoverGlowButton>
            </Reveal>
          </div>

          {/* Right — positioned lower */}
          <Reveal onLoad delay={0.35} direction="left" className="hidden md:block pb-3">
            <p className="text-white/50 text-sm leading-[1.8] max-w-sm">
              Whether you&apos;re breaking ground on a new build or transforming an existing space
              — Hycore brings the experience, crew, and accountability to see it through.
              On time. On budget. Built right.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left image */}
            <Reveal className="relative aspect-[3/4] rounded overflow-hidden shadow-dark">
              <Image
                src="/projects/2413-47th-new-build/23.jpg"
                alt="Construction crane"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </Reveal>

            {/* Right */}
            <Reveal delay={0.15}>
              <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                About Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight leading-tight mb-6">
                PRECISION IN
                <br />
                EVERY STRUCTURE
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 mb-8">
                Built on precision, accountability, and long-term client partnerships — Hycore
                delivers high-quality residential and commercial projects by combining skilled
                craftsmanship with disciplined project management. Every job site, every phase,
                every handover — held to the same standard of care.
              </p>
              <HoverGlowButton
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Learn More
              </HoverGlowButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Preview — "Where Dreams Take Shape" ── */}
      <section className="bg-brand-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight text-center mb-16">
              WHERE DREAMS TAKE SHAPE,
              <br />
              SPACES COME ALIVE
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Col 1: service card + image */}
            <Reveal className="flex flex-col gap-6" delay={0}>
              <Link
                href={`/services/${services[0]?.slug}`}
                className="group block p-6 border border-gray-100 rounded hover:border-primary/20 hover:shadow-[0_8px_24px_-8px_rgba(44,159,255,0.15)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-primary/40 transition-[border-color] duration-200">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-brand-black mb-2">
                  {services[0]?.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-[1.8] text-gray-500 line-clamp-3">
                  {services[0]?.description}
                </p>
              </Link>
              <div className="relative aspect-video rounded overflow-hidden flex-1">
                <Image
                  src="/projects/juan-kitchen-remodel/05.jpg"
                  alt="Construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>
            </Reveal>

            {/* Col 2: image on top, service card on bottom — inverse of cols 1 & 3.
                On mobile the columns stack, so card comes first here too, keeping
                a strict card/image alternation down the page. */}
            <Reveal className="flex flex-col gap-6" delay={0.12}>
              <div className="relative aspect-video rounded overflow-hidden flex-1 order-2 md:order-1">
                <Image
                  src="/projects/led-bath-and-tub/04.jpg"
                  alt="Construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>
              <Link
                href={`/services/${services[4]?.slug ?? ""}`}
                className="group block p-6 border border-gray-100 rounded hover:border-primary/20 hover:shadow-[0_8px_24px_-8px_rgba(44,159,255,0.15)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary order-1 md:order-2"
              >
                <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-primary/40 transition-[border-color] duration-200">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-brand-black mb-2">
                  {services[4]?.title.toUpperCase() ?? "STEEL STRUCTURE ERECTION"}
                </h3>
                <p className="text-sm leading-[1.8] text-gray-500 line-clamp-3">
                  {services[4]?.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
              </Link>
            </Reveal>

            {/* Col 3: service card + image */}
            <Reveal className="flex flex-col gap-6" delay={0.24}>
              <Link
                href={`/services/${services[1]?.slug}`}
                className="group block p-6 border border-gray-100 rounded hover:border-primary/20 hover:shadow-[0_8px_24px_-8px_rgba(44,159,255,0.15)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-primary/40 transition-[border-color] duration-200">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-brand-black mb-2">
                  {services[1]?.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-[1.8] text-gray-500 line-clamp-3">
                  {services[1]?.description}
                </p>
              </Link>
              <div className="relative aspect-video rounded overflow-hidden flex-1">
                <Image
                  src="/projects/juan-living-room-remodel/08.jpg"
                  alt="Construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="text-center mt-12">
            <HoverGlowButton
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Build With Us
            </HoverGlowButton>
          </Reveal>
        </div>
      </section>

      {/* ── Work Showcase ── */}
      <section className="relative bg-brand-black min-h-[100dvh]">
        {/* Background image scoped to its own clipping layer so the section itself has no overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/projects/pond-rehab/06.jpg"
            alt="Construction site"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 min-h-[100dvh] grid grid-cols-1 md:grid-cols-2">
          {/* Left — carousel flush to top, full section height */}
          <div className="md:min-h-[100dvh]">
            <ProjectCarousel projects={projects} fullHeight />
          </div>

          {/* Right — glass info panel, anchored to bottom */}
          <Reveal delay={0.15} className="flex flex-col justify-end px-8 md:px-12 pb-16 md:pb-20 pt-8 md:pt-0">
            <div
              className="rounded-2xl p-8 md:p-10 border border-white/10"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(11,11,11,0.5)",
              }}
            >
              <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
                <span className="w-2 h-2 rounded-sm bg-primary" />
                Our Projects
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight leading-tight mb-6">
                Work Showcase
              </h2>
              <p className="text-sm leading-[1.8] text-white/50 mb-8">
                From precision-crafted interiors to large-scale commercial builds — every project
                in our portfolio reflects meticulous execution, disciplined project management,
                and a result built to stand the test of time.
              </p>
              <HoverGlowButton
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore All <ArrowRight size={14} />
              </HoverGlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services Accordion ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tight mb-10">
                  SERVICES
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ServicesAccordion services={services} />
              </Reveal>
            </div>
            <Reveal delay={0.2} className="relative aspect-[3/4] rounded overflow-hidden shadow-dark hidden md:block">
              <Image
                src="/projects/2413-47th-new-build/24.jpg"
                alt="Construction crane at sunset"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Articles Preview ── */}
      {recentArticles.length > 0 && (
        <section className="bg-brand-black py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight text-center mb-4">
                BUILT ON KNOWLEDGE,
                <br />
                DRIVEN BY CRAFT
              </h2>
              <p className="text-center text-sm text-white/40 mb-14">
                Real insights from the professionals who build it every day.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article, i) => (
                <Reveal key={article.id} delay={i * 0.1}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="text-center mt-10">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white/50 hover:text-white transition-[color] duration-200 focus-visible:outline-none"
              >
                View all articles <ChevronRight size={14} />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
