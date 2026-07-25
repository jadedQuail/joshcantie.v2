import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      // 'page' means each file maps 1:1 to a route, derived from its path
      // under content/ — so content/blog/hello-world.md -> /blog/hello-world
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
