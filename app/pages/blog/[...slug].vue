<template>
  <article>
    <NuxtLink
      to="/blog"
      class="text-accent decoration-accent/40 hover:decoration-accent text-sm underline decoration-1 underline-offset-4 transition-colors"
    >
      &larr; Back to blog
    </NuxtLink>

    <header class="mt-8 mb-10">
      <h1 class="text-accent font-display text-4xl font-bold tracking-tight">{{ post!.title }}</h1>
      <PostDate :date="post!.date" class="mt-2 block" />
    </header>

    <ContentRenderer
      :value="post!"
      class="prose prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:decoration-accent/40 prose-a:hover:decoration-accent prose-a:underline-offset-4 max-w-none"
    />

    <nav
      v-if="newer || older"
      class="border-line mt-16 grid grid-cols-1 gap-8 border-t pt-8 sm:grid-cols-2"
    >
      <NuxtLink v-if="newer" :to="newer.path" class="group text-accent">
        <span class="text-muted text-sm">&larr; Newer Post</span>
        <span
          class="font-display mt-1 block font-bold tracking-tight underline-offset-4 group-hover:underline"
        >
          {{ newer.title }}
        </span>
      </NuxtLink>

      <NuxtLink
        v-if="older"
        :to="older.path"
        class="group text-accent sm:col-start-2 sm:text-right"
      >
        <span class="text-muted text-sm">Older Post &rarr;</span>
        <span
          class="font-display mt-1 block font-bold tracking-tight underline-offset-4 group-hover:underline"
        >
          {{ older.title }}
        </span>
      </NuxtLink>
    </nav>
  </article>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })

const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!post.value || post.value.draft) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
    fatal: true,
  })
}

// Same query as the blog index, so the nav walks the list in the order it shows.
const { data: neighbors } = await useAsyncData(`blog-neighbors-${route.path}`, async () => {
  const posts = await queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .select('path', 'title')
    .all()

  const index = posts.findIndex((p) => p.path === route.path)

  if (index === -1) {
    return { newer: null, older: null }
  }

  // Posts run newest-first, so the entry before this one is the newer post.
  return {
    newer: posts[index - 1] ?? null,
    older: posts[index + 1] ?? null,
  }
})

const newer = computed(() => neighbors.value?.newer)
const older = computed(() => neighbors.value?.older)

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>
