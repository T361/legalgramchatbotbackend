// ============================================================================
// FAST ROADMAP - MONGODB CONNECTION
// Singleton pattern for database connection
// ============================================================================

import { MongoClient, Db } from "mongodb";

// MongoDB connection string from environment
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || "fast-roadmap";

// Validate environment in production
if (!MONGODB_URI && process.env.NODE_ENV === "production") {
  console.warn(
    "⚠️ MONGODB_URI not defined. Application will use static fallback data."
  );
}

// Cached connection
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/**
 * Connection options for MongoDB
 */
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

/**
 * Connect to MongoDB with singleton pattern
 * Returns null if connection fails (fallback to static data)
 */
export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
} | null> {
  // Return cached connection if available
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // If no URI configured, return null (use fallback)
  if (!MONGODB_URI) {
    console.log("📦 No MongoDB URI configured. Using static fallback data.");
    return null;
  }

  try {
    // Create new client and connect
    const client = new MongoClient(MONGODB_URI, options);
    await client.connect();

    // Verify connection
    await client.db(MONGODB_DB).command({ ping: 1 });

    // Cache the connection
    cachedClient = client;
    cachedDb = client.db(MONGODB_DB);

    console.log("✅ Connected to MongoDB Atlas successfully.");
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    console.log("📦 Falling back to static data.");
    return null;
  }
}

/**
 * Get database instance
 * Returns null if not connected
 */
export async function getDatabase(): Promise<Db | null> {
  const connection = await connectToDatabase();
  return connection?.db || null;
}

/**
 * Check if database is connected
 */
export async function isDatabaseConnected(): Promise<boolean> {
  try {
    const connection = await connectToDatabase();
    if (!connection) return false;
    await connection.db.command({ ping: 1 });
    return true;
  } catch {
    return false;
  }
}

/**
 * Close database connection
 * Use in serverless cleanup
 */
export async function closeConnection(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    console.log("🔌 MongoDB connection closed.");
  }
}
