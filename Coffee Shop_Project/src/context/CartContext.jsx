import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('noir_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('noir_cart', JSON.stringify(cartItems));
    } catch {
      // LocalStorage fallback
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`Added "${product.name}" to your order.`);
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Sample service fee / VAT (clearly simulated)
  const serviceVat = Math.round(subtotalPrice * 0.14); // 14% Egyptian VAT
  const totalPrice = subtotalPrice + serviceVat;

  const handleSimulateCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutSuccess(true);
    setIsCheckoutModalOpen(true);
  };

  const finishCheckoutDemo = () => {
    clearCart();
    setIsCheckoutModalOpen(false);
    setIsCartOpen(false);
    setCheckoutSuccess(false);
    showToast("Demo order logged! Thank you for sampling NOIR COFFEE.");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        setToastMessage,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        checkoutSuccess,
        setCheckoutSuccess,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotalPrice,
        serviceVat,
        totalPrice,
        handleSimulateCheckout,
        finishCheckoutDemo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

