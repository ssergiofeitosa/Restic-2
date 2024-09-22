import mysql, { QueryOptions, QueryError, FieldPacket } from 'mysql2';
import { promisify } from 'util';

interface QueryResult {
  insertId?: number;
  affectedRows?: number;
  [key: string]: any;   // Permite que outros campos existam
}

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todo_list',
});

db.connect((err: QueryError | null) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Promisifica a função de query
const promisifiedQuery = promisify(db.query).bind(db) as (
  query: string | QueryOptions,
  values?: any[]
) => Promise<[QueryResult[], FieldPacket[]]>;

export default promisifiedQuery;
