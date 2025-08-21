import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateBlogTagResponse = { createBlogTag: { id: number; name: string } };

export const createBlogTag = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateBlogTag($input: CreateBlogTagInput!) {
      createBlogTag(input: $input) {
        id
        name
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateBlogTagResponse>(mutation, { input });
    return response.createBlogTag;
  } catch (error) {
    throw new GraphQLError('Failed to create blog tag', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
