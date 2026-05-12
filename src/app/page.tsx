import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, Star, ArrowRight, ChevronRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import ServicesAccordion from "@/components/ui/ServicesAccordion";
import ArticleCard from "@/components/ui/ArticleCard";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { getServices, getProjects, getArticles } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Hycore Construction | Turning Your Vision Into Reality",
  description:
    "Hycore Construction delivers high-quality commercial and residential construction projects, combining experienced craftsmanship with disciplined project management.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hycore Construction",
  description: "A forward-thinking construction company dedicated to transforming ideas into reality.",
  url: "https://hycoreconstruction.com",
  telephone: "(555) 555-5555",
  address: {
    "@type": "PostalAddress",
    streetAddress: "410 Sandtown",
    addressLocality: "California",
    postalCode: "94001",
    addressCountry: "US",
  },
  priceRange: "$$",
  sameAs: ["https://instagram.com", "https://facebook.com", "https://linkedin.com"],
};

export default async function HomePage() {
  const [services, projects, articles] = await Promise.all([
    getServices(),
    getProjects(),
    getArticles(),
  ]);

  const featuredProjects = projects.slice(0, 2);
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-brand-black">
        <Image
          src="/heroimage.jpg"
          alt="Construction site"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/30" />

        {/* Large watermark text */}
        <div
          className="absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-white/5 leading-none"
            style={{ fontSize: "clamp(6rem, 20vw, 18rem)", marginTop: "-2rem" }}
          >
            HYCORE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-[1.05] mb-6">
              TURNING YOUR
              <br />
              VISION INTO
              <br />
              REALITY
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <CheckSquare size={20} className="text-primary flex-shrink-0" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-primary fill-primary" />
                ))}
              </div>
              <span className="text-xs text-white/60">Trusted by 500+ Customers</span>
            </div>
            <HoverGlowButton
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Let&apos;s Build
            </HoverGlowButton>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <p className="text-white/50 text-sm leading-[1.8] max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Viverra scelerisque dolor
              nec blandit nullam parturient viverra id.
            </p>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left image */}
            <div className="relative aspect-[3/4] rounded overflow-hidden shadow-dark">
              <Image
                src="https://picsum.photos/600/800?random=1"
                alt="Construction crane"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
            </div>

            {/* Right */}
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                About Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight leading-tight mb-6">
                INNOVATION IN
                <br />
                EVERY STRUCTURE
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 mb-8">
                We are a construction company built on precision, accountability, and long-term
                partnerships. Our team delivers high-quality commercial and residential projects
                by combining experienced craftsmanship with disciplined project management.
              </p>
              <HoverGlowButton
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Learn More
              </HoverGlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="bg-brand-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight text-center mb-16">
            WHERE DREAMS TAKE SHAPE,
            <br />
            SPACES COME ALIVE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              {services.slice(0, 2).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block p-6 border border-gray-100 rounded hover:border-primary/20 hover:shadow-[0_8px_24px_-8px_rgba(44,159,255,0.15)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-primary/40 transition-[border-color] duration-200">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-black mb-2">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-xs leading-[1.8] text-gray-500 line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Col 2 — large image */}
            <div className="relative aspect-[3/4] md:aspect-auto rounded overflow-hidden">
              <Image
                src="https://picsum.photos/600/900?random=2"
                alt="Construction workers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 border border-white/30 rounded flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-bold text-brand-white mb-1">STEEL STRUCTURE ERECTION</h3>
                <p className="text-xs text-white/60 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6">
              {services.slice(2, 4).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block p-6 border border-gray-100 rounded hover:border-primary/20 hover:shadow-[0_8px_24px_-8px_rgba(44,159,255,0.15)] transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center mb-4 group-hover:border-primary/40 transition-[border-color] duration-200">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-black mb-2">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-xs leading-[1.8] text-gray-500 line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              ))}
              <div className="relative aspect-video rounded overflow-hidden">
                <Image
                  src="https://picsum.photos/600/400?random=3"
                  alt="Construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <HoverGlowButton
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Build With Us
            </HoverGlowButton>
          </div>
        </div>
      </section>

      {/* ── Work Showcase ── */}
      <section className="relative bg-brand-black overflow-hidden">
        <Image
          src="https://picsum.photos/1400/800?random=71"
          alt="Construction site"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left — project cards */}
            <div className="flex flex-col gap-5">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group relative block rounded overflow-hidden aspect-video focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-[transform] duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-display text-base font-bold text-brand-white">{project.title}</p>
                    <p className="text-xs text-white/50 mt-1 line-clamp-1">{project.description.slice(0, 60)}...</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right */}
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Our Projects
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight leading-tight mb-6">
                Work Showcase
              </h2>
              <p className="text-sm leading-[1.8] text-white/50 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <HoverGlowButton
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore all <ArrowRight size={14} />
              </HoverGlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Accordion ── */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tight mb-10">
                SERVICES
              </h2>
              <ServicesAccordion services={services} />
            </div>
            <div className="relative aspect-[3/4] rounded overflow-hidden shadow-dark hidden md:block">
              <Image
                src="https://picsum.photos/600/800?random=4"
                alt="Construction crane at sunset"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles Preview ── */}
      {recentArticles.length > 0 && (
        <section className="bg-brand-black py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight text-center mb-4">
              STRENGTH AND STYLE IN
              <br />
              EVERY PROJECT
            </h2>
            <p className="text-center text-sm text-white/40 mb-14">
              Insights from our team of construction professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-[color] duration-200 focus-visible:outline-none"
              >
                View all articles <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <QuoteBar />
    </>
  );
}
