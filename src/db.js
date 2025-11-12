import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,              // obliga a usar SSL
    rejectUnauthorized: false,  // Render usa certificados autofirmados
  },
});

export const query = (text, params) => pool.query(text, params);

const initializeDatabase = async () => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Database tables created or already exist.');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
  }
};

initializeDatabase();

export default pool;