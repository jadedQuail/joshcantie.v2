<template>
  <h1 class="text-accent font-display mb-10 text-4xl font-normal tracking-tight">Portfolio</h1>

  <p v-if="!projects?.length">Nothing here yet.</p>

  <ul v-else class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="project in projects"
      :key="project.id"
      class="border-line bg-surface flex flex-col overflow-hidden rounded-lg border"
    >
      <div class="px-4 pt-4">
        <h2 class="font-display text-accent text-xl font-bold tracking-tight">
          {{ project.title }}
        </h2>
        <p class="text-muted text-sm">{{ project.category }}</p>
      </div>

      <a
        :href="project.url"
        :target="isExternal(project.url) ? '_blank' : undefined"
        :rel="isExternal(project.url) ? 'noopener noreferrer' : undefined"
        class="group mt-3 block"
      >
        <img
          :src="project.thumbnail"
          :alt="project.title"
          loading="lazy"
          class="border-line aspect-[5/3] w-full border-y object-cover transition-opacity group-hover:opacity-70"
        />
      </a>

      <p class="px-4 pt-3 pb-4 text-sm">{{ project.description }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page', wide: true })

const { data: projects } = await useAsyncData('portfolio-index', async () => {
  const items = await queryCollection('portfolio')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()

  return items.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id))
})

const isExternal = (url: string) => /^https?:\/\//.test(url)

useSeoMeta({ title: 'Portfolio' })
</script>
