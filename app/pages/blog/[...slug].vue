<script setup lang="ts">
definePageMeta({ layout: 'page' })

const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first(),
)

// Drafts are excluded from the index, so treat them as missing here too.
if (!post.value || post.value.draft) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
    fatal: true,
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>

<template>
  <article>
    <NuxtLink
      to="/blog"
      class="text-ink decoration-ink/40 hover:decoration-ink text-sm underline decoration-1 underline-offset-4 transition-colors"
    >
      &larr; Back to blog
    </NuxtLink>

    <header class="mt-8 mb-10">
      <h1 class="text-ink font-display text-4xl font-bold tracking-tight">{{ post!.title }}</h1>
      <PostDate :date="post!.date" class="mt-2 block" />
    </header>

    <ContentRenderer
      :value="post!"
      class="prose prose-headings:font-display prose-headings:tracking-tight prose-a:text-ink prose-a:decoration-ink/40 prose-a:hover:decoration-ink prose-a:underline-offset-4 max-w-none"
    />
  </article>
</template>
