import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  dark?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Info overlay — glassmorphism by default, white on hover */}
      <div className="absolute bottom-3 left-3 right-3 rounded-xl overflow-hidden">
        {/* Dark glass layer — fades out on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0"
          style={{ background: "rgba(12,12,12,0.65)", backdropFilter: "blur(12px)" }}
        />
        {/* White layer — fades in on hover */}
        <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3.5">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-1.5 text-brand-white transition-[color] duration-300 ease-out group-hover:text-brand-black">
              {project.title}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] border rounded-full px-2.5 py-0.5 border-white/25 text-white/55 transition-[border-color,color] duration-300 ease-out group-hover:border-gray-300 group-hover:text-gray-500">
                {project.category}
              </span>
              <span className="text-[10px] border rounded-full px-2.5 py-0.5 border-white/25 text-white/55 transition-[border-color,color] duration-300 ease-out group-hover:border-gray-300 group-hover:text-gray-500">
                {project.location}
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/15 transition-[background-color,transform] duration-300 ease-out group-hover:bg-primary group-hover:scale-105 active:scale-95">
            <ArrowRight size={14} className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
