import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-serverless';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon with WebSocket support
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Determine if we're using Neon (URL contains .neon.tech) or regular PostgreSQL
const isNeonDatabase = process.env.DATABASE_URL.includes('.neon.tech');

let pool;
let db;

if (isNeonDatabase) {
  // Use Neon serverless client
  console.log('Using Neon serverless database connection');
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzleNeon({ client: pool, schema });
} else {
  // Use standard pg client for Render or other PostgreSQL providers
  console.log('Using standard PostgreSQL database connection');
  const pgPool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzlePg(pgPool, { schema });
  pool = pgPool; // Assign to pool for export consistency
}

export { pool, db };
