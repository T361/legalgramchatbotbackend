// ============================================================================
// FAST ROADMAP - INDIVIDUAL SUBJECT API ROUTE
// RESTful API endpoint for fetching a specific subject
// ============================================================================

import { NextRequest, NextResponse } from "next/server";
import { getSubject } from "@/lib/db/repository";

interface RouteParams {
  params: Promise<{
    code: string;
  }>;
}

/**
 * GET /api/subjects/[code]
 * Fetch a specific subject by its code
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { code } = await params;
    
    if (!code) {
      return NextResponse.json(
        { success: false, error: "Subject code is required" },
        { status: 400 }
      );
    }

    const response = await getSubject(code);

    if (!response.data) {
      return NextResponse.json(
        { success: false, error: `Subject ${code} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
