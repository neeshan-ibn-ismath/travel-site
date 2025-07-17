import { pgClient } from '../../src/lib/postgraphile';

// Types for mutation responses
type CreateVenueResponse = {
  createVenue: {
    venue: {
      id: string;
      name: string;
      price: number;
    };
  };
};

type CreateBlogPostResponse = {
  createBlogPost: {
    blogPost: {
      id: string;
      title: string;
      content: string;
    };
  };
};

type CreateBlogCommentResponse = {
  createBlogComment: {
    blogComment: {
      id: string;
      content: string;
    };
  };
};

export const Mutation = {
  createVenue: async (_: any, { input }: any) => {
    const mutation = `
      mutation CreateVenue($input: CreateVenueInput!) {
        createVenue(input: $input) {
          venue {
            id
            name
            price
          }
        }
      }
    `;
    const response = await pgClient.request<CreateVenueResponse>(mutation, { input });
    return response.createVenue.venue;
  },

  createBlogPost: async (_: any, { input }: any) => {
    const mutation = `
      mutation CreateBlogPost($input: CreateBlogPostInput!) {
        createBlogPost(input: $input) {
          blogPost {
            id
            title
            content
          }
        }
      }
    `;
    const response = await pgClient.request<CreateBlogPostResponse>(mutation, { input });
    return response.createBlogPost.blogPost;
  },

  createBlogComment: async (_: any, { input }: any) => {
    const mutation = `
      mutation CreateBlogComment($input: CreateBlogCommentInput!) {
        createBlogComment(input: $input) {
          blogComment {
            id
            content
          }
        }
      }
    `;
    const response = await pgClient.request<CreateBlogCommentResponse>(mutation, { input });
    return response.createBlogComment.blogComment;
  },
};
