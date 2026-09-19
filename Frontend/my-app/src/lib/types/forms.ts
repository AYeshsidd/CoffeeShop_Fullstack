import React from 'react';

// =============================================================================
// Form Data Types
// =============================================================================

/**
 * User registration form data
 * Collected from the registration page form
 */
export interface RegistrationFormData {
  /** User's full name (letters, spaces, hyphens, apostrophes only) */
  fullName: string;

  /** User's email address (validated format) */
  email: string;

  /** User's chosen password (min 8 chars, 1 letter, 1 number) */
  password: string;

  /** Password confirmation (must match password) */
  confirmPassword: string;
}

/**
 * User login form data
 * Collected from the login page form
 */
export interface LoginFormData {
  /** User's email address */
  email: string;

  /** User's password */
  password: string;

  /** Whether to remember the user's session */
  rememberMe: boolean;
}

// =============================================================================
// Validation Types
// =============================================================================

/**
 * Validation state for a single form field
 */
export interface FieldValidation {
  /** Whether the field has been touched/visited by the user */
  touched: boolean;

  /** Current validation error message (undefined if valid) */
  error: string | undefined;

  /** Whether the field is currently valid */
  isValid: boolean;
}

/**
 * Validation state for an entire form
 * Generic type parameter T represents the form data shape
 */
export type FormValidationState<T extends Record<string, any>> = {
  [K in keyof T]: FieldValidation;
};

/**
 * Validation function signature
 * Returns true if valid, or error message string if invalid
 */
export type ValidatorFn<T = string> = (value: T) => true | string;

/**
 * Validation rules for a form
 * Maps field names to their validation functions
 */
export type ValidationRules<T extends Record<string, any>> = {
  [K in keyof T]?: ValidatorFn<T[K]>;
};

/**
 * Complete form state including data, validation, and submission status
 * Generic type parameter T represents the form data shape
 */
export interface FormState<T extends Record<string, any>> {
  /** Current form field values */
  values: T;

  /** Validation state for each field */
  validation: FormValidationState<T>;

  /** Whether the form is currently being submitted */
  isSubmitting: boolean;

  /** Whether the form has been submitted at least once */
  hasSubmitted: boolean;

  /** Global form-level error (e.g., network error) */
  formError: string | undefined;

  /** Form-level success message */
  formSuccess: string | undefined;
}

// =============================================================================
// Component Prop Types
// =============================================================================

/**
 * Button component variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button component sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;

  /** Size of the button */
  size?: ButtonSize;

  /** Whether the button is in loading state */
  loading?: boolean;

  /** Whether the button is disabled */
  disabled?: boolean;

  /** Optional icon to display before text */
  iconBefore?: React.ReactNode;

  /** Optional icon to display after text */
  iconAfter?: React.ReactNode;

  /** Whether button should take full width of container */
  fullWidth?: boolean;

  /** Children content (button text/elements) */
  children: React.ReactNode;
}

/**
 * Input component types
 */
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';

/**
 * Input component validation states
 */
export type InputValidationState = 'default' | 'valid' | 'error';

/**
 * Input component props
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Input type */
  type?: InputType;

  /** Current validation state */
  validationState?: InputValidationState;

  /** Error message to display */
  error?: string;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether the input is required */
  required?: boolean;

  /** Placeholder text */
  placeholder?: string;

  /** Input value (controlled) */
  value?: string;

  /** Change handler (controlled) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Blur handler for validation */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Label component props
 */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** ID of the input this label is for */
  htmlFor: string;

  /** Whether the associated input is required */
  required?: boolean;

  /** Label text content */
  children: React.ReactNode;
}

/**
 * Checkbox component props
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;

  /** Change handler (controlled) */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Label text for the checkbox */
  label: string;

  /** Whether the checkbox is disabled */
  disabled?: boolean;
}

/**
 * FormField composite component props
 * Combines Label, Input, and error display
 */
export interface FormFieldProps {
  /** Unique ID for the input and label association */
  id: string;

  /** Label text */
  label: string;

  /** Input type */
  type?: InputType;

  /** Whether the field is required */
  required?: boolean;

  /** Input placeholder */
  placeholder?: string;

  /** Current field value */
  value: string;

  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Blur handler */
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;

  /** Validation error message */
  error?: string;

  /** Whether the field has been touched */
  touched?: boolean;

  /** Whether the field is disabled */
  disabled?: boolean;
}

/**
 * Container component props
 */
export interface ContainerProps {
  /** Children elements to wrap */
  children: React.ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Maximum width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /** Whether to center the container */
  centered?: boolean;
}

// =============================================================================
// Utility Types
// =============================================================================

/**
 * Type for conditional class name values
 */
export type ClassValue = string | number | boolean | undefined | null | ClassValue[];

/**
 * Type for class name merge function
 * Used with clsx + tailwind-merge
 */
export type ClassNameMerge = (...inputs: ClassValue[]) => string;

/**
 * Form submission handler type
 */
export type FormSubmitHandler<T extends Record<string, any>> = (
  data: T
) => void | Promise<void>;

/**
 * Field change handler type
 */
export type FieldChangeHandler<T extends Record<string, any>> = (
  field: keyof T,
  value: T[keyof T]
) => void;

/**
 * Field blur handler type
 */
export type FieldBlurHandler<T extends Record<string, any>> = (
  field: keyof T
) => void;
