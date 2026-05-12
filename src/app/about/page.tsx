import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Building trust, one project at a time. General contracting rooted in craftsmanship, clarity, and commitment. Serving commercial clients across the Northeast for over 20 years.",
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
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-tight mb-6">
                Building trust, one
                <br />
                project at a time
              </h1>
              <p className="text-sm leading-[1.8] text-white/50 max-w-sm">
                General contracting rooted in craftsmanship, clarity, and commitment.
                Serving commercial clients across the Northeast for over 20 years.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="https://picsum.photos/700/500?random=80"
                alt="Construction worker"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </div>
          </div>

          {/* Right description */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div />
            <div>
              <p className="text-sm leading-[1.8] text-white/50">
                With over two decades of delivering high-quality projects on time and on budget,
                Foster &amp; Reeves has become a trusted name in commercial construction. From
                pre-construction planning to final walkthroughs, our team brings clarity,
                precision, and craftsmanship to every job site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-image strip ── */}
      <section className="grid grid-cols-3 h-64 md:h-96">
        {[81, 82, 83].map((seed) => (
          <div key={seed} className="relative overflow-hidden">
            <Image
              src={`https://picsum.photos/600/400?random=${seed}`}
              alt="Construction"
              fill
              className="object-cover hover:scale-105 transition-[transform] duration-500"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        ))}
      </section>

      {/* ── Story ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-black tracking-tight mb-5">
                From small beginnings to industry leader.
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500">
                Founded on the belief that great construction starts with great relationships,
                Hycore Construction began as a family-run operation focused on quality,
                transparency, and delivering on promises. Over the years, we&apos;ve grown into a
                full-service general contractor handling complex commercial builds, large-scale
                renovations, and infrastructure projects — all while keeping our core values
                intact.
              </p>
            </div>
            <div className="relative aspect-video rounded overflow-hidden">
              <Image
                src="https://picsum.photos/700/400?random=84"
                alt="Construction team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark overlay section ── */}
      <section className="relative bg-brand-black overflow-hidden">
        <Image
          src="https://picsum.photos/1400/600?random=85"
          alt="Construction workers"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white tracking-tight mb-5">
                From small beginnings to industry leader.
              </h2>
              <p className="text-sm leading-[1.8] text-white/50">
                Founded on the belief that great construction starts with great relationships,
                Hycore Construction began as a family-run operation focused on quality,
                transparency, and delivering on promises. Over the years, we&apos;ve grown into a
                full-service general contractor handling complex commercial builds, large-scale
                renovations, and infrastructure projects — all while keeping our core values
                intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight mb-14">
            Our approach spans the full journey —<br />
            insightful planning, and thoughtful design
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded overflow-hidden">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-brand-white p-8">
                <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center text-gray-500 mb-5">
                  {step.icon}
                </div>
                <h3 className="font-display text-xs font-bold text-brand-black mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs leading-[1.8] text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <QuoteBar />
    </>
  );
}
