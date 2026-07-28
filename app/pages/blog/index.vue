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

<template>
  <h1 class="text-coral font-display mb-10 text-4xl">Blog</h1>

  <p v-if="!posts?.length" class="text-mist">No posts yet.</p>

  <ul v-else class="space-y-8">
    <li v-for="post in posts" :key="post.path">
      <h2 class="font-display text-2xl">
        <NuxtLink
          :to="post.path"
          class="text-mint decoration-mint/40 hover:decoration-mint underline decoration-1 underline-offset-4 transition-colors"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>
      <PostDate :date="post.date" />
      <p v-if="post.description" class="text-mist mt-1">
        {{ post.description }}
      </p>
    </li>
  </ul>
</template>
