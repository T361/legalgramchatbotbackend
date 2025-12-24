// ============================================================================
// FAST ROADMAP - BADGE COMPONENT (ATOM)
// Displays labels, tags, and status indicators
// ============================================================================

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { badgePop } from "@/lib/animations";

type BadgeVariant = "default" | "rigor" | "category" | "semester";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  animate?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "glass text-zinc-300 border-purple-500/30",
  rigor: "border", // Color set dynamically based on rigor level
  category: "glass text-cyan-400 border-cyan-500/30",
  semester: "glass text-purple-400 border-purple-500/30",
};

export function Badge({
  children,
  variant = "default",
  className,
  animate = false,
}: BadgeProps) {
  const Component = animate ? motion.span : "span";
  const animationProps = animate
    ? {
        variants: badgePop,
        initial: "initial",
        animate: "animate",
      }
    : {};

  return (
    <Component
      {...animationProps}
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
