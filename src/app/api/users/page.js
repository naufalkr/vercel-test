
// pages/api/users.js
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from 'pg';
const { Pool } = pkg;
import { UsersTable } from "./schema.js";

// Buat koneksi database
const client = new Pool({
  user: 'neondb_owner',
  host: 'ep-noisy-lab-a19xjt2s-pooler.ap-southeast-1.aws.neon.tech',
  database: 'neondb',
  password: 'zLn3FcqP9KDT',
  port: 5432,
  ssl: { rejectUnauthorized: false },  // for SSL connection
});

const db = drizzle(client);

export default async function handler(req, res) {
    try {
        const response = await db.select().from(UsersTable);
        res.status(200).json(response);  // Send data to the client
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });  // Send error response
    }
}
