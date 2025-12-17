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
      'Economics',
    ]),
    readTime: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    accent: z.enum(['orange', 'blue', 'purple', 'pink']).default('orange'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
