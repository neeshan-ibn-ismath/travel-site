import { GraphQLError } from 'graphql';
import { pgClient } from '../../src/lib/postgraphile';

// --- Types for mutation responses ---

type CreateVenueResponse = {
  createVenue: {
    id: string;
    name: string;
    price: number;
  };
};

type CreateBlogPostResponse = {
  createBlogPost: {
    id: string;
    title: string;
    content: string;
  };
};

type DeleteResponse = boolean;

type CreateBlogCommentResponse = {
  createBlogComment: {
    id: string;
    content: string;
  };
};

type SaveVenueResponse = {
  saveVenue: {
    userId: string;
    venueId: string;
  };
};

type CreateUserResponse = {
  createUser: {
    id: string;
    name: string;
    email: string;
  };
};

type CreateBlogTagResponse = {
  createBlogTag: {
    id: number;
    name: string;
  };
};

type CreateBlogCategoryResponse = {
  createBlogCategory: {
    id: number;
    name: string;
  };
};

export const Mutation = {
  createVenue: async (_: any, { input }: any) => {
    const mutation = `
      mutation CreateVenue($input: CreateVenueInput!) {
        createVenue(input: $input) {
          id
          name
          price
        }
      }
    `;
    try {
      const response = await pgClient.request<CreateVenueResponse>(mutation, { input });
      return response.createVenue;
    } catch (error) {
      throw new GraphQLError('Failed to create venue', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  createBlogPost: async (_: any, { input }: any) => {
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
  },

  deleteBlogPost: async (_: any, { id }: { id: string }) => {
    const mutation = `
      mutation DeleteBlogPost($id: UUID!) {
        deleteBlogPost(id: $id)
      }
    `;
    try {
      const response = await pgClient.request<{ deleteBlogPost: DeleteResponse }>(mutation, { id });
      return response.deleteBlogPost;
    } catch (error) {
      throw new GraphQLError('Failed to delete blog post', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  createBlogComment: async (_: any, { input }: any) => {
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
  },

  deleteBlogComment: async (_: any, { id }: { id: string }) => {
    const mutation = `
      mutation DeleteBlogComment($id: UUID!) {
        deleteBlogComment(id: $id)
      }
    `;
    try {
      const response = await pgClient.request<{ deleteBlogComment: DeleteResponse }>(mutation, { id });
      return response.deleteBlogComment;
    } catch (error) {
      throw new GraphQLError('Failed to delete blog comment', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  saveVenue: async (_: any, { input }: any) => {
    const mutation = `
      mutation SaveVenue($input: SaveVenueInput!) {
        saveVenue(input: $input) {
          userId
          venueId
        }
      }
    `;
    try {
      const response = await pgClient.request<SaveVenueResponse>(mutation, { input });
      return response.saveVenue;
    } catch (error) {
      throw new GraphQLError('Failed to save venue', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  unsaveVenue: async (_: any, { input }: any) => {
    const mutation = `
      mutation UnsaveVenue($input: SaveVenueInput!) {
        unsaveVenue(input: $input)
      }
    `;
    try {
      const response = await pgClient.request<{ unsaveVenue: boolean }>(mutation, { input });
      return response.unsaveVenue;
    } catch (error) {
      throw new GraphQLError('Failed to unsave venue', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  createUser: async (_: any, { input }: any) => {
    const mutation = `
      mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          id
          name
          email
        }
      }
    `;
    try {
      const response = await pgClient.request<CreateUserResponse>(mutation, { input });
      return response.createUser;
    } catch (error) {
      throw new GraphQLError('Failed to create user', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  createBlogTag: async (_: any, { input }: any) => {
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
  },

  createBlogCategory: async (_: any, { input }: any) => {
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
  },
};
