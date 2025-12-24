"use client";

import { motion } from "framer-motion";
import { Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MobileHeader - Glass header with safe area support
 * iOS notch/Dynamic Island aware
 */
export function MobileHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-zinc-950 border-b border-zinc-800",
        "ios-safe-top"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
          <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white tracking-tight"
        >
          <span className="text-white">FAST</span> Roadmap
        </motion.h1>

        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="touch-target p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <Search size={20} className="text-white/80" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="touch-target p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <Bell size={20} className="text-white/80" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
