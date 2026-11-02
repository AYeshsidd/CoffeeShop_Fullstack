import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';

import { getProducts, getCategories } from '@/lib/catalog';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const categoryId = category ? Number(category) : undefined;

  // dono requests ek saath, ek ke baad ek nahi
  const [products, categories] = await Promise.all([
    getProducts(categoryId),
    getCategories(),
  ]);
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Header section: waisa hi rahega jaisa hai */}

      {/* Featured */}
      <section className="py-14 bg-white border-b border-primary-200">
        <Container>
          {/* heading waisi hi */}
          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {featuredProducts.map((product) => (
                <ProductCard key={product.product_id} product={product} compact />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Category filter */}
      <section className="py-12 bg-primary-100">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl text-primary-900 mb-6 font-semibold text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className={`px-5 py-2 rounded-full font-bold ${
                !categoryId ? 'bg-primary-900 text-white' : 'bg-white text-primary-900'
              }`}
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.category_id}
                href={`/products?category=${c.category_id}`}
                className={`px-5 py-2 rounded-full font-bold ${
                  categoryId === c.category_id ? 'bg-primary-900 text-white' : 'bg-white text-primary-900'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* All products */}
      <section className="py-16 bg-primary-50">
        <Container>
          <p className="text-primary-800 font-bold text-lg text-center mb-8">
            {products.length} {products.length === 1 ? 'Product' : 'Products'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.product_name} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            /* empty state wala poora block waisa hi, sirf displayedProducts ki jagah products.length */
            <div />
          )}
        </Container>
      </section>

      {/* Back to Home: waisa hi */}
    </main>
  );
}