// ============================================================================
// FAST ROADMAP - SIDEBAR COMPONENT (ORGANISM)
// Navigation sidebar with semester quick links
// ============================================================================

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Layers, GraduationCap, AlertTriangle, Info } from "lucide-react";
import { Subject } from "@/types";
import { cn } from "@/lib/utils";
import { drawerSlide } from "@/lib/animations";
import { SEMESTERS } from "@/lib/constants";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onFilterBySemester: (semester: number | null) => void;
  activeSemester: number | null;
}

export function Sidebar({
  isOpen,
  onClose,
  subjects,
  onFilterBySemester,
  activeSemester,
}: SidebarProps) {
  // Count subjects per semester
  const semesterCounts = SEMESTERS.map((sem) => ({
    ...sem,
    count: subjects.filter((s) => s.semester === sem.value).length,
  }));

  // Statistics
  const stats = {
    total: subjects.length,
    critical: subjects.filter((s) => s.rigor === "Critical" || s.rigor === "Extreme").length,
    programming: subjects.filter((s) => s.category === "Programming").length,
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h2 className="text-sm font-semibold text-zinc-200">Navigation</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4 text-zinc-400" />
        </button>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-b border-zinc-800">
        <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
          Overview
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-zinc-800/50 text-center">
            <p className="text-lg font-bold text-white">{stats.total}</p>
            <p className="text-xs text-zinc-500">Courses</p>
          </div>
          <div className="p-2 rounded-lg bg-red-500/10 text-center">
            <p className="text-lg font-bold text-red-400">{stats.critical}</p>
            <p className="text-xs text-zinc-500">Critical</p>
          </div>
          <div className="p-2 rounded-lg bg-blue-500/10 text-center">
            <p className="text-lg font-bold text-blue-400">{stats.programming}</p>
            <p className="text-xs text-zinc-500">Coding</p>
          </div>
        </div>
      </div>

      {/* Semester Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
          By Semester
        </h3>
        <nav className="space-y-1">
          {/* All Courses */}
          <button
            onClick={() => onFilterBySemester(null)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 rounded-lg",
              "text-sm transition-colors",
              activeSemester === null
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
            )}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              All Courses
            </span>
            <span className="text-xs text-zinc-500">{subjects.length}</span>
          </button>

          {/* Semester Links */}
          {semesterCounts.map((sem) => (
            <button
              key={sem.value}
              onClick={() => onFilterBySemester(sem.value)}
              disabled={sem.count === 0}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg",
                "text-sm transition-colors",
                activeSemester === sem.value
                  ? "bg-zinc-800 text-white"
                  : sem.count === 0
                  ? "text-zinc-600 cursor-not-allowed"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
              )}
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {sem.label}
              </span>
              <span
                className={cn(
                  "text-xs",
                  sem.count === 0 ? "text-zinc-700" : "text-zinc-500"
                )}
              >
                {sem.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-zinc-800">
        <div className="p-3 rounded-lg bg-zinc-800/50">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-zinc-400">
                This roadmap is curated for FAST-NU Islamabad BS Software Engineering students.
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Absolute grading. No curves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-zinc-800 bg-zinc-950 flex-shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              variants={drawerSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 bottom-0 w-72 bg-zinc-950 border-r border-zinc-800 z-50 lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
