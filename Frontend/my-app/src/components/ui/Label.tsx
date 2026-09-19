'use client';

import React from 'react';
import { LabelProps } from '@/lib/types/forms';
import { cn } from '@/lib/utils/cn';

/**
 * Reusable Label component with premium coffee house styling and built-in required indicator
 */
export const Label: React.FC<LabelProps> = ({
  htmlFor,
  required = false,
  className,
  children,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block text-sm font-semibold text-primary-800 mb-2 font-sans select-none tracking-wide',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-accent-600 ml-1.5" aria-hidden="true" title="Required">
          *
        </span>
      )}
    </label>
  );
};

Label.displayName = 'Label';
