import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

const ToastNotification = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 bg-noir-espresso/95 backdrop-blur-md text-noir-cream px-5 py-3.5 rounded-xl border border-noir-caramel/40 shadow-2xl shadow-black/80 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-noir-caramel/20 flex items-center justify-center text-noir-caramel shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="flex-1 text-sm font-medium">
          {toastMessage}
        </div>
        <CheckCircle2 className="w-4 h-4 text-noir-caramel shrink-0" />
      </div>
    </div>
  );
};

export default ToastNotification;

