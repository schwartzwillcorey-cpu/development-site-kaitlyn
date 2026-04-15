# Image Folders

Drop your images into the correct folder, then update the matching data file.

---

## /images/communities/
Hero images shown at the top of each community page and on community cards.

| File name                    | Used for                        | Recommended size |
|------------------------------|---------------------------------|------------------|
| park-central-hero.jpg        | Park Central community page     | 1600 x 900 px    |
| grace-haven-hero.jpg         | Grace Haven community page      | 1600 x 900 px    |

After adding: open `src/data/communities.ts` and replace the `heroImage` value with `/images/communities/your-file.jpg`

---

## /images/properties/
Photos for individual property listings. First image is the card thumbnail.

Name them however you like — e.g. `park-central-lot-4-front.jpg`

After adding: open `src/data/properties.ts` and update the `images` array for that property.

---

## /images/branding/
Logo, agent headshot, or any brand asset used in the header/footer.

| Suggested file name  | Used for                        |
|----------------------|---------------------------------|
| logo.png             | Header / footer logo            |
| agent-photo.jpg      | Optional agent photo on homepage |

After adding a logo: open `src/components/layout/Header.astro` and `Footer.astro`
and replace the text `KDG` mark with an `<img>` tag pointing to `/images/branding/logo.png`

---

## Quick tip
All files in `/public/` are served from the root of the site.
A file at `public/images/communities/park-central-hero.jpg` is accessible at:
`http://localhost:4321/images/communities/park-central-hero.jpg`
