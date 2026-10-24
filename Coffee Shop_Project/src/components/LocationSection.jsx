import React, { useState } from 'react';
import { LOCATION_DETAILS } from '../data/locationData';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, AlertCircle, CheckCircle2, Coffee } from 'lucide-react';

const LocationSection = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="location" className="py-24 bg-noir-espresso/30 relative border-t border-noir-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Flagship Atelier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight">
            Visit Our Cairo Sanctuary
          </h2>

          <p className="text-noir-beige/80 text-sm sm:text-base font-light">
            Designed as an intimate retreat amidst the rhythm of the city. Join us for a quiet pour or an afternoon creative session.
          </p>

          {/* Prominent Demo Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/40 border border-amber-600/30 text-amber-200/90 text-xs text-left max-w-xl mx-auto">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Notice:</strong> {LOCATION_DETAILS.isDemoNotice}. Address and contact numbers are placeholder representations.</span>
          </div>
        </div>

        {/* Two Columns: Visual & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Location Image & Atmosphere Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-noir-border shadow-2xl min-h-[380px] lg:min-h-full bg-noir-charcoal flex flex-col justify-end">
            {!imgError ? (
              <img
                src={LOCATION_DETAILS.image}
                alt="NOIR Cairo Atelier interior"
                className="w-full h-full object-cover object-center absolute inset-0"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-noir-espresso via-noir-deep to-black flex flex-col items-center justify-center p-8 text-center">
                <Coffee className="w-16 h-16 text-noir-caramel/40 mb-3" />
                <span className="font-serif text-xl font-bold text-noir-cream">NOIR Flagship Atelier</span>
                <span className="text-xs uppercase tracking-widest text-noir-caramel mt-1">Zamalek, Cairo</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/90 via-noir-deep/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-widest text-noir-caramel font-semibold block mb-1">
                Zamalek Atelier • Concept
              </span>
              <h3 className="font-serif text-2xl font-bold text-noir-cream">
                Where Specialty Craft Meets Architectural Silence
              </h3>
              <p className="text-xs text-noir-beige/80 mt-1">
                {LOCATION_DETAILS.landmark}
              </p>
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-5 bg-noir-deep/90 border border-noir-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-noir-caramel font-semibold">Address (Demo)</h4>
                  <p className="font-serif text-base font-bold text-noir-cream mt-0.5">
                    {LOCATION_DETAILS.address}
                  </p>
                  <p className="text-xs text-noir-beige/70 mt-0.5">
                    {LOCATION_DETAILS.neighborhood}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-wider text-noir-caramel font-semibold">Opening Hours</h4>
                  <div className="space-y-1.5 mt-1.5">
                    {LOCATION_DETAILS.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-noir-beige/80">{h.days}</span>
                        <span className="text-noir-cream font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-noir-espresso border border-noir-border flex items-center justify-center text-noir-caramel shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-noir-caramel font-semibold">Inquiries</h4>
                  <p className="text-sm text-noir-cream font-mono mt-0.5">{LOCATION_DETAILS.phone}</p>
                  <p className="text-xs text-noir-beige/70">{LOCATION_DETAILS.email}</p>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-2 border-t border-noir-border/50">
                <span className="text-[11px] uppercase tracking-wider text-noir-caramel font-semibold block mb-2">
                  Atelier Highlights
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {LOCATION_DETAILS.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-noir-beige/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-noir-caramel shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <div className="pt-4 border-t border-noir-border/60">
              <a
                href={LOCATION_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-noir-caramel/20 hover:shadow-caramel-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;
