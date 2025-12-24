// ============================================================================
// FAST ROADMAP - COURSE CARD COMPONENT
// Cyberpunk futuristic card with glassmorphism and glow effects
// ============================================================================

"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, AlertTriangle, ChevronRight, Zap } from "lucide-react";
import { Subject } from "@/types";
import { Badge } from "@/components/atoms";
import { cn, getRigorBadgeClasses, getCategoryClasses } from "@/lib/utils";

interface CourseCardProps {
  subject: Subject;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

export function CourseCard({
  subject,
  onClick,
  isSelected = false,
  className,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={cn(
        "relative group cursor-pointer cyber-card p-6",
        isSelected && "ring-2 ring-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.3)]",
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Header Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono font-bold gradient-text tracking-tight">
            {subject.code}
          </span>
          <Badge
            variant="rigor"
            className={cn(
              getRigorBadgeClasses(subject.rigor),
              subject.rigor === "Critical" && "bg-red-500/20 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]",
              subject.rigor === "Extreme" && "bg-orange-500/20 text-orange-400 border-orange-500/30",
              subject.rigor === "High" && "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            )}
          >
            {subject.rigor}
          </Badge>
        </div>
        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
      </div>

      {/* Subject Name */}
      <h3 className="text-lg font-semibold text-white mb-4 leading-snug group-hover:text-cyan-50 transition-colors">
        {subject.name}
      </h3>

      {/* Metadata Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge 
          variant="category" 
          className={cn(
            getCategoryClasses(subject.category),
            "glass border-white/10"
          )}
        >
          {subject.category}
        </Badge>
        <span className="flex items-center gap-1.5 text-xs text-zinc-400 glass px-2 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          {subject.creditHours} CH
        </span>
        <span className="flex items-center gap-1.5 text-xs text-zinc-400 glass px-2 py-1 rounded-full">
          <BookOpen className="w-3.5 h-3.5 text-violet-400" />
          Sem {subject.semester}
        </span>
      </div>

      {/* Stack Badge */}
      {subject.stack && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs font-mono text-cyan-400 border border-cyan-500/20">
            <Zap className="w-3 h-3" />
            {subject.stack}
          </span>
        </div>
      )}

      {/* Danger Alert - Red glowing warning */}
      {subject.failurePoints.length > 0 && (
        <div className="danger-alert rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-red-500/20">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-red-400 mb-1">⚠ FAILURE POINT</p>
              <p className="text-xs text-red-300/80 leading-relaxed line-clamp-2">
                {subject.failurePoints[0]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rigor Quote */}
      <div className="border-l-2 border-violet-500/50 pl-4">
        <p className="text-xs text-zinc-500 italic">
          &quot;{subject.rigorDescription}&quot;
        </p>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
