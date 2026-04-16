/**
 * Core data types for the site.
 *
 * These types define the shape of communities and properties.
 * When switching to Airtable, map the Airtable field names to these types
 * in src/data/airtable.ts (to be created) and leave the rest of the site unchanged.
 */

export type PropertyStatus = 'available' | 'pending' | 'sold' | 'coming-soon';

export interface Community {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  // Optional metadata for display/sorting
  location?: string;
  totalLots?: number;
  availableLots?: number;
  priceRange?: string;
}

export interface Property {
  id: string;
  slug: string;
  address: string;
  lotNumber: string;
  communityId: string;            // Must match a Community.id
  communitySlug: string;          // Convenience — avoids extra lookup in templates
  status: PropertyStatus;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  featured: boolean;
  images: string[];               // Array of image paths or URLs; first image is the card thumbnail
  externalListingUrl?: string;    // Optional Zillow / MLS link
  propertyTaxRate?: number;       // Annual rate as decimal (e.g. 0.018 = 1.8%). Pull from Airtable later.
}
