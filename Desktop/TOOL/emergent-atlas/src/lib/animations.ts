// ============================================================================
// FAST ROADMAP - FRAMER MOTION ANIMATION VARIANTS
// Centralized animation definitions for consistent motion design
// ============================================================================

import { Variants } from "framer-motion";
import { ANIMATION_TIMING } from "./constants";

/**
 * Portal Gate Explosion Animation
 * The entry screen scales up and fades out to reveal the dashboard
 */
export const portalExplosion: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: ANIMATION_TIMING.portalExplosion,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth explosion
    },
  },
};

/**
 * Dashboard Fade In
 * The main dashboard fades in after portal explosion
 */
export const dashboardFadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.fadeIn,
      ease: "easeOut",
      staggerChildren: ANIMATION_TIMING.stagger,
    },
  },
};

/**
 * Card Stagger Animation
 * Cards appear with a stagger effect in the grid
 */
export const cardStagger: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Card Hover Animation
 * Subtle lift and glow effect on hover
 */
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
  },
    hover: {
      y: -3,
      boxShadow: "0 0 12px rgba(255, 255, 255, 0.06)",
      transition: {
        duration: Math.max(ANIMATION_TIMING.cardHover, 0.12),
        ease: "easeOut",
      },
    },
};

/**
 * Drawer Slide Animation
 * Mobile drawer slides up from bottom
 */
export const drawerSlide: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_TIMING.drawerSlide,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: ANIMATION_TIMING.drawerSlide,
      ease: "easeIn",
    },
  },
};

/**
 * Accordion Expand Animation
 * Content expands/collapses in accordions
 */
export const accordionExpand: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/**
 * Pulsing Glow Animation
 * Used for the portal trigger button
 */
export const pulsingGlow: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
  },
    animate: {
      boxShadow: [
        "0 0 12px rgba(255, 255, 255, 0.06)",
        "0 0 24px rgba(255, 255, 255, 0.08)",
        "0 0 12px rgba(255, 255, 255, 0.06)",
      ],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
};

/**
 * Badge Pop Animation
 * Badges pop in with a slight scale effect
 */
export const badgePop: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  },
};

/**
 * List Item Slide Animation
 * Items slide in from the left with stagger
 */
export const listItemSlide: Variants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Fade Scale Animation
 * Generic fade with scale for modals/overlays
 */
export const fadeScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

/**
 * Roadmap Phase Animation
 * Timeline phases appear sequentially
 */
export const roadmapPhase: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

/**
 * Progress Bar Fill Animation
 * Animated fill for progress indicators
 */
export const progressFill: Variants = {
  initial: {
    width: "0%",
  },
  animate: (width: number) => ({
    width: `${width}%`,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
