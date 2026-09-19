'use client';

import React from 'react';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/data/products';
import { cn } from '@/lib/utils/cn';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

/**
 * Product Card Component
 * Compact, elegant and commercial-looking design
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  return (
    <div
      className={cn(
        'group relative bg-white rounded-xl overflow-hidden border border-primary-200',
        'shadow-sm hover:shadow-md transition-all duration-300',
        'hover:-translate-y-0.5',
        compact ? 'w-[260px] flex-shrink-0' : ''
      )}
    >
      {/* Product Image - More compact aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={compact ? '260px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        />

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-accent-500 text-white text-xs font-bold rounded-lg shadow-md">
            Featured
          </div>
        )}
      </div>

      {/* Product Info - More compact padding */}
      <div className="p-3.5">
        <h3 className="font-display text-base font-semibold text-primary-900 mb-1 line-clamp-1 group-hover:text-accent-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-primary-600 mb-2.5 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-lg font-bold text-primary-900">
            {formatPrice(product.price)}
          </span>
          <button
            className={cn(
              'px-3.5 py-1.5 bg-accent-500 text-white rounded-lg text-sm font-bold',
              'hover:bg-accent-600 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-1',
              'active:scale-95'
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.displayName = 'ProductCard';
