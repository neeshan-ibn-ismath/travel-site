import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

export const deleteBlogPost = async (_: any, { id }: { id: string }) => {
  const mutation = `
    mutation DeleteBlogPost($id: UUID!) {
      deleteBlogPost(id: $id)
    }
  `;
  try {
    const response = await pgClient.request<{ deleteBlogPost: boolean }>(mutation, { id });
    return response.deleteBlogPost;
  } catch (error) {
    throw new GraphQLError('Failed to delete blog post', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
