"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201, 169, 110, 0.15) 0%, transparent 50%),
                           radial-gradient(ellipse at 80% 20%, rgba(201, 169, 110, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative Japanese-inspired lines */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/4 left-20 w-24 h-px bg-gradient-to-r from-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 right-20 w-24 h-px bg-gradient-to-l from-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Japanese character decoration */}
        <div className="mb-8">
          <span className="text-gold/30 text-7xl md:text-8xl font-serif tracking-wider">
            桜
          </span>
        </div>

        <div className="space-y-6">
          <p className="text-gold text-sm tracking-[0.4em] uppercase animate-fade-in-up">
            Premium Japanese Dining
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="block text-cream">Sakura</span>
            <span className="block text-gradient-gold mt-2">Sushi</span>
          </h1>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-px bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/40" />
            <div className="w-16 h-px bg-gold/40" />
          </div>

          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            An intimate culinary journey through the finest traditions of
            Japanese cuisine, where every dish is a masterpiece crafted with
            precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#reservations"
              className="px-10 py-4 bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300 min-w-[220px]"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-10 py-4 border border-cream/20 text-cream/80 text-sm tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs tracking-[0.3em] uppercase text-cream/30">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-cream/30" />
      </div>
    </section>
  );
}
