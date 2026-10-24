import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    subtotalPrice,
    serviceVat,
    totalPrice,
    handleSimulateCheckout,
  } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          aria-label="Your Order Bag"
          onClick={(e) => e.stopPropagation()}
          className="w-screen max-w-md bg-noir-espresso border-l border-noir-border shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-6 border-b border-noir-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-noir-deep border border-noir-caramel/40 flex items-center justify-center text-noir-caramel">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-noir-cream">Your Order Bag</h2>
                <span className="text-xs text-noir-beige/70 font-medium">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  aria-label="Empty entire cart"
                  className="text-[11px] text-noir-beige/60 hover:text-rose-400 uppercase tracking-wider transition-colors px-2 py-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart drawer"
                className="p-2 rounded-full bg-noir-deep/80 hover:bg-noir-deep text-noir-beige hover:text-noir-cream border border-noir-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body: Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-20 h-20 rounded-full bg-noir-deep border border-noir-border flex items-center justify-center text-noir-caramel/40">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-noir-cream">Your bag is empty</h3>
                  <p className="text-xs text-noir-beige/70 max-w-xs">
                    Explore our Cairo roastery menu and add handcrafted hot or cold drinks to your order.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    const target = document.querySelector('#menu');
                    if (target) {
                      const navOffset = 80;
                      const elementPosition = target.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="px-6 py-3 rounded-full bg-noir-caramel text-noir-deep font-semibold text-xs uppercase tracking-wider hover:bg-noir-caramelHover shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-noir-deep/80 border border-noir-border/70 flex gap-4 items-center justify-between"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-noir-charcoal shrink-0 border border-noir-border/50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=150&q=80';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-noir-cream truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-noir-beige/60 truncate">
                        {item.size || 'Regular'} • {item.price} EGP each
                      </p>
                      <div className="font-serif text-xs font-semibold text-noir-caramel mt-1">
                        Subtotal: {item.price * item.quantity} EGP
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-noir-beige/40 hover:text-rose-400 p-1 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-noir-caramel rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center border border-noir-border rounded-lg bg-noir-espresso px-1 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="p-1 hover:text-noir-caramel text-noir-beige/80 transition-colors focus:outline-none"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-noir-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="p-1 hover:text-noir-caramel text-noir-beige/80 transition-colors focus:outline-none"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Summary / Checkout button */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-noir-border/60 bg-noir-deep/90 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-noir-beige/80">
                  <span>Subtotal</span>
                  <span className="font-mono">{subtotalPrice} EGP</span>
                </div>
                <div className="flex justify-between text-noir-beige/80">
                  <span>Simulated VAT (14%)</span>
                  <span className="font-mono">{serviceVat} EGP</span>
                </div>
                <div className="pt-2 border-t border-noir-border/50 flex justify-between text-base font-serif font-bold text-noir-cream">
                  <span>Estimated Total</span>
                  <span className="text-noir-caramel font-sans font-bold">{totalPrice} EGP</span>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-3 rounded-xl bg-noir-espresso border border-noir-caramel/30 text-[11px] text-noir-beige/80 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-noir-caramel shrink-0 mt-0.5" />
                <span>Front-end demo checkout. No financial transactions or backend orders will take place.</span>
              </div>

              {/* Proceed to Demo Checkout Button */}
              <button
                onClick={handleSimulateCheckout}
                className="w-full py-4 rounded-xl bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-sm tracking-wide shadow-lg shadow-noir-caramel/25 hover:shadow-caramel-glow transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
              >
                <span>Proceed to Checkout ({totalPrice} EGP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default CartDrawer;
