import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { Star, Quote, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-24 bg-noir-deep relative border-t border-noir-border/40 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-noir-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Chronicles</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight">
            Words From Our Table
          </h2>

          <p className="text-noir-beige/80 text-sm sm:text-base font-light">
            Reflections from regular patrons, creators, and coffee enthusiasts who have made NOIR their daily haven.
          </p>

          <div className="text-[11px] text-noir-beige/50 italic">
            *Illustrative guest experiences presented for website demonstration purposes.
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative bg-noir-espresso/40 hover:bg-noir-espresso/90 border border-noir-border/80 hover:border-noir-caramel/60 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-noir-caramel">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-noir-caramel" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-noir-border group-hover:text-noir-caramel/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif text-base sm:text-lg text-noir-cream italic leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-noir-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {!failedImages[t.id] ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-noir-caramel/50 bg-noir-charcoal"
                      onError={() => handleImageError(t.id)}
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-noir-espresso border border-noir-caramel/60 text-noir-caramel font-serif font-bold text-xs flex items-center justify-center shrink-0">
                      {getInitials(t.name)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-serif text-sm font-bold text-noir-cream">{t.name}</h4>
                    <p className="text-[11px] text-noir-beige/70">{t.role} • {t.city}</p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-wider text-noir-caramel font-semibold">Ordered</span>
                  <span className="text-[11px] text-noir-beige/80">{t.favoriteDrink}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
