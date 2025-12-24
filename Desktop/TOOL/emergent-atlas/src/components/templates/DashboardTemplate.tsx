// ============================================================================
// FAST ROADMAP - DASHBOARD TEMPLATE (TEMPLATE)
// Main dashboard layout with sidebar and content area
// ============================================================================

"use client";

import { useState, useEffect, useCallback } from "react";
import { Subject } from "@/types";
import { Header, Sidebar, AtlasGrid, CourseDetailPanel } from "@/components/organisms";

interface DashboardTemplateProps {
  subjects: Subject[];
  dataSource: "database" | "fallback";
}

export function DashboardTemplate({ subjects, dataSource }: DashboardTemplateProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Subject | null>(null);
  const [activeSemester, setActiveSemester] = useState<number | null>(null);

  // Filter subjects by active semester
  const filteredSubjects = activeSemester
    ? subjects.filter((s) => s.semester === activeSemester)
    : subjects;

  // Handle course selection
  const handleSelectCourse = useCallback((subject: Subject) => {
    setSelectedCourse(subject);
    // Close sidebar on mobile when selecting a course
    setIsSidebarOpen(false);
  }, []);

  // Handle close detail panel
  const handleCloseDetail = useCallback(() => {
    setSelectedCourse(null);
  }, []);

  // Handle semester filter from sidebar
  const handleFilterBySemester = useCallback((semester: number | null) => {
    setActiveSemester(semester);
    // Close sidebar on mobile
    setIsSidebarOpen(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCourse) {
        handleCloseDetail();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCourse, handleCloseDetail]);

  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      {/* Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          subjects={subjects}
          onFilterBySemester={handleFilterBySemester}
          activeSemester={activeSemester}
        />

        {/* Main Grid Area */}
        <main className="flex-1 overflow-hidden flex">
          {/* Course Grid */}
          <div className={`flex-1 overflow-hidden ${selectedCourse ? "hidden lg:block lg:flex-1" : ""}`}>
            <AtlasGrid
              subjects={filteredSubjects}
              onSelectCourse={handleSelectCourse}
              selectedCourse={selectedCourse}
              dataSource={dataSource}
            />
          </div>

          {/* Course Detail Panel */}
          <CourseDetailPanel
            subject={selectedCourse}
            onClose={handleCloseDetail}
            isOpen={!!selectedCourse}
          />
        </main>
      </div>
    </div>
  );
}
