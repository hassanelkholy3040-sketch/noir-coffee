import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Check, Eye, Coffee } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, setQuickViewProduct } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <article
      onClick={() => setQuickViewProduct(product)}
      className="group relative bg-noir-espresso/50 hover:bg-noir-espresso/90 border border-noir-border/70 hover:border-noir-caramel/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-black/60 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-noir-caramel"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-noir-charcoal">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-noir-espresso to-noir-deep p-6 text-center">
            <Coffee className="w-12 h-12 text-noir-caramel/40 mb-2" />
            <span className="font-serif text-sm text-noir-cream">{product.name}</span>
          </div>
        )}

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-espresso via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-noir-deep/85 border border-noir-caramel/40 backdrop-blur-md text-noir-caramel text-[11px] font-semibold tracking-wider uppercase pointer-events-none">
            {product.badge}
          </div>
        )}

        {/* Quick View Hover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          aria-label={`View details for ${product.name}`}
          className="absolute top-3 right-3 p-2 rounded-full bg-noir-deep/80 hover:bg-noir-caramel text-noir-beige hover:text-noir-deep border border-noir-border backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Roast / Volume Pill */}
        <div className="absolute bottom-3 left-3 text-[11px] text-noir-beige/90 font-medium bg-noir-deep/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-noir-border/50 pointer-events-none">
          {product.size}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-noir-cream group-hover:text-noir-caramel transition-colors">
              {product.name}
            </h3>
            <span className="text-xs uppercase tracking-wider font-semibold text-noir-caramel/90 shrink-0 mt-1">
              {product.category === 'hot' ? 'Hot' : 'Cold'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-noir-beige/80 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Tasting Notes */}
          {product.tastingNotes && product.tastingNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.tastingNotes.map((note, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-noir-deep border border-noir-border text-noir-beige/70"
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Add to Order */}
        <div className="pt-3 border-t border-noir-border/50 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-noir-beige/60">Price</span>
            <span className="font-serif text-lg font-bold text-noir-cream">
              {product.price} <span className="text-xs font-sans text-noir-caramel font-semibold">EGP</span>
            </span>
          </div>

          <button
            onClick={handleAdd}
            disabled={isAdding}
            aria-label={`Add ${product.name} to order for ${product.price} EGP`}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel ${
              isAdding
                ? 'bg-emerald-600 text-white'
                : 'bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep shadow-md shadow-noir-caramel/20 hover:shadow-caramel-glow'
            }`}
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
