// ============================================================================
// FAST ROADMAP - COURSE DETAIL PANEL COMPONENT (ORGANISM)
// Full course details with roadmap, resources, and strategic advice
// ============================================================================

"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  BookOpen,
  AlertTriangle,
  Map,
  Lightbulb,
  Clock,
  Code,
  Folder,
  Users,
} from "lucide-react";
import { Subject } from "@/types";
import { Badge, Button } from "@/components/atoms";
import { ResourceLink, FailurePointItem, RoadmapPhaseItem } from "@/components/molecules";
import { cn, getRigorBadgeClasses, getCategoryClasses } from "@/lib/utils";
import { fadeScale } from "@/lib/animations";
import { getAdviceForSubject, formatAdviceForDisplay } from "@/lib/data/seniorAdvice";

interface CourseDetailPanelProps {
  subject: Subject | null;
  onClose: () => void;
  isOpen: boolean;
}

export function CourseDetailPanel({
  subject,
  onClose,
  isOpen,
}: CourseDetailPanelProps) {
  if (!subject) return null;

  // Get subject-specific senior advice
  const seniorAdvice = getAdviceForSubject(subject.code);

  return (
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

          {/* Panel */}
          <motion.div
            variants={fadeScale}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              "fixed right-0 top-0 bottom-0 z-50",
              "w-full max-w-2xl glass-heavy border-l border-purple-500/30",
              "flex flex-col overflow-hidden",
              "lg:relative lg:border-l"
            )}
          >
            {/* Header */}
            <div className="flex-shrink-0 border-b border-purple-500/20 p-4 md:p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Course Code */}
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold font-mono gradient-text">
                      {subject.code}
                    </h2>
                    <Badge
                      variant="rigor"
                      className={getRigorBadgeClasses(subject.rigor)}
                    >
                      {subject.rigor}
                    </Badge>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-lg text-zinc-200 mb-3">{subject.name}</h3>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className={getCategoryClasses(subject.category)}>
                      {subject.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-cyan-400/80">
                      <Clock className="w-4 h-4" />
                      {subject.creditHours} Credit Hours
                    </span>
                    <span className="flex items-center gap-1 text-sm text-purple-400/80">
                      <BookOpen className="w-4 h-4" />
                      Semester {subject.semester}
                    </span>
                    {subject.stack && (
                      <span className="flex items-center gap-1 text-sm text-cyan-400 font-mono">
                        <Code className="w-4 h-4" />
                        {subject.stack}
                      </span>
                    )}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg glass border border-purple-500/30 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-zinc-400 hover:text-red-400" />
                </button>
              </div>

              {/* Rigor Description */}
              <p className="mt-4 text-sm text-zinc-400 italic border-l-2 border-purple-500/50 pl-3">
                &quot;{subject.rigorDescription}&quot;
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 md:p-6 space-y-8">
                {/* Strategic Advice Block */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                      Strategic Advice
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl glass border border-yellow-500/30 bg-yellow-500/5">
                    <p className="text-sm text-yellow-100/90 leading-relaxed italic">
                      &quot;{subject.strategicAdvice}&quot;
                    </p>
                  </div>
                </section>

                {/* Senior's Advice (Reddit Wisdom) - If available for this subject */}
                {seniorAdvice.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                        Senior&apos;s Advice (Reddit Wisdom)
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {seniorAdvice.map((advice, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl glass border border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-400/50 transition-all duration-300"
                        >
                          <p className="text-sm text-cyan-100 font-medium mb-2">
                            {formatAdviceForDisplay(advice)}
                          </p>
                          <p className="text-xs text-cyan-300/70 italic">
                            {advice.context}
                          </p>
                          <span className="inline-block mt-2 text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/30">
                            Source: {advice.source}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Failure Points */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                      Critical Failure Points
                    </h4>
                  </div>
                  <div className="space-y-2 p-4 rounded-xl glass border border-red-500/30 bg-red-500/5">
                    {subject.failurePoints.map((point, index) => (
                      <FailurePointItem
                        key={index}
                        point={point}
                        index={index}
                        severity={index === 0 ? "critical" : "high"}
                      />
                    ))}
                  </div>
                </section>

                {/* Learning Roadmap */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Map className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                      Learning Roadmap
                    </h4>
                  </div>
                  <div className="pl-2 p-4 rounded-xl glass border border-blue-500/30 bg-blue-500/5">
                    {subject.roadmap.map((phase, index) => (
                      <RoadmapPhaseItem
                        key={phase.phase}
                        phase={phase}
                        index={index}
                        isLast={index === subject.roadmap.length - 1}
                      />
                    ))}
                  </div>
                </section>

                {/* Curated Resources */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                      Gold Standard Resources
                    </h4>
                  </div>
                  <div className="space-y-2 p-4 rounded-xl glass border border-green-500/30 bg-green-500/5">
                    {subject.resources.map((resource, index) => (
                      <ResourceLink
                        key={index}
                        resource={resource}
                        index={index}
                      />
                    ))}
                  </div>
                </section>

                {/* Project Ideas (if available) */}
                {subject.projectIdeas && subject.projectIdeas.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Folder className="w-5 h-5 text-purple-400" />
                      <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                        Semester Project Ideas
                      </h4>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl glass border border-purple-500/30 bg-purple-500/5">
                      {subject.projectIdeas.map((idea, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg glass border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                        >
                          <p className="text-sm text-purple-200/90">{idea}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-purple-500/20 p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <Button
                variant="secondary"
                className="w-full glass border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
