'use client';

import React from 'react';
import { ContainerProps } from '@/lib/types/forms';
import { cn } from '@/lib/utils/cn';

/**
 * Reusable Container layout component with customizable max-width, responsive padding, and centering.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'xl',
  centered = true,
}) => {
  const maxWidthStyles = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8',
        maxWidthStyles[maxWidth],
        centered && 'mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

Container.displayName = 'Container';
