// ============================================================================
// FAST ROADMAP - FAILURE POINT ITEM COMPONENT (MOLECULE)
// Displays critical failure points with warning styling
// ============================================================================

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Skull, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { listItemSlide } from "@/lib/animations";

interface FailurePointItemProps {
  point: string;
  index?: number;
  severity?: "critical" | "high" | "moderate";
  className?: string;
}

const severityConfig = {
  critical: {
    icon: Skull,
    bgClass: "glass border-red-500/40 shadow-lg shadow-red-500/10",
    iconClass: "text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]",
    textClass: "text-red-300",
  },
  high: {
    icon: AlertTriangle,
    bgClass: "glass border-orange-500/30 shadow-lg shadow-orange-500/10",
    iconClass: "text-orange-400 drop-shadow-[0_0_6px_rgba(251,146,60,0.6)]",
    textClass: "text-orange-300",
  },
  moderate: {
    icon: AlertCircle,
    bgClass: "glass border-yellow-500/30 shadow-lg shadow-yellow-500/10",
    iconClass: "text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]",
    textClass: "text-yellow-300",
  },
};

export function FailurePointItem({
  point,
  index = 0,
  severity = "high",
  className,
}: FailurePointItemProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  // Parse the point to extract title and description
  const colonIndex = point.indexOf(":");
  const title = colonIndex > 0 ? point.substring(0, colonIndex) : null;
  const description = colonIndex > 0 ? point.substring(colonIndex + 1).trim() : point;

  return (
    <motion.div
      variants={listItemSlide}
      initial="initial"
      animate="animate"
      custom={index}
      className={cn(
        "flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02]",
        config.bgClass,
        className
      )}
    >
      <div className={cn("flex-shrink-0 mt-0.5", config.iconClass)}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <span className={cn("font-medium text-sm", config.textClass)}>
            {title}:
          </span>
        )}{" "}
        <span className="text-sm text-zinc-200">{description}</span>
      </div>
    </motion.div>
  );
}
