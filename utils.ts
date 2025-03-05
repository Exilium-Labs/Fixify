import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

export function uniqueClass(...classes: string[]): string {
  return Array.from(new Set(classes.join(" ").split(" "))).join(" ");
}

export function joinClass(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function toggleClass(
  base: string,
  condition: boolean,
  toggledClass: string
): string {
  return condition ? `${base} ${toggledClass}` : base;
}

/**
 * Converts a class string into an array of unique class names.
 */
export function classListToArray(classString: string): string[] {
  return [...new Set(classString.split(/\s+/).filter(Boolean))];
}

/**
 * Removes a specific class from a class string.
 */
export function removeClass(classString: string, classToRemove: string): string {
  return classListToArray(classString).filter(cls => cls !== classToRemove).join(" ");
}

/**
 * Appends a new class to the end of a class string if not already present.
 */
export function appendClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.push(newClass);
  }
  return classList.join(" ");
}

/**
 * Prepends a new class to the beginning of a class string if not already present.
 */
export function prependClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.unshift(newClass);
  }
  return classList.join(" ");
}
