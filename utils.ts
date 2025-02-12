import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names efficiently, ensuring Tailwind utility classes are properly handled.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally applies class names based on a boolean value.
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
 */
export function uniqueClass(...classes: string[]): string {
  return Array.from(new Set(classes.join(" ").split(" "))).join(" ");
}

/**
 * Joins multiple class strings safely, filtering out empty values.
 *
 * @param classes - An array of class strings
 * @returns A single concatenated class string
 */
export function joinClass(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
