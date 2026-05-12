"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { Reveal } from "@/components/ui/Reveal";

export default function QuoteBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <Reveal>
            <span className="inline-block mb-3 text-xs font-medium text-white/50 border border-white/20 px-3 py-1 rounded-full">
              Get Your Quote
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-brand-white tracking-tight leading-tight">
              START YOUR PROJECT
              <br />
              TODAY
            </h2>
          </Reveal>

          {/* Right — email form */}
          <Reveal delay={0.15} className="w-full md:w-auto md:min-w-[380px]">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-0 w-full"
            >
              <label htmlFor="quote-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center flex-1 bg-white/5 border border-white/10 rounded-l px-4 gap-2">
                <Mail size={14} className="text-white/30 flex-shrink-0" />
                <input
                  id="quote-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 py-3.5 outline-none"
                  required
                />
              </div>
              <HoverGlowButton
                type="submit"
                className="px-6 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded-r hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
              >
                {submitted ? "Sent!" : "Contact Us"}
              </HoverGlowButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
