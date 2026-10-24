import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-noir-deep/90 backdrop-blur-md border-b border-noir-border/50 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel rounded-lg"
          >
            <div className="w-10 h-10 rounded-full bg-noir-espresso border border-noir-caramel/50 flex items-center justify-center text-noir-caramel transition-transform duration-300 group-hover:scale-105 group-hover:border-noir-caramel">
              <Coffee className="w-5 h-5 text-noir-caramel" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-noir-cream group-hover:text-noir-caramel transition-colors">
                NOIR
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-noir-beige font-medium -mt-1">
                Coffee Roasters
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-wider text-noir-beige/90 hover:text-noir-caramel transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-noir-caramel hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Cart with ${totalCount} items`}
              className="relative p-2.5 rounded-full bg-noir-espresso/80 border border-noir-border hover:border-noir-caramel/80 hover:bg-noir-espresso text-noir-cream transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
            >
              <ShoppingBag className="w-5 h-5 text-noir-beige group-hover:text-noir-caramel" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-noir-caramel text-noir-deep text-[11px] font-bold flex items-center justify-center animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Desktop Order Now Button */}
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-noir-caramel/20 hover:shadow-caramel-glow transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2.5 rounded-lg bg-noir-espresso border border-noir-border text-noir-cream hover:text-noir-caramel focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-noir-deep/98 border-b border-noir-border/80 px-6 py-6 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base uppercase tracking-wider text-noir-cream hover:text-noir-caramel py-2 border-b border-noir-border/30 transition-colors font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-noir-caramel">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="w-full text-center py-3 rounded-xl bg-noir-caramel text-noir-deep font-semibold text-sm tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-2.5 rounded-xl border border-noir-border text-noir-beige hover:text-noir-cream text-sm flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-noir-caramel" />
                <span>View Bag ({totalCount} items)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

