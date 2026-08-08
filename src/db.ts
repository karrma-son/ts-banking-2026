import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();

//initialize connection pool

export const pool = new Pool({
    host: 'localhost',
    port: parseInt('5430'),
    user: 'mkultra',
    password: 'monkey',
    database: 'bankdb',
})
export const query = async <T extends object = any>(
    text: string, 
    params?: any[]
) => {
      const res = await pool.query<T>(text, params);

      return res;
};

export default pool;