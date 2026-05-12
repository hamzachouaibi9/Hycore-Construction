import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  dark?: boolean;
}

export default function ProjectCard({ project, dark = true }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-[transform] duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Info bar */}
      <div
        className={`flex items-center justify-between px-4 py-3.5 ${
          dark ? "bg-brand-black" : "bg-white"
        }`}
      >
        <div>
          <p
            className={`text-xs font-bold tracking-widest uppercase mb-1.5 ${
              dark ? "text-brand-white" : "text-brand-black"
            }`}
          >
            {project.title}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] border rounded px-2 py-0.5 ${
                dark
                  ? "border-white/20 text-white/50"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {project.category}
            </span>
            <span
              className={`text-[10px] border rounded px-2 py-0.5 ${
                dark
                  ? "border-white/20 text-white/50"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {project.location}
            </span>
          </div>
        </div>
        <div
          className={`w-9 h-9 rounded flex items-center justify-center flex-shrink-0 transition-[background-color,transform] duration-200 group-hover:scale-110 active:scale-95 ${
            dark
              ? "bg-primary group-hover:bg-primary-dark"
              : "bg-gray-100 group-hover:bg-primary group-hover:text-white"
          }`}
        >
          <ArrowRight
            size={14}
            className={dark ? "text-white" : "text-gray-600 group-hover:text-white"}
          />
        </div>
      </div>
    </Link>
  );
}
