import { createSchema, createYoga } from 'graphql-yoga';
import fs from 'fs';
import path from 'path';
import { resolvers } from '../graphql/resolver'; // Make sure path is correct

const createServer = createYoga({
  schema: createSchema({
    typeDefs: fs.readFileSync(path.join(__dirname, '../graphql/schema.graphql'), 'utf8'),
    resolvers,
  }),
});

export default createServer;
