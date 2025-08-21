import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface Venue {
  id: string;
  name: string;
  price: number;
  starRating: number;
}

export const allVenues = async (): Promise<Venue[]> => {
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
    `;
  try {
    const response = await pgClient.request<{ allVenues: { nodes: Venue[] } }>(query);
    return response.allVenues.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch all venues', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
