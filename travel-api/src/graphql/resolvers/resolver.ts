import { GraphQLScalarType, Kind } from 'graphql';
import { Query } from './queries/query';
import { Mutation } from './mutations/mutation';

// Example custom scalar for Date (if you need it)
const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar type',
  serialize(value: unknown): string {
    return value instanceof Date ? value.toISOString() : (value as string);
  },
  parseValue(value: unknown): Date {
    return new Date(value as string);
  },
  parseLiteral(ast): Date | null {
    return ast.kind === Kind.STRING ? new Date(ast.value) : null;
  },
});

export const resolvers = {
  Query,
  Mutation,
  Date: DateScalar, // Register scalar here if used in schema.graphql
};
