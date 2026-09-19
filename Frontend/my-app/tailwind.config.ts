import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium café color palette - UK/Germany coffee culture inspired
        primary: {
          50: '#fdfbf7',   // Ivory cream
          100: '#f8f4ed',  // Latte foam
          200: '#f0e6d6',  // Cappuccino cream
          300: '#e3d4bb',  // Warm beige
          400: '#c9b899',  // Pastry crust
          500: '#a8906f',  // Rich coffee
          600: '#8b7355',  // Roasted bean
          700: '#6d5742',  // Dark roast
          800: '#4a3a2a',  // Espresso
          900: '#2d2318',  // Coffee grounds
        },
        accent: {
          50: '#fff8f0',   // Cream puff
          100: '#ffefd9',  // Vanilla cream
          200: '#ffd9ae',  // Caramel latte
          300: '#ffbd7a',  // Golden croissant
          400: '#ff9f4d',  // Apricot tart
          500: '#e8823a',  // Burnt caramel (main accent)
          600: '#c86b2c',  // Deep caramel
          700: '#a15523',  // Toffee
          800: '#7a4020',  // Dark chocolate
        },
        coffee: {
          foam: '#f8f4ed',
          latte: '#c9b899',
          espresso: '#4a3a2a',
          bean: '#2d2318',
        },
        evening: {
          50: '#fef8f3',   // Soft candlelight
          100: '#fdeee1',  // Warm glow
          200: '#f9dcc4',  // Sunset peach
          300: '#f4c5a0',  // Evening amber
          400: '#eba870',  // Golden hour
          500: '#d98b4f',  // Twilight orange
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f4f2',
          200: '#e9e7e3',
          300: '#d8d5d0',
          400: '#b3aea7',
          500: '#857f77',
          600: '#655f58',
          700: '#4d4842',
          800: '#363128',
          900: '#1f1c17',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], // Clean, modern body text
        display: ['var(--font-playfair)', 'Georgia', 'serif'], // Elegant headings
        mono: ['JetBrains Mono', 'monospace'], // Code/technical (minimal use)
      },
      fontSize: {
        // Refined scale for readability
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(45, 35, 24, 0.08)',
        'DEFAULT': '0 2px 8px 0 rgba(45, 35, 24, 0.12)',
        'md': '0 4px 16px -2px rgba(45, 35, 24, 0.15)',
        'lg': '0 8px 24px -4px rgba(45, 35, 24, 0.18)',
        'xl': '0 16px 40px -8px rgba(45, 35, 24, 0.22)',
        '2xl': '0 24px 56px -12px rgba(45, 35, 24, 0.28)',
        'inner-soft': 'inset 0 2px 8px 0 rgba(45, 35, 24, 0.06)',
        'glow': '0 0 24px rgba(232, 130, 58, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'coffee-texture': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a8906f\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      transitionDuration: {
        // Smooth transitions for animations
        'smooth': '150ms',
        'smooth-long': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
