'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { FormField } from '@/components/forms/FormField';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { LoginFormData, FormState } from '@/lib/types/forms';
import { validators } from '@/lib/validation';
import { simulateLogin } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const { setSession } = useAuth();
  const router = useRouter();
  
  const [form, setForm] = useState<FormState<LoginFormData>>({
    values: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validation: {
      email: { touched: false, error: undefined, isValid: false },
      password: { touched: false, error: undefined, isValid: false },
      rememberMe: { touched: false, error: undefined, isValid: true },
    },
    isSubmitting: false,
    hasSubmitted: false,
    formError: undefined,
    formSuccess: undefined,
  });

  const validateField = (name: keyof LoginFormData, value: any): string | undefined => {
    let result: true | string = true;

    switch (name) {
      case 'email':
        result = validators.email(value as string);
        break;
      case 'password':
        result = validators.required(value as string);
        break;
    }

    return result === true ? undefined : result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldName = name as keyof LoginFormData;
    const fieldValue = type === 'checkbox' ? checked : value;

    setForm((prev) => {
      const newValues = { ...prev.values, [fieldName]: fieldValue };

      return {
        ...prev,
        values: newValues,
        validation: {
          ...prev.validation,
          [fieldName]: {
            ...prev.validation[fieldName],
            error: undefined,
          },
        },
        formError: undefined,
      };
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof LoginFormData;

    if (fieldName === 'rememberMe') return;

    const error = validateField(fieldName, value);

    setForm((prev) => ({
      ...prev,
      validation: {
        ...prev.validation,
        [fieldName]: {
          touched: true,
          error,
          isValid: !error,
        },
      },
    }));
  };

  const validateAll = (): boolean => {
    const newValidation = { ...form.validation };
    let isAllValid = true;

    (['email', 'password'] as Array<keyof LoginFormData>).forEach((key) => {
      const error = validateField(key, form.values[key]);
      newValidation[key] = {
        touched: true,
        error,
        isValid: !error,
      };
      if (error) isAllValid = false;
    });

    setForm((prev) => ({ ...prev, validation: newValidation }));
    return isAllValid;
  };

  // const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setForm(prev => ({ ...prev, formError: undefined }));

    if (!validateAll()) return;

    setForm((prev) => ({ ...prev, isSubmitting: true }));

    try {
      const result = await simulateLogin(form.values);

      if (result.success && result.tokens) {
        setForm((prev) => ({
          ...prev,
          isSubmitting: false,
          hasSubmitted: true,
          formSuccess: result.message,
        }));
       await setSession(result.tokens);
      setTimeout(() => router.push('/'), 1200);
      } 
      else {
        setForm((prev) => ({
          ...prev,
          isSubmitting: false,
          formError: result.message,
        }));
      }
    } catch (err) {
      setForm((prev) => ({
        ...prev,
        isSubmitting: false,
        formError: 'An unexpected error occurred. Please try again.',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-primary-100 py-12 px-4 flex items-center justify-center">
      <Container maxWidth="sm">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-200">
          <div className="px-8 py-10 sm:px-12 sm:py-12">
            {/* Welcome Heading */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-700 rounded-2xl mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-2 font-semibold">Welcome Back</h1>
              <p className="text-primary-700 font-sans font-medium">Login to your coffee sanctuary</p>
            </div>

            {/* Form Error Message */}
            {form.formError && (
              <div className="mb-5 p-4 bg-red-50 border-2 border-red-300 rounded-xl text-red-800">
                <p className="flex items-center gap-2 font-semibold">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{form.formError}</span>
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <FormField
                id="email"
                label="Email Address"
                type="email"
                placeholder="jane@example.com"
                value={form.values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.email.error}
                touched={form.validation.email.touched}
                disabled={form.isSubmitting}
                required
              />

              <FormField
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={form.values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.password.error}
                touched={form.validation.password.touched}
                disabled={form.isSubmitting}
                required
              />

              <div className="flex items-center justify-between pt-1">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  label="Remember me"
                  checked={form.values.rememberMe}
                  onChange={handleChange}
                  disabled={form.isSubmitting}
                />
                <button
                  type="button"
                  className="text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  loading={form.isSubmitting}
                  className="text-base font-bold"
                >
                  Login to Account
                </Button>
              </div>
            </form>

            {/* Don't have account */}
            <div className="mt-6 pt-6 border-t border-primary-200 text-center">
              <p className="text-primary-800 font-sans">
                New to The Coffee House?{' '}
                <Link
                  href="/register"
                  className="text-accent-600 font-bold hover:text-accent-700 transition-colors"
                >
                  Create account
                </Link>
              </p>
            </div>

            {/* Back to home */}
            <div className="mt-5 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors font-semibold"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to The Coffee House
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
