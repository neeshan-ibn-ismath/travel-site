import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface BlogTag {
  id: string;
  name: string;
}

export const allBlogTags = async (): Promise<BlogTag[]> => {
  const query = `
    query {
      allBlogTags {
        nodes {
          id
          name
        }
      }
    }
  `;
  try {
    const response = await pgClient.request<{ allBlogTags: { nodes: BlogTag[] } }>(query);
    return response.allBlogTags.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch blog tags', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
