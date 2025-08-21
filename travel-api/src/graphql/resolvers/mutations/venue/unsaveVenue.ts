import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

export const unsaveVenue = async (_: any, { input }: any) => {
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
};
