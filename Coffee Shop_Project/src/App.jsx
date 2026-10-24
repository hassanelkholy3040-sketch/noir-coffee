import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import StorySection from './components/StorySection';
import FeaturedMenu from './components/FeaturedMenu';
import FeaturesSection from './components/FeaturesSection';
import LocationSection from './components/LocationSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import QuickViewModal from './components/QuickViewModal';
import ToastNotification from './components/ToastNotification';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-noir-deep text-noir-cream font-sans selection:bg-noir-caramel selection:text-noir-deep relative">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Semantic Main Content Flow */}
        <main>
          {/* A. Hero Section */}
          <Hero />

          {/* F. Best Sellers (Spotlight 3 top drinks) */}
          <BestSellers />

          {/* D. Our Story */}
          <StorySection />

          {/* C. Featured Menu (Interactive filters & products) */}
          <FeaturedMenu />

          {/* E. Why Choose Us (4 pillars) */}
          <FeaturesSection />

          {/* G. Our Location (Cairo Atelier Demo) */}
          <LocationSection />

          {/* H. Testimonials (Demo Guest Reviews) */}
          <Testimonials />

          {/* I. Newsletter (Subscription form) */}
          <Newsletter />
        </main>

        {/* J. Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <CartDrawer />
        <CheckoutModal />
        <QuickViewModal />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}

export default App;

