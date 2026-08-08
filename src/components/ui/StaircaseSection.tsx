"use client";

import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

// Each column rises from the bottom with a staggered start,
// creating a descending staircase shape at any scroll position.
// Col 0 (left) leads; col 4 (right) lags by 0.05 × 4 = 0.20.
const COLUMNS = 5;

function OverlayColumn({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = 0.10 + index * 0.05; // 0.10 → 0.30
  const end = start + 0.35;           // 0.45 → 0.65

  const height = useTransform(scrollYProgress, [start, end], ["0%", "100%"]);

  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${(index / COLUMNS) * 100}%`,
        // Tiny overlap (+0.3%) prevents hairline gaps between columns
        width: `${100 / COLUMNS + 0.3}%`,
        height,
        backgroundColor: "#0b0b0b",
      }}
    />
  );
}

export function StaircaseSection() {
  const ref = useRef<HTMLElement>(null);

  // Progress: 0 = section entering viewport bottom, 1 = section leaving viewport top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Text fades in once the staircase has mostly covered the image
  const textOpacity = useTransform(scrollYProgress, [0.65, 0.65], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.65, 0.70], [28, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[90vh] flex items-end"
    >
      {/* Background image — full opacity so the staircase cover is dramatic */}
      <Image
        src="/projects/2413-47th-new-build/27.jpg"
        alt="Construction workers"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Staircase overlay columns (z-10) */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <OverlayColumn key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Text content (z-20) — positioned at bottom so it sits on the black */}
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24 pt-32"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-white tracking-tight leading-tight mb-6">
            From Small Beginnings
            <br />
            to Industry Leaders.
          </h2>
          <p className="text-sm leading-[1.8] text-white/55 max-w-sm">
            Founded on the belief that great construction starts with great
            relationships, Hycore Construction began as a family-run operation
            focused on quality, transparency, and delivering on promises. Over
            the years, we&apos;ve grown into a full-service general contractor
            handling complex commercial builds, large-scale renovations, and
            infrastructure projects — all while keeping our core values intact.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
