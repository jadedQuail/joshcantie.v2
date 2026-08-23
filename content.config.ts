import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
      }),
    }),
    portfolio: defineCollection({
      type: 'page',
      source: 'portfolio/**/*.md',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        date: z.string(),
        thumbnail: z.string(),
        url: z.string(),
        description: z.string(),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
