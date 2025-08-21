import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateBlogCommentResponse = { createBlogComment: { id: string; content: string } };

export const createBlogComment = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateBlogComment($input: CreateBlogCommentInput!) {
      createBlogComment(input: $input) {
        id
        content
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateBlogCommentResponse>(mutation, { input });
    return response.createBlogComment;
  } catch (error) {
    throw new GraphQLError('Failed to create blog comment', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
