// ============================================================================
// FAST ROADMAP - UTILITY FUNCTIONS
// Core utilities for class merging and common operations
// ============================================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Delay utility for animations and transitions
 *
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format rigor level to display text with emoji indicator
 *
 * @param rigor - Rigor level string
 * @returns Formatted display string
 */
export function formatRigor(rigor: string): { text: string; emoji: string } {
  const rigorMap: Record<string, { text: string; emoji: string }> = {
    Critical: { text: "Critical", emoji: "🔴" },
    Extreme: { text: "Extreme", emoji: "🔥" },
    "Very High": { text: "Very High", emoji: "⚠️" },
    High: { text: "High", emoji: "🟠" },
    Moderate: { text: "Moderate", emoji: "🟡" },
    Low: { text: "Low", emoji: "🟢" },
  };

  return rigorMap[rigor] || { text: rigor, emoji: "⚪" };
}

/**
 * Get CSS class for rigor badge based on level
 *
 * @param rigor - Rigor level string
 * @returns Tailwind CSS classes for the badge
 */
export function getRigorBadgeClasses(rigor: string): string {
  const classMap: Record<string, string> = {
    Critical: "bg-red-500/20 text-red-400 border-red-500/30",
    Extreme: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Very High": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    High: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Moderate: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Low: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return classMap[rigor] || "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
}

/**
 * Get category color classes
 *
 * @param category - Course category
 * @returns Tailwind CSS classes for category indicator
 */
export function getCategoryClasses(category: string): string {
  const classMap: Record<string, string> = {
    Programming: "bg-blue-500/20 text-blue-400",
    Mathematics: "bg-purple-500/20 text-purple-400",
    Hardware: "bg-teal-500/20 text-teal-400",
    Theory: "bg-indigo-500/20 text-indigo-400",
    Engineering: "bg-cyan-500/20 text-cyan-400",
  };

  return classMap[category] || "bg-zinc-500/20 text-zinc-400";
}

/**
 * Truncate text with ellipsis
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
