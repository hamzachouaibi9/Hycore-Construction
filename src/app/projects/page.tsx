import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import QuoteBar from "@/components/sections/QuoteBar";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { getProjects } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Our Projects | Hycore Construction Portfolio",
  description:
    "Browse Hycore Construction's portfolio of commercial and residential projects — each one delivered on time, on budget, and built to stand the test of time.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-brand-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Reveal onLoad delay={0.05}>
            <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Projects
            </p>
          </Reveal>
          <Reveal onLoad delay={0.15}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-brand-white tracking-tight mb-5">
              OUR WORK
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.3}>
            <p className="text-sm text-white/50 max-w-sm mx-auto leading-[1.8]">
              Every project is a commitment — to the client, to the craft, and to a standard
              that doesn&apos;t compromise. Commercial and residential builds, delivered right.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="bg-brand-black py-10 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-sm">No projects found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.1}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
      <QuoteBar />
    </>
  );
}
