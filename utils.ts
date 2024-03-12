import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names efficiently, ensuring Tailwind utility classes are properly handled.
 *
 * @param inputs - A list of class values (strings, arrays, objects, or conditionals)
 * @returns A merged and optimized class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally applies class names based on a boolean value.
 *
 * @param condition - A boolean determining which class to apply
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false (optional)
 * @returns The selected class string
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Combines multiple class strings into a unique set to prevent duplicates.
 *
 * @param classes - An array of class strings
 * @returns A unique and optimized class string
 */
export function uniqueClass(...classes: string[]): string {
  return Array.from(new Set(classes.join(" ").split(" "))).join(" ");
}
