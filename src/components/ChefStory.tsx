"use client";

import { Award, Clock, Utensils } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years of Mastery" },
  { icon: Clock, value: "10,000+", label: "Hours of Training" },
  { icon: Utensils, value: "3", label: "Michelin Stars" },
];

export default function ChefStory() {
  return (
    <section id="story" className="py-24 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder - artistic representation */}
          <div className="relative">
            <div className="aspect-[4/5] bg-dark-card border border-dark-border relative overflow-hidden">
              {/* Artistic pattern instead of image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gold/10 text-[12rem] font-serif leading-none block">
                    匠
                  </span>
                  <p className="text-gold/30 text-sm tracking-[0.3em] uppercase mt-4">
                    The Art of Mastery
                  </p>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
            </div>
            {/* Decorative frame corner */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold/30" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold/30" />
          </div>

          {/* Content */}
          <div>
            <span className="text-gold/40 text-4xl font-serif block mb-4">
              職人
            </span>
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
              Our Chef
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
              Chef Takeshi Yamamoto
            </h2>

            <div className="w-16 h-px bg-gold/40 mb-8" />

            <div className="space-y-5 text-cream/60 leading-relaxed">
              <p>
                Born in Kyoto and trained in the revered kitchens of Tokyo&apos;s
                Tsukiji district, Chef Takeshi brings over two decades of
                dedication to the art of Japanese cuisine.
              </p>
              <p>
                His philosophy is rooted in{" "}
                <span className="text-gold italic">ikigai</span> &mdash; the
                pursuit of purpose through craft. Every cut, every presentation,
                every flavor combination reflects a lifelong devotion to perfection.
              </p>
              <p>
                After earning recognition at three-Michelin-starred restaurants in
                Tokyo and Osaka, Chef Takeshi established Sakura Sushi to share
                his vision of Japanese culinary excellence with San Francisco.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dark-border">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label}>
                    <IconComponent className="w-5 h-5 text-gold/60 mb-3" />
                    <p className="font-serif text-2xl text-gold">{stat.value}</p>
                    <p className="text-cream/40 text-xs tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
