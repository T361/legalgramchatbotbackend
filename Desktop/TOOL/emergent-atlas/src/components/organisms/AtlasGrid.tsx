// ============================================================================
// FAST ROADMAP - ATLAS GRID (CLEAN, ZEN LAYOUT)
// Ensures native scrolling, opaque dropdowns, and proper spacing
// ============================================================================

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid3X3, List, X, ChevronDown } from "lucide-react";
import { Subject, FilterState, CourseCategory, RigorLevel } from "@/types";
import { CourseCard } from "@/components/molecules/CourseCard";
import { SearchInput } from "@/components/molecules/SearchInput";
import { Button, Badge } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { SEMESTERS, CATEGORIES, RIGOR_LEVELS } from "@/lib/constants";

interface AtlasGridProps {
  subjects: Subject[];
  onSelectCourse: (subject: Subject) => void;
  selectedCourse: Subject | null;
  dataSource?: "database" | "fallback";
}

export function AtlasGrid({
  subjects,
  onSelectCourse,
  selectedCourse,
  dataSource = "fallback",
}: AtlasGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    semester: null,
    category: null,
    rigor: null,
    searchQuery: "",
  });

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        if (
          !subject.code.toLowerCase().includes(q) &&
          !subject.name.toLowerCase().includes(q) &&
          !subject.category.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      if (filters.semester !== null && subject.semester !== filters.semester)
        return false;
      if (filters.category !== null && subject.category !== filters.category)
        return false;
      if (filters.rigor !== null && subject.rigor !== filters.rigor) return false;
      return true;
    });
  }, [subjects, filters]);

  const activeFilterCount = useMemo(() => {
    let c = 0;
    if (filters.semester !== null) c++;
    if (filters.category !== null) c++;
    if (filters.rigor !== null) c++;
    return c;
  }, [filters]);

  const clearFilters = () =>
    setFilters({ semester: null, category: null, rigor: null, searchQuery: "" });

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Course Atlas</h1>
              <p className="text-sm text-zinc-400 mt-1">
                <span className="font-mono text-[#00f0ff]">{filteredSubjects.length}</span>
                <span className="mx-2 text-zinc-600">/</span>
                <span className="font-mono text-[#7000ff]">{subjects.length}</span>
                <span className="ml-2 text-zinc-500">courses</span>
                {dataSource === "fallback" && (
                  <Badge className="ml-3 bg-red-700 text-white text-xs">OFFLINE</Badge>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    viewMode === "grid"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <Grid3X3 className="w-4 h-4 inline-block mr-2" />Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm",
                    viewMode === "list"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <List className="w-4 h-4 inline-block mr-2" />List
                </button>
              </div>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <SearchInput
                value={filters.searchQuery}
                onChange={(v) => setFilters((p) => ({ ...p, searchQuery: v }))}
                placeholder="Search courses by code, name, or category"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setShowFilters((s) => !s)}
                leftIcon={<Filter className="w-4 h-4" />}
                className="min-w-[120px]"
              >
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-[#ff2a2a] text-white text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Filters panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 font-medium">Semester</label>
                      <div className="relative mt-2">
                        <select
                          value={filters.semester ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              semester: e.target.value ? Number(e.target.value) : null,
                            }))
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl px-4 py-3 text-sm text-zinc-100 appearance-none z-50"
                        >
                          <option value="">All Semesters</option>
                          {SEMESTERS.map((sem) => (
                            <option key={sem.value} value={sem.value}>
                              {sem.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 font-medium">Category</label>
                      <div className="relative mt-2">
                        <select
                          value={filters.category ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              category: (e.target.value as CourseCategory) || null,
                            }))
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl px-4 py-3 text-sm text-zinc-100 appearance-none z-50"
                        >
                          <option value="">All Categories</option>
                          {CATEGORIES.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 font-medium">Difficulty</label>
                      <div className="relative mt-2">
                        <select
                          value={filters.rigor ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              rigor: (e.target.value as RigorLevel) || null,
                            }))
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl px-4 py-3 text-sm text-zinc-100 appearance-none z-50"
                        >
                          <option value="">All Levels</option>
                          {RIGOR_LEVELS.map((level) => (
                            <option key={level.value} value={level.value}>
                              {level.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {activeFilterCount > 0 && (
                    <div className="mt-4">
                      <button
                        onClick={clearFilters}
                        className="text-sm text-[#ff2a2a] font-medium flex items-center gap-2"
                      >
                        <X className="w-4 h-4" /> Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Content area - must be scrollable */}
      <main className="flex-1 overflow-y-auto min-h-0">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {filteredSubjects.length === 0 ? (
            <div className="py-20 text-center text-zinc-400">
              No courses found. Try adjusting filters.
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubjects.map((s) => (
                <CourseCard key={s.code} subject={s} onClick={() => onSelectCourse(s)} isSelected={selectedCourse?.code === s.code} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredSubjects.map((s) => (
                <CourseCard key={s.code} subject={s} onClick={() => onSelectCourse(s)} isSelected={selectedCourse?.code === s.code} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
// ============================================================================
// FAST ROADMAP - ATLAS GRID COMPONENT (ORGANISM)
// Main course grid with filtering and search
// Neo-Cyberpunk Design - Floating Glass Panes
// ============================================================================

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid3X3, List, AlertCircle, X, ChevronDown } from "lucide-react";
import { Subject, FilterState, CourseCategory, RigorLevel } from "@/types";
import { CourseCard } from "@/components/molecules/CourseCard";
import { SearchInput } from "@/components/molecules/SearchInput";
import { Button, Badge } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { SEMESTERS, CATEGORIES, RIGOR_LEVELS } from "@/lib/constants";

interface AtlasGridProps {
  subjects: Subject[];
  onSelectCourse: (subject: Subject) => void;
  selectedCourse: Subject | null;
  dataSource?: "database" | "fallback";
}

export function AtlasGrid({
  subjects,
  onSelectCourse,
  selectedCourse,
  dataSource = "fallback",
}: AtlasGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    semester: null,
    category: null,
    rigor: null,
    searchQuery: "",
  });

  // Filter subjects based on current filters
  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch =
          subject.code.toLowerCase().includes(query) ||
          subject.name.toLowerCase().includes(query) ||
          subject.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Semester filter
      if (filters.semester !== null && subject.semester !== filters.semester) {
        return false;
      }

      // Category filter
      if (filters.category !== null && subject.category !== filters.category) {
        return false;
      }

      // Rigor filter
      if (filters.rigor !== null && subject.rigor !== filters.rigor) {
        return false;
      }

      return true;
    });
  }, [subjects, filters]);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.semester !== null) count++;
    if (filters.category !== null) count++;
    if (filters.rigor !== null) count++;
    return count;
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      semester: null,
      category: null,
      rigor: null,
      searchQuery: "",
    });
  };

  return (
    <div className="h-full flex flex-col relative bg-black">
      {/* Header Section - Floating Glass */}
      <div className="flex-shrink-0 sticky top-0 z-20 p-4 lg:p-6">
        <div className="max-w-screen-2xl mx-auto glass-heavy rounded-2xl p-6">
          {/* Title Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black">
                <span className="gradient-text">COURSE</span>
                <span className="text-white"> ATLAS</span>
              </h1>
              <p className="text-sm text-zinc-500 mt-2 font-mono">
                <span className="text-[#00f0ff]">{filteredSubjects.length}</span>
                <span className="text-zinc-600"> / </span>
                <span className="text-[#7000ff]">{subjects.length}</span>
                <span className="text-zinc-600"> courses loaded</span>
                {dataSource === "fallback" && (
                  <span className="ml-3 px-2 py-1 rounded-full red-alert text-[#ff2a2a] text-xs font-medium">
                    OFFLINE
                  </span>
                )}
              </p>
            </div>
            
            {/* View Mode Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-2 glass rounded-xl p-1.5">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2.5 rounded-lg transition-all duration-300 font-medium text-sm flex items-center gap-2",
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-[#7000ff] to-[#00f0ff] text-white shadow-lg"
                    : "text-zinc-500 hover:text-[#00f0ff]"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2.5 rounded-lg transition-all duration-300 font-medium text-sm flex items-center gap-2",
                  viewMode === "list"
                    ? "bg-gradient-to-r from-[#7000ff] to-[#00f0ff] text-white shadow-lg"
                    : "text-zinc-500 hover:text-[#00f0ff]"
                )}
              >
                <List className="w-4 h-4" />
                <span>List</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Row - Properly Spaced */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <SearchInput
                value={filters.searchQuery}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, searchQuery: value }))
                }
                placeholder="Search courses by code, name, or category..."
                className="w-full"
              />
            </div>
            
            {/* Filter Button */}
            <Button
              variant="secondary"
              size="md"
              onClick={() => setShowFilters(!showFilters)}
              leftIcon={<Filter className="w-4 h-4" />}
              className={cn(
                "flex-shrink-0 min-w-[120px] glass border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300",
                showFilters && "border-[#00f0ff]/50"
              )}
            >
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-[#ff2a2a] text-white text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>

          {/* Filter Panel - Expanded */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Semester Filter */}
                    <div className="space-y-2">
                      <label className="block text-xs text-[#00f0ff] font-mono uppercase tracking-wider">
                        Semester
                      </label>
                      <div className="relative">
                        <select
                          value={filters.semester ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              semester: e.target.value ? Number(e.target.value) : null,
                            }))
                          }
                          className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-[#00f0ff]/50 focus:ring-2 focus:ring-[#00f0ff]/20 transition-all duration-300"
                        >
                          <option value="">All Semesters</option>
                          {SEMESTERS.map((sem) => (
                            <option key={sem.value} value={sem.value}>
                              {sem.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div className="space-y-2">
                      <label className="block text-xs text-[#00f0ff] font-mono uppercase tracking-wider">
                        Category
                      </label>
                      <div className="relative">
                        <select
                          value={filters.category ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              category: (e.target.value as CourseCategory) || null,
                            }))
                          }
                          className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-[#00f0ff]/50 focus:ring-2 focus:ring-[#00f0ff]/20 transition-all duration-300"
                        >
                          <option value="">All Categories</option>
                          {CATEGORIES.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Rigor Filter */}
                    <div className="space-y-2">
                      <label className="block text-xs text-[#00f0ff] font-mono uppercase tracking-wider">
                        Difficulty
                      </label>
                      <div className="relative">
                        <select
                          value={filters.rigor ?? ""}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              rigor: (e.target.value as RigorLevel) || null,
                            }))
                          }
                          className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-[#00f0ff]/50 focus:ring-2 focus:ring-[#00f0ff]/20 transition-all duration-300"
                        >
                          <option value="">All Levels</option>
                          {RIGOR_LEVELS.map((level) => (
                            <option key={level.value} value={level.value}>
                              {level.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="mt-4 flex items-center gap-2 text-sm text-[#ff2a2a] hover:text-[#ff2a2a]/80 transition-colors font-medium"
                    >
                      <X className="w-4 h-4" />
                      Clear all filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6">
          {filteredSubjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center glass-heavy rounded-2xl p-8 border border-red-500/30">
              <AlertCircle className="w-12 h-12 text-red-500/80 mb-4" />
              <h3 className="text-lg font-medium text-zinc-200 mb-2">
                No courses found
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Try adjusting your filters or search query
              </p>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={clearFilters}
                className="glass border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                  : "flex flex-col gap-4 max-w-4xl"
              )}
            >
              {filteredSubjects.map((subject) => (
                <CourseCard
                  key={subject.code}
                  subject={subject}
                  onClick={() => onSelectCourse(subject)}
                  isSelected={selectedCourse?.code === subject.code}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}