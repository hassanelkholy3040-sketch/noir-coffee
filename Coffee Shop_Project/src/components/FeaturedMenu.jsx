import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import ProductCard from './ProductCard';
import { Sparkles, Filter, Search } from 'lucide-react';

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'hot' && item.category === 'hot') ||
        (activeCategory === 'cold' && item.category === 'cold') ||
        (activeCategory === 'signature' && (item.subCategory === 'signature' || item.subCategory === 'specialty'));

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.roast?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tastingNotes?.some(note => note.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-noir-deep relative border-t border-noir-border/40">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-noir-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Roastery Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight">
            The Botanical & Roast Collection
          </h2>

          <p className="text-noir-beige/80 text-sm sm:text-base font-light leading-relaxed">
            Every pour is dialed-in to exacting parameters. From micro-lot espresso pulls to velvety cold brews, discover our curated Cairo menu priced in Egyptian Pounds.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-noir-border/50">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full md:w-auto">
            {MENU_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-caramel ${
                  activeCategory === category.id
                    ? 'bg-noir-caramel text-noir-deep shadow-lg shadow-noir-caramel/25'
                    : 'bg-noir-espresso/60 text-noir-beige/80 hover:text-noir-cream hover:bg-noir-espresso border border-noir-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-noir-beige/50" />
            <input
              type="text"
              placeholder="Search drinks, notes, roasts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 bg-noir-espresso/60 border border-noir-border focus:border-noir-caramel rounded-full text-xs text-noir-cream placeholder-noir-beige/40 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-noir-beige/60 hover:text-noir-cream font-medium"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-noir-espresso/30 rounded-3xl border border-noir-border/50 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-noir-caramel/60 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-noir-cream">No Drinks Found</h3>
            <p className="text-xs text-noir-beige/70 mt-1">Try resetting your search query or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-noir-caramel text-noir-deep text-xs font-semibold hover:bg-noir-caramelHover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note on prices */}
        <div className="mt-12 text-center text-xs text-noir-beige/60">
          All menu items are freshly brewed to order. All prices listed in Egyptian Pounds (EGP).
        </div>

      </div>
    </section>
  );
};

export default FeaturedMenu;
