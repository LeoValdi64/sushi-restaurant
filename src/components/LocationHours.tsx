"use client";

import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

const hours = [
  { day: "Monday - Thursday", time: "5:00 PM — 10:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM — 11:00 PM" },
  { day: "Sunday", time: "4:00 PM — 9:30 PM" },
  { day: "Lunch (Fri-Sun)", time: "11:30 AM — 2:30 PM" },
];

export default function LocationHours() {
  return (
    <section id="location" className="py-24 md:py-32 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold/40 text-5xl font-serif block mb-4">
            場
          </span>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">
            Location & Hours
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-dark-card border border-dark-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-12 h-12 text-gold/20 mx-auto mb-4" />
                  <p className="text-cream/30 text-sm tracking-wider">
                    Japantown, San Francisco
                  </p>
                  <p className="text-cream/20 text-xs mt-2">
                    1742 Post Street
                  </p>
                </div>
              </div>
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold/30" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold/30" />
          </div>

          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-cream">Address</h3>
              </div>
              <p className="text-cream/60 leading-relaxed ml-8">
                1742 Post Street<br />
                Japantown, San Francisco, CA 94115
              </p>
              <p className="text-cream/40 text-sm mt-2 ml-8">
                Valet parking available on weekends
              </p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-cream">Hours</h3>
              </div>
              <div className="space-y-3 ml-8">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-cream/60 text-sm">{h.day}</span>
                    <span className="text-gold/80 text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-cream">Contact</h3>
              </div>
              <div className="space-y-2 ml-8">
                <a
                  href="tel:+14155550123"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (415) 555-0123
                </a>
                <a
                  href="mailto:hello@sakurasushi.com"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@sakurasushi.com
                </a>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-gold/50 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-300 ml-8"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
