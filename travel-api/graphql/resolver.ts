import { GraphQLClient } from 'graphql-request';
import { Request, Response } from 'express';
import { GraphQLUUID, GraphQLDateTime } from 'graphql-scalars';

// Interfaces reused from Query.ts or redefine here if needed
interface Venue {
  id: string;
  name: string;
  town: string;
  district: string;
  accommodationType: string;
  price: number;
  starRating: number;
  phoneNumber?: string;
}

interface VenueWhatsappLink {
  venueId: string;
  venueName: string;
  phoneNumber: string;
  whatsappUrl: string;
}

const client = new GraphQLClient('http://localhost:5000/graphql');

export const resolvers = {
    UUID: GraphQLUUID,
    Datetime: GraphQLDateTime,
    
  Query: {
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
            price
            starRating
            accommodationType
            phoneNumber
          }
        }
      `;

      interface SearchVenuesResponse {
        searchVenues: Venue[];
      }

      const result = await client.request<SearchVenuesResponse>(query, args);
      return result.searchVenues;
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

      const result = await client.request<VenueWhatsappLinksResponse>(query);
      return result.allVenueWhatsappLinks.nodes;
    },
  },
};
