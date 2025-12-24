// ============================================================================
// FAST ROADMAP - HEADER COMPONENT
// Cyberpunk futuristic header with glassmorphism
// ============================================================================

"use client";

import { Menu, X, Github, ExternalLink, Zap } from "lucide-react";
import { APP_CONFIG, EXTERNAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ isSidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="h-16 border-b border-white/5 glass sticky top-0 z-30">
      <div className="h-full max-w-screen-2xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left: Menu Toggle & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2.5 -ml-2 rounded-xl glass hover:bg-white/5 transition-colors"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5 text-zinc-400" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-400" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold gradient-text leading-tight">
                {APP_CONFIG.name}
              </h1>
              <p className="text-xs text-zinc-500 leading-tight font-mono">
                {APP_CONFIG.institution}
              </p>
            </div>
          </div>
        </div>

        {/* Right: External Links */}
        <div className="flex items-center gap-2">
          <a
            href={EXTERNAL_LINKS.fastNuIsb}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden md:flex items-center gap-2 px-4 py-2 rounded-xl",
              "glass text-sm text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30",
              "transition-all duration-300"
            )}
          >
            <span className="font-mono text-xs">FAST_PORTAL</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2.5 rounded-xl glass",
              "text-zinc-400 hover:text-violet-400",
              "transition-all duration-300"
            )}
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
