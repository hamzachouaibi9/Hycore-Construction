"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative aspect-[4/3] rounded overflow-hidden cursor-zoom-in group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View ${title} — photo ${i + 1} full size`}
          >
            <Image
              src={img}
              alt={`${title} — photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-[transform] duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — photo ${openIndex + 1} of ${images.length}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-[color] duration-200"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 md:left-6 z-10 p-2 text-white/70 hover:text-white transition-[color] duration-200"
                aria-label="Previous photo"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 md:right-6 z-10 p-2 text-white/70 hover:text-white transition-[color] duration-200"
                aria-label="Next photo"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div
            className="relative w-[92vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={`${title} — photo ${openIndex + 1}`}
              fill
              className="object-contain"
              sizes="92vw"
              priority
            />
          </div>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {openIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
