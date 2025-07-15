import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.DATABASE_API_URL || 'http://localhost:5000/graphql'


const postgraphile = new GraphQLClient(url);

export default postgraphile;