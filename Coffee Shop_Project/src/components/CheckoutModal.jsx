import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle, Clock, MapPin, Receipt, ShieldCheck } from 'lucide-react';

const CheckoutModal = () => {
  const {
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    cartItems,
    subtotalPrice,
    serviceVat,
    totalPrice,
    finishCheckoutDemo,
  } = useCart();

  const [orderMethod, setOrderMethod] = useState('pickup');
  const [customerName, setCustomerName] = useState('Valued Guest');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(() => 'NRC-' + Math.floor(100000 + Math.random() * 900000));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCheckoutModalOpen) {
        setIsCheckoutModalOpen(false);
      }
    };
    if (isCheckoutModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setOrderPlaced(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCheckoutModalOpen, setIsCheckoutModalOpen]);

  if (!isCheckoutModalOpen) return null;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div
      onClick={() => setIsCheckoutModalOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-noir-espresso border border-noir-border rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsCheckoutModalOpen(false)}
          aria-label="Close checkout modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-noir-deep/80 text-noir-beige hover:text-noir-cream hover:bg-noir-deep border border-noir-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderPlaced ? (
          <form onSubmit={handleConfirmOrder} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-deep border border-noir-caramel/40 text-noir-caramel text-[11px] uppercase tracking-wider font-semibold mb-2">
                <Receipt className="w-3.5 h-3.5" />
                <span>Simulated Checkout Flow</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-noir-cream">Complete Your Order</h3>
              <p className="text-xs text-noir-beige/70 mt-1">
                Experience how an order is processed at NOIR COFFEE. This is a front-end simulation.
              </p>
            </div>

            {/* Order Type Toggle */}
            <div className="grid grid-cols-2 gap-3 p-1 bg-noir-deep rounded-xl border border-noir-border">
              <button
                type="button"
                onClick={() => setOrderMethod('pickup')}
                className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  orderMethod === 'pickup'
                    ? 'bg-noir-caramel text-noir-deep shadow-md'
                    : 'text-noir-beige hover:text-noir-cream'
                }`}
              >
                Atelier Pickup
              </button>
              <button
                type="button"
                onClick={() => setOrderMethod('dinein')}
                className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  orderMethod === 'dinein'
                    ? 'bg-noir-caramel text-noir-deep shadow-md'
                    : 'text-noir-beige hover:text-noir-cream'
                }`}
              >
                Table Service
              </button>
            </div>

            {/* Guest Details */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-noir-beige/80 block font-semibold">
                Guest Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-noir-deep border border-noir-border focus:border-noir-caramel rounded-xl text-sm text-noir-cream placeholder-noir-beige/40 focus:outline-none transition-colors"
              />
            </div>

            {/* Order Items Preview */}
            <div className="space-y-2 border-t border-b border-noir-border/60 py-4 max-h-40 overflow-y-auto">
              <div className="text-[11px] uppercase tracking-wider text-noir-caramel font-semibold">
                Order Summary ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
              </div>
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <span className="text-noir-cream">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="font-mono text-noir-beige/90">{item.price * item.quantity} EGP</span>
                </div>
              ))}
              <div className="pt-2 border-t border-noir-border/40 flex justify-between items-center text-sm font-serif font-bold text-noir-cream">
                <span>Total Amount (with VAT)</span>
                <span className="text-noir-caramel font-sans">{totalPrice} EGP</span>
              </div>
            </div>

            {/* Demonstration Warning */}
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-200/90 text-xs flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Front-End Demo:</strong> No credit card or backend transaction is involved. Clicking submit will simulate a confirmed order.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-sm tracking-wide shadow-lg shadow-noir-caramel/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
            >
              Simulate Placing Order ({totalPrice} EGP)
            </button>
          </form>
        ) : (
          /* Order Confirmed State */
          <div className="space-y-6 text-center py-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-noir-caramel font-semibold">
                Order Successfully Simulated
              </span>
              <h3 className="font-serif text-3xl font-bold text-noir-cream">
                We're Crafting Your Brew
              </h3>
              <p className="text-xs text-noir-beige/80 max-w-sm mx-auto">
                Thank you, <strong className="text-noir-cream">{customerName}</strong>! Your demo ticket has been generated.
              </p>
            </div>

            {/* Order Receipt Box */}
            <div className="bg-noir-deep/90 border border-noir-border rounded-2xl p-5 text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-noir-border/60 pb-2">
                <span className="text-noir-beige/60">Ticket No:</span>
                <span className="text-noir-caramel font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-noir-beige/60">Service Mode:</span>
                <span className="text-noir-cream uppercase">{orderMethod === 'pickup' ? 'Counter Pickup' : 'Table Service'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-noir-beige/60">Est. Brew Time:</span>
                <span className="text-noir-cream">10 – 14 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-noir-beige/60">Flagship Atelier:</span>
                <span className="text-noir-cream">Zamalek, Cairo</span>
              </div>
              <div className="flex justify-between border-t border-noir-border/60 pt-2 font-bold text-sm">
                <span className="text-noir-cream">Total Paid (Demo):</span>
                <span className="text-noir-caramel">{totalPrice} EGP</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-noir-deep text-[11px] text-noir-beige/60">
              *Demo complete. No real order was placed or stored.
            </div>

            <button
              onClick={finishCheckoutDemo}
              className="w-full py-3.5 rounded-xl bg-noir-caramel text-noir-deep font-semibold text-xs uppercase tracking-wider hover:bg-noir-caramelHover shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutModal;
