import Image from "next/image";
import { ArrowLeft, HardHat } from "lucide-react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

export default function NotFound() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-brand-black overflow-hidden">
      {/* Background */}
      <Image
        src="/projects/pond-rehab/04.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black/60" />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white/3 leading-none"
          style={{ fontSize: "clamp(10rem, 40vw, 30rem)" }}
        >
          404
        </span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
          <HardHat size={28} className="text-primary" />
        </div>

        <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-primary mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          404 Error
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-black text-brand-white tracking-tight leading-tight mb-4">
          PAGE UNDER
          <br />
          CONSTRUCTION
        </h1>

        <p className="text-sm leading-[1.8] text-white/50 mb-10">
          Looks like this page is still being built. Our crew is working on it —
          head back to safety while we finish up.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <HoverGlowButton
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft size={14} />
            Back to Home
          </HoverGlowButton>
          <HoverGlowButton
            href="/contact"
            glowColor="#ffffff"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-xs font-bold tracking-widest rounded hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Contact Us
          </HoverGlowButton>
        </div>
      </div>
    </div>
  );
}
