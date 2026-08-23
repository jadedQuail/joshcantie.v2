<template>
  <div
    v-if="project"
    class="border-line bg-surface not-prose my-8 flex flex-col overflow-hidden rounded-lg border"
  >
    <div class="px-4 pt-4">
      <h2 class="font-display text-accent text-xl font-bold tracking-tight">
        {{ project.title }}
      </h2>
      <p class="text-muted text-sm">{{ project.category }}</p>
    </div>

    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
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
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()

const { data: project } = await useAsyncData(`project-link-${props.slug}`, () =>
  queryCollection('portfolio').path(`/portfolio/${props.slug}`).first(),
)
</script>
