/**
 * Prepends the Astro base URL to any public asset path.
 * Works correctly in both local dev (base = '/') and
 * GitHub Pages (base = '/development-site-kaitlyn/').
 *
 * Usage: asset('/images/hero.jpg')
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
