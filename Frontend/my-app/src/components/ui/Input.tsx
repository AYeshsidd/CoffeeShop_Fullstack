'use client';

import React from 'react';
import { InputProps } from '@/lib/types/forms';
import { cn } from '@/lib/utils/cn';

/**
 * Input component - Premium coffee house design
 * Clean, accessible with excellent contrast and focus states
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      validationState = 'default',
      error,
      disabled = false,
      required = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    // State-based styling with better contrast
    const stateStyles = {
      default: cn(
        'border-primary-300 text-primary-900 bg-white',
        'placeholder:text-primary-400',
        'focus:border-accent-500 focus:ring-accent-500/30 focus:bg-white'
      ),
      valid: cn(
        'border-green-500 text-primary-900 bg-green-50/50',
        'placeholder:text-green-400',
        'focus:border-green-600 focus:ring-green-500/30'
      ),
      error: cn(
        'border-red-500 text-primary-900 bg-red-50/50',
        'placeholder:text-red-400',
        'focus:border-red-600 focus:ring-red-500/30'
      ),
    };

    const isInvalid = validationState === 'error' || !!error;
    const describedBy = error && id ? `${id}-error` : undefined;

    return (
      <input
        ref={ref}
        type={type}
        id={id}
        disabled={disabled}
        required={required}
        aria-required={required ? 'true' : undefined}
        aria-invalid={isInvalid ? 'true' : 'false'}
        aria-describedby={describedBy}
        className={cn(
          'block w-full rounded-xl border-2 px-4 py-3 text-base font-sans leading-6',
          'outline-none transition-all duration-200 ease-out',
          'focus:ring-4',
          'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-500 disabled:border-neutral-300 disabled:opacity-60',
          stateStyles[validationState],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
