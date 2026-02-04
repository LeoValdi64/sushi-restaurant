"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James & Sarah M.",
    role: "Anniversary Dinner",
    text: "The omakase experience at Sakura Sushi was nothing short of transcendent. Each course told a story, and Chef Takeshi's presentation was pure artistry. The best dining experience we've had in San Francisco.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Food Critic, SF Chronicle",
    text: "Sakura Sushi redefines what premium Japanese dining can be on the West Coast. The otoro melts on the tongue, and their sake pairing program is world-class. A must-visit.",
    rating: 5,
  },
  {
    name: "Emily Nakamura",
    role: "Regular Guest",
    text: "As someone who grew up in Japan, finding authentic sushi in the Bay Area has been challenging. Sakura Sushi is the real deal — the quality of fish and attention to tradition is remarkable.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Corporate Event Host",
    text: "We hosted our company's annual dinner in the private dining room. The service was impeccable, the food was extraordinary, and our guests are still talking about it weeks later.",
    rating: 5,
  },
  {
    name: "Olivia Park",
    role: "Birthday Celebration",
    text: "From the moment we walked in, the ambiance transported us to another world. The truffle roll is a revelation, and the staff made my birthday feel incredibly special. Pure magic.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold/40 text-5xl font-serif block mb-4">
            声
          </span>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">
            Guest Voices
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-dark-card border border-dark-border p-8 hover:border-gold/20 transition-all duration-500 relative ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/15 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-cream/60 leading-relaxed mb-8 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-dark-border pt-4">
                <p className="text-cream font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-cream/40 text-xs mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
