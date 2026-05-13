"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

const INPUT =
  "w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200";

const LABEL = "block text-sm font-medium text-gray-300 mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot — must stay empty
  });
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

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", website: "" });
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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-sm text-white/50">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
          <label htmlFor="cf-firstName" className={LABEL}>First Name</label>
          <input id="cf-firstName" name="firstName" type="text" value={form.firstName}
            onChange={handleChange} placeholder="Jane" required className={INPUT} />
        </div>
        <div>
          <label htmlFor="cf-lastName" className={LABEL}>Last Name</label>
          <input id="cf-lastName" name="lastName" type="text" value={form.lastName}
            onChange={handleChange} placeholder="Doe" required className={INPUT} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-email" className={LABEL}>Email</label>
          <input id="cf-email" name="email" type="email" value={form.email}
            onChange={handleChange} placeholder="jane.doe@email.com" required className={INPUT} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={LABEL}>Phone Number</label>
          <input id="cf-phone" name="phone" type="tel" value={form.phone}
            onChange={handleChange} placeholder="(309) 555-5555" className={INPUT} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={LABEL}>Message</label>
        <textarea id="cf-message" name="message" value={form.message} onChange={handleChange}
          placeholder="Type Your Message..." rows={5} required
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
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <HoverGlowButton
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Submit"}
      </HoverGlowButton>
    </form>
  );
}
