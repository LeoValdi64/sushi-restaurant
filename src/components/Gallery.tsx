"use client";

import { Camera } from "lucide-react";

const galleryItems = [
  {
    kanji: "鮪",
    title: "Otoro Selection",
    subtitle: "Premium Bluefin",
    span: "md:col-span-2 md:row-span-2",
    height: "h-72 md:h-full",
    gradient: "from-rose-900/20",
  },
  {
    kanji: "巻",
    title: "Dragon Roll",
    subtitle: "Signature Creation",
    span: "",
    height: "h-56",
    gradient: "from-amber-900/20",
  },
  {
    kanji: "器",
    title: "Artisan Plating",
    subtitle: "Handcrafted Ceramics",
    span: "",
    height: "h-56",
    gradient: "from-emerald-900/20",
  },
  {
    kanji: "酒",
    title: "Sake Collection",
    subtitle: "Rare Vintages",
    span: "",
    height: "h-56",
    gradient: "from-violet-900/20",
  },
  {
    kanji: "焼",
    title: "Omakase Course",
    subtitle: "Chef's Selection",
    span: "",
    height: "h-56",
    gradient: "from-orange-900/20",
  },
  {
    kanji: "庭",
    title: "Interior Design",
    subtitle: "Zen Atmosphere",
    span: "md:col-span-2",
    height: "h-56",
    gradient: "from-cyan-900/20",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold/40 text-5xl font-serif block mb-4">
            美
          </span>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">
            Visual Poetry
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 cursor-pointer ${item.span} ${item.height}`}
            >
              {/* Background kanji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gold/[0.04] text-[10rem] font-serif group-hover:text-gold/[0.08] transition-all duration-700 group-hover:scale-110">
                  {item.kanji}
                </span>
              </div>

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent opacity-50`}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-card/90 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-cream/90 font-serif text-lg">
                      {item.title}
                    </p>
                    <p className="text-cream/40 text-xs tracking-wider mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <Camera className="w-4 h-4 text-gold/40 group-hover:text-gold transition-colors duration-300" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
