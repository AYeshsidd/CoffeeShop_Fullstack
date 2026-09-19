/**
 * Mock Product Data
 * Frontend-only product data for development
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: '1', name: 'All Products', slug: 'all' },
  { id: '2', name: 'Coffee Beans', slug: 'coffee-beans' },
  { id: '3', name: 'Pastries', slug: 'pastries' },
  { id: '4', name: 'Cakes', slug: 'cakes' },
  { id: '5', name: 'Tea', slug: 'tea' },
  { id: '6', name: 'Brunch', slug: 'brunch' },
];

export const products: Product[] = [
  // Featured Products
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright, floral notes with citrus undertones',
    price: 18.50,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: '2',
    name: 'Almond Croissant',
    description: 'Buttery layers filled with almond cream',
    price: 4.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'Evening Brunch Box',
    description: 'Curated selection of our finest offerings',
    price: 28.00,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: '4',
    name: 'Colombian Supremo',
    description: 'Rich, full-bodied with chocolate notes',
    price: 16.50,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    featured: true,
  },

  // Coffee Beans
  {
    id: '5',
    name: 'Brazilian Santos',
    description: 'Smooth and nutty with low acidity',
    price: 15.00,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Guatemalan Antigua',
    description: 'Complex flavor with spicy notes',
    price: 17.50,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Costa Rican Tarrazu',
    description: 'Bright acidity with honey sweetness',
    price: 19.00,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
  },
  {
    id: '8',
    name: 'Kenyan AA',
    description: 'Bold, wine-like with berry notes',
    price: 20.50,
    category: 'coffee-beans',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
  },

  // Pastries
  {
    id: '9',
    name: 'Butter Croissant',
    description: 'Classic French pastry, flaky and golden',
    price: 3.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  },
  {
    id: '10',
    name: 'Pain au Chocolat',
    description: 'Croissant dough with dark chocolate',
    price: 4.00,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop',
  },
  {
    id: '11',
    name: 'Cinnamon Bun',
    description: 'Soft spiral with cinnamon and icing',
    price: 4.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop',
  },
  {
    id: '12',
    name: 'Danish Pastry',
    description: 'Fruit-filled with sweet glaze',
    price: 4.25,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  },

  // Cakes
  {
    id: '13',
    name: 'Chocolate Torte',
    description: 'Rich dark chocolate layered cake',
    price: 6.50,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  },
  {
    id: '14',
    name: 'Lemon Drizzle Cake',
    description: 'Moist sponge with zesty lemon glaze',
    price: 5.50,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=400&fit=crop',
  },
  {
    id: '15',
    name: 'Carrot Cake',
    description: 'Spiced cake with cream cheese frosting',
    price: 6.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  },
  {
    id: '16',
    name: 'Victoria Sponge',
    description: 'Classic British cake with jam and cream',
    price: 5.75,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=400&fit=crop',
  },

  // Tea
  {
    id: '17',
    name: 'Earl Grey Premium',
    description: 'Bergamot-infused black tea',
    price: 8.50,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597318130508-44e0d1b6dae5?w=400&h=400&fit=crop',
  },
  {
    id: '18',
    name: 'English Breakfast',
    description: 'Bold, malty black tea blend',
    price: 7.50,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597318130508-44e0d1b6dae5?w=400&h=400&fit=crop',
  },
  {
    id: '19',
    name: 'Chamomile Dreams',
    description: 'Calming herbal infusion',
    price: 7.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597318130508-44e0d1b6dae5?w=400&h=400&fit=crop',
  },
  {
    id: '20',
    name: 'Green Jasmine',
    description: 'Delicate green tea with jasmine flowers',
    price: 9.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597318130508-44e0d1b6dae5?w=400&h=400&fit=crop',
  },

  // Brunch
  {
    id: '21',
    name: 'Artisan Sandwich',
    description: 'Fresh ingredients on sourdough',
    price: 12.50,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop',
  },
  {
    id: '22',
    name: 'Avocado Toast',
    description: 'Smashed avocado on multigrain toast',
    price: 11.00,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=400&fit=crop',
  },
  {
    id: '23',
    name: 'Breakfast Platter',
    description: 'Full English breakfast selection',
    price: 15.50,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=400&fit=crop',
  },
  {
    id: '24',
    name: 'Eggs Benedict',
    description: 'Poached eggs with hollandaise sauce',
    price: 13.50,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop',
  },
];

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'all') {
    return products;
  }
  return products.filter(p => p.category === categorySlug);
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}
