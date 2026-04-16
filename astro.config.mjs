import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://schwartzwillcorey-cpu.github.io',
  // Only apply base path on GitHub Pages — not during local dev
  base: process.env.GITHUB_ACTIONS ? '/development-site-kaitlyn' : '/',
});
