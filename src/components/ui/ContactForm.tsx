"use client";

import { useState } from "react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-brand-black mb-2">Message Sent!</h3>
        <p className="text-sm text-gray-500">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Jane"
            required
            className="w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane.doe@email.com"
            required
            className="w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(309) 555-5555"
            className="w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type Your Message..."
          rows={5}
          required
          className="w-full border border-gray-200 rounded px-3.5 py-3 text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[box-shadow] duration-200 resize-none"
        />
      </div>
      <HoverGlowButton
        type="submit"
        className="w-full py-4 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Submit
      </HoverGlowButton>
    </form>
  );
}
