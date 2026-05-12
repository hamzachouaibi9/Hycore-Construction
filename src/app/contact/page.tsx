import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Send, Clock } from "lucide-react";
import QuoteBar from "@/components/sections/QuoteBar";
import Accordion from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import ContactPageForm from "@/components/ui/ContactPageForm";
import { getFAQs } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hycore Construction. We're here to help you bring your next construction project to life.",
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
      {/* ── Get In Touch — 90vh ── */}
      <section className="bg-brand-black min-h-[90dvh] flex items-center py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Form */}
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl font-black text-brand-white tracking-tight mb-3">
                GET IN TOUCH
              </h1>
              <p className="text-sm text-white/50 mb-10">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <ContactPageForm />
            </Reveal>

            {/* Image */}
            <Reveal delay={0.15} className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="https://picsum.photos/700/500?random=90"
                alt="Construction team reviewing plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Info Cards — white bg, blue border, hover blue ── */}
      <section className="bg-brand-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Address */}
            <Reveal
              delay={0}
              className="group bg-white border border-primary rounded p-8 hover:bg-primary transition-[background-color] duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-white/80 uppercase transition-[color] duration-300">
                  Address
                </span>
                <div className="w-8 h-8 border border-primary group-hover:border-white/30 rounded flex items-center justify-center transition-[border-color] duration-300">
                  <MapPin size={14} className="text-primary group-hover:text-white transition-[color] duration-300" />
                </div>
              </div>
              <p className="text-base font-bold text-brand-black group-hover:text-white leading-snug transition-[color] duration-300">
                410 Sandtown, California<br />94001, USA
              </p>
            </Reveal>

            {/* Reach Us */}
            <Reveal
              delay={0.1}
              className="group bg-white border border-primary rounded p-8 hover:bg-primary transition-[background-color] duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-white/80 uppercase transition-[color] duration-300">
                  Reach Us
                </span>
                <div className="w-8 h-8 border border-primary group-hover:border-white/30 rounded flex items-center justify-center transition-[border-color] duration-300">
                  <Send size={14} className="text-primary group-hover:text-white transition-[color] duration-300" />
                </div>
              </div>
              <p className="text-sm font-medium text-brand-black group-hover:text-white mb-1 transition-[color] duration-300">
                info@hycoreconstruction.com
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/75 transition-[color] duration-300">
                (555) 555-5555
              </p>
            </Reveal>

            {/* Hours */}
            <Reveal
              delay={0.2}
              className="group bg-white border border-primary rounded p-8 hover:bg-primary transition-[background-color] duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-white/80 uppercase transition-[color] duration-300">
                  Hours
                </span>
                <div className="w-8 h-8 border border-primary group-hover:border-white/30 rounded flex items-center justify-center transition-[border-color] duration-300">
                  <Clock size={14} className="text-primary group-hover:text-white transition-[color] duration-300" />
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-brand-black group-hover:text-white transition-[color] duration-300">
                  WEEK DAYS : 11:00–8:00pm
                </p>
                <p className="text-xs font-medium text-brand-black group-hover:text-white transition-[color] duration-300">
                  SATURDAY : 11:00–4:00pm
                </p>
                <p className="text-xs font-medium text-brand-black group-hover:text-white transition-[color] duration-300">
                  SUNDAY : 11:00–2:00pm
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-brand-white py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-black tracking-tight text-center mb-14">
              FREQUENTLY ASKED
              <br />
              QUESTIONS
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            {faqItems.length > 0 ? (
              <Accordion items={faqItems} numbered />
            ) : (
              <p className="text-center text-gray-400 text-sm">No FAQs available.</p>
            )}
          </Reveal>
        </div>
      </section>

      <QuoteBar />
    </>
  );
}
