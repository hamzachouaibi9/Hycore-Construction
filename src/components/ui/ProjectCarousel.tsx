"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface Props {
  projects: Project[];
  fullHeight?: boolean;
}

/**
 * Infinite marquee that respects user input: auto-drifts when idle,
 * but mouse wheel and pointer drag scrub it directly (with seamless
 * wrap-around), and it pauses while the user is interacting.
 */
function attachMarquee(el: HTMLElement | null, axis: "x" | "y", speed: number) {
  if (!el) return () => {};

  let offset = 0;
  let paused = false;
  let dragging = false;
  let dragMoved = 0;
  let lastPos = 0;
  let last = performance.now();
  let raf = 0;

  const half = () => (axis === "y" ? el.scrollHeight : el.scrollWidth) / 2;
  const wrap = (v: number) => {
    const h = half();
    return h > 0 ? ((v % h) + h) % h : 0;
  };
  const apply = () => {
    el.style.transform = axis === "y" ? `translateY(${-offset}px)` : `translateX(${-offset}px)`;
  };

  const tick = (now: number) => {
    const dt = (now - last) / 1000;
    last = now;
    if (!paused && !dragging) {
      offset = wrap(offset + speed * dt);
      apply();
    }
    raf = requestAnimationFrame(tick);
  };

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    offset = wrap(offset + (e.deltaY || e.deltaX));
    apply();
  };
  const onDown = (e: PointerEvent) => {
    dragging = true;
    dragMoved = 0;
    lastPos = axis === "y" ? e.clientY : e.clientX;
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    const pos = axis === "y" ? e.clientY : e.clientX;
    dragMoved += Math.abs(pos - lastPos);
    offset = wrap(offset - (pos - lastPos));
    lastPos = pos;
    apply();
  };
  const onUp = () => {
    dragging = false;
  };
  // A drag shouldn't count as a click on the card underneath.
  const onClick = (e: MouseEvent) => {
    if (dragMoved > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const onEnter = () => {
    paused = true;
  };
  const onLeave = () => {
    paused = false;
    dragging = false;
  };

  const host = el.parentElement ?? el;
  el.addEventListener("wheel", onWheel, { passive: false });
  el.addEventListener("pointerdown", onDown);
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerup", onUp);
  el.addEventListener("pointercancel", onUp);
  el.addEventListener("click", onClick, true);
  host.addEventListener("mouseenter", onEnter);
  host.addEventListener("mouseleave", onLeave);
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    el.removeEventListener("wheel", onWheel);
    el.removeEventListener("pointerdown", onDown);
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerup", onUp);
    el.removeEventListener("pointercancel", onUp);
    el.removeEventListener("click", onClick, true);
    host.removeEventListener("mouseenter", onEnter);
    host.removeEventListener("mouseleave", onLeave);
  };
}

export default function ProjectCarousel({ projects, fullHeight = false }: Props) {
  const items = [...projects, ...projects];
  const verticalRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detachVertical = attachMarquee(verticalRef.current, "y", 26);
    const detachHorizontal = attachMarquee(horizontalRef.current, "x", 34);
    return () => {
      detachVertical();
      detachHorizontal();
    };
  }, []);

  return (
    <div
      data-lenis-prevent
      className={`relative [overflow:clip] ${fullHeight ? "h-[100dvh]" : "h-[480px] md:h-[560px]"}`}
    >
      {/* Fade masks */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none" />

      {/* Desktop: vertical infinite scroll */}
      <div
        ref={verticalRef}
        className="hidden md:flex flex-col gap-4 px-4 select-none touch-none cursor-grab active:cursor-grabbing will-change-transform"
      >
        {items.map((project, i) => (
          <CarouselCard key={`v-${project.id}-${i}`} project={project} />
        ))}
      </div>

      {/* Mobile: horizontal infinite scroll */}
      <div
        ref={horizontalRef}
        className="flex md:hidden gap-4 w-max py-4 px-4 select-none touch-pan-y will-change-transform"
      >
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
      draggable={false}
    >
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-105"
        sizes={mobile ? "288px" : "(max-width: 768px) 100vw, 50vw"}
        draggable={false}
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
