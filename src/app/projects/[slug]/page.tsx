import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjectBySlug, getProjects } from "@/lib/payload";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
  ]);

  if (!project) notFound();

  const moreProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen bg-brand-black overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 md:pb-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white/70 hover:text-white transition-[color] duration-200 mb-8 focus-visible:outline-none"
          >
            <ArrowLeft size={14} />
            Return to Projects
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
            <span>{project.deadline}</span>
            <span>|</span>
            <span>{project.category}</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-black text-white tracking-tight leading-none">
            {project.title.toUpperCase()}
          </h1>
        </div>
      </section>

      {/* ── Details + Overview ── */}
      <section className="bg-brand-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Details */}
            <div>
              <h2 className="font-display text-sm font-black text-brand-black tracking-widest uppercase mb-5">
                Details
              </h2>
              <dl className="space-y-3">
                {[
                  ["Client", project.client],
                  ["Project", project.category],
                  ["Budget", project.budget],
                  ["Deadline", project.deadline],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm font-bold text-gray-400 uppercase tracking-wide">{label}</dt>
                    <dd className="text-sm text-brand-black mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Overview */}
            <div className="md:col-span-2">
              <h2 className="font-display text-sm font-black text-brand-black tracking-widest uppercase mb-5">
                Overview
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {project.gallery.length > 0 && (
        <section className="bg-brand-white pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} — photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-[transform] duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />

      {/* ── More Projects ── */}
      {moreProjects.length > 0 && (
        <section className="bg-brand-black py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-white tracking-tight text-center mb-14">
              MORE PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moreProjects.map((project) => (
                <ProjectCard key={project.id} project={project} dark />
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteBar />
    </>
  );
}
