import dotenv from 'dotenv';
dotenv.config();

const {
  DATABASE,
  PG_USER,
  PASSWORD,
  HOST,
  PG_PORT,
} = process.env;

const config = {
  client: 'pg',
  connection: {
    database: DATABASE || 'travel_db',
    user: PG_USER || 'postgres',
    password: PASSWORD || 'abc123',
    host: HOST || 'localhost',
    port: PG_PORT ? parseInt(PG_PORT, 10) : 5432,
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default config;
