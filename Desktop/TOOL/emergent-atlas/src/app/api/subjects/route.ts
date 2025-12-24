// ============================================================================
// FAST ROADMAP - SUBJECTS API ROUTE
// RESTful API endpoint for fetching subject data
// ============================================================================

import { NextRequest, NextResponse } from "next/server";
import { getSubjects, getSubject, searchSubjects } from "@/lib/db/repository";

/**
 * GET /api/subjects
 * Fetch all subjects or search by query
 *
 * Query Parameters:
 * - code: Get a specific subject by code
 * - q: Search query
 * - semester: Filter by semester
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const query = searchParams.get("q");

    // Get specific subject by code
    if (code) {
      const response = await getSubject(code);
      if (!response.data) {
        return NextResponse.json(
          { success: false, error: "Subject not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(response);
    }

    // Search subjects
    if (query) {
      const response = await searchSubjects(query);
      return NextResponse.json(response);
    }

    // Get all subjects
    const response = await getSubjects();
    return NextResponse.json(response);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * HEAD /api/subjects
 * Health check for the API
 */
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
