"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-wider text-gold">
              SAKURA
            </span>
            <span className="text-xs tracking-[0.3em] text-muted uppercase">
              Sushi
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300 hover-gold-line"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+14155550123"
              className="flex items-center gap-2 text-sm text-cream/60 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(415) 555-0123</span>
            </a>
            <a
              href="#reservations"
              className="px-6 py-2.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Reserve
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream/70 hover:text-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark/98 backdrop-blur-md border-t border-dark-border px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-6 py-3 border border-gold text-gold text-sm tracking-widest uppercase text-center hover:bg-gold hover:text-dark transition-all"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  );
}
