"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

const INPUT =
  "w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-[border-color] duration-200";

const LABEL = "block text-xs font-medium text-white/50 mb-2";

export default function ContactPageForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "", // honeypot — must stay empty
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Honeypot — silently drop bot submissions
    if (form.website) return;

    if (!agreed) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          full_name: form.fullName,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "", website: "" });
      setAgreed(false);
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start py-16">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-black text-white mb-2">Message Sent!</h3>
        <p className="text-sm text-white/50">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={LABEL}>Full Name</label>
          <input name="fullName" type="text" value={form.fullName}
            onChange={handleChange} placeholder="Full Name" required className={INPUT} />
        </div>
        <div>
          <label className={LABEL}>Email Address</label>
          <input name="email" type="email" value={form.email}
            onChange={handleChange} placeholder="Email Address" required className={INPUT} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={LABEL}>Phone Number</label>
          <input name="phone" type="tel" value={form.phone}
            onChange={handleChange} placeholder="Phone Number" className={INPUT} />
        </div>
        <div>
          <label className={LABEL}>Subject</label>
          <input name="subject" type="text" value={form.subject}
            onChange={handleChange} placeholder="Subject" required className={INPUT} />
        </div>
      </div>

      <div>
        <label className={LABEL}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange}
          placeholder="Write your message here..." rows={4} required
          className={`${INPUT} resize-none`} />
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={setRecaptchaToken}
        onExpired={() => setRecaptchaToken(null)}
        theme="dark"
      />

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
        <HoverGlowButton
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "SENDING…" : "SUBMIT NOW"}
        </HoverGlowButton>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <span className="text-xs text-white/40">I agree to the terms and conditions.</span>
        </label>
      </div>
    </form>
  );
}
