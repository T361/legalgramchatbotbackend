"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "heavy" | "dark";
  hover?: boolean;
  onClick?: () => void;
}

/**
 * GlassCard - Wonder.site inspired glassmorphism card
 * Mobile-optimized with touch feedback
 */
export function GlassCard({
  children,
  className,
  variant = "default",
  hover = true,
  onClick,
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    heavy: "glass-heavy",
    dark: "glass-dark",
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      className={cn(
        variantClasses[variant],
        "rounded-glass-xl p-6 transition-all duration-300",
        hover && "cursor-pointer hover:shadow-2xl",
        "touch-target",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
