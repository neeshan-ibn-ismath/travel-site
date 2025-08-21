import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type SaveVenueResponse = { saveVenue: { userId: string; venueId: string } };

export const saveVenue = async (_: any, { input }: any) => {
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
};
