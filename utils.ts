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

// Entire code from previous commit...

/**
 * Checks if a class string contains a specific class.
 */
export function hasClass(classString: string, className: string): boolean {
  return classListToArray(classString).includes(className);
}

/**
 * Toggles a class name inside a class string.
 */
export function toggleClassValue(classString: string, className: string): string {
  const classList = classListToArray(classString);
  if (classList.includes(className)) {
    return classList.filter(cls => cls !== className).join(" ");
  }
  return [...classList, className].join(" ");
}

// Everything above remains...

/**
 * Merges two class strings and removes duplicates.
 */
export function mergeClassSet(...classStrings: string[]): string {
  return [...new Set(classStrings.flatMap(cls => cls.split(/\s+/)).filter(Boolean))].join(" ");
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind classes with conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally returns a class string.
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Deduplicates class strings.
 */
export function uniqueClass(...classes: string[]): string {
  return Array.from(new Set(classes.join(" ").split(" "))).join(" ");
}

/**
 * Joins non-empty class values into a single string.
 */
export function joinClass(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Conditionally appends a class.
 */
export function toggleClass(
  base: string,
  condition: boolean,
  toggledClass: string
): string {
  return condition ? `${base} ${toggledClass}` : base;
}

/**
 * Splits class string into an array of unique values.
 */
export function classListToArray(classString: string): string[] {
  return [...new Set(classString.split(/\s+/).filter(Boolean))];
}

/**
 * Removes a single class from a string.
 */
export function removeClass(classString: string, classToRemove: string): string {
  return classListToArray(classString).filter(cls => cls !== classToRemove).join(" ");
}

/**
 * Appends class if not already present.
 */
export function appendClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) classList.push(newClass);
  return classList.join(" ");
}

/**
 * Prepends class if not already present.
 */
export function prependClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) classList.unshift(newClass);
  return classList.join(" ");
}

/**
 * Checks if a class exists.
 */
export function hasClass(classString: string, className: string): boolean {
  return classListToArray(classString).includes(className);
}

/**
 * Toggles class on/off.
 */
export function toggleClassValue(classString: string, className: string): string {
  const classList = classListToArray(classString);
  return classList.includes(className)
    ? classList.filter(cls => cls !== className).join(" ")
    : [...classList, className].join(" ");
}

/**
 * Merges multiple class strings.
 */
export function mergeClassSet(...classStrings: string[]): string {
  return [...new Set(classStrings.flatMap(cls => cls.split(/\s+/)).filter(Boolean))].join(" ");
}

/**
 * Checks if class string is empty.
 */
export function isEmptyClass(classString: string): boolean {
  return classListToArray(classString).length === 0;
}
