import { GraphQLError } from 'graphql';
import { pgClient } from '../../../../../src/lib/postgraphile';

interface VenueWhatsappLink {
  id: string;
  name: string;
  phoneNumber: string;
  whatsappUrl: string;
}

export const allVenueWhatsappLinks = async (): Promise<VenueWhatsappLink[]> => {
  const query = `
    query {
      venueWhatsappLinks {
        nodes {
          id
          name
          phoneNumber
          whatsappUrl
        }
      }
    }
  `;

  try {
    const response = await pgClient.request<{ venueWhatsappLinks: { nodes: VenueWhatsappLink[] } }>(query);
    return response.venueWhatsappLinks.nodes;
  } catch (error) {
    throw new GraphQLError('Failed to fetch venue WhatsApp links', {
      extensions: { code: 'INTERNAL_SERVER_ERROR', originalError: error },
    });
  }
};
