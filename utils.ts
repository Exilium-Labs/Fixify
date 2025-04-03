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

/**
 * Replaces one class with another in a class string.
 */
export function replaceClass(
  classString: string,
  fromClass: string,
  toClass: string
): string {
  return classListToArray(classString)
    .map(cls => (cls === fromClass ? toClass : cls))
    .join(" ");
}

/**
 * Strips a prefix from all class names.
 */
export function stripClassPrefix(classString: string, prefix: string): string {
  return classListToArray(classString)
    .map(cls => (cls.startsWith(prefix) ? cls.slice(prefix.length) : cls))
    .join(" ");
}

/**
 * Normalizes whitespace and sorts class names alphabetically.
 */
export function normalizeClassString(classString: string): string {
  return classListToArray(classString).sort().join(" ");
}

/**
 * Cleans up a class string by removing any empty or unnecessary classes.
 */
export function cleanClass(classString: string): string {
  return classListToArray(classString).filter(cls => cls.trim() !== "").join(" ");
}

/**
 * Adds a prefix to each class name in a string.
 */
export function prefixClass(classString: string, prefix: string): string {
  return classListToArray(classString)
    .map(cls => `${prefix}${cls}`)
    .join(" ");
}
