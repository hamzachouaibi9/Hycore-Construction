import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import ArticleCard from "@/components/ui/ArticleCard";
import ContactForm from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { getServiceBySlug, getSubServiceBySlug, getServices, getArticles } from "@/lib/payload";
import { notFound } from "next/navigation";
import { metaDescription, breadcrumbsJsonLd, serviceJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string; subslug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  const params: { slug: string; subslug: string }[] = [];
  for (const service of services) {
    if (service.subServices) {
      for (const sub of service.subServices) {
        params.push({ slug: service.slug, subslug: sub.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params;
  const subService = await getSubServiceBySlug(slug, subslug);
  if (!subService) return { title: "Service Not Found" };
  const description = metaDescription(
    `Expert ${subService.title.toLowerCase()} contractor serving Tampa, Brandon, Riverview, South Tampa, and the greater Tampa Bay area. ${subService.description}`
  );
  return {
    title: `${subService.title} in Tampa, FL | Hycore Construction`,
    description,
    alternates: { canonical: `/services/${slug}/${subslug}` },
    openGraph: {
      title: `${subService.title} in Tampa, FL | Hycore Construction`,
      description,
    },
  };
}

const whyChooseItems = [
  {
    title: "Experienced Teams",
    description:
      "Our skilled crews bring years of hands-on expertise to every project, ensuring work is completed to the highest standards.",
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed at every stage — clear timelines, honest estimates, and proactive updates throughout the project.",
  },
  {
    title: "Quality Materials",
    description:
      "We source premium materials from trusted suppliers, balancing durability, aesthetics, and long-term value for your investment.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Our project management discipline ensures your project stays on schedule, minimizing disruption to your daily life.",
  },
];

export default async function SubServiceDetailPage({ params }: Props) {
  const { slug, subslug } = await params;
  const [service, subService, articles] = await Promise.all([
    getServiceBySlug(slug),
    getSubServiceBySlug(slug, subslug),
    getArticles(),
  ]);

  if (!service || !subService) notFound();

  const recentArticles = articles.slice(0, 3);

  const jsonLd = [
    serviceJsonLd({
      name: subService.title,
      description: subService.description,
      path: `/services/${service.slug}/${subService.slug}`,
    }),
    breadcrumbsJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
      { name: subService.title, path: `/services/${service.slug}/${subService.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60dvh] flex items-end bg-brand-black overflow-hidden">
        <Image
          src={subService.heroImage}
          alt={subService.title}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/55 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-14 w-full">
          <Reveal onLoad delay={0.05}>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white/50 hover:text-white transition-[color] duration-200 mb-6 focus-visible:outline-none"
            >
              <ArrowLeft size={14} />
              Back to {service.title}
            </Link>
          </Reveal>
          <Reveal onLoad delay={0.15}>
            <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
              {service.title}
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-brand-white tracking-tight leading-[1.05]">
              {subService.title}
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.28}>
            <p className="mt-5 text-sm leading-[1.8] text-white/55 max-w-2xl">
              {subService.description}
            </p>
            <div className="mt-8">
              <HoverGlowButton
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                GET A FREE QUOTE
              </HoverGlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-primary mb-3 uppercase">
                Service Overview
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-black tracking-tight mb-5 leading-tight">
                EXPERT {subService.title.toUpperCase()}
                <br />
                YOU CAN TRUST
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 mb-4">
                Every project starts with a clear plan and ends with a result you can stand behind.
                Hycore brings disciplined project management, skilled crews, and a single point of
                accountability to every engagement — so the work moves forward without gaps,
                surprises, or delays.
              </p>
              <p className="text-sm leading-[1.8] text-gray-500">
                At Hycore Construction, we approach every {subService.title.toLowerCase()} project
                with the same commitment to quality and precision that has defined our reputation.
                From the initial consultation through final delivery, our team is with you every
                step of the way.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={"/projects/juan-kitchen-remodel/06.jpg"}
                alt={subService.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white pb-16 md:pb-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-black tracking-tight mb-3">
              What&apos;s Included
            </h2>
            <p className="text-sm leading-[1.8] text-gray-500 max-w-xl mb-10">
              Every {subService.title.toLowerCase()} engagement includes a structured,
              end-to-end scope managed by our team — so nothing is left to assumption
              and every phase is accounted for before work begins.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subService.whatIsIncluded.map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-black mb-1">{item.title}</p>
                    <p className="text-sm leading-[1.8] text-gray-500">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-brand-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-white tracking-tight text-center mb-3">
              WHY CHOOSE HYCORE
              <br />
              FOR {subService.title.toUpperCase()}?
            </h2>
            <p className="text-sm leading-[1.8] text-white/50 text-center max-w-xl mx-auto mb-14">
              Five hundred projects have taught us what matters most: the crew, the plan,
              and the discipline to follow through on both. Here&apos;s what you get with
              every Hycore engagement.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyChooseItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-7 rounded-xl border border-white/10 bg-white/5 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-5">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-white/45">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services in this category ── */}
      {service.subServices && service.subServices.length > 1 && (
        <section className="bg-brand-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-black text-brand-black tracking-tight mb-3">
                MORE {service.title.toUpperCase()} SERVICES
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 max-w-xl mb-10">
                Explore other services within our {service.title} category.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {service.subServices
                .filter((s) => s.slug !== subslug)
                .slice(0, 3)
                .map((sub, i) => (
                  <Reveal key={sub.id} delay={i * 0.07}>
                    <Link
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="group flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-primary transition-[border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm font-bold text-brand-black group-hover:text-primary transition-[color] duration-200">
                        {sub.title}
                      </span>
                      <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-primary transition-[color] duration-200" />
                    </Link>
                  </Reveal>
                ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-primary hover:text-primary-dark transition-[color] duration-200"
                >
                  VIEW ALL {service.title.toUpperCase()} SERVICES <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Contact form ── */}
      <section className="bg-brand-black">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto min-h-[400px]">
              <Image
                src="/projects/cypress-bath-remodel/03.jpg"
                alt="Construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 md:p-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white tracking-tight mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-sm text-white/50 mb-8">
                Contact our team today to discuss your {subService.title.toLowerCase()} project.
                We offer free consultations and transparent, no-obligation quotes.
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
