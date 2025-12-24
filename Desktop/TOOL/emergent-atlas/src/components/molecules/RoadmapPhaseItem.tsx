// ============================================================================
// FAST ROADMAP - ROADMAP PHASE COMPONENT (MOLECULE)
// Displays a single phase in the learning roadmap timeline
// ============================================================================

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertTriangle, Flag } from "lucide-react";
import { RoadmapPhase } from "@/types";
import { cn } from "@/lib/utils";
import { roadmapPhase } from "@/lib/animations";

interface RoadmapPhaseItemProps {
  phase: RoadmapPhase;
  index: number;
  isLast?: boolean;
  className?: string;
}

export function RoadmapPhaseItem({
  phase,
  index,
  isLast = false,
  className,
}: RoadmapPhaseItemProps) {
  const hasCriticalState = !!phase.criticalState;
  const hasCheckpoint = !!phase.checkpoint;

  return (
    <motion.div
      variants={roadmapPhase}
      initial="initial"
      animate="animate"
      custom={index}
      className={cn("relative flex gap-4", className)}
    >
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300",
            hasCriticalState
              ? "border-red-500 bg-red-500/20 shadow-lg shadow-red-500/30"
              : "border-purple-500/50 bg-purple-500/10 glass"
          )}
        >
          {hasCriticalState ? (
            <AlertTriangle className="w-4 h-4 text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
          ) : (
            <span className="text-xs font-bold text-cyan-400">
              {phase.phase}
            </span>
          )}
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-8 bg-gradient-to-b from-purple-500/50 to-pink-500/30" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        {/* Phase Header */}
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-semibold text-zinc-100">{phase.title}</h4>
          <span className="text-xs text-purple-400/70 bg-purple-500/10 px-2 py-0.5 rounded-full">Phase {phase.phase}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 mb-2">{phase.description}</p>

        {/* Checkpoint */}
        {hasCheckpoint && (
          <div className="flex items-start gap-2 p-3 rounded-xl glass border border-green-500/30 mb-2 shadow-lg shadow-green-500/5">
            <Flag className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
            <div>
              <span className="text-xs font-medium text-green-400">
                Checkpoint:
              </span>
              <p className="text-xs text-green-300/90">{phase.checkpoint}</p>
            </div>
          </div>
        )}

        {/* Critical State Warning */}
        {hasCriticalState && (
          <div className="flex items-start gap-2 p-3 rounded-xl glass border border-red-500/40 shadow-lg shadow-red-500/10">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            <div>
              <span className="text-xs font-medium text-red-400">
                Critical Fail State:
              </span>
              <p className="text-xs text-red-300/90">{phase.criticalState}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
