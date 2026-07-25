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
      class="text-lagoon decoration-lagoon/40 hover:decoration-lagoon text-sm underline decoration-1 underline-offset-4 transition-colors"
    >
      &larr; Back to blog
    </NuxtLink>

    <header class="mt-8 mb-10">
      <h1 class="text-sun font-display text-4xl">{{ post!.title }}</h1>
      <PostDate :date="post!.date" class="mt-2 block" />
    </header>

    <ContentRenderer
      :value="post!"
      class="prose prose-invert prose-headings:font-display prose-a:text-lagoon prose-a:decoration-lagoon/40 prose-a:hover:decoration-lagoon prose-a:underline-offset-4 max-w-none"
    />
  </article>
</template>
