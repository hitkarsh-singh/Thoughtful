// db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'myuser',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE || 'thoughtful',
  password: process.env.POSTGRES_PASSWORD || 'mypassword',
  port: process.env.POSTGRES_PORT || 5432, 
});

export default pool;    
