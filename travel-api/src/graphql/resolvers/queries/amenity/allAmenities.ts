import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface Amenity {
  id: number;
  name: string;
}

export const allAmenities = async (): Promise<Amenity[]> => {
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
};
