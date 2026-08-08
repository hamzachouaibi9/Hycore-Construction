import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import ContactForm from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { getLocationBySlug, getLocations, getServices } from "@/lib/payload";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = await getLocationBySlug(city);
  if (!location) return { title: "Location Not Found" };
  return {
    title: location.seoTitle,
    description: location.seoDescription,
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      images: [{ url: location.heroImage }],
    },
  };
}

const serviceIcons = [
  <svg key="a" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  <svg key="b" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  <svg key="c" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="d" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="e" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="f" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>,
];

const whyItems = [
  { title: "Licensed & Insured", body: "Every project is fully permitted, licensed, and backed by comprehensive insurance — protecting your property and your investment." },
  { title: "Local Expertise", body: "We understand Tampa Bay's building codes, climate demands, and neighborhood character — and we bring that knowledge to every job site." },
  { title: "Single Point of Contact", body: "One dedicated project manager handles everything from first call to final walkthrough — no runarounds, no gaps in communication." },
  { title: "On-Time, On-Budget", body: "Our project management discipline keeps your timeline and budget in check from day one. Surprises are for the client — not the contractor." },
];

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const [location, services] = await Promise.all([
    getLocationBySlug(city),
    getServices(),
  ]);

  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hycore Construction",
    description: location.seoDescription,
    url: `https://hycoreconstruction.com/locations/${location.slug}`,
    telephone: "+1-813-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.shortName,
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: location.shortName },
      ...location.highlights.map((h) => ({ "@type": "Neighborhood", name: h })),
    ],
    priceRange: "$$",
    image: location.heroImage,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src={location.heroImage}
          alt={`Construction company in ${location.name}`}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-14 w-full">
          <Reveal onLoad delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary/80 mb-5 uppercase">
              <MapPin size={12} />
              {location.county}
            </div>
          </Reveal>
          <Reveal onLoad delay={0.15}>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              Hycore Construction
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-[1.05]">
              CONSTRUCTION COMPANY
              <br />
              IN {location.shortName.toUpperCase()}, FL
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.28}>
            <p className="mt-5 text-sm leading-[1.8] text-white/55 max-w-2xl">
              {location.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <HoverGlowButton
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                GET A FREE QUOTE
              </HoverGlowButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-bold tracking-widest rounded hover:border-white/50 transition-[border-color] duration-200 focus-visible:outline-none"
              >
                VIEW SERVICES <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Neighborhoods served ── */}
      <section className="bg-primary py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-xs font-bold tracking-widest text-white/70 uppercase">
            Areas Served:
          </span>
          {location.highlights.map((h) => (
            <span key={h} className="text-xs font-bold text-white tracking-wide">
              {h}
            </span>
          ))}
        </div>
      </section>

      {/* ── Intro / About ── */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
                Serving {location.shortName}
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight mb-5 leading-tight">
                YOUR LOCAL
                <br />
                CONSTRUCTION PARTNER
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 mb-4">
                Hycore Construction has built a reputation across the Tampa Bay area by delivering
                projects that homeowners and developers trust — on time, on budget, and built to
                outlast the next decade of Florida weather.
              </p>
              <p className="text-sm leading-[1.8] text-gray-500 mb-8">
                Whether you&apos;re planning a kitchen remodel, a full home renovation, a room
                addition, or a ground-up custom build in {location.shortName}, our team brings
                the planning discipline, licensed crews, and transparent communication that turns
                a difficult process into a confident one.
              </p>
              <ul className="space-y-3">
                {[
                  `Licensed general contractor serving ${location.shortName} and ${location.county}`,
                  "Full-service: design, permitting, construction, and finish",
                  "Dedicated project manager for every engagement",
                  "Free consultations and no-obligation quotes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={"/projects/haya-new-build/02.jpg"}
                alt={`Construction services in ${location.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-brand-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              What We Build
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-white tracking-tight mb-3">
              CONSTRUCTION SERVICES
              <br />
              IN {location.shortName.toUpperCase()}
            </h2>
            <p className="text-sm leading-[1.8] text-white/50 max-w-xl mb-12">
              Every service below is available to {location.shortName} homeowners — delivered by
              Hycore&apos;s full-time crews with licensed subcontractors, transparent pricing, and
              a single team accountable from start to finish.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.07}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-7 rounded-xl border border-white/10 bg-white/5 hover:border-primary hover:bg-primary/10 transition-[border-color,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
                >
                  <div className="w-10 h-10 rounded border border-white/15 flex items-center justify-center text-white/50 group-hover:border-primary/50 group-hover:text-primary transition-[border-color,color] duration-300 mb-4">
                    {serviceIcons[i % serviceIcons.length]}
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-white tracking-wide mb-2 group-hover:text-primary transition-[color] duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-white/45 line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase">
                    Learn More <ArrowRight size={11} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Hycore ── */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              Why Hycore
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight mb-12">
              WHAT SETS US APART
              <br />
              IN {location.shortName.toUpperCase()}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="p-7 rounded-xl border border-gray-100 bg-gray-50 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-sm leading-[1.8] text-gray-500">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ── */}
      <section className="bg-brand-black py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              Also Serving
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-white tracking-tight mb-8">
              NEARBY AREAS WE SERVE
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {location.nearbyAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.07}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm font-bold text-white/70 hover:border-primary hover:text-white transition-[border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <MapPin size={13} className="text-primary" />
                  {area.name}
                  <ArrowRight size={11} className="text-white/30 group-hover:text-primary transition-[color] duration-200" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="bg-brand-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[400px]">
              <Image
                src="/projects/2413-47th-new-build/22.jpg"
                alt={`Construction services in ${location.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white tracking-tight mb-2">
                Start Your {location.shortName} Project
              </h2>
              <p className="text-sm text-white/50 mb-8">
                Tell us about your project and we&apos;ll respond within one business day with a
                clear next step — no pressure, no runaround. Just a real conversation about
                what you want to build in {location.shortName}.
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
