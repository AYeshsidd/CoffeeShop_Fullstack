'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

interface FormErrorProps {
  /** Error message to display. If undefined/empty, component won't render anything */
  error?: string;
  /** Additional custom classes */
  className?: string;
  /** Unique ID for aria-describedby binding */
  id?: string;
}

/**
 * Reusable component for displaying form validation errors
 * Uses role="alert" and aria-live="polite" for high screen reader accessibility
 */
export const FormError: React.FC<FormErrorProps> = ({ error, className, id }) => {
  if (!error) return null;

  return (
    <p
      id={id}
      role="alert"
      aria-live="polite"
      className={cn(
        'text-sm font-medium text-red-700 mt-2 font-sans flex items-center gap-2 animate-fade-in',
        className
      )}
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      {error}
    </p>
  );
};

FormError.displayName = 'FormError';
