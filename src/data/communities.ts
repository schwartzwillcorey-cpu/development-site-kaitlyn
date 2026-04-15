/**
 * Mock community data.
 *
 * TO SWAP TO AIRTABLE:
 * 1. Create src/data/airtable.ts with a fetchCommunities() function
 * 2. Map Airtable fields to the Community type defined in types.ts
 * 3. Replace the export below with: export { fetchCommunities as communities }
 *    or update the import site in pages/communities/[slug].astro and index.astro
 *
 * Field mapping reminder (Airtable field → type field):
 *   "Slug"             → slug
 *   "Community Name"   → name
 *   "Short Desc"       → shortDescription
 *   "Description"      → longDescription
 *   "Hero Image"       → heroImage (Airtable attachment URL)
 *   "Location"         → location
 *   "Total Lots"       → totalLots
 *   "Available Lots"   → availableLots
 *   "Price Range"      → priceRange
 */

import type { Community } from './types';

export const communities: Community[] = [
  {
    id: 'park-central',
    slug: 'park-central',
    name: 'Park Central',
    shortDescription:
      'An affordable, welcoming community with thoughtfully designed homes — ideal for first-time buyers and growing families.',
    longDescription:
      'Park Central is built around the idea that quality housing should be within reach. Homes are designed with smart layouts, durable finishes, and just the right amount of space — nothing wasted, nothing missing. The neighborhood sits close to parks, schools, and everyday conveniences, making it a practical and comfortable place to call home. All homes are priced under $300,000.',
    heroImage: '/images/kailyn development shot overhead.jpg',
    location: 'Greenfield County',
    totalLots: 20,
    availableLots: 7,
    priceRange: '$220,000 – $295,000',
  },
  {
    id: 'grace-haven',
    slug: 'grace-haven',
    name: 'Grace Haven',
    shortDescription:
      'Elevated homes with premium finishes and generous space — for buyers who want more without compromising quality.',
    longDescription:
      'Grace Haven is designed for buyers who are ready to step up. Homes feature open-concept layouts, upgraded finishes, and the kind of details that make a house feel like a real home. The community offers a quieter, more private setting while staying connected to everything Greenfield County has to offer. All homes are priced above $300,000.',
    heroImage: 'https://placehold.co/1600x900/2d4a3e/ffffff?text=Grace+Haven',
    location: 'Greenfield County',
    totalLots: 18,
    availableLots: 6,
    priceRange: '$315,000 – $480,000',
  },
];

/** Helper: look up a community by its slug */
export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
