import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "small";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
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
            className="object-cover transition-[transform] duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
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
      className="group block relative overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover transition-[transform] duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[10px] text-white/50 mb-2">{article.publishedDate}</p>
        <h3 className="font-display text-base font-bold text-brand-white leading-snug mb-3">
          {article.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={article.author.image}
              alt={article.author.name}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span className="text-[10px] text-white/50 font-medium uppercase">
              {article.author.name}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-[background-color,border-color] duration-200">
            <ArrowUpRight size={13} className="text-white/60 group-hover:text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
