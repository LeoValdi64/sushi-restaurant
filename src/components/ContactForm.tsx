"use client";

import { useState } from "react";
import { Send, Calendar, Clock, Users, User, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your reservation request. We will confirm shortly.");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold/40 text-5xl font-serif block mb-4">
            予
          </span>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">
            Make a Reservation
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
          <p className="text-cream/50 mt-6 max-w-lg mx-auto">
            Complete the form below and our team will confirm your reservation
            within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Date, Time, Guests */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7-10">7-10 Guests</option>
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 3: Occasion */}
            <div>
              <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full bg-dark-card border border-dark-border text-cream text-sm px-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors appearance-none"
              >
                <option value="">Select an occasion (optional)</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="date">Date Night</option>
                <option value="celebration">Special Celebration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="block text-cream/50 text-xs tracking-wider uppercase mb-2">
                Special Requests
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gold/40" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark-card border border-dark-border text-cream text-sm pl-12 pr-4 py-3.5 focus:border-gold/50 focus:outline-none transition-colors placeholder:text-cream/20 resize-none"
                  placeholder="Dietary restrictions, seating preferences, special occasion details..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-12 py-4 bg-gold text-dark text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Request Reservation
              </button>
              <p className="text-cream/30 text-xs mt-4">
                We will confirm your reservation within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
