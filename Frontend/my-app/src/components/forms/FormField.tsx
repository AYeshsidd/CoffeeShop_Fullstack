'use client';

import React, { useState } from 'react';
import { FormFieldProps } from '@/lib/types/forms';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { FormError } from '@/components/forms/FormError';
import { cn } from '@/lib/utils/cn';

/**
 * Composite FormField component with premium coffee house styling
 * Manages password visibility toggles and validation states
 */
export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';
  const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type;

  const validationState = touched
    ? error
      ? 'error'
      : value.trim() !== ''
      ? 'valid'
      : 'default'
    : 'default';

  const hasError = touched && !!error;

  return (
    <div className="w-full">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>

      <div className="relative">
        <Input
          id={id}
          type={inputType}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          validationState={validationState}
          error={hasError ? error : undefined}
          className={cn(isPasswordField && 'pr-12')}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className={cn(
              'absolute inset-y-0 right-0 flex items-center pr-4',
              'text-primary-500 hover:text-accent-600 focus:text-accent-600 focus:outline-none',
              'transition-colors duration-200',
              'disabled:cursor-not-allowed disabled:text-neutral-400'
            )}
          >
            {showPassword ? (
              // EyeOff icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            ) : (
              // Eye icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>

      <FormError id={`${id}-error`} error={hasError ? error : undefined} />
    </div>
  );
};

FormField.displayName = 'FormField';
