// ============================================================================
// FAST ROADMAP - TYPE DEFINITIONS
// The Truth Source: TypeScript interfaces for the entire application
// ============================================================================

/**
 * Resource type enumeration
 * Categorizes learning materials by their purpose
 */
export type ResourceType =
  | "Primary Textbook"
  | "Secondary Textbook"
  | "Video Lecture"
  | "Video Lecture (Deep Dive Course)"
  | "Video Lecture (YouTube Channel)"
  | "Practice Platform"
  | "Project Library"
  | "Quick Revision"
  | "Logic Building"
  | "Syntax Bridge"
  | "Advanced Concept"
  | "Concept"
  | "Conceptual Base"
  | "Pointer Logic"
  | "Problem Solving"
  | "Alternative Text"
  | "YouTube";

/**
 * Rigor level classification
 * Reflects the difficulty and importance of a course
 */
export type RigorLevel =
  | "Critical"
  | "Extreme"
  | "Very High"
  | "High"
  | "Moderate"
  | "Low";

/**
 * Course category for filtering
 */
export type CourseCategory =
  | "Programming"
  | "Mathematics"
  | "Hardware"
  | "Theory"
  | "Engineering";

/**
 * Learning resource interface
 * Represents a single curated resource for a subject
 */
export interface Resource {
  type: ResourceType;
  title: string;
  author?: string;
  relevance: string;
  url?: string;
  source?: string;
}

/**
 * Roadmap phase interface
 * Represents a single phase in the learning progression
 */
export interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  checkpoint?: string;
  criticalState?: string;
}

/**
 * Subject/Course interface
 * The core data structure for each academic subject
 */
export interface Subject {
  code: string;
  name: string;
  rigor: RigorLevel;
  rigorDescription: string;
  category: CourseCategory;
  semester: number;
  creditHours: number;
  stack?: string;
  failurePoints: string[];
  strategicAdvice: string;
  resources: Resource[];
  roadmap: RoadmapPhase[];
  projectIdeas?: string[];
}

/**
 * Application state for portal transition
 */
export interface PortalState {
  isOpen: boolean;
  isTransitioning: boolean;
}

/**
 * Filter state for course grid
 */
export interface FilterState {
  semester: number | null;
  category: CourseCategory | null;
  rigor: RigorLevel | null;
  searchQuery: string;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  source: "database" | "fallback";
}
