import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Uses clsx for conditional class names and tailwind-merge for handling Tailwind conflicts
 *
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns Merged class name string
 *
 * @example
 * cn("px-4 py-2", "bg-primary-500") // "px-4 py-2 bg-primary-500"
 * cn("px-4", "px-6") // "px-6" (later class wins)
 * cn("px-4", condition && "py-2") // "px-4 py-2" or "px-4" based on condition
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
