'use client';

import React from 'react';
import { ButtonProps } from '@/lib/types/forms';
import { cn } from '@/lib/utils/cn';

/**
 * Button component - Premium coffee house design
 * Elegant, solid colors with refined hover states
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      iconBefore,
      iconAfter,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    // Base styles
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2.5',
      'font-sans font-semibold tracking-wide',
      'rounded-xl',
      'transition-all duration-200 ease-out',
      'focus:outline-none focus:ring-4 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      'active:scale-[0.97]',
      fullWidth && 'w-full'
    );

    // Variant styles - refined with better contrast
    const variantStyles = {
      primary: cn(
        'bg-accent-500 text-white',
        'hover:bg-accent-600',
        'shadow-md hover:shadow-lg',
        'focus:ring-accent-500/40',
        'border border-accent-600/20'
      ),
      secondary: cn(
        'bg-primary-700 text-white',
        'hover:bg-primary-800',
        'shadow-md hover:shadow-lg',
        'focus:ring-primary-700/40',
        'border border-primary-800/20'
      ),
      outline: cn(
        'bg-transparent text-primary-800',
        'border-2 border-primary-400',
        'hover:bg-primary-100 hover:border-primary-500',
        'shadow-sm hover:shadow-md',
        'focus:ring-primary-500/40'
      ),
      ghost: cn(
        'bg-transparent text-primary-700',
        'hover:bg-primary-100 hover:text-primary-900',
        'focus:ring-primary-400/40'
      ),
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm h-9',
      md: 'px-5 py-2.5 text-base h-11',
      lg: 'px-7 py-3.5 text-lg h-14',
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && iconBefore && <span aria-hidden="true">{iconBefore}</span>}
        {children}
        {!loading && iconAfter && <span aria-hidden="true">{iconAfter}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
