// ============================================================================
// FAST ROADMAP - MAIN PAGE
// Entry point with Portal Gate and Dashboard
// ============================================================================

import { Suspense } from "react";
import { getSubjects } from "@/lib/db/repository";
import { HomeClient } from "./HomeClient";

// Force dynamic rendering for database fetching
export const dynamic = "force-dynamic";

// Loading fallback
function LoadingFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#09090b]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin" />
        <p className="text-sm text-zinc-500">Loading the Atlas...</p>
      </div>
    </div>
  );
}

export default async function HomePage() {
  // Fetch subjects using repository pattern (DB with fallback)
  const response = await getSubjects();
  const subjects = response.data || [];
  const dataSource = response.source;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeClient subjects={subjects} dataSource={dataSource} />
    </Suspense>
  );
}
