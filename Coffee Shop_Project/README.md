# NOIR COFFEE — Specialty Coffee Roasters & Atelier

A modern, editorial coffee shop web experience built with **React**, **JavaScript (ES6+)**, **HTML5**, **Tailwind CSS**, and **Vite**.

Designed with inspiration from boutique specialty coffee houses and Cairo's contemporary artisanal roasteries.

---

## 🎨 Visual Identity & Design System

- **Espresso Dark Palette**:
  - Deep Espresso Brown: `#241812`
  - Dark Charcoal / Deep Base: `#120F0D` / `#191715`
  - Coffee Caramel Accent: `#B87945`
  - Soft Beige: `#DCCBB8`
  - Warm Cream: `#F5EFE6`
- **Typography**:
  - Headings: `Playfair Display` (High-contrast, elegant editorial serif)
  - Body & UI: `Plus Jakarta Sans` (Clean, balanced geometric sans-serif)
- **Design Details**:
  - Curated high-resolution photography with graceful fallback handling
  - Warm caramel glows and micro-borders
  - Accessible focus rings and responsive layouts across mobile, tablet, and desktop

---

## ☕ Website Architecture & Features

1. **Navigation Bar (`Navbar.jsx`)**:
   - Monogram logo with "NOIR COFFEE" branding
   - Smooth-scrolling anchor navigation (Home, Our Story, Menu, Locations, Contact)
   - Sticky navbar with backdrop blur and transition on scroll
   - Working mobile hamburger menu and slide-down drawer
   - Real-time shopping bag counter badge with opening trigger
2. **Hero Section (`Hero.jsx`)**:
   - Cinematic photography with dark ambient overlay gradients
   - Headline: *"Coffee, Crafted With Intention."*
   - Badges for single-origin Arabica & Cairo flagship hours
   - Primary ("Explore Our Menu") and Secondary ("Discover Our Story") CTAs
   - Atelier statistics bar (100% Arabica, 88+ SCA score, 24hr Nitro, Cairo Roastery)
3. **Best Sellers (`BestSellers.jsx`)**:
   - Editorial top-three drinks (#01 Signature Espresso, #02 Velvet Cappuccino, #03 Cairo Spanish Latte)
   - Ranking badges, sensory notes, and working quick-add buttons
4. **Our Story (`StorySection.jsx`)**:
   - Two-column editorial section with roasting photography
   - Core philosophy: micro-lot sourcing, measured craft, and warm hospitality
   - Interactive *"Read Our Story"* modal with full brand genesis
5. **Featured Menu (`FeaturedMenu.jsx`)**:
   - 8 specialty drinks with prices in Egyptian Pounds (EGP)
   - Working category filter tabs: *All Offerings*, *Hot Coffee*, *Cold Coffee*, *Signature Creations*
   - Live search input by drink name or flavor note
   - Interactive `ProductCard` with hover zoom, quick view, and add-to-order micro-interaction
6. **Why Choose Us (`FeaturesSection.jsx`)**:
   - 4 pillars with Lucide icons: *Carefully Sourced Beans*, *Expert Baristas*, *Freshly Prepared Coffee*, and *A Cozy, Welcoming Space*
7. **Flagship Location (`LocationSection.jsx`)**:
   - Sample Cairo flagship concept (Zamalek District)
   - Prominently labeled demo disclaimer
   - Opening hours, sample contact details, atelier highlights, and Google Maps directions button
8. **Guest Testimonials (`Testimonials.jsx`)**:
   - 3 sample guest reviews with star ratings, guest names, professions, and favorite drinks
9. **Newsletter Dispatch (`Newsletter.jsx`)**:
   - Interactive email subscription form with regex validation
   - Success and error states
   - Local simulation notice (no backend tracking)
10. **Shopping Bag & Order Drawer (`CartDrawer.jsx`)**:
    - Slide-over luxury drawer
    - Selected drinks with thumbnail, size, quantity controls (+ / -), and trash removal
    - Subtotal, simulated 14% Egyptian VAT, and estimated total in EGP
    - Clear empty-bag state with "Browse Menu" CTA
    - Front-end checkout flow simulation with printable ticket receipt modal (`CheckoutModal.jsx`)
11. **Sensory Quick View Modal (`QuickViewModal.jsx`)**:
    - Deep-dive into origin stories, sensory tasting notes, and direct volume add-to-cart
12. **Toast Notifications (`ToastNotification.jsx`)**:
    - Floating bottom toast alert whenever an item is added to the bag
13. **Footer (`Footer.jsx`)**:
    - Brand manifesto, quick links, price guide, Cairo flagship details, social icons, and demo copyright

---

## 🚀 How to Run the Project

### 1. Development Server
```bash
npm run dev
# or with pnpm
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
# or with pnpm
pnpm run build
```
This compiles optimized production assets into the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
# or with pnpm
pnpm run preview
```

