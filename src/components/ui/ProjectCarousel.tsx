"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface Props {
  projects: Project[];
  fullHeight?: boolean;
}

export default function ProjectCarousel({ projects, fullHeight = false }: Props) {
  const items = [...projects, ...projects];

  return (
    <div className={`relative [overflow:clip] ${fullHeight ? "h-[100dvh]" : "h-[480px] md:h-[560px]"}`}>
      {/* Fade masks */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none" />

      {/* Desktop: vertical infinite scroll */}
      <div className="hidden md:flex flex-col gap-4 animate-carousel-vertical px-4">
        {items.map((project, i) => (
          <CarouselCard key={`v-${project.id}-${i}`} project={project} />
        ))}
      </div>

      {/* Mobile: horizontal infinite scroll */}
      <div className="flex md:hidden animate-carousel-horizontal gap-4 w-max py-4 px-4">
        {items.map((project, i) => (
          <CarouselCard key={`h-${project.id}-${i}`} project={project} mobile />
        ))}
      </div>
    </div>
  );
}

function CarouselCard({ project, mobile }: { project: Project; mobile?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block flex-shrink-0 rounded-xl overflow-hidden border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:border-primary/30 transition-[border-color] duration-300 ${
        mobile ? "w-72 aspect-[4/5]" : "w-full aspect-video"
      }`}
      style={{
        backdropFilter: "blur(6px)",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
        sizes={mobile ? "288px" : "(max-width: 768px) 100vw, 50vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />

      {/* Card footer with subtle glass */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(11,11,11,0.35)",
        }}
      >
        <p className="font-display text-sm font-bold text-brand-white leading-snug">
          {project.title}
        </p>
        <p className="text-xs text-white/50 mt-0.5">
          {project.category} &middot; {project.location}
        </p>
      </div>
    </Link>
  );
}
