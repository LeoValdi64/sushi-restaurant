"use client";

import { Fish, Flame, Crown, Soup, Wine } from "lucide-react";

const menuCategories = [
  {
    icon: Fish,
    name: "Sashimi",
    japanese: "刺身",
    description: "Premium cuts of the freshest fish, sliced to perfection",
    items: [
      { name: "Otoro Tuna", price: "$38" },
      { name: "Hokkaido Uni", price: "$42" },
      { name: "Salmon Belly", price: "$28" },
    ],
  },
  {
    icon: Flame,
    name: "Signature Rolls",
    japanese: "巻き寿司",
    description: "Artisan rolls combining tradition with creative innovation",
    items: [
      { name: "Sakura Dragon", price: "$24" },
      { name: "Black Truffle Roll", price: "$32" },
      { name: "Wagyu Tataki Roll", price: "$36" },
    ],
  },
  {
    icon: Crown,
    name: "Omakase",
    japanese: "おまかせ",
    description: "Chef's curated multi-course journey of seasonal delicacies",
    items: [
      { name: "7-Course Experience", price: "$120" },
      { name: "12-Course Grand", price: "$195" },
      { name: "Private Omakase", price: "$280" },
    ],
  },
  {
    icon: Soup,
    name: "Ramen",
    japanese: "ラーメン",
    description: "Rich, soul-warming broths simmered for 18 hours",
    items: [
      { name: "Tonkotsu Gold", price: "$22" },
      { name: "Miso Black Garlic", price: "$20" },
      { name: "Truffle Shoyu", price: "$26" },
    ],
  },
  {
    icon: Wine,
    name: "Sake & Spirits",
    japanese: "酒",
    description: "Curated collection of premium sake and Japanese whisky",
    items: [
      { name: "Dassai 23 Junmai", price: "$45" },
      { name: "Hibiki Harmony", price: "$32" },
      { name: "Sake Flight", price: "$28" },
    ],
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-dark relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-gold/40 text-5xl font-serif block mb-4">
            品
          </span>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">
            Culinary Masterpieces
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-dark-card border border-dark-border p-8 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon & Japanese */}
                  <div className="flex items-start justify-between mb-6">
                    <IconComponent className="w-8 h-8 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                    <span className="text-2xl text-gold/20 font-serif">
                      {category.japanese}
                    </span>
                  </div>

                  {/* Name & Description */}
                  <h3 className="font-serif text-2xl text-cream mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-8">
                    {category.description}
                  </p>

                  {/* Items */}
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-cream/70 text-sm">
                          {item.name}
                        </span>
                        <div className="flex-1 mx-3 border-b border-dotted border-dark-border" />
                        <span className="text-gold text-sm font-medium">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* View Full Menu CTA Card */}
          <div className="flex items-center justify-center bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 p-8 group">
            <div className="text-center">
              <span className="text-gold/30 text-4xl font-serif block mb-4">
                全
              </span>
              <p className="text-cream/50 text-sm mb-6">
                Explore our complete selection
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 border border-gold/50 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
              >
                Full Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
