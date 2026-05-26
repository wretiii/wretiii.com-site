import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://wretiii.com',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Automatically adds rel="noopener noreferrer" + target="_blank" to all
    // external links in markdown (talk reference pages) — prevents tab-napping.
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['noopener', 'noreferrer'], target: '_blank' }],
    ],
  },
});
