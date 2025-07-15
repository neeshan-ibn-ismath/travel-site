import { GraphQLClient } from 'graphql-request';
import { Request, Response } from 'express';

// Define interfaces for the data you expect from PostGraphile

export interface Venue {
  id: string;
  name: string;
  town: string;
  district: string;
  accommodationType: string;
  price: number;
  starRating: number;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface VenueWhatsappLink {
  venueId: string;
  venueName: string;
  phoneNumber: string;
  whatsappUrl: string;
}

const POSTGRAPHILE_ENDPOINT = 'http://localhost:5000/graphql';
const client = new GraphQLClient(POSTGRAPHILE_ENDPOINT);

const Query = {
  searchVenues: async (
    _: any,
    args: {
      searchTown?: string;
      searchDistrict?: string;
      searchAccommodationType?: string;
      minPrice?: number;
      maxPrice?: number;
      minStar?: number;
      maxStar?: number;
      requiredAmenities?: number[];
    },
    ctx: { req: Request; res: Response }
  ): Promise<Venue[]> => {
    const query = `
      query SearchVenues(
        $searchTown: String
        $searchDistrict: String
        $searchAccommodationType: String
        $minPrice: Float
        $maxPrice: Float
        $minStar: Int
        $maxStar: Int
        $requiredAmenities: [Int]
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
          town
          district
          accommodationType
          price
          starRating
          phoneNumber
          createdAt
          updatedAt
        }
      }
    `;

    // Type the response data
    interface SearchVenuesResponse {
      searchVenues: Venue[];
    }

    const data = await client.request<SearchVenuesResponse>(query, args);
    return data.searchVenues;
  },

  venueWhatsappLinks: async (): Promise<VenueWhatsappLink[]> => {
    const query = `
      query {
        allVenueWhatsappLinks {
          nodes {
            venueId
            venueName
            phoneNumber
            whatsappUrl
          }
        }
      }
    `;

    interface VenueWhatsappLinksResponse {
      allVenueWhatsappLinks: {
        nodes: VenueWhatsappLink[];
      };
    }

    const data = await client.request<VenueWhatsappLinksResponse>(query);
    return data.allVenueWhatsappLinks.nodes;
  },
};

export default Query;
