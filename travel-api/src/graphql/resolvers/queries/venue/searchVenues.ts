import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface Venue {
  id: string;
  name: string;
  price: number;
  starRating: number;
}

export const searchVenues = async (_: any, args: any): Promise<Venue[]> => {
  const query = `
    query SearchVenues($town: String, $district: String, $accommodationType: String, $price: Int, $starRating: Int, $amenities: [String!]) {
      searchVenues(town: $town, district: $district, accommodationType: $accommodationType, price: $price, starRating: $starRating, amenities: $amenities) {
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
};
