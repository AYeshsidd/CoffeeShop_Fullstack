'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { useAuth } from '@/lib/auth-context';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
const { user, logout } = useAuth();

  return (
    <nav className="sticky top-[42px] z-40 bg-primary-900 text-white shadow-lg border-b border-primary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                </svg>
              </div>
              <span className="font-display text-xl font-semibold hidden sm:block">
                The Coffee House
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-semibold transition-colors relative py-1',
                  isActivePath(link.href)
                    ? 'text-accent-400'
                    : 'text-primary-100 hover:text-white'
                )}
              >
                {link.name}
                {isActivePath(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact & Icons */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Hidden on mobile */}
            <a
              href="tel:+442071234567"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-primary-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +44 20 7123 4567
            </a>

            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-3">
              {user ? (
        <span>{user.full_name}
        {/* <button>Logout</button> */}
        </span>
        
        
      ) : (
        <Link href="/login" className='bg-accent-500 px-2 py-1 rounded-md text-sm'>Login</Link>
      )}
            </div>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-primary-100 hover:text-white transition-colors"
              aria-label="Shopping cart"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </Link>

            {/* Profile Icon */}
            <Link
              href="/login"
              className="p-2 text-primary-100 hover:text-white transition-colors"
              aria-label="Account"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary-100 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-800 bg-primary-900 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors',
                  isActivePath(link.href)
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+442071234567"
              className="flex items-center gap-2 px-4 py-2.5 text-primary-100 font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +44 20 7123 4567
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';
