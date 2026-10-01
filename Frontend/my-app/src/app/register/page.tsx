'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { FormField } from '@/components/forms/FormField';
import { Button } from '@/components/ui/Button';
import { RegistrationFormData, FormState } from '@/lib/types/forms';
import { validators } from '@/lib/validation';
import { simulateRegistration } from '@/lib/auth';
import { useRouter } from 'next/navigation';


export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState<RegistrationFormData>>({
    values: {
      fullName: '',
      email: '',
      address:'',
      phone:'',
      password: '',
      confirmPassword: '',
    },
    validation: {
      fullName: { touched: false, error: undefined, isValid: false },
      email: { touched: false, error: undefined, isValid: false },
       phone: { touched: false, error: undefined, isValid: false },
       address: { touched: false, error: undefined, isValid: false },
      password: { touched: false, error: undefined, isValid: false },
      confirmPassword: { touched: false, error: undefined, isValid: false },
    },
    isSubmitting: false,
    hasSubmitted: false,
    formError: undefined,
    formSuccess: undefined,
  });

  const validateField = (name: keyof RegistrationFormData, value: string, allValues: RegistrationFormData): string | undefined => {
    let result: true | string = true;

    switch (name) {
      case 'fullName':
        result = validators.fullName(value);
        break;
      case 'email':
        result = validators.email(value);
        break;

      case 'phone':
       result = value.trim() ? true : 'Phone number is required';
       break;
      
       case 'address':
       result = value.trim() ? true : 'Address is required';
       break;

      case 'password':
        result = validators.password(value);
        break;

      case 'confirmPassword':
        result = validators.passwordMatch(allValues.password, value);
        break;
    }

    return result === true ? undefined : result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof RegistrationFormData;

    setForm((prev) => {
      const newValues = { ...prev.values, [fieldName]: value };

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
        formSuccess: undefined,
      };
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof RegistrationFormData;
    const error = validateField(fieldName, value, form.values);

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

    (Object.keys(form.values) as Array<keyof RegistrationFormData>).forEach((key) => {
      const error = validateField(key, form.values[key], form.values);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setForm(prev => ({ ...prev, formError: undefined, formSuccess: undefined }));

    if (!validateAll()) return;

    setForm((prev) => ({ ...prev, isSubmitting: true }));

    try {
      const result = await simulateRegistration(form.values);

      if (result.success) {
        setForm((prev) => ({
          ...prev,
          isSubmitting: false,
          hasSubmitted: true,
          formSuccess: result.message,
          values: {
            fullName: '',
            email: '',
            phone:'',
            address:'',
            password: '',
            confirmPassword: '',
          },
          validation: {
            fullName: { touched: false, error: undefined, isValid: false },
            email: { touched: false, error: undefined, isValid: false },
            phone: { touched: false, error: undefined, isValid: false },
            address: { touched: false, error: undefined, isValid: false },
            password: { touched: false, error: undefined, isValid: false },
            confirmPassword: { touched: false, error: undefined, isValid: false },
          },
        }));

  setTimeout(() => router.push('/login'), 1800);
      } else {
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-2xl mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-2 font-semibold">Join The Coffee House</h1>
              <p className="text-primary-700 font-sans font-medium">Create your account to get started</p>
            </div>

            {/* Form Messages */}
            {form.formSuccess && (
              <div className="mb-5 p-4 bg-green-50 border-2 border-green-300 rounded-xl text-green-800">
                <p className="flex items-center gap-2 font-semibold">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{form.formSuccess}</span>
                </p>
              </div>
            )}

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
                id="fullName"
                label="Full Name"
                placeholder="Jane Smith"
                value={form.values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.fullName.error}
                touched={form.validation.fullName.touched}
                disabled={form.isSubmitting}
                required
              />

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
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="+92 300 1234567"
                value={form.values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.phone.error}
                touched={form.validation.phone.touched}
                disabled={form.isSubmitting}
                required
              />

              <FormField
                id="address"
                label="Address"
                placeholder="Your address"
                value={form.values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.address.error}
                touched={form.validation.address.touched}
                disabled={form.isSubmitting}
                required
              />

              <FormField
                id="password"
                label="Password"
                type="password"
                placeholder="Minimum 8 characters"
                value={form.values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.password.error}
                touched={form.validation.password.touched}
                disabled={form.isSubmitting}
                required
              />

              <FormField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Repeat your password"
                value={form.values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={form.validation.confirmPassword.error}
                touched={form.validation.confirmPassword.touched}
                disabled={form.isSubmitting}
                required
              />

              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  loading={form.isSubmitting}
                  className="text-base font-bold"
                >
                  Create Account
                </Button>
              </div>
            </form>

            {/* Already have account */}
            <div className="mt-6 pt-6 border-t border-primary-200 text-center">
              <p className="text-primary-800 font-sans">
                Already a member?{' '}
                <Link
                  href="/login"
                  className="text-accent-600 font-bold hover:text-accent-700 transition-colors"
                >
                  Login
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
