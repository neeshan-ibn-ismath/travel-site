import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface BlogCategory {
  id: string;
  name: string;
}

export const allBlogCategories = async (): Promise<BlogCategory[]> => {
  const query = `
    query {
      allBlogCategories {
        nodes {
          id
          name
        }
      }
    }
  `;
  try {
    const response = await pgClient.request<{ allBlogCategories: { nodes: BlogCategory[] } }>(query);
    return response.allBlogCategories.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch blog categories', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
