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
    const response = await pgClient.request<{ allVenues: { nodes: Venue[] } }>(query);
    return response.allVenues.nodes;
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
    const response = await pgClient.request<{ searchVenues: Venue[] }>(query, args);
    return response.searchVenues;
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
    const response = await pgClient.request<{ allBlogPosts: { nodes: BlogPost[] } }>(query);
    return response.allBlogPosts.nodes;
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
    const response = await pgClient.request<{ allAmenities: { nodes: Amenity[] } }>(query);
    return response.allAmenities.nodes;
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
    const response = await pgClient.request<{ allUsers: User[] }>(query);
    return response.allUsers;
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
    const response = await pgClient.request<{ allBlogTags: BlogTag[] }>(query);
    return response.allBlogTags;
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
    const response = await pgClient.request<{ allBlogCategories: BlogCategory[] }>(query);
    return response.allBlogCategories;
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
    const response = await pgClient.request<{ allVenueWhatsappLinks: VenueWhatsappLink[] }>(query);
    return response.allVenueWhatsappLinks;
  },
};
