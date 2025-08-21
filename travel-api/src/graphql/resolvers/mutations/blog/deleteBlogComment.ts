import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

export const deleteBlogComment = async (_: any, { id }: { id: string }) => {
  const mutation = `
    mutation DeleteBlogComment($id: UUID!) {
      deleteBlogComment(id: $id)
    }
  `;
  try {
    const response = await pgClient.request<{ deleteBlogComment: boolean }>(mutation, { id });
    return response.deleteBlogComment;
  } catch (error) {
    throw new GraphQLError('Failed to delete blog comment', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
