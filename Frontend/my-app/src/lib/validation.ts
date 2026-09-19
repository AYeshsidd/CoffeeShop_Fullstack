/**
 * Form validation functions
 * Each validator returns true if valid, or an error message string if invalid
 */

/**
 * Validate email format using standard email pattern
 * @param value - Email string to validate
 * @returns true if valid, error message if invalid
 */
export const email = (value: string): true | string => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.trim()) {
    return 'Email is required';
  }
  return pattern.test(value) || 'Please enter a valid email address';
};

/**
 * Validate password meets minimum requirements
 * Must be at least 8 characters with at least one letter and one number
 * @param value - Password string to validate
 * @returns true if valid, error message if invalid
 */
export const password = (value: string): true | string => {
  if (!value) {
    return 'Password is required';
  }
  if (value.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!/[a-zA-Z]/.test(value)) {
    return 'Password must contain at least one letter';
  }
  if (!/\d/.test(value)) {
    return 'Password must contain at least one number';
  }
  return true;
};

/**
 * Validate full name format
 * Must not be empty and can only contain letters, spaces, hyphens, and apostrophes
 * @param value - Full name string to validate
 * @returns true if valid, error message if invalid
 */
export const fullName = (value: string): true | string => {
  const pattern = /^[a-zA-Z\s\-']+$/;
  if (!value.trim()) {
    return 'Full name is required';
  }
  if (!pattern.test(value)) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  }
  return true;
};

/**
 * Validate two password fields match
 * @param password - Original password
 * @param confirmPassword - Confirmation password
 * @returns true if valid, error message if invalid
 */
export const passwordMatch = (password: string, confirmPassword: string): true | string => {
  return password === confirmPassword || 'Passwords do not match';
};

/**
 * Validate required field is not empty
 * @param value - Field value to validate
 * @returns true if valid, error message if invalid
 */
export const required = (value: string): true | string => {
  return value.trim().length > 0 || 'This field is required';
};

/**
 * Collection of all validators for easy import
 */
export const validators = {
  email,
  password,
  fullName,
  passwordMatch,
  required,
};
