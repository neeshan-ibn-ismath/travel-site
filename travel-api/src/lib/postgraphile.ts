import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.DATABASE_API_URL || 'http://localhost:5000/graphql';

// Create one GraphQLClient instance
const pgClient = new GraphQLClient(url);

// Export as both named and default for flexibility
export { pgClient };
export default pgClient;
