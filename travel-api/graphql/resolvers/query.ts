import { pgClient } from '../../src/lib/postgraphile';

interface Venue {
  id: number;
  name: string;
  price: number;
  starRating: number;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface Amenity {
  id: number;
  name: string;
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
          nodes {
            id
            name
            price
            starRating
          }
        }
      }
    `;
    const response = await pgClient.request<{ searchVenues: { nodes: Venue[] } }>(query, args);
    return response.searchVenues.nodes;
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
};
