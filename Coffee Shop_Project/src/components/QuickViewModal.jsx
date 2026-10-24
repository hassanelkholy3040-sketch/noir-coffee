import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag, Coffee, Check } from 'lucide-react';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && quickViewProduct) {
        setQuickViewProduct(null);
      }
    };
    if (quickViewProduct) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setQty(1);
      setImgError(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quickViewProduct, setQuickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
      setQty(1);
    }, 700);
  };

  return (
    <div
      onClick={() => setQuickViewProduct(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-noir-espresso border border-noir-border rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
      >
        {/* Close button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-noir-deep/80 text-noir-beige hover:text-noir-cream hover:bg-noir-deep border border-noir-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="relative md:w-1/2 aspect-square md:aspect-auto bg-noir-charcoal overflow-hidden">
          {!imgError ? (
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-noir-espresso to-noir-deep p-6 text-center">
              <Coffee className="w-16 h-16 text-noir-caramel/40 mb-2" />
              <span className="font-serif text-base text-noir-cream">{quickViewProduct.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-noir-espresso md:from-transparent to-transparent pointer-events-none" />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-noir-deep/85 border border-noir-caramel/40 text-noir-caramel text-[11px] font-semibold tracking-wider uppercase pointer-events-none">
              {quickViewProduct.badge}
            </div>
          )}
        </div>

        {/* Product Info Column */}
        <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-noir-caramel font-semibold">
                {quickViewProduct.roast || 'Specialty Roast'} • {quickViewProduct.size}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-noir-cream mt-1">
                {quickViewProduct.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-noir-beige/85 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {quickViewProduct.story && (
              <div className="p-3 rounded-xl bg-noir-deep/80 border border-noir-border/60 text-xs text-noir-beige/80 italic">
                "{quickViewProduct.story}"
              </div>
            )}

            {/* Tasting Notes */}
            {quickViewProduct.tastingNotes && (
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-noir-beige/60 font-semibold block">
                  Sensory Notes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-noir-beige px-2.5 py-0.5 rounded-full bg-noir-deep border border-noir-border"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing and Action */}
          <div className="pt-4 border-t border-noir-border/60 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-noir-beige/60 block">Price</span>
                <span className="font-serif text-2xl font-bold text-noir-cream">
                  {quickViewProduct.price * qty} <span className="text-xs font-sans text-noir-caramel font-semibold">EGP</span>
                </span>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center border border-noir-border rounded-xl bg-noir-deep px-2 py-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label="Decrease quantity"
                  className="p-1 hover:text-noir-caramel text-noir-beige/80 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-mono font-bold text-noir-cream">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  aria-label="Increase quantity"
                  className="p-1 hover:text-noir-caramel text-noir-beige/80 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep shadow-md'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {qty} to Order</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickViewModal;
