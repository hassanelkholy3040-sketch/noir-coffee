import React from 'react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { Coffee, ArrowUp, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
  </svg>
);

const SpotifyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 11.5c3.5-1 7.5-.5 10 1"/>
    <path d="M7 14c4-1.2 8-.7 11 1"/>
    <path d="M9 9c3.2-.8 6.8-.4 9 1"/>
  </svg>
);

const Footer = () => {
  const { setQuickViewProduct } = useCart();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
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

  const handleOpenDrink = (drinkId) => {
    const item = MENU_ITEMS.find(m => m.id === drinkId);
    if (item) {
      setQuickViewProduct(item);
    }
  };

  return (
    <footer className="bg-noir-deep border-t border-noir-border/80 text-noir-cream pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-noir-caramel/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-noir-border/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-noir-espresso border border-noir-caramel/50 flex items-center justify-center text-noir-caramel">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-noir-cream">
                  NOIR
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-noir-beige font-medium -mt-1">
                  Coffee Roasters
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-noir-beige/80 leading-relaxed max-w-sm">
              An independent specialty coffee roastery and atelier in Cairo. Dedicated to single-origin Arabica, precision extraction, and peaceful architectural hospitality.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOIR on Instagram (Placeholder link)"
                className="w-9 h-9 rounded-full bg-noir-espresso border border-noir-border hover:border-noir-caramel text-noir-beige hover:text-noir-caramel flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOIR on Facebook (Placeholder link)"
                className="w-9 h-9 rounded-full bg-noir-espresso border border-noir-border hover:border-noir-caramel text-noir-beige hover:text-noir-caramel flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOIR on X / Twitter (Placeholder link)"
                className="w-9 h-9 rounded-full bg-noir-espresso border border-noir-border hover:border-noir-caramel text-noir-beige hover:text-noir-caramel flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOIR Lounge Spotify Playlist (Placeholder link)"
                className="w-9 h-9 rounded-full bg-noir-espresso border border-noir-border hover:border-noir-caramel text-noir-beige hover:text-noir-caramel flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <SpotifyIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-noir-caramel">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-noir-beige/80">
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded">
                  Home Sanctuary
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => scrollTo(e, '#story')} className="hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded">
                  Our Philosophy & Story
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => scrollTo(e, '#menu')} className="hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded">
                  Botanical Roastery Menu
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => scrollTo(e, '#location')} className="hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded">
                  Flagship Atelier
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded">
                  Newsletter Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Highlights (Clickable to inspect drink!) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-noir-caramel">
              Roastery Offerings
            </h4>
            <ul className="space-y-2 text-xs text-noir-beige/80">
              <li>
                <button
                  onClick={() => handleOpenDrink('sig-espresso')}
                  className="w-full flex justify-between items-center hover:text-noir-caramel transition-colors group text-left"
                >
                  <span className="group-hover:underline">Signature Espresso</span>
                  <span className="font-mono text-noir-caramel">95 EGP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenDrink('velvet-cappuccino')}
                  className="w-full flex justify-between items-center hover:text-noir-caramel transition-colors group text-left"
                >
                  <span className="group-hover:underline">Velvet Cappuccino</span>
                  <span className="font-mono text-noir-caramel">135 EGP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenDrink('spanish-latte')}
                  className="w-full flex justify-between items-center hover:text-noir-caramel transition-colors group text-left"
                >
                  <span className="group-hover:underline">NOIR Spanish Latte</span>
                  <span className="font-mono text-noir-caramel">160 EGP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenDrink('cold-brew')}
                  className="w-full flex justify-between items-center hover:text-noir-caramel transition-colors group text-left"
                >
                  <span className="group-hover:underline">24-Hour Nitro Cold Brew</span>
                  <span className="font-mono text-noir-caramel">140 EGP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenDrink('pour-over-geisha')}
                  className="w-full flex justify-between items-center hover:text-noir-caramel transition-colors group text-left"
                >
                  <span className="group-hover:underline">Panama Geisha Pour-Over</span>
                  <span className="font-mono text-noir-caramel">210 EGP</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sample Cairo Location Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-noir-caramel">
              Atelier Inquiries
            </h4>
            <div className="space-y-3 text-xs text-noir-beige/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-noir-caramel shrink-0 mt-0.5" />
                <span>14 Hassan Sabry St, Zamalek, Cairo, Egypt (Demo Flagship)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-noir-caramel shrink-0" />
                <span>+20 (2) 2736-XXXX (Demo)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-noir-caramel shrink-0" />
                <span>concierge@noir-coffee-demo.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-noir-beige/60 hover:text-noir-caramel transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-noir-beige/50">
          <div>
            &copy; {new Date().getFullYear()} NOIR COFFEE Atelier. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Demonstration website created with React, Tailwind CSS & Vite. All business details are illustrative.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
