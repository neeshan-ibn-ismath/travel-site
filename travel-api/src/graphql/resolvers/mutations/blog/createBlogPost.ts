import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateBlogPostResponse = { createBlogPost: { id: string; title: string; content: string } };

export const createBlogPost = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateBlogPost($input: CreateBlogPostInput!) {
      createBlogPost(input: $input) {
        id
        title
        content
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateBlogPostResponse>(mutation, { input });
    return response.createBlogPost;
  } catch (error) {
    throw new GraphQLError('Failed to create blog post', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
