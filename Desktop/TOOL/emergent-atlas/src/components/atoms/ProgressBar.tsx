// ============================================================================
// FAST ROADMAP - PROGRESS BAR COMPONENT (ATOM)
// Animated progress indicator
// ============================================================================

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { progressFill } from "@/lib/animations";

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  barClassName?: string;
}

const sizeStyles = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = "md",
  className,
  barClassName,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-xs text-zinc-400 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className={cn(
          "w-full bg-zinc-800 rounded-full overflow-hidden",
          sizeStyles[size]
        )}
      >
        <motion.div
          className={cn(
            "h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full",
            barClassName
          )}
          variants={progressFill}
          initial="initial"
          animate="animate"
          custom={percentage}
        />
      </div>
    </div>
  );
}
