import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output for Netlify deployment
  output: 'static',
  // Update this to your production domain once deployed
  // site: 'https://your-domain.netlify.app',
});
