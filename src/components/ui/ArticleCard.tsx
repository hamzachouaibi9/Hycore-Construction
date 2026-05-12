import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "small" | "overlay";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "overlay") {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="group block relative rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent" />
        </div>
        {/* Glassmorphism text panel */}
        <div
          className="absolute bottom-3 left-3 right-3 rounded-xl px-4 py-4"
          style={{ backdropFilter: "blur(14px)", background: "rgba(8,8,8,0.6)" }}
        >
          <p className="text-[10px] text-white/50 mb-2">{article.publishedDate}</p>
          <h3 className="font-display text-sm font-bold text-brand-white tracking-tight leading-snug mb-4 line-clamp-2">
            {article.title.toUpperCase()}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={article.author.image}
                alt={article.author.name}
                width={22}
                height={22}
                className="rounded-full object-cover"
              />
              <span className="text-[10px] text-white/50 font-medium uppercase tracking-wide">
                {article.author.name}
              </span>
            </div>
            <ArrowUpRight
              size={15}
              className="text-white/50 transition-[color,transform] duration-300 ease-out group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "small") {
    return (
      <Link
        href={`/articles/${article.slug}`}
        className="group block relative overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{ backdropFilter: "blur(8px)", background: "rgba(10,10,10,0.45)" }}
        >
          <p className="text-[10px] text-white/50 mb-1.5">{article.publishedDate}</p>
          <p className="text-xs font-bold text-brand-white leading-snug line-clamp-3">
            {article.title.toUpperCase()}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={20}
              height={20}
              className="rounded-full object-cover"
            />
            <span className="text-[10px] text-white/50 font-medium">{article.author.name.toUpperCase()}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-xl overflow-hidden bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content — turns blue on hover */}
      <div className="p-5 md:p-6 transition-[background-color] duration-300 ease-out group-hover:bg-primary">
        <p className="text-xs text-gray-400 group-hover:text-white/70 mb-2 transition-[color] duration-300 ease-out">
          {article.publishedDate}
        </p>
        <h3 className="font-display text-base font-black text-brand-black group-hover:text-white tracking-tight leading-snug mb-4 transition-[color] duration-300 ease-out">
          {article.title.toUpperCase()}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-xs font-semibold text-gray-500 group-hover:text-white/80 uppercase tracking-wide transition-[color] duration-300 ease-out">
              {article.author.name}
            </span>
          </div>
          {/* Arrow: right → diagonal on hover */}
          <div className="w-8 h-8 flex items-center justify-center">
            <ArrowRight
              size={16}
              className="text-primary group-hover:text-white transition-[color,transform] duration-300 ease-out group-hover:-rotate-45"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
