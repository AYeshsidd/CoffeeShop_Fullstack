// types/product.ts
export interface Product {
  category_id: number;
  product_id: number;
  product_name: string;
  product_description: string | null;
  price: number;
  quantity: number;
  image_url: string | null;
}

export interface Category {
  category_id: number;
  name: string;
}