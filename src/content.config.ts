import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    conference: z.string(),
    date: z.date(),
    location: z.string().optional(),
    description: z.string(),
    slidesUrl: z.string().optional(),
    topics: z.array(z.string()).optional(),
  }),
});

export const collections = { talks };
