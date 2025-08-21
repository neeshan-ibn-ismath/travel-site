import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

type CreateVenueResponse = {
  createVenue: { id: string; name: string; price: number };
};

export const createVenue = async (_: any, { input }: any) => {
  const mutation = `
    mutation CreateVenue($input: CreateVenueInput!) {
      createVenue(input: $input) {
        id
        name
        price
      }
    }
  `;
  try {
    const response = await pgClient.request<CreateVenueResponse>(mutation, { input });
    return response.createVenue;
  } catch (error) {
    throw new GraphQLError('Failed to create venue', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
