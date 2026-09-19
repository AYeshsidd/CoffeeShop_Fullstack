'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { CategoryFilter } from '@/components/products/CategoryFilter';
import { products, categories, getFeaturedProducts, getProductsByCategory } from '@/lib/data/products';

/**
 * Products Page - The Coffee House
 * Premium product browsing with varied section backgrounds
 */
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const featuredProducts = getFeaturedProducts();
  const displayedProducts = getProductsByCategory(activeCategory);

  return (
    <main className="min-h-screen">
      {/* Header Section - Dark Espresso Background */}
      <section className="pt-16 pb-10 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 border border-white/20">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide">Artisan Selection</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-semibold">
              Our Collection
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed font-medium">
              Handcrafted coffee, fresh pastries, and curated brunch offerings
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Products Section - White Background */}
      <section className="py-14 bg-white border-b border-primary-200">
        <Container>
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-primary-900 mb-2 text-center font-semibold">
              Featured Selection
            </h2>
            <p className="text-primary-700 text-center font-medium">
              Our most beloved offerings, carefully curated for you
            </p>
          </div>

          {/* Horizontal Scroll for Featured Products */}
          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter Section - Warm Cream Background */}
      <section className="py-12 bg-primary-100">
        <Container>
          <div className="mb-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-primary-900 mb-6 font-semibold">
              Browse by Category
            </h2>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </Container>
      </section>

      {/* All Products Grid - Light Beige Background */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="mb-8 text-center">
            <p className="text-primary-800 font-bold text-lg">
              {displayedProducts.length} {displayedProducts.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>

          {/* Responsive Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-200 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-primary-900 mb-2 font-semibold">No products found</h3>
              <p className="text-primary-700">Try selecting a different category</p>
            </div>
          )}
        </Container>
      </section>

      {/* Back to Home Link - Warm Beige Background */}
      <section className="py-12 bg-primary-200">
        <Container>
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-900 hover:text-accent-600 transition-colors font-bold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to The Coffee House
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
