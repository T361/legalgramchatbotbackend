// ============================================================================
// FAST ROADMAP - HOME CLIENT COMPONENT
// Client-side component handling portal transition and dashboard
// ============================================================================

"use client";

import { AnimatePresence } from "framer-motion";
import { Subject } from "@/types";
import { PortalGate } from "@/components/organisms";
import { DashboardTemplate } from "@/components/templates";
import { usePortalTransition } from "@/hooks";

interface HomeClientProps {
  subjects: Subject[];
  dataSource: "database" | "fallback";
}

export function HomeClient({ subjects, dataSource }: HomeClientProps) {
  const { isPortalOpen, isTransitioning, triggerTransition } =
    usePortalTransition();

  return (
    <>
      {/* Portal Gate - Entry Screen */}
      <AnimatePresence mode="wait">
        {isPortalOpen && (
          <PortalGate
            onEnter={triggerTransition}
            isExiting={isTransitioning}
          />
        )}
      </AnimatePresence>

      {/* Dashboard - Main Content */}
      {!isPortalOpen && (
        <DashboardTemplate subjects={subjects} dataSource={dataSource} />
      )}
    </>
  );
}
