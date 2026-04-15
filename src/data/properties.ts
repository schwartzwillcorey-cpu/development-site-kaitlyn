/**
 * Mock property data.
 *
 * TO SWAP TO AIRTABLE:
 * 1. Create src/data/airtable.ts with a fetchProperties() function
 * 2. Map Airtable fields to the Property type defined in types.ts
 * 3. Update getPropertiesByCommunity() and getPropertyBySlug() to use the fetched data
 *
 * Field mapping reminder (Airtable field → type field):
 *   "Slug"              → slug
 *   "Address"           → address
 *   "Lot Number"        → lotNumber
 *   "Community"         → communityId (linked record → use record ID or slug)
 *   "Status"            → status  ('available' | 'pending' | 'sold' | 'coming-soon')
 *   "Price"             → price (number)
 *   "Beds"              → beds
 *   "Baths"             → baths
 *   "Square Feet"       → sqft
 *   "Description"       → description
 *   "Featured"          → featured (checkbox)
 *   "Images"            → images (attachments → extract .url from each)
 *   "External URL"      → externalListingUrl
 */

import type { Property } from './types';

export const properties: Property[] = [
  // ── Park Central (under $300k) ─────────────────────────────────
  {
    id: 'pc-001',
    slug: 'park-central-lot-4',
    address: '412 Park Central Drive',
    lotNumber: 'Lot 4',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'available',
    price: 269000,
    beds: 3,
    baths: 2,
    sqft: 1540,
    description:
      'A well-designed 3-bedroom home with an open kitchen and living area, vaulted ceilings, and a large backyard. The primary suite is on the main floor. Attached two-car garage. Everything you need, nothing you don\'t.',
    featured: true,
    images: ['https://placehold.co/1200x750/3d6b4f/ffffff?text=Park+Central+Lot+4'],
    externalListingUrl: '',
  },
  {
    id: 'pc-002',
    slug: 'park-central-lot-7',
    address: '428 Park Central Drive',
    lotNumber: 'Lot 7',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'available',
    price: 245000,
    beds: 3,
    baths: 2,
    sqft: 1380,
    description:
      'Move-in ready 3-bedroom home on a corner lot with excellent natural light. Modern kitchen with stainless appliances, hardwood floors throughout main living areas, and a covered back patio.',
    featured: false,
    images: ['https://placehold.co/1200x750/4a7c5e/ffffff?text=Park+Central+Lot+7'],
    externalListingUrl: '',
  },
  {
    id: 'pc-003',
    slug: 'park-central-lot-11',
    address: '501 Birchwood Court',
    lotNumber: 'Lot 11',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'pending',
    price: 289000,
    beds: 4,
    baths: 2.5,
    sqft: 1820,
    description:
      'Spacious 4-bedroom home with an open-plan main floor, quartz countertops, and a large covered deck. Cul-de-sac location with minimal through traffic.',
    featured: true,
    images: ['https://placehold.co/1200x750/3d6b4f/ffffff?text=Park+Central+Lot+11'],
    externalListingUrl: '',
  },
  {
    id: 'pc-004',
    slug: 'park-central-lot-14',
    address: '518 Birchwood Court',
    lotNumber: 'Lot 14',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'available',
    price: 255000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    description:
      'Ranch-style home with an open floor plan, split-bedroom layout, and a sunlit kitchen. Low-maintenance yard, attached garage, and located near the neighborhood trail entrance.',
    featured: false,
    images: ['https://placehold.co/1200x750/4a7c5e/ffffff?text=Park+Central+Lot+14'],
    externalListingUrl: '',
  },
  {
    id: 'pc-005',
    slug: 'park-central-lot-19',
    address: '247 Oak Terrace Lane',
    lotNumber: 'Lot 19',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'sold',
    price: 262000,
    beds: 3,
    baths: 2,
    sqft: 1490,
    description:
      'This home has sold. Check back for similar homes in Park Central or browse available listings below.',
    featured: false,
    images: ['https://placehold.co/1200x750/888888/ffffff?text=Sold'],
    externalListingUrl: '',
  },
  {
    id: 'pc-006',
    slug: 'park-central-lot-22',
    address: '261 Oak Terrace Lane',
    lotNumber: 'Lot 22',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'available',
    price: 279000,
    beds: 4,
    baths: 2.5,
    sqft: 1760,
    description:
      'One of the larger homes in Park Central. Four bedrooms, two and a half baths, open kitchen, and a finished bonus room. Oversized lot with mature landscaping.',
    featured: true,
    images: ['https://placehold.co/1200x750/3d6b4f/ffffff?text=Park+Central+Lot+22'],
    externalListingUrl: '',
  },
  {
    id: 'pc-007',
    slug: 'park-central-lot-23',
    address: '265 Oak Terrace Lane',
    lotNumber: 'Lot 23',
    communityId: 'park-central',
    communitySlug: 'park-central',
    status: 'coming-soon',
    price: 258000,
    beds: 3,
    baths: 2,
    sqft: 1510,
    description:
      'Coming soon — construction nearing completion. Contact us to be first in line for a showing.',
    featured: false,
    images: ['https://placehold.co/1200x750/4a7c5e/ffffff?text=Coming+Soon'],
    externalListingUrl: '',
  },

  // ── Grace Haven (over $300k) ────────────────────────────────────
  {
    id: 'gh-001',
    slug: 'grace-haven-lot-3',
    address: '14 Grace Haven Court',
    lotNumber: 'Lot 3',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'available',
    price: 349000,
    beds: 3,
    baths: 2,
    sqft: 1980,
    description:
      'A modern open-concept home with a chef-inspired kitchen, engineered hardwood floors, and a covered rear patio. Energy-efficient construction throughout. One of the best values in Grace Haven.',
    featured: true,
    images: [
      'https://placehold.co/1200x750/2d4a3e/ffffff?text=Grace+Haven+Lot+3',
      'https://placehold.co/1200x750/3a5e4f/ffffff?text=Grace+Haven+Lot+3+%232',
    ],
    externalListingUrl: '',
  },
  {
    id: 'gh-002',
    slug: 'grace-haven-lot-5',
    address: '22 Grace Haven Court',
    lotNumber: 'Lot 5',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'available',
    price: 318000,
    beds: 3,
    baths: 2,
    sqft: 1840,
    description:
      'Clean, modern construction with an open floor plan and abundant natural light. Kitchen island seats four, primary bath has a walk-in shower, and the garage has an EV outlet pre-wired.',
    featured: false,
    images: ['https://placehold.co/1200x750/2d4a3e/ffffff?text=Grace+Haven+Lot+5'],
    externalListingUrl: '',
  },
  {
    id: 'gh-003',
    slug: 'grace-haven-lot-8',
    address: '108 Grace Haven Boulevard',
    lotNumber: 'Lot 8',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'available',
    price: 459000,
    beds: 4,
    baths: 3,
    sqft: 2610,
    description:
      'Premium corner lot home with soaring 10-foot ceilings, a formal dining space, finished walk-out basement, and an expansive deck. One of the standout homes in Grace Haven.',
    featured: true,
    images: ['https://placehold.co/1200x750/2d4a3e/ffffff?text=Grace+Haven+Lot+8'],
    externalListingUrl: '',
  },
  {
    id: 'gh-004',
    slug: 'grace-haven-lot-12',
    address: '130 Grace Haven Boulevard',
    lotNumber: 'Lot 12',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'pending',
    price: 385000,
    beds: 4,
    baths: 2.5,
    sqft: 2290,
    description:
      'Four-bedroom home with a flexible open loft — perfect for a playroom, office, or reading room. Primary suite on the main floor, large laundry with built-ins, two-car garage with storage nook.',
    featured: false,
    images: ['https://placehold.co/1200x750/3a5e4f/ffffff?text=Grace+Haven+Lot+12'],
    externalListingUrl: '',
  },
  {
    id: 'gh-005',
    slug: 'grace-haven-lot-15',
    address: '148 Grace Haven Boulevard',
    lotNumber: 'Lot 15',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'available',
    price: 332000,
    beds: 3,
    baths: 2.5,
    sqft: 2020,
    description:
      'Three-bedroom home with a powder room for guests, open kitchen overlooking the living area, and a private backyard with enough space for a garden or outdoor dining setup.',
    featured: false,
    images: ['https://placehold.co/1200x750/2d4a3e/ffffff?text=Grace+Haven+Lot+15'],
    externalListingUrl: '',
  },
  {
    id: 'gh-006',
    slug: 'grace-haven-lot-17',
    address: '156 Grace Haven Boulevard',
    lotNumber: 'Lot 17',
    communityId: 'grace-haven',
    communitySlug: 'grace-haven',
    status: 'sold',
    price: 341000,
    beds: 3,
    baths: 2,
    sqft: 1900,
    description:
      'This home has sold. Contact us for current availability or browse other homes in Grace Haven.',
    featured: false,
    images: ['https://placehold.co/1200x750/888888/ffffff?text=Sold'],
    externalListingUrl: '',
  },
];

/** All properties for a given community slug, sorted: available first, then pending, then others */
export function getPropertiesByCommunity(communitySlug: string): Property[] {
  const statusOrder: Record<string, number> = {
    available: 0,
    'coming-soon': 1,
    pending: 2,
    sold: 3,
  };
  return properties
    .filter((p) => p.communitySlug === communitySlug)
    .sort((a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9));
}

/** Look up a single property by its slug */
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

/** Featured properties across all communities (for homepage) */
export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured && p.status !== 'sold');
}
