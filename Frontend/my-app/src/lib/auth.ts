import { RegistrationFormData, LoginFormData } from './types/forms';
import { RegistrationResult, LoginResult } from './types/auth';

/**
 * Simulate user registration (frontend-only)
 * Always succeeds after a realistic network delay
 *
 * @param data - Registration form data
 * @returns Promise resolving to success result
 */
export async function simulateRegistration(
  data: RegistrationFormData
): Promise<RegistrationResult> {
  // Simulate network delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Always succeed for registration (frontend-only simulation)
  return {
    success: true,
    message: 'Account created successfully! You can now log in.',
  };
}

/**
 * Simulate user login (frontend-only)
 * Always fails with "not yet available" message since backend is not integrated
 *
 * @param data - Login form data
 * @returns Promise resolving to failure result
 */
export async function simulateLogin(
  data: LoginFormData
): Promise<LoginResult> {
  // Simulate network delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Always fail for login (no backend integration yet)
  return {
    success: false,
    message: 'Login is not yet available. Please check back later.',
  };
}
