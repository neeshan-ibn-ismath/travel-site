import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateBlogCategoryResponse = { createBlogCategory: { id: number; name: string } };

export const createBlogCategory = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateBlogCategory($input: CreateBlogCategoryInput!) {
      createBlogCategory(input: $input) {
        id
        name
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateBlogCategoryResponse>(mutation, { input });
    return response.createBlogCategory;
  } catch (error) {
    throw new GraphQLError('Failed to create blog category', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
