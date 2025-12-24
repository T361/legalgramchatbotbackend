"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { GLOBAL_CRITICAL_ADVICE, PAST_PAPERS_SOURCE } from "@/lib/data/globalAdvice";

/**
 * GlobalAdviceCard - Critical advice displayed in every subject roadmap
 * Wonder.site aesthetic with glassmorphism
 * Mobile-optimized with touch targets
 */
export function GlobalAdviceCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    className="rounded-3xl p-6 border border-zinc-800 bg-zinc-900"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl glass bg-red-500/10">
          <AlertTriangle className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Critical Success Principles</h3>
          <p className="text-sm text-white/60">Non-negotiable for FAST-NU success</p>
        </div>
      </div>

      {/* Advice Grid */}
      <div className="space-y-4">
        {GLOBAL_CRITICAL_ADVICE.map((advice, index) => (
          <motion.div
            key={advice.principle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="rounded-2xl p-4 bg-zinc-900 border border-zinc-800 transition-all duration-150"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl">
                {advice.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white text-base">
                    {advice.principle}
                  </h4>
                  {advice.priority === "CRITICAL" && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                      CRITICAL
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {advice.description}
                </p>
              </div>

              {/* Check icon */}
              <CheckCircle2 className="w-5 h-5 text-green-400/50 flex-shrink-0 mt-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Past Papers Source Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">📄</span>
          <h4 className="font-bold text-white">Past Papers Source</h4>
        </div>
        <p className="text-sm text-white/80 mb-2">
          <strong className="text-purple-400">{PAST_PAPERS_SOURCE.name}</strong> -{" "}
          {PAST_PAPERS_SOURCE.description}
        </p>
        <a
          href={PAST_PAPERS_SOURCE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors touch-target"
        >
          <span>Access Past Papers →</span>
        </a>
      </motion.div>

      {/* Bottom emphasis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 pt-6 border-t border-white/10"
      >
        <p className="text-center text-sm font-medium text-white/60">
          <span className="text-white font-bold">Remember:</span> Consistency beats intensity.
          Show up every day.
        </p>
      </motion.div>
    </motion.section>
  );
}
