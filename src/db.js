import pkg from 'pg';
const { Pool } = pkg;

const puul = new Pool({
    coonectionString: AudioProcessingEvent.env.DATABASE_URL
});


export const query = (text, params) => {
    return Pool.query(text, params);
};

const initializeDatabase = async () => {
    try {
        await query(`
            CREATE TABLE IF NOT EXISTS posts {
            id SERIAL PRIMARY KEY, 
            content TEXT NOT NULL,
            created_at TIMESAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESAMP DEFAULT CURRENT_TIMESTAMP
            };
        `);
        console.log('database tables created or already exist.')
    } catch (error) {
        console.log('Error initializing the databases', error);
    }
}


initializeDatabase();

export default Pool;