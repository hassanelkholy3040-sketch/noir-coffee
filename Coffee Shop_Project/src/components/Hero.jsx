import React, { useState } from 'react';
import { BRAND_STATS } from '../data/menuData';
import { Sparkles, ArrowRight, BookOpen, Clock, MapPin, Award, Coffee } from 'lucide-react';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background Image with Cinematic Luxury Overlays */}
      <div className="absolute inset-0 z-0 bg-noir-deep">
        {!imgError ? (
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=85"
            alt="NOIR Specialty Coffee Atelier atmosphere"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-noir-espresso via-noir-deep to-[#0d0a08]" />
        )}
        {/* Multilayered radial and linear dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-deep via-noir-deep/85 to-noir-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-deep/95 via-noir-deep/75 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Decorative ambient amber glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-noir-caramel/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-noir-espresso/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-noir-espresso/80 border border-noir-caramel/40 backdrop-blur-md text-noir-caramel text-xs tracking-[0.25em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialty Arabica & Single Origins</span>
            <span className="hidden sm:inline text-noir-border">•</span>
            <span className="hidden sm:inline text-noir-cream/80">Cairo Atelier</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-noir-cream leading-[1.1]">
            Coffee, <br />
            <span className="italic font-normal text-noir-caramel">Crafted</span> With <br />
            Intention.
          </h1>

          {/* Supporting Text */}
          <p className="text-noir-beige/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Born from an uncompromising obsession with terroir, roast precision, and warm ritual. We source ethically from high-altitude micro-lots, roasted meticulously in Cairo to preserve every fleeting sensory note.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('#menu')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-base tracking-wide transition-all duration-300 shadow-xl shadow-noir-caramel/20 hover:shadow-caramel-glow transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollTo('#story')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-noir-espresso/60 hover:bg-noir-espresso border border-noir-border hover:border-noir-caramel/60 text-noir-cream font-medium text-base tracking-wide transition-all duration-300 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
            >
              <BookOpen className="w-4 h-4 text-noir-caramel" />
              <span>Discover Our Story</span>
            </button>
          </div>

          {/* Operational Hours / Quick Detail pill */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-noir-beige/80 border-t border-noir-border/50 max-w-xl">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-noir-caramel" />
              <span>Open Daily: 7:30 AM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-noir-caramel" />
              <span>Zamalek Flagship • Cairo</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-noir-caramel" />
              <span>Top 1% Arabica Lots</span>
            </div>
          </div>

        </div>
      </div>

      {/* Stats Counter Bar at Bottom of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-noir-espresso/70 border border-noir-border/60 backdrop-blur-md shadow-2xl">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-noir-caramel/60 pl-4 py-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-noir-cream">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-noir-beige/80 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
