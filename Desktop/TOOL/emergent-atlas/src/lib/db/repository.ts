// ============================================================================
// FAST ROADMAP - REPOSITORY PATTERN
// Zero-Dependency Fallback: DB First → Static JSON Fallback
// The app NEVER crashes due to database outage
// ============================================================================

import { Subject, ApiResponse } from "@/types";
import { getDatabase } from "./mongodb";
import {
  getAllStaticSubjects,
  getStaticSubjectByCode,
  getStaticSubjectsBySemester,
  getStaticSubjectsByCategory,
} from "../data/courses";

const COLLECTION_NAME = "subjects";

/**
 * Repository class implementing the fallback pattern
 * Try Database → Catch → Return Static JSON
 */
export class SubjectRepository {
  /**
   * Get all subjects
   * Attempts database fetch, falls back to static data
   */
  static async getAll(): Promise<ApiResponse<Subject[]>> {
    try {
      const db = await getDatabase();

      if (db) {
        const subjects = await db
          .collection<Subject>(COLLECTION_NAME)
          .find({})
          .toArray();

        if (subjects && subjects.length > 0) {
          return {
            success: true,
            data: subjects,
            source: "database",
          };
        }
      }

      // Fallback to static data
      return {
        success: true,
        data: getAllStaticSubjects(),
        source: "fallback",
      };
    } catch (error) {
      console.error("Repository.getAll error:", error);
      // Always return static data on error
      return {
        success: true,
        data: getAllStaticSubjects(),
        source: "fallback",
      };
    }
  }

  /**
   * Get a single subject by code
   */
  static async getByCode(code: string): Promise<ApiResponse<Subject | null>> {
    try {
      const db = await getDatabase();

      if (db) {
        const subject = await db
          .collection<Subject>(COLLECTION_NAME)
          .findOne({ code: code.toUpperCase() });

        if (subject) {
          return {
            success: true,
            data: subject,
            source: "database",
          };
        }
      }

      // Fallback to static data
      const staticSubject = getStaticSubjectByCode(code);
      return {
        success: true,
        data: staticSubject || null,
        source: "fallback",
      };
    } catch (error) {
      console.error("Repository.getByCode error:", error);
      const staticSubject = getStaticSubjectByCode(code);
      return {
        success: true,
        data: staticSubject || null,
        source: "fallback",
      };
    }
  }

  /**
   * Get subjects by semester
   */
  static async getBySemester(
    semester: number
  ): Promise<ApiResponse<Subject[]>> {
    try {
      const db = await getDatabase();

      if (db) {
        const subjects = await db
          .collection<Subject>(COLLECTION_NAME)
          .find({ semester })
          .toArray();

        if (subjects && subjects.length > 0) {
          return {
            success: true,
            data: subjects,
            source: "database",
          };
        }
      }

      // Fallback
      return {
        success: true,
        data: getStaticSubjectsBySemester(semester),
        source: "fallback",
      };
    } catch (error) {
      console.error("Repository.getBySemester error:", error);
      return {
        success: true,
        data: getStaticSubjectsBySemester(semester),
        source: "fallback",
      };
    }
  }

  /**
   * Get subjects by category
   */
  static async getByCategory(
    category: string
  ): Promise<ApiResponse<Subject[]>> {
    try {
      const db = await getDatabase();

      if (db) {
        const subjects = await db
          .collection<Subject>(COLLECTION_NAME)
          .find({ category: category as Subject["category"] })
          .toArray();

        if (subjects && subjects.length > 0) {
          return {
            success: true,
            data: subjects,
            source: "database",
          };
        }
      }

      // Fallback
      return {
        success: true,
        data: getStaticSubjectsByCategory(category),
        source: "fallback",
      };
    } catch (error) {
      console.error("Repository.getByCategory error:", error);
      return {
        success: true,
        data: getStaticSubjectsByCategory(category),
        source: "fallback",
      };
    }
  }

  /**
   * Search subjects by query
   */
  static async search(query: string): Promise<ApiResponse<Subject[]>> {
    try {
      const allSubjectsResponse = await this.getAll();
      const allSubjects = allSubjectsResponse.data || [];

      const lowerQuery = query.toLowerCase();
      const filtered = allSubjects.filter(
        (subject) =>
          subject.code.toLowerCase().includes(lowerQuery) ||
          subject.name.toLowerCase().includes(lowerQuery) ||
          subject.category.toLowerCase().includes(lowerQuery)
      );

      return {
        success: true,
        data: filtered,
        source: allSubjectsResponse.source,
      };
    } catch (error) {
      console.error("Repository.search error:", error);
      return {
        success: true,
        data: [],
        source: "fallback",
      };
    }
  }
}

// Export convenience functions
export const getSubjects = SubjectRepository.getAll.bind(SubjectRepository);
export const getSubject = SubjectRepository.getByCode.bind(SubjectRepository);
export const getSubjectsBySemester =
  SubjectRepository.getBySemester.bind(SubjectRepository);
export const getSubjectsByCategory =
  SubjectRepository.getByCategory.bind(SubjectRepository);
export const searchSubjects =
  SubjectRepository.search.bind(SubjectRepository);
