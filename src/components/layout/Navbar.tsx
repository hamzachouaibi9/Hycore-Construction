"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { HoverGlowButton } from "@/components/ui/hover-glow-button";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ARTICLES", href: "/articles" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="w-full bg-brand-black sticky top-0 z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <Image
            src="/logo.png"
            alt="Hycore Construction"
            width={140}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-medium tracking-widest transition-[color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                    isActive
                      ? "text-primary"
                      : "text-white/70 hover:text-brand-white"
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
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-white text-xs font-bold tracking-widest rounded hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            FREE QUOTE
          </HoverGlowButton>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-brand-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-brand-black z-40 transition-[opacity,transform] duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-1">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-4 text-sm font-bold tracking-widest border-b border-white/10 transition-[color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                    isActive ? "text-primary" : "text-white/70 hover:text-brand-white"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
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
