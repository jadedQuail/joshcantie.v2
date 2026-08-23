<template>
  <h1 class="text-accent font-display mb-10 text-4xl font-normal tracking-tight">Blog</h1>

  <p v-if="!posts?.length">No posts yet.</p>

  <ul v-else class="space-y-8">
    <li v-for="post in posts" :key="post.path">
      <h2 class="font-display text-2xl font-bold tracking-tight">
        <NuxtLink
          :to="post.path"
          class="text-accent decoration-1 underline-offset-4 hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>
      <PostDate :date="post.date" />
      <p v-if="post.description" class="mt-1">
        {{ post.description }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page' })

const { data: posts } = await useAsyncData('blog-index', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all(),
)

useSeoMeta({ title: 'Blog' })
</script>
