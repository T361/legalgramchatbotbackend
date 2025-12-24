// ============================================================================
// FAST ROADMAP - SENIOR'S ADVICE (REDDIT WISDOM)
// Aggregated advice from FAST-NU seniors and Reddit communities
// Real survival tips for FAST-NU students
// ============================================================================

export interface SeniorAdviceItem {
  advice: string;
  context: string;
  relevantSubjects?: string[];
  source: "Reddit" | "Senior" | "Community";
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
}

/**
 * Reddit Wisdom - Aggregated advice from r/FAST_NU and senior students
 * These are battle-tested tips from students who survived FAST
 */
export const SENIOR_ADVICE: SeniorAdviceItem[] = [
  {
    advice: "GPA is strictly relative. Your competition is your class. Don't slack off.",
    context:
      "FAST uses relative grading. The class average determines grade cutoffs. If everyone performs well, you need to perform better.",
    source: "Reddit",
    priority: "CRITICAL",
  },
  {
    advice:
      "For Programming Fundamentals & OOP: Code on paper. Exams require writing code without an IDE.",
    context:
      "Lab exams and midterms often require handwritten code. Practice writing syntactically correct code without compiler help.",
    relevantSubjects: ["CS1002", "CS1004"],
    source: "Senior",
    priority: "CRITICAL",
  },
  {
    advice:
      "Data Structures: The Abdul Bari Archive course is gold. Striver is for interviews. Do both.",
    context:
      "Abdul Bari teaches fundamental concepts deeply. Striver teaches interview patterns and problem-solving strategies. You need both perspectives.",
    relevantSubjects: ["CS2001"],
    source: "Reddit",
    priority: "CRITICAL",
  },
  {
    advice:
      "Calculus: Practice the book problems. The exam questions often come directly from Thomas Calculus exercises.",
    context:
      "FAST math exams heavily draw from textbook exercises. Solve odd-numbered problems (answers in back) for practice.",
    relevantSubjects: ["MT1003", "MT1008"],
    source: "Senior",
    priority: "HIGH",
  },
  {
    advice: "DLD: Morris Mano is the bible. Read the book.",
    context:
      "While videos help with intuition, the Morris Mano textbook contains the rigorous explanations needed for theory questions.",
    relevantSubjects: ["EE1005"],
    source: "Community",
    priority: "HIGH",
  },
  {
    advice:
      "Start assignments the day they're assigned. They take 3x longer than you think.",
    context:
      "Murphy's Law applies to programming assignments. Bugs, environment issues, and conceptual blocks will consume time.",
    source: "Senior",
    priority: "HIGH",
  },
  {
    advice:
      "Form study groups EARLY. Don't wait until the first midterm to realize you need help.",
    context:
      "Learning in groups exposes knowledge gaps faster. Explaining concepts to peers solidifies your own understanding.",
    source: "Reddit",
    priority: "HIGH",
  },
  {
    advice:
      "Don't skip lectures. Professors often hint at exam questions during class.",
    context:
      "Attendance isn't just for marks. Professors frequently emphasize important topics that appear on exams.",
    source: "Senior",
    priority: "MEDIUM",
  },
  {
    advice:
      "Use office hours. Professors appreciate students who show initiative.",
    context:
      "Office hours are underutilized. Direct interaction with professors can clarify difficult concepts and build relationships.",
    source: "Community",
    priority: "MEDIUM",
  },
  {
    advice:
      "Linear Algebra is the foundation of AI/ML. Don't treat it as 'just another math course'.",
    context:
      "If you're interested in machine learning, deep learning, or computer vision, Linear Algebra is non-negotiable.",
    relevantSubjects: ["MT1004"],
    source: "Senior",
    priority: "HIGH",
  },
];

/**
 * Get advice relevant to a specific subject
 */
export function getAdviceForSubject(subjectCode: string): SeniorAdviceItem[] {
  return SENIOR_ADVICE.filter(
    (advice) =>
      advice.relevantSubjects && advice.relevantSubjects.includes(subjectCode)
  );
}

/**
 * Get all critical advice
 */
export function getCriticalSeniorAdvice(): SeniorAdviceItem[] {
  return SENIOR_ADVICE.filter((advice) => advice.priority === "CRITICAL");
}

/**
 * Get general advice (not subject-specific)
 */
export function getGeneralAdvice(): SeniorAdviceItem[] {
  return SENIOR_ADVICE.filter((advice) => !advice.relevantSubjects);
}

/**
 * Format advice for display
 */
export function formatAdviceForDisplay(advice: SeniorAdviceItem): string {
  const priorityEmoji = {
    CRITICAL: "🔴",
    HIGH: "🟡",
    MEDIUM: "🟢",
  };

  return `${priorityEmoji[advice.priority]} ${advice.advice}`;
}
