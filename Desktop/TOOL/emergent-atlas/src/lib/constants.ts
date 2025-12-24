// ============================================================================
// FAST ROADMAP - APPLICATION CONSTANTS
// Centralized configuration and constant values
// ============================================================================

/**
 * Application metadata
 */
export const APP_CONFIG = {
  name: "FAST Roadmap",
  tagline: "Rigorous Learning Pathways for FAST-NU Students",
  description: "Academic navigation system for BS Software Engineering at FAST-NU Islamabad",
  version: "1.0.0",
  author: "Taimoor Shaukat",
  institution: "FAST-NU Islamabad",
} as const;

/**
 * Animation timing constants (in seconds)
 * Adheres to the "sub-300ms for no-fluff" ethos
 */
export const ANIMATION_TIMING = {
  portalExplosion: 0.28,
  cardHover: 0.15,
  drawerSlide: 0.2,
  fadeIn: 0.3,
  stagger: 0.05,
} as const;

/**
 * Atlassian Design System inspired spacing tokens
 * Built on 8px base unit
 */
export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
} as const;

/**
 * Color palette - Monochromatic with strategic accents
 * Inspired by Atlassian dark theme tokens
 */
export const COLORS = {
  // Base surfaces
  void: "#09090b", // Entry screen background
  surface: {
    base: "#0a0a0b",
    raised: "#18181b",
    overlay: "#27272a",
  },
  // Text hierarchy
  text: {
    primary: "#fafafa",
    secondary: "#a1a1aa",
    muted: "#71717a",
  },
  // Accent colors
  accent: {
    primary: "#0052CC", // Atlassian Blue
    glow: "rgba(255, 255, 255, 0.1)",
  },
  // Semantic colors
  semantic: {
    danger: "#ef4444",
    warning: "#f59e0b",
    success: "#22c55e",
    info: "#3b82f6",
  },
} as const;

/**
 * Breakpoints for responsive design
 * Mobile-first approach
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Semester labels for filtering
 */
export const SEMESTERS = [
  { value: 1, label: "Semester 1" },
  { value: 2, label: "Semester 2" },
  { value: 3, label: "Semester 3" },
  { value: 4, label: "Semester 4" },
  { value: 5, label: "Semester 5" },
  { value: 6, label: "Semester 6" },
  { value: 7, label: "Semester 7" },
  { value: 8, label: "Semester 8" },
] as const;

/**
 * Category options for filtering
 */
export const CATEGORIES = [
  { value: "Programming", label: "Programming" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Hardware", label: "Hardware" },
  { value: "Theory", label: "Theory" },
  { value: "Engineering", label: "Engineering" },
] as const;

/**
 * Rigor levels for filtering
 */
export const RIGOR_LEVELS = [
  { value: "Critical", label: "Critical" },
  { value: "Extreme", label: "Extreme" },
  { value: "Very High", label: "Very High" },
  { value: "High", label: "High" },
  { value: "Moderate", label: "Moderate" },
] as const;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
  fastNu: "https://www.nu.edu.pk",
  fastNuIsb: "https://isb.nu.edu.pk",
  github: "https://github.com",
} as const;
