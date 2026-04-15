# development-site-kelly

A clean, mobile-first real estate listing website built with Astro.
Designed for real estate partners managing homes across a small number of communities.

**Buyers scan a QR code on signage → land on the community page → browse homes → view property detail.**

---

## Project Structure

```
development-site-kelly/
├── public/
│   ├── favicon.svg
│   └── images/                  ← Drop your actual images here
│       ├── communities/         ← One hero image per community
│       └── properties/          ← Property photos (one or more per home)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro ← Wraps every page (<head>, header, footer)
│   │   │   ├── Header.astro     ← Site navigation (desktop + mobile)
│   │   │   └── Footer.astro     ← Site footer
│   │   ├── ui/
│   │   │   ├── CommunityCard.astro  ← Card used on homepage + /communities
│   │   │   ├── PropertyCard.astro   ← Card used in grids and search results
│   │   │   ├── PropertyMeta.astro   ← Beds/baths/sqft/price fact row
│   │   │   ├── StatusBadge.astro    ← Available / Pending / Sold chip
│   │   │   ├── CTASection.astro     ← Reusable full-width CTA banner
│   │   │   └── InquiryForm.astro    ← Contact/inquiry form (not yet wired)
│   │   └── search/
│   │       └── PropertySearch.astro ← Lot/address search bar (vanilla JS)
│   │
│   ├── data/
│   │   ├── types.ts             ← TypeScript interfaces (Community, Property)
│   │   ├── communities.ts       ← Mock community records + helper functions
│   │   └── properties.ts        ← Mock property records + helper functions
│   │
│   ├── pages/
│   │   ├── index.astro                  → /
│   │   ├── communities/
│   │   │   ├── index.astro              → /communities
│   │   │   └── [slug].astro             → /communities/[slug]  ← QR code target
│   │   ├── homes/
│   │   │   └── [slug].astro             → /homes/[slug]
│   │   └── thanks.astro                 → /thanks  (form redirect)
│   │
│   └── styles/
│       └── global.css           ← Design tokens + global base styles
│
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

---

## Running Locally

**Prerequisites:** Node.js 18+

```bash
cd development-site-kelly
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

**Other commands:**

| Command          | Description                      |
|------------------|----------------------------------|
| `npm run dev`    | Start dev server with hot reload  |
| `npm run build`  | Build static site to `dist/`      |
| `npm run preview`| Preview the production build      |

---

## How Data Is Organized

All data lives in `src/data/`. The site uses **local mock data** formatted to match
the same structure that an Airtable integration would return.

### Types

`src/data/types.ts` — defines two interfaces:

- `Community` — id, slug, name, descriptions, heroImage, location, priceRange, etc.
- `Property` — id, slug, address, lotNumber, communityId, status, price, beds, baths, sqft, description, images, externalListingUrl, featured

### Communities

`src/data/communities.ts` — exports:

- `communities` — array of Community records
- `getCommunityBySlug(slug)` — helper used in `[slug].astro`

### Properties

`src/data/properties.ts` — exports:

- `properties` — array of Property records
- `getPropertiesByCommunity(communitySlug)` — returns all properties for a community, sorted by status (available first)
- `getPropertyBySlug(slug)` — used by the property detail page
- `getFeaturedProperties()` — used by the homepage featured section

### Property Status Values

| Value          | Meaning                                           |
|----------------|---------------------------------------------------|
| `available`    | Active listing, can inquire                        |
| `coming-soon`  | Under construction or not yet listed               |
| `pending`      | Under contract, shown with badge                   |
| `sold`         | Sold — page stays live, form is replaced with notice |

---

## Replacing Mock Data with Airtable

When ready to connect Airtable, **only the data layer changes.** The rest of the site
stays the same.

### Step 1 — Create `src/data/airtable.ts`

```typescript
import type { Community, Property } from './types';

const BASE_ID    = import.meta.env.AIRTABLE_BASE_ID;
const API_KEY    = import.meta.env.AIRTABLE_API_KEY;

async function airtableFetch(table: string) {
  const res = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(table)}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );
  const json = await res.json();
  return json.records;
}

export async function fetchCommunities(): Promise<Community[]> {
  const records = await airtableFetch('Communities');
  return records.map((r: any) => ({
    id:               r.id,
    slug:             r.fields['Slug'],
    name:             r.fields['Community Name'],
    shortDescription: r.fields['Short Description'],
    longDescription:  r.fields['Long Description'],
    heroImage:        r.fields['Hero Image']?.[0]?.url ?? '',
    location:         r.fields['Location'],
    totalLots:        r.fields['Total Lots'],
    availableLots:    r.fields['Available Lots'],
    priceRange:       r.fields['Price Range'],
  }));
}

export async function fetchProperties(): Promise<Property[]> {
  const records = await airtableFetch('Properties');
  return records.map((r: any) => ({
    id:                 r.id,
    slug:               r.fields['Slug'],
    address:            r.fields['Address'],
    lotNumber:          r.fields['Lot Number'],
    communityId:        r.fields['Community ID'],
    communitySlug:      r.fields['Community Slug'],
    status:             r.fields['Status'],
    price:              r.fields['Price'],
    beds:               r.fields['Beds'],
    baths:              r.fields['Baths'],
    sqft:               r.fields['Square Feet'],
    description:        r.fields['Description'],
    featured:           r.fields['Featured'] ?? false,
    images:             (r.fields['Images'] ?? []).map((img: any) => img.url),
    externalListingUrl: r.fields['External URL'] ?? '',
  }));
}
```

### Step 2 — Add environment variables

Create a `.env.local` file (never commit this):

```
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
```

In Netlify: add these under **Site Settings → Environment Variables**.

### Step 3 — Update page imports

In each of the three pages that import from `communities.ts` or `properties.ts`:

**Before:**
```typescript
import { communities } from '../../data/communities';
import { getPropertiesByCommunity } from '../../data/properties';
```

**After:**
```typescript
import { fetchCommunities, fetchProperties } from '../../data/airtable';
const communities = await fetchCommunities();
const properties  = await fetchProperties();
// Then inline the helper filter/sort logic from properties.ts as needed
```

That's the complete swap. No component changes required.

---

## Deploying to GitHub / Netlify

### First deploy

1. Push the project to a new GitHub repository
2. In Netlify: **Add new site → Import from Git → select the repo**
3. Netlify will auto-detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Hit **Deploy**

### Subsequent deploys

Every push to `main` triggers a new Netlify build automatically.

### Custom domain

In Netlify: **Domain Management → Add custom domain**. Point your DNS to Netlify's nameservers.

### QR Codes

- Each community page lives at `/communities/[slug]`
  - Maplewood Heights → `/communities/maplewood-heights`
  - Riverside Estates → `/communities/riverside-estates`
- Generate your QR codes pointing at `https://your-domain.com/communities/[slug]`
- When individual property QR codes are needed in the future, point them to `/homes/[slug]`

---

## Adding Images

Replace placeholder image paths in `src/data/communities.ts` and `src/data/properties.ts`
with real paths. Drop image files into `public/images/`:

```
public/images/communities/maplewood-heights-hero.jpg
public/images/communities/riverside-estates-hero.jpg
public/images/properties/mh-001-1.jpg
...
```

Recommended sizes:
- Community hero: 1600×900px (16:9)
- Property photos: 1200×750px (16:10)

---

## Updating Branding

All design tokens (colors, fonts, spacing) live in `src/styles/global.css` under `:root`.
To rebrand: update the `--color-*` variables. No component changes needed.

Logo: currently renders as a text `KDG` mark. Replace with an `<img>` tag in
`src/components/layout/Header.astro` and `Footer.astro`.

---

## Wiring the Inquiry Form

`src/components/ui/InquiryForm.astro` currently prevents default submit and shows
a success message. When ready:

**Option A — Netlify Forms (easiest):**
Add `data-netlify="true"` to the `<form>` element. Set notification email in Netlify dashboard.

**Option B — n8n / webhook:**
Replace the `TODO` in the `<script>` block with a `fetch()` POST to your webhook URL.

**Option C — Serverless function:**
Add a Netlify Function that calls SendGrid, Resend, or Airtable directly.

The form already includes hidden `context-type`, `context-id`, and `context-label` fields
so every submission is traceable to the property or community the user was viewing.

---

## Notes Before Launch

- [ ] Replace placeholder contact info in `src/pages/index.astro` (email, phone)
- [ ] Add real community and property images to `public/images/`
- [ ] Update `communityId`, `slug`, and `lotNumber` in `src/data/properties.ts` with real data
- [ ] Remove or populate `externalListingUrl` fields with real Zillow/MLS links
- [ ] Set `site:` in `astro.config.mjs` once the production domain is confirmed
- [ ] Wire the inquiry form (Netlify Forms is the fastest path for MVP)
- [ ] Replace placeholder favicon at `public/favicon.svg`
- [ ] Test on real mobile devices before sharing QR codes
