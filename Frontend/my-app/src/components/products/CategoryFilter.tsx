'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; slug: string }>;
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

/**
 * Category Filter Component
 * Elegant category navigation - solid colors, no excessive gradients
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const isActive = activeCategory === category.slug;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-1',
              'active:scale-95',
              isActive
                ? 'bg-accent-500 text-white shadow-md hover:bg-accent-600'
                : 'bg-white text-primary-800 border-2 border-primary-300 hover:border-accent-500 hover:text-accent-600 shadow-sm'
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

CategoryFilter.displayName = 'CategoryFilter';
