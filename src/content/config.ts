import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Architecture',
      'Infrastructure',
      'Data Engineering',
      'Database',
      'Economics',
    ]),
    readTime: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    accent: z.enum(['orange', 'blue', 'purple', 'pink', 'violet']).default('orange'),
    draft: z.boolean().default(false),
    format: z.enum(['article', 'story']).default('article'),
    storyUrl: z.string().optional(),
  }),
});

export const collections = { blog };
