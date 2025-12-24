"use client";

import { motion } from "framer-motion";
import { Home, Map, BookOpen, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const navItems: NavItem[] = [
  { icon: <Home size={24} />, label: "Home", active: true },
  { icon: <Map size={24} />, label: "Roadmaps" },
  { icon: <BookOpen size={24} />, label: "Resources" },
  { icon: <Menu size={24} />, label: "More" },
];

/**
 * BottomNavBar - Mobile-first glass navigation
 * Fixed bottom, thumb-zone optimized, safe-area aware
 */
export function BottomNavBar() {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "glass-heavy",
        "border-t border-white/10",
        "ios-safe-bottom"
      )}
    >
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "flex flex-col items-center gap-1 touch-target",
              "min-w-[64px] py-2",
              "transition-colors duration-200",
              item.active
                ? "text-white"
                : "text-white/60 hover:text-white/80"
            )}
            onClick={item.onClick}
          >
            <motion.div
              animate={item.active ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
            <span className="text-xs font-medium tracking-tight">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
