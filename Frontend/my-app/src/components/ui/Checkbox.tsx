'use client';

import React from 'react';
import { CheckboxProps } from '@/lib/types/forms';
import { cn } from '@/lib/utils/cn';

/**
 * Reusable Checkbox component with premium coffee house styling and built-in focus/accessibility
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, label, disabled = false, className, id, ...props }, ref) => {
    return (
      <div className="flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={cn(
              'h-5 w-5 rounded-md border-2 border-primary-400 text-accent-600 cursor-pointer',
              'focus:ring-4 focus:ring-accent-500/30 focus:ring-offset-2',
              'transition-all duration-200 ease-out',
              'checked:bg-accent-600 checked:border-accent-600',
              'hover:border-accent-500',
              'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-300 disabled:opacity-60',
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-base">
          <label
            htmlFor={id}
            className={cn(
              'font-medium text-primary-800 font-sans select-none cursor-pointer',
              'hover:text-primary-900 transition-colors',
              disabled && 'opacity-60 cursor-not-allowed hover:text-primary-800'
            )}
          >
            {label}
          </label>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
