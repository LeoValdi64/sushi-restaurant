"use client";

import { Gem, Users, Music, Martini } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Intimate Gatherings",
    description: "Private dining room for parties of 6 to 20 guests with personalized menu curation.",
  },
  {
    icon: Gem,
    title: "Bespoke Omakase",
    description: "Chef Takeshi crafts an exclusive multi-course experience tailored to your event.",
  },
  {
    icon: Music,
    title: "Curated Ambiance",
    description: "Custom lighting, traditional music, and floral arrangements by our in-house designer.",
  },
  {
    icon: Martini,
    title: "Premium Pairings",
    description: "Our sommelier designs sake and whisky flights to complement every course.",
  },
];

export default function PrivateEvents() {
  return (
    <section id="events" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold/40 text-4xl font-serif block mb-4">
              宴
            </span>
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
              Private Events
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
              Unforgettable Occasions
            </h2>
            <p className="text-cream/50 text-lg leading-relaxed mb-10">
              Whether it&apos;s a milestone celebration, corporate gathering, or an
              intimate dinner with loved ones, our private dining experience
              elevates every occasion into something extraordinary.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="group">
                    <IconComponent className="w-6 h-6 text-gold/60 mb-3 group-hover:text-gold transition-colors" />
                    <h3 className="text-cream font-medium text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-cream/40 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 px-10 py-4 bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Inquire About Events
            </a>
          </div>

          {/* Decorative visual */}
          <div className="relative">
            <div className="aspect-square bg-dark-card border border-dark-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <span className="text-gold/[0.06] text-[14rem] font-serif leading-none block">
                    宴
                  </span>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-gold/10" />
              <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full border border-gold/10" />
              <div className="absolute top-1/3 left-1/4 w-8 h-8 rotate-45 border border-gold/10" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-card to-transparent">
                <div className="border-t border-gold/20 pt-6">
                  <p className="text-gold text-sm tracking-wider">Starting from</p>
                  <p className="font-serif text-3xl text-cream mt-1">
                    $95 <span className="text-cream/40 text-lg">per guest</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Corner frames */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-gold/30" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
