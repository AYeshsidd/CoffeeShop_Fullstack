// lib/catalog.ts
import apiFetch from "./api-client"; 
import type { Product, Category } from "./types/product"; 

export const getProducts = (categoryId?: number) =>
  apiFetch<Product[]>(
    categoryId ? `/products/?category_id=${categoryId}` : "/products/",
    { cache: "no-store" }
  );

export const getCategories = () =>
  apiFetch<Category[]>("/categories/", { cache: "no-store" });