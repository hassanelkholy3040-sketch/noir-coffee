import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, X, Compass, Coffee, Award, Heart } from 'lucide-react';

const StorySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="story" className="py-24 bg-noir-deep relative border-t border-noir-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            {/* Primary Editorial Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-noir-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                alt="Artisanal coffee bean roasting and grading process"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-noir-espresso/95 backdrop-blur-md p-6 rounded-2xl border border-noir-caramel/40 shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-noir-caramel/20 flex items-center justify-center text-noir-caramel">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-noir-caramel font-semibold block">Founded in Cairo</span>
                  <span className="font-serif text-sm font-bold text-noir-cream">Small-Batch Roastery</span>
                </div>
              </div>
              <p className="text-xs text-noir-beige/80 leading-relaxed">
                Direct trade partnerships with sustainable cooperatives across Colombia, Ethiopia, and Guatemala.
              </p>
            </div>

            {/* Subtle decorative dot pattern */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-noise opacity-30 pointer-events-none" />
          </div>

          {/* Right Editorial Text Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight leading-[1.15]">
              Respecting the Bean, <br />
              <span className="italic font-normal text-noir-caramel">Honoring the Ritual.</span>
            </h2>

            <p className="text-noir-beige/90 text-base sm:text-lg font-light leading-relaxed">
              NOIR began with a quiet conviction: coffee shouldn't be rushed. In a world of hurried routines, we created a sanctuary in Cairo dedicated to the deliberate craft of specialty coffee.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0 mt-1">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-noir-cream">Micro-Lot Sourcing</h4>
                  <p className="text-xs sm:text-sm text-noir-beige/80 leading-relaxed mt-0.5">
                    We exclusively roast Arabica scoring 88 points or higher on the SCA scale, directly partnering with family-owned farms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-noir-cream">Measured Craftsmanship</h4>
                  <p className="text-xs sm:text-sm text-noir-beige/80 leading-relaxed mt-0.5">
                    Water minerals calibrated daily. Extraction curves monitored by second and milligram. No guesswork, only pure expression.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0 mt-1">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-noir-cream">Warm, Tactile Hospitality</h4>
                  <p className="text-xs sm:text-sm text-noir-beige/80 leading-relaxed mt-0.5">
                    Our spaces blend warm espresso woods, soft ambient acoustics, and an unpretentious welcome for every guest.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-noir-espresso hover:bg-noir-espressoLight border border-noir-caramel/50 hover:border-noir-caramel text-noir-cream text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <BookOpen className="w-4 h-4 text-noir-caramel" />
                <span>Read Our Full Story</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Story Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-noir-espresso border border-noir-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Story Modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-noir-deep/80 text-noir-beige hover:text-noir-cream hover:bg-noir-deep border border-noir-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-noir-caramel font-semibold">The Genesis of NOIR</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-noir-cream">
                From Soil to Cup: A Cairo Atelier Dedicated to the Golden Roast
              </h3>
              
              <div className="text-sm text-noir-beige/90 space-y-4 leading-relaxed font-light">
                <p>
                  NOIR was founded in Cairo by a collective of certified Q-graders, roasters, and industrial designers who felt specialty coffee had become either too sterile or too commercialized. We wanted to restore romance, intimacy, and obsessive precision to every morning cup.
                </p>
                <p>
                  Our roasting lab operates custom drum roasters that highlight the origin terroir rather than masking it behind char. When you taste our Signature Espresso, you are experiencing the volcanic soil of Mount Kenya, the sun-drenched hills of Huila, and the careful hands of multi-generational pickers.
                </p>
                <p>
                  Whether you are dropping in for a quick double ristretto before a busy day or lingering for hours over a hand-poured Geisha V60, NOIR was built as your haven of calm and deliberate quality.
                </p>
              </div>

              <div className="pt-4 border-t border-noir-border/60 flex items-center justify-between">
                <div className="text-xs text-noir-beige/60">
                  NOIR COFFEE Roastery • Cairo, Egypt
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-noir-caramel text-noir-deep font-semibold text-xs uppercase tracking-wider hover:bg-noir-caramelHover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StorySection;
