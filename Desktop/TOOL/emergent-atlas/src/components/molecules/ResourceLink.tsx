// ============================================================================
// FAST ROADMAP - RESOURCE LINK COMPONENT (MOLECULE)
// Displays a learning resource with type indicator
// ============================================================================

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Video,
  Code,
  ExternalLink,
  PlayCircle,
  FileText,
  Lightbulb,
  Terminal,
} from "lucide-react";
import { Resource, ResourceType } from "@/types";
import { cn } from "@/lib/utils";
import { listItemSlide } from "@/lib/animations";

interface ResourceLinkProps {
  resource: Resource;
  index?: number;
  className?: string;
}

// Icon mapping based on resource type
// Use string index here so we can support both typed and custom resource.type values
const typeIcons: Record<string, React.ReactNode> = {
  "Primary Textbook": <BookOpen className="w-4 h-4" />,
  "Secondary Textbook": <BookOpen className="w-4 h-4" />,
  "Video Lecture": <Video className="w-4 h-4" />,
  "ARCHIVE_VIDEO": <Video className="w-4 h-4" />,
  "YOUTUBE_PLAYLIST": <PlayCircle className="w-4 h-4" />,
  "WEB_TOOL": <Terminal className="w-4 h-4" />,
  "Video Lecture (Deep Dive Course)": <Video className="w-4 h-4" />,
  "Video Lecture (YouTube Channel)": <Video className="w-4 h-4" />,
  "Practice Platform": <Code className="w-4 h-4" />,
  "Project Library": <Terminal className="w-4 h-4" />,
  "Quick Revision": <PlayCircle className="w-4 h-4" />,
  "Logic Building": <Lightbulb className="w-4 h-4" />,
  "Syntax Bridge": <FileText className="w-4 h-4" />,
  "Advanced Concept": <Lightbulb className="w-4 h-4" />,
  "Concept": <Lightbulb className="w-4 h-4" />,
  "Conceptual Base": <Lightbulb className="w-4 h-4" />,
  "Pointer Logic": <Terminal className="w-4 h-4" />,
  "Problem Solving": <Code className="w-4 h-4" />,
  "Alternative Text": <BookOpen className="w-4 h-4" />,
  "YouTube": <Video className="w-4 h-4" />,
};

// Color mapping based on resource type
const typeColors: Record<string, string> = {
  "Primary Textbook": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Secondary Textbook": "text-blue-300 bg-blue-500/10 border-blue-500/20",
  "Video Lecture": "text-red-400 bg-red-500/10 border-red-500/20",
  "ARCHIVE_VIDEO": "text-red-400 bg-red-500/10 border-red-500/20",
  "YOUTUBE_PLAYLIST": "text-red-400 bg-red-500/10 border-red-500/20",
  "WEB_TOOL": "text-teal-400 bg-teal-500/10 border-teal-500/20",
  "Video Lecture (Deep Dive Course)": "text-red-500 bg-red-500/20 border-red-500/30",
  "Video Lecture (YouTube Channel)": "text-red-400 bg-red-500/10 border-red-500/20",
  "Practice Platform": "text-green-400 bg-green-500/10 border-green-500/20",
  "Project Library": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "Quick Revision": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  "Logic Building": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  "Syntax Bridge": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "Advanced Concept": "text-pink-400 bg-pink-500/10 border-pink-500/20",
  "Concept": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  "Conceptual Base": "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "Pointer Logic": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Problem Solving": "text-teal-400 bg-teal-500/10 border-teal-500/20",
  "Alternative Text": "text-slate-400 bg-slate-500/10 border-slate-500/20",
  "YouTube": "text-red-400 bg-red-500/10 border-red-500/20",
};

export function ResourceLink({
  resource,
  index = 0,
  className,
}: ResourceLinkProps) {
  const icon = typeIcons[resource.type] || <FileText className="w-4 h-4" />;
  const colorClass = typeColors[resource.type] || "text-zinc-400 bg-zinc-500/10 border-zinc-500/20";

  const content = (
    <motion.div
      variants={listItemSlide}
      initial="initial"
      animate="animate"
      custom={index}
      className={cn(
        "group flex items-start gap-3 p-3 rounded-xl",
        "glass border border-purple-500/20",
        "hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300",
        resource.url && "cursor-pointer",
        className
      )}
    >
      {/* Type Icon */}
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-lg border flex-shrink-0 transition-all duration-300 group-hover:scale-110",
          colorClass
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-zinc-100 truncate group-hover:text-cyan-400 transition-colors">
            {resource.title}
          </h4>
          {resource.url && (
            <ExternalLink className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          )}
        </div>
        {resource.author && (
          <p className="text-xs text-purple-400/70 mt-0.5">{resource.author}</p>
        )}
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
          {resource.relevance}
        </p>
      </div>

      {/* Type Badge */}
      <span
        className={cn(
          "px-2 py-0.5 rounded-full text-xs font-medium border flex-shrink-0",
          colorClass
        )}
      >
        {resource.type}
      </span>
    </motion.div>
  );

  if (resource.url) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
