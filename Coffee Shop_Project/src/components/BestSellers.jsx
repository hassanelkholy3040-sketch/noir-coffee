import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Flame, Plus, Check, Sparkles } from 'lucide-react';

const BestSellers = () => {
  const { addToCart, setQuickViewProduct } = useCart();
  const [addingId, setAddingId] = useState(null);

  // Grab three top best sellers
  const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 3);

  const handleAdd = (item) => {
    setAddingId(item.id);
    addToCart(item, 1);
    setTimeout(() => {
      setAddingId(null);
    }, 600);
  };

  return (
    <section className="py-24 bg-noir-espresso/40 relative border-t border-noir-border/40 overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-noir-caramel/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>Patron Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight">
              Our Most Beloved Pulls
            </h2>
            <p className="text-noir-beige/80 text-sm sm:text-base font-light">
              Crafted hundreds of times each day, these three creations define the NOIR sensory signature.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-noir-caramel font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Consistently Rated 4.9 / 5.0</span>
          </div>
        </div>

        {/* 3 Showcase Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-noir-deep/80 rounded-3xl border border-noir-border hover:border-noir-caramel/70 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
            >
              {/* Ranking Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-extrabold text-noir-caramel/40 group-hover:text-noir-caramel transition-colors">
                  0{index + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-noir-espresso text-noir-caramel text-[11px] font-semibold tracking-wider uppercase border border-noir-caramel/30">
                  {index === 0 ? 'Flagship Standard' : index === 1 ? 'Silky Classic' : 'Cairo Favorite'}
                </span>
              </div>

              {/* Image */}
              <div
                onClick={() => setQuickViewProduct(item)}
                className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 cursor-pointer bg-noir-charcoal"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-deep/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[11px] font-medium text-noir-beige bg-noir-deep/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-noir-border/50 pointer-events-none">
                  {item.roast}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-2 mb-6">
                <h3
                  onClick={() => setQuickViewProduct(item)}
                  className="font-serif text-2xl font-bold text-noir-cream group-hover:text-noir-caramel transition-colors cursor-pointer"
                >
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-noir-beige/80 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Tasting notes */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tastingNotes?.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-noir-beige/70 uppercase tracking-wider px-2 py-0.5 rounded-full bg-noir-espresso border border-noir-border/60"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Add Button */}
              <div className="pt-4 border-t border-noir-border/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-noir-beige/60 block">Price</span>
                  <span className="font-serif text-xl font-bold text-noir-cream">
                    {item.price} <span className="text-xs font-sans text-noir-caramel font-semibold">EGP</span>
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  disabled={addingId === item.id}
                  aria-label={`Add ${item.name} to order for ${item.price} EGP`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel ${
                    addingId === item.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep shadow-md shadow-noir-caramel/20 hover:shadow-caramel-glow transform hover:-translate-y-0.5'
                  }`}
                >
                  {addingId === item.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
