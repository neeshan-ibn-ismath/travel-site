import { GraphQLError } from 'graphql';
import { pgClient } from '../../src/lib/postgraphile';

interface Venue {
  id: string;
  name: string;
  price: number;
  starRating: number;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

interface Amenity {
  id: number;
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface BlogTag {
  id: number;
  name: string;
}

interface BlogCategory {
  id: number;
  name: string;
}

interface VenueWhatsappLink {
  venueId: string;
  phoneNumber: string;
  url: string;
}

interface SearchVenuesArgs {
  searchTown?: string;
  searchDistrict?: string;
  searchAccommodationType?: string;
  minPrice?: number;
  maxPrice?: number;
  minStar?: number;
  maxStar?: number;
  requiredAmenities?: number[];
}

export const Query = {
  allVenues: async (): Promise<Venue[]> => {
    const query = `
      query {
        allVenues {
          nodes {
            id
            name
            price
            starRating
          }
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allVenues: { nodes: Venue[] } }>(query);
      return response.allVenues.nodes;
    } catch (error) {
      throw new GraphQLError('Failed to fetch all venues', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  searchVenues: async (_: any, args: SearchVenuesArgs): Promise<Venue[]> => {
    const query = `
      query SearchVenues(
        $searchTown: String
        $searchDistrict: String
        $searchAccommodationType: String
        $minPrice: Float
        $maxPrice: Float
        $minStar: Int
        $maxStar: Int
        $requiredAmenities: [Int!]
      ) {
        searchVenues(
          searchTown: $searchTown
          searchDistrict: $searchDistrict
          searchAccommodationType: $searchAccommodationType
          minPrice: $minPrice
          maxPrice: $maxPrice
          minStar: $minStar
          maxStar: $maxStar
          requiredAmenities: $requiredAmenities
        ) {
          id
          name
          price
          starRating
        }
      }
    `;
    try {
      const response = await pgClient.request<{ searchVenues: Venue[] }>(query, args);
      return response.searchVenues;
    } catch (error) {
      throw new GraphQLError('Failed to search venues', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  allBlogPosts: async (): Promise<BlogPost[]> => {
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
  },

  allAmenities: async (): Promise<Amenity[]> => {
    const query = `
      query {
        allAmenities {
          nodes {
            id
            name
          }
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allAmenities: { nodes: Amenity[] } }>(query);
      return response.allAmenities.nodes;
    } catch (error) {
      throw new GraphQLError('Failed to fetch amenities', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  allUsers: async (): Promise<User[]> => {
    const query = `
      query {
        allUsers {
          id
          name
          email
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allUsers: User[] }>(query);
      return response.allUsers;
    } catch (error) {
      throw new GraphQLError('Failed to fetch users', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  allBlogTags: async (): Promise<BlogTag[]> => {
    const query = `
      query {
        allBlogTags {
          id
          name
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allBlogTags: BlogTag[] }>(query);
      return response.allBlogTags;
    } catch (error) {
      throw new GraphQLError('Failed to fetch blog tags', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  allBlogCategories: async (): Promise<BlogCategory[]> => {
    const query = `
      query {
        allBlogCategories {
          id
          name
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allBlogCategories: BlogCategory[] }>(query);
      return response.allBlogCategories;
    } catch (error) {
      throw new GraphQLError('Failed to fetch blog categories', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },

  allVenueWhatsappLinks: async (): Promise<VenueWhatsappLink[]> => {
    const query = `
      query {
        allVenueWhatsappLinks {
          venueId
          phoneNumber
          url
        }
      }
    `;
    try {
      const response = await pgClient.request<{ allVenueWhatsappLinks: VenueWhatsappLink[] }>(query);
      return response.allVenueWhatsappLinks;
    } catch (error) {
      throw new GraphQLError('Failed to fetch WhatsApp links', {
        extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
      });
    }
  },
};
