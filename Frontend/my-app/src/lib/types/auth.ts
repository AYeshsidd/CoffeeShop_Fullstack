import { RegistrationFormData, LoginFormData } from './forms';

/**
 * Registration submission result (simulated)
 */
export interface RegistrationResult {
  /** Whether registration was successful */
  success: boolean;

  /** User-facing message */
  message: string;

  /** Optional validation errors keyed by field name */
  errors?: Record<keyof RegistrationFormData, string>;
}

/**
 * Login submission result (simulated)
 */
export interface LoginResult {
  /** Whether login was successful */
  success: boolean;

  /** User-facing message */
  message: string;

  /** Optional validation errors keyed by field name */
  errors?: Record<keyof LoginFormData, string>;
}
