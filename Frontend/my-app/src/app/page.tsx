import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';


/**
 * Home Page - The Coffee House
 * Premium coffee shop design with varied section backgrounds
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Warm Cream Background */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-primary-100">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl opacity-60" />

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary-300 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-primary-800 tracking-wide">Est. 2024 • Artisan Coffee Culture</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-900 mb-6 leading-[1.05] tracking-tight">
              The Coffee House
            </h1>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-accent-600 mb-8 italic font-medium">
              From Morning Espresso to Evening Brunch
            </p>

            <p className="font-sans text-lg sm:text-xl md:text-2xl text-primary-800 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience the finest European café tradition. Handcrafted espresso, freshly baked pastries,
              and an evening atmosphere that transforms coffee into culture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Browse Products
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Coffee Culture Section - White Background */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-4">
              The Art of Coffee
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto font-medium">
              Every cup tells a story. Every moment deserves perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Morning Ritual */}
            <div className="group text-center p-8 bg-primary-50 rounded-2xl border border-primary-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300">
              <div className="w-20 h-20 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 group-hover:bg-accent-600 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-primary-900 mb-3 font-semibold">Morning Ritual</h3>
              <p className="text-primary-700 leading-relaxed">
                Start your day with our expertly crafted espresso, made from single-origin beans roasted in small batches for unmatched freshness.
              </p>
            </div>

            {/* Afternoon Indulgence */}
            <div className="group text-center p-8 bg-primary-50 rounded-2xl border border-primary-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 group-hover:bg-primary-800 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-primary-900 mb-3 font-semibold">Afternoon Indulgence</h3>
              <p className="text-primary-700 leading-relaxed">
                Pair your latte with our fresh-baked pastries, from buttery croissants to decadent cakes, all made daily by our patisserie.
              </p>
            </div>

            {/* Evening Brunch */}
            <div className="group text-center p-8 bg-primary-50 rounded-2xl border border-primary-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-105 group-hover:bg-primary-700 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-primary-900 mb-3 font-semibold">Evening Brunch</h3>
              <p className="text-primary-700 leading-relaxed">
                As twilight settles, join us for our signature evening brunch—where coffee culture meets culinary artistry in a warm, inviting atmosphere.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* European Tradition Section - Warm Beige Background */}
      <section className="py-20 md:py-28 bg-primary-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white border border-primary-400 rounded-full shadow-sm">
                <span className="text-sm font-bold text-accent-600 uppercase tracking-wide">European Heritage</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-900 leading-tight font-semibold">
                Crafted in the Tradition of UK & Germany Cafés
              </h2>
              <p className="text-lg md:text-xl text-primary-800 leading-relaxed">
                Our coffee house brings together the refined elegance of British tea rooms and the
                gemütlich warmth of German Kaffeehäuser. Every detail, from our hand-selected beans
                to our evening brunch menu, reflects centuries of European coffee culture.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-primary-900">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Single-Origin Beans</span>
                </div>
                <div className="flex items-center gap-2 text-primary-900">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Artisan Patisserie</span>
                </div>
                <div className="flex items-center gap-2 text-primary-900">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Evening Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-primary-300 rounded-3xl shadow-xl overflow-hidden border border-primary-400">
              <Image alt='coffee' src="/image.webp" width={580} height={50}/>
                <div className="absolute inset-0 flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action - Dark Espresso Background */}
      <section className="py-20 md:py-28 bg-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-semibold">
              Join Our Coffee Community
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 leading-relaxed">
              Become a member and discover exclusive access to rare beans, evening events, and the warmth of our café family.
            </p>
            <Link href="/register">
              <Button
                variant="primary"
                size="lg"
                className="min-w-[240px] shadow-xl"
              >
                Start Your Membership
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
