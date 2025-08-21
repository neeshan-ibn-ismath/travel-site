import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

export const allBlogPosts = async (): Promise<BlogPost[]> => {
  const query = `
    query {
      allBlogPosts {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  try {
    const response = await pgClient.request<{ allBlogPosts: { nodes: BlogPost[] } }>(query);
    return response.allBlogPosts.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch blog posts', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
