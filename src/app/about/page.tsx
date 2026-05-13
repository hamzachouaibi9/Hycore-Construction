import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import { Reveal } from "@/components/ui/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { StaircaseSection } from "@/components/ui/StaircaseSection";
import { StaggeredSteps } from "@/components/ui/StaggeredSteps";

export const metadata: Metadata = {
  title: "About Hycore Construction | Built on Trust",
  description:
    "Built on accountability. Powered by craftsmanship. Hycore Construction has delivered precision construction for over 20 years — every project, every scope, held to the same standard.",
};

const processSteps = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your goals, site conditions, and ideas. This sets a clear foundation and direction for the entire project.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Concept Development",
    description:
      "We explore design ideas, refine concepts, and create early layouts. Each direction is shaped with clarity, intention, and precision.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Detailed Technical Design",
    description:
      "We transform concepts into detailed architectural plans, ensuring accuracy across structure, materials, and coordination.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Project Delivery & Support",
    description:
      "We support contractors and oversee project progress, helping ensure a smooth build and faithful design execution.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Split Hero ── */}
      <section className="bg-brand-black min-h-[70dvh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-tight mb-6">
                Built on accountability.
                <br />
                Trusted to deliver.
              </h1>
              <p className="text-sm leading-[1.8] text-white/50 max-w-sm">
                General contracting rooted in craftsmanship, transparency, and accountability.
                Serving residential and commercial clients with the same standard of care
                for over 20 years.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="https://picsum.photos/700/500?random=80"
                alt="Construction worker"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div />
            <Reveal delay={0.1}>
              <p className="text-sm leading-[1.8] text-white/50">
                With over two decades of delivering high-quality projects on time and on budget,
                Hycore Construction has become a trusted name in commercial construction. From
                pre-construction planning to final walkthroughs, our team brings clarity,
                precision, and craftsmanship to every job site.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Image Carousel ── */}
      <ImageCarousel />

      {/* ── From Small Beginnings — Staircase animation ── */}
      <StaircaseSection />

      {/* ── Our Approach ── */}
      <section className="bg-brand-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-white tracking-tight mb-14">
              From first conversation to final handover —<br />
              every decision made with purpose.
            </h2>
          </Reveal>
          <StaggeredSteps steps={processSteps} />
        </div>
      </section>

      <CTABanner />
      <QuoteBar />
    </>
  );
}
