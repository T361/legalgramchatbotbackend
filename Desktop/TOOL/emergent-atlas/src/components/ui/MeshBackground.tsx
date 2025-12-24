"use client";

import { motion } from "framer-motion";

/**
 * MeshBackground - Wonder.site inspired animated gradient background
 * Uses CSS for performance, Framer Motion for initial fade-in
 */
export function MeshBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mesh-gradient-bg"
      aria-hidden="true"
    />
  );
}
