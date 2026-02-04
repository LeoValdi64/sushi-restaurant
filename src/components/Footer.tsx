"use client";

import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Private Events", href: "#events" },
  { label: "Reservations", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-2xl tracking-wider text-gold">
                SAKURA
              </span>
              <span className="text-xs tracking-[0.3em] text-muted uppercase ml-2">
                Sushi
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-6">
              Premium Japanese dining in the heart of San Francisco. Where tradition
              meets artistry in every dish.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-dark-border flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-dark-border flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream text-sm tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300 hover-gold-line inline-flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-start gap-3 text-cream/40 text-sm hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    1742 Post Street<br />
                    San Francisco, CA 94115
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14155550123"
                  className="flex items-center gap-3 text-cream/40 text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (415) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sakurasushi.com"
                  className="flex items-center gap-3 text-cream/40 text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@sakurasushi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream text-sm tracking-[0.2em] uppercase mb-6">
              Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-cream/40">Mon - Thu</span>
                <span className="text-cream/60">5 - 10 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream/40">Fri - Sat</span>
                <span className="text-cream/60">5 - 11 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream/40">Sunday</span>
                <span className="text-cream/60">4 - 9:30 PM</span>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-cream/40">Lunch (F-S-S)</span>
                  <span className="text-cream/60">11:30 - 2:30</span>
                </div>
              </div>
            </div>

            <a
              href="#reservations"
              className="inline-flex items-center gap-2 mt-6 text-gold text-sm tracking-wider hover:text-gold-light transition-colors"
            >
              Reserve Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            2026 Sakura Sushi. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream/30 text-xs">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
