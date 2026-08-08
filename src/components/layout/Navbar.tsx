"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

const serviceCategories = [
  {
    slug: "personalized-design",
    label: "Personalized Design",
    subServices: [
      { slug: "custom-home-design-build", label: "Custom Home Design & Build" },
      { slug: "residential-construction-services", label: "Residential Construction Services" },
    ],
  },
  {
    slug: "new-construction",
    label: "New Construction",
    subServices: [
      { slug: "new-home-construction", label: "New Home Construction" },
      { slug: "ground-up-home-construction", label: "Ground-Up Home Construction" },
    ],
  },
  {
    slug: "home-renovation-remodeling",
    label: "Home Renovation & Remodeling",
    subServices: [
      { slug: "home-remodeling", label: "Home Remodeling" },
      { slug: "custom-home-remodeling", label: "Custom Home Remodeling" },
      { slug: "whole-home-renovations", label: "Whole-Home Renovations" },
      { slug: "kitchen-remodeling", label: "Kitchen Remodeling" },
      { slug: "bathroom-remodeling", label: "Bathroom Remodeling" },
      { slug: "interior-remodeling", label: "Interior Remodeling" },
      { slug: "bedroom-remodeling", label: "Bedroom Remodeling" },
      { slug: "exterior-home-remodeling", label: "Exterior Home Remodeling" },
      { slug: "lanai-design-construction", label: "Lanai Design & Construction" },
      { slug: "living-room-remodeling", label: "Living Room Remodeling" },
      { slug: "luxury-home-remodeling", label: "Luxury Home Remodeling" },
      { slug: "structural-remodeling", label: "Structural Remodeling" },
      { slug: "attic-conversions", label: "Attic Conversions" },
      { slug: "aging-in-place-remodeling", label: "Aging in Place Remodeling" },
      { slug: "garage-conversions", label: "Garage Conversions" },
    ],
  },
  {
    slug: "home-additions",
    label: "Home Additions",
    subServices: [
      { slug: "room-additions", label: "Room Additions" },
      { slug: "remodel-additions-renovations", label: "Remodel Additions & Renovations" },
      { slug: "second-story-additions", label: "Second-Story Additions" },
    ],
  },
  {
    slug: "storm-damage-repair",
    label: "Storm Damage Repair",
    subServices: [],
  },
  {
    slug: "grading-excavation",
    label: "Grading & Excavation",
    subServices: [],
  },
];

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ARTICLES", href: "/articles" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    serviceCategories[0].slug
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileCategoryOpen(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }

  const isServicesActive = pathname.startsWith("/services");
  const activeCategory = serviceCategories.find((c) => c.slug === hoveredCategory);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          background: "rgba(11, 11, 11, 0.55)",
        }}
      />

      <nav className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <Image
            src="/logo.png"
            alt="Hycore Construction"
            width={200}
            height={64}
            className="h-12 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center">
          {/* HOME */}
          <li className="flex items-center group/navitem">
            <Link
              href="/"
              className={`px-3 text-sm font-medium tracking-widest transition-[color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                pathname === "/" ? "text-primary" : "text-white/70 hover:text-brand-white"
              }`}
            >
              HOME
            </Link>
          </li>

          {/* SERVICES — dropdown trigger */}
          <li
            className="flex items-center group/navitem"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <div className="relative mx-1.5 h-5 w-px flex-shrink-0 overflow-hidden">
              <span className="absolute inset-0 bg-white/20" />
              <span
                className="absolute top-0 left-0 w-full h-0 group-hover/navitem:h-full bg-primary transition-[height] duration-300 ease-out"
                style={{ boxShadow: "0 0 8px 2px rgba(44,159,255,0.75)" }}
              />
            </div>
            <button
              className={`flex items-center gap-1 px-3 text-sm font-medium tracking-widest transition-[color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                isServicesActive || servicesOpen ? "text-primary" : "text-white/70 hover:text-brand-white"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              SERVICES
              <ChevronDown
                size={11}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
          </li>

          {/* Remaining links */}
          {navLinks.slice(1).map((link, i) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href} className="flex items-center group/navitem">
                <div className="relative mx-1.5 h-5 w-px flex-shrink-0 overflow-hidden">
                  <span className="absolute inset-0 bg-white/20" />
                  <span
                    className="absolute top-0 left-0 w-full h-0 group-hover/navitem:h-full bg-primary transition-[height] duration-300 ease-out"
                    style={{ boxShadow: "0 0 8px 2px rgba(44,159,255,0.75)" }}
                  />
                </div>
                <Link
                  href={link.href}
                  className={`px-3 text-sm font-medium tracking-widest transition-[color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                    isActive ? "text-primary" : "text-white/70 hover:text-brand-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <HoverGlowButton
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            FREE QUOTE
          </HoverGlowButton>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden text-brand-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Services mega-dropdown ── */}
      <div
        onMouseEnter={openServices}
        onMouseLeave={scheduleClose}
        className={`hidden lg:block absolute left-0 right-0 z-40 transition-[opacity,transform] duration-200 ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          background: "rgba(11, 11, 11, 0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex gap-0">
          {/* Left: category list */}
          <div className="flex-shrink-0 w-64 border-r border-white/10 pr-6">
            <p className="text-xs font-bold tracking-widest text-white/30 mb-4 uppercase">
              Service Categories
            </p>
            {serviceCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                onMouseEnter={() => setHoveredCategory(cat.slug)}
                className={`group flex items-center justify-between w-full text-left px-3 py-2.5 rounded text-sm font-medium tracking-wide transition-[background-color,color] duration-150 ${
                  hoveredCategory === cat.slug
                    ? "bg-primary/15 text-primary"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
                {cat.subServices.length > 0 && (
                  <ChevronRight size={12} className="flex-shrink-0 opacity-60" />
                )}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/services"
                className="text-sm font-bold tracking-widest text-primary hover:text-white transition-[color] duration-150"
              >
                VIEW ALL SERVICES →
              </Link>
            </div>
          </div>

          {/* Right: sub-services */}
          <div className="flex-1 pl-8">
            {activeCategory && activeCategory.subServices.length > 0 ? (
              <>
                <p className="text-xs font-bold tracking-widest text-white/30 mb-4 uppercase">
                  {activeCategory.label}
                </p>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-1">
                  {activeCategory.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${activeCategory.slug}/${sub.slug}`}
                      className="flex items-center gap-2 py-2 text-sm text-white/55 hover:text-white transition-[color] duration-150 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-150" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : activeCategory ? (
              <div className="flex items-center h-full">
                <div>
                  <p className="text-xs font-bold tracking-widest text-white/30 mb-3 uppercase">
                    {activeCategory.label}
                  </p>
                  <p className="text-sm text-white/50 max-w-xs">
                    Click to explore our {activeCategory.label.toLowerCase()} services in detail.
                  </p>
                  <Link
                    href={`/services/${activeCategory.slug}`}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold tracking-widest text-primary hover:text-white transition-[color] duration-150"
                  >
                    LEARN MORE <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden fixed inset-0 top-16 md:top-20 z-40 transition-[opacity,transform] duration-300 overflow-y-auto ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(11,11,11,0.95)",
        }}
      >
        <ul className="flex flex-col p-6 gap-1">
          {/* HOME */}
          <li>
            <Link
              href="/"
              className={`block py-4 text-sm font-bold tracking-widest border-b border-white/10 transition-[color] duration-200 ${
                pathname === "/" ? "text-primary" : "text-white/70 hover:text-brand-white"
              }`}
            >
              HOME
            </Link>
          </li>

          {/* SERVICES accordion */}
          <li className="border-b border-white/10">
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className={`w-full flex items-center justify-between py-4 text-sm font-bold tracking-widest transition-[color] duration-200 ${
                isServicesActive ? "text-primary" : "text-white/70"
              }`}
            >
              SERVICES
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <ul className="pb-4 pl-2 space-y-1">
                {serviceCategories.map((cat) => (
                  <li key={cat.slug}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/services/${cat.slug}`}
                        className="flex-1 py-2.5 text-sm font-bold tracking-wide text-white/60 hover:text-white transition-[color] duration-200"
                      >
                        {cat.label}
                      </Link>
                      {cat.subServices.length > 0 && (
                        <button
                          onClick={() =>
                            setMobileCategoryOpen((prev) =>
                              prev === cat.slug ? null : cat.slug
                            )
                          }
                          className="p-2 text-white/40 hover:text-white transition-[color] duration-200"
                          aria-label={`Expand ${cat.label}`}
                        >
                          <ChevronDown
                            size={12}
                            className={`transition-transform duration-200 ${
                              mobileCategoryOpen === cat.slug ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {mobileCategoryOpen === cat.slug && cat.subServices.length > 0 && (
                      <ul className="pl-3 pb-2 space-y-1">
                        {cat.subServices.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/services/${cat.slug}/${sub.slug}`}
                              className="flex items-center gap-2 py-2 text-sm text-white/45 hover:text-white transition-[color] duration-200"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-4 text-sm font-bold tracking-widest border-b border-white/10 transition-[color] duration-200 ${
                    isActive ? "text-primary" : "text-white/70 hover:text-brand-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="pt-6">
            <HoverGlowButton
              href="/contact"
              className="flex items-center justify-center w-full py-3 bg-primary text-white text-sm font-bold tracking-widest rounded hover:bg-primary-dark"
            >
              FREE QUOTE
            </HoverGlowButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
