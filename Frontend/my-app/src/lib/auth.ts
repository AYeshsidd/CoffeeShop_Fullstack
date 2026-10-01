import { RegistrationFormData, LoginFormData } from './types/forms';
import { RegistrationResult, LoginResult } from './types/auth';
import apiFetch, { ApiError } from './api-client';
import { fullName } from './validation';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export async function simulateRegistration(
  data: RegistrationFormData
): Promise<RegistrationResult> {
  try {
    await apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,        // add karo
        address: data.address, 
        password: data.password,
        // confirmPassword jaan-boojh kar nahi bheja — backend ko iski zaroorat nahi
      }),
    });
 
    return {
      success: true,
      message: 'Account created successfully! You can now log in.',
      };
      
  } catch (err) {
    const apiErr = err as ApiError;
    return {
      success: false,
      message: apiErr.message || 'Registration failed. Please try again.',
    };
  }
}

export async function simulateLogin(
  data: LoginFormData
): Promise<LoginResult> {
  try {
    const tokens = await apiFetch<TokenResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    // TODO (agla step): tokens ko AuthContext mein store karenge
    console.log('Tokens received:', tokens); // temporary — sirf verify karne ke liye

    return {
      success: true,
      message: 'Logged in successfully!',
      tokens,
    };
  } catch (err) {
    const apiErr = err as ApiError;
    return {
      success: false,
      message: apiErr.message || 'Login failed. Please check your credentials.',
    };
  }
}