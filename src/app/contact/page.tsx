import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Send, Clock } from "lucide-react";
// Social icons use inline SVG (lucide-react doesn't include brand icons)
import QuoteBar from "@/components/sections/QuoteBar";
import Accordion from "@/components/ui/Accordion";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";
import { getFAQs } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hycore Construction. We&apos;re here to help you bring your next construction project to life.",
};

export default async function ContactPage() {
  const faqs = await getFAQs();

  const faqItems = faqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      {/* ── Get In Touch ── */}
      <section className="bg-brand-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-white tracking-tight mb-3">
                GET IN TOUCH
              </h1>
              <p className="text-sm text-white/50 mb-10">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200 resize-none"
                  />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                  <HoverGlowButton
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    SUBMIT NOW
                  </HoverGlowButton>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-xs text-white/40">I agree to the terms and conditions.</span>
                  </label>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="https://picsum.photos/700/500?random=90"
                alt="Construction team reviewing plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="bg-brand-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded overflow-hidden">
            {/* Address */}
            <div className="bg-primary p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Address</span>
                <div className="w-8 h-8 border border-white/30 rounded flex items-center justify-center">
                  <MapPin size={14} className="text-white" />
                </div>
              </div>
              <p className="text-base font-bold text-white leading-snug">
                410 Sandtown, California<br />94001, USA
              </p>
            </div>

            {/* Reach Us */}
            <div className="bg-brand-white p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Reach Us</span>
                <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">
                  <Send size={14} className="text-gray-400" />
                </div>
              </div>
              <p className="text-sm font-medium text-brand-black mb-1">info@hycoreconstruction.com</p>
              <p className="text-sm text-gray-500">(555) 555-5555</p>
            </div>

            {/* Hours */}
            <div className="bg-brand-white p-8 border-l border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Address</span>
                <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center">
                  <Clock size={14} className="text-gray-400" />
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-brand-black">WEEK DAYS : 11:00–8:00pm</p>
                <p className="text-xs font-medium text-brand-black">SATURDAY : 11:00–4:00pm</p>
                <p className="text-xs font-medium text-brand-black">SUNDAY : 11:00–2:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-brand-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-black tracking-tight text-center mb-14">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
          {faqItems.length > 0 ? (
            <Accordion items={faqItems} numbered />
          ) : (
            <p className="text-center text-gray-400 text-sm">No FAQs available.</p>
          )}
        </div>
      </section>

      <QuoteBar />
    </>
  );
}
