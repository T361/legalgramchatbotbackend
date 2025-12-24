// ============================================================================
// FAST ROADMAP - PORTAL GATE COMPONENT
// Wonder.site inspired dramatic hero with Neo-Cyberpunk aesthetics
// ============================================================================

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { portalExplosion } from "@/lib/animations";
import { APP_CONFIG } from "@/lib/constants";

interface PortalGateProps {
  onEnter: () => void;
  isExiting?: boolean;
}

export function PortalGate({ onEnter, isExiting = false }: PortalGateProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle Enter key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  return (
    <motion.div
      variants={portalExplosion}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 z-50 overflow-hidden bg-black"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: `
              radial-gradient(ellipse at ${50 + mousePos.x * 0.5}% ${50 + mousePos.y * 0.5}%, rgba(112, 0, 255, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at ${30 - mousePos.x * 0.3}% ${70 - mousePos.y * 0.3}%, rgba(0, 240, 255, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at ${70 + mousePos.x * 0.4}% ${30 + mousePos.y * 0.4}%, rgba(112, 0, 255, 0.15) 0%, transparent 50%)
            `,
          }}
        />
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Giant background text - Wonder.site style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
          }}
          className="text-[25vw] font-black text-white whitespace-nowrap select-none tracking-[-0.05em]"
        >
          FAST
        </motion.h1>
      </div>

      {/* Centered content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          {/* Small label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block text-sm font-mono text-[#00f0ff] tracking-[0.3em] uppercase mb-6 cyan-glow"
          >
            [ NAVIGATION SYSTEM ]
          </motion.span>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-[-0.03em]">
            <span className="gradient-text-animated">FAST</span>
            <span className="text-white"> ROADMAP</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-zinc-500 max-w-md mx-auto"
          >
            {APP_CONFIG.tagline}
          </motion.p>
        </motion.div>

        {/* ENTER SYSTEM Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={onEnter}
          className={cn(
            "group relative cyber-button text-white text-lg md:text-xl",
            "px-12 py-5 md:px-16 md:py-6"
          )}
        >
          <span className="relative z-10 font-bold tracking-[0.2em]">
            ENTER SYSTEM
          </span>
          
          {/* Animated glow rings */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 240, 255, 0.3)",
                "0 0 60px rgba(0, 240, 255, 0.5)",
                "0 0 20px rgba(0, 240, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Keyboard hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 text-sm text-zinc-600 font-mono"
        >
          Press{" "}
          <kbd className="px-3 py-1.5 glass rounded-lg text-[#00f0ff] font-mono text-sm border border-[#00f0ff]/30">
            ENTER
          </kbd>{" "}
          to continue
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-8 mt-16 text-sm"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00f0ff] cyan-glow">50+</div>
            <div className="text-zinc-600 uppercase tracking-wider text-xs">Courses</div>
          </div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-[#7000ff] purple-glow">8</div>
            <div className="text-zinc-600 uppercase tracking-wider text-xs">Semesters</div>
          </div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">FAST-NU</div>
            <div className="text-zinc-600 uppercase tracking-wider text-xs">Curated</div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-6 left-0 right-0 text-center"
      >
        <p className="text-xs text-zinc-700 font-mono">
          v{APP_CONFIG.version} • {APP_CONFIG.author}
        </p>
      </motion.footer>
    </motion.div>
  );
}
