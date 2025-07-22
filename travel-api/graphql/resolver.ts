import { Query } from './resolvers/query';
import { Mutation } from './resolvers/mutation';
import { GraphQLUUID, GraphQLDateTime } from 'graphql-scalars';

export const resolvers = {
  UUID: GraphQLUUID,
  DateTime: GraphQLDateTime,
  Cursor: {
    __serialize(value: any) {
      return value.toString();
    },
    __parseValue(value: any) {
      return value.toString();
    },
    __parseLiteral(ast: any) {
      return ast.value;
    },
  },

  Query,
  Mutation,
};
