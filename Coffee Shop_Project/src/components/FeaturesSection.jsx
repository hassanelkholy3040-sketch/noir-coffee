import React from 'react';
import { Compass, Award, Flame, Heart, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Compass,
      title: 'Carefully Sourced Beans',
      subtitle: 'Ethical & Single Origin',
      description: 'Hand-selected micro-lots from regenerative farms across Colombia, Ethiopia, and Guatemala, ensuring fair prices and unmatched quality.',
    },
    {
      icon: Award,
      title: 'Expert Baristas',
      subtitle: 'SCA Certified Artisans',
      description: 'Our team consists of passionate craftspeople trained in water mineral chemistry, grind kinetics, and precision latte art pour techniques.',
    },
    {
      icon: Flame,
      title: 'Freshly Prepared Coffee',
      subtitle: 'Brewed to Order',
      description: 'Every shot is ground per order and weighed to the tenth of a gram. Fresh small-batch roasts rested to absolute peak flavor development.',
    },
    {
      icon: Heart,
      title: 'A Cozy, Welcoming Space',
      subtitle: 'Warm Aesthetic Refuge',
      description: 'Tactile natural woods, muted lighting, comfortable banquettes, and peaceful acoustics curated for creative focus or meaningful conversation.',
    },
  ];

  return (
    <section className="py-24 bg-noir-deep relative border-t border-noir-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The NOIR Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight">
            Why Discerning Coffee Lovers Choose Us
          </h2>

          <p className="text-noir-beige/80 text-sm sm:text-base font-light">
            We don't believe in shortcuts. Every facet of our craft is engineered to deliver an elevated, comforting sensory experience.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-noir-espresso/40 hover:bg-noir-espresso/90 border border-noir-border/80 hover:border-noir-caramel/60 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-noir-espresso border border-noir-border/80 flex items-center justify-center text-noir-caramel mb-6 group-hover:scale-110 group-hover:border-noir-caramel/80 group-hover:bg-noir-caramel/10 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-noir-caramel font-semibold block mb-1">
                    {feature.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-noir-cream group-hover:text-noir-caramel transition-colors mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-noir-beige/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-noir-border/40 flex items-center justify-between text-xs text-noir-beige/40 group-hover:text-noir-caramel transition-colors">
                  <span className="font-mono">0{idx + 1}</span>
                  <div className="w-6 h-[1px] bg-noir-border group-hover:bg-noir-caramel transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;

