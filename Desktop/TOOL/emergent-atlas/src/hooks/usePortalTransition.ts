// ============================================================================
// FAST ROADMAP - PORTAL TRANSITION HOOK
// Manages the entry portal state and keyboard interactions
// ============================================================================

"use client";

import { useState, useEffect, useCallback } from "react";
import { delay } from "@/lib/utils";
import { ANIMATION_TIMING } from "@/lib/constants";

interface UsePortalTransitionOptions {
  onComplete?: () => void;
  storageKey?: string;
}

interface UsePortalTransitionReturn {
  isPortalOpen: boolean;
  isTransitioning: boolean;
  triggerTransition: () => void;
  skipPortal: () => void;
}

/**
 * Hook to manage the portal gate transition state
 * Handles the explosion animation and keyboard shortcuts
 */
export function usePortalTransition(
  options: UsePortalTransitionOptions = {}
): UsePortalTransitionReturn {
  const { onComplete, storageKey = "fast-roadmap-portal-seen" } = options;

  // Check if user has seen the portal before (session-based)
  const [isPortalOpen, setIsPortalOpen] = useState(() => {
    // Initialize from session storage if available
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem(storageKey);
      return seen !== "true";
    }
    return true;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger the explosion transition
  const triggerTransition = useCallback(async () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Wait for explosion animation
    await delay(ANIMATION_TIMING.portalExplosion * 1000);

    // Mark as seen
    if (typeof window !== "undefined") {
      sessionStorage.setItem(storageKey, "true");
    }

    setIsPortalOpen(false);
    setIsTransitioning(false);

    onComplete?.();
  }, [isTransitioning, storageKey, onComplete]);

  // Skip portal immediately (for development or returning users)
  const skipPortal = useCallback(() => {
    setIsPortalOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(storageKey, "true");
    }
  }, [storageKey]);

  // Keyboard listener for Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPortalOpen && !isTransitioning && e.key === "Enter") {
        e.preventDefault();
        triggerTransition();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPortalOpen, isTransitioning, triggerTransition]);

  return {
    isPortalOpen,
    isTransitioning,
    triggerTransition,
    skipPortal,
  };
}
