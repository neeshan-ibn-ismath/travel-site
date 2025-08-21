import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateUserResponse = { createUser: { id: string; name: string; email: string } };

export const createUser = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        name
        email
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateUserResponse>(mutation, { input });
    return response.createUser;
  } catch (error) {
    throw new GraphQLError('Failed to create user', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
