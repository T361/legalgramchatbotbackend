// ============================================================================
// FAST ROADMAP - GLOBAL CRITICAL ADVICE
// This advice MUST be displayed for EVERY subject roadmap
// Non-negotiable study principles for FAST-NU success
// ============================================================================

export interface CriticalAdviceItem {
  principle: string;
  description: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
  icon?: string;
}

/**
 * Global Critical Advice - Display prominently in every subject view
 * These are universal success principles that apply across all courses
 */
export const GLOBAL_CRITICAL_ADVICE: CriticalAdviceItem[] = [
  {
    principle: "DO LEETCODE",
    description:
      "Start with Easy problems, gradually move to Medium. Consistent daily practice beats cramming. Master patterns, not memorization.",
    priority: "CRITICAL",
    icon: "💻",
  },
  {
    principle: "SOLVE PAST PAPERS",
    description:
      "Source: Wonder.site - Critical for understanding exam patterns, question styles, and difficulty levels. Past papers reveal what actually gets tested.",
    priority: "CRITICAL",
    icon: "📄",
  },
  {
    principle: "STUDY IN LIBRARY",
    description:
      "Deep Work requires zero distractions. Library sessions = Flow state. Phone off, focused work blocks of 90 minutes minimum.",
    priority: "CRITICAL",
    icon: "📚",
  },
  {
    principle: "READ THE BOOKS",
    description:
      "Videos are supplements, not replacements. Books give depth. Read chapters before watching videos. Active reading with notes.",
    priority: "HIGH",
    icon: "📖",
  },
  {
    principle: "HARD WORK & DISCIPLINE",
    description:
      "No shortcuts. No magic tricks. Consistent effort compounds. Show up every day. 10 hours of focused work > 20 hours of distracted work.",
    priority: "CRITICAL",
    icon: "💪",
  },
];

/**
 * Wonder.site Past Papers Reference
 * Explicit source attribution for past paper resources
 */
export const PAST_PAPERS_SOURCE = {
  name: "Wonder.site",
  url: "https://wonder.site", // Update with actual URL
  description:
    "Comprehensive collection of FAST-NU past papers across all subjects and semesters",
  importance:
    "Critical for understanding exam patterns, question types, and difficulty levels",
};

/**
 * Get formatted advice for display
 */
export function getGlobalAdviceForDisplay(): string[] {
  return GLOBAL_CRITICAL_ADVICE.map(
    (advice) => `${advice.icon} ${advice.principle}: ${advice.description}`
  );
}

/**
 * Get critical advice only (CRITICAL priority)
 */
export function getCriticalAdviceOnly(): CriticalAdviceItem[] {
  return GLOBAL_CRITICAL_ADVICE.filter(
    (advice) => advice.priority === "CRITICAL"
  );
}
