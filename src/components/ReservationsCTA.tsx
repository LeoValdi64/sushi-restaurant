"use client";

import { CalendarDays, Clock, Users } from "lucide-react";

export default function ReservationsCTA() {
  return (
    <section id="reservations" className="py-24 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-gold/[0.1]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <span className="text-gold/40 text-5xl font-serif block mb-4">
          席
        </span>
        <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
          Reservations
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
          Your Table Awaits
        </h2>
        <p className="text-cream/50 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Reserve your place for an unforgettable evening of exquisite Japanese
          cuisine, impeccable service, and an atmosphere that transports you to
          the heart of Tokyo.
        </p>

        {/* Quick info */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-cream/50">
            <CalendarDays className="w-5 h-5 text-gold/60" />
            <span className="text-sm">Open 7 Days a Week</span>
          </div>
          <div className="flex items-center gap-3 text-cream/50">
            <Clock className="w-5 h-5 text-gold/60" />
            <span className="text-sm">5:00 PM &mdash; 11:00 PM</span>
          </div>
          <div className="flex items-center gap-3 text-cream/50">
            <Users className="w-5 h-5 text-gold/60" />
            <span className="text-sm">Parties up to 20</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-12 py-4 bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Book Online
          </a>
          <a
            href="tel:+14155550123"
            className="px-12 py-4 border border-cream/20 text-cream/70 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
