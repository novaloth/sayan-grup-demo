import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Koşullu className birleştirme; çakışan Tailwind sınıflarında sonradan gelen kazanır. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
