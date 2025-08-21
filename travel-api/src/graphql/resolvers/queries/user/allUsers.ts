import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface User {
  id: string;
  name: string;
  email: string;
}

export const allUsers = async (): Promise<User[]> => {
  const query = `
    query {
      allUsers {
        nodes {
          id
          name
          email
        }
      }
    }
  `;
  try {
    const response = await pgClient.request<{ allUsers: { nodes: User[] } }>(query);
    return response.allUsers.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch users', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
