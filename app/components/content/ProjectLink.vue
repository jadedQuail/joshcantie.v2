<template>
  <figure v-if="project" class="my-8">
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group block"
    >
      <img
        :src="project.thumbnail"
        :alt="project.title"
        loading="lazy"
        class="border-line h-auto w-full overflow-hidden rounded-lg border transition-opacity group-hover:opacity-70"
      />
    </a>
    <figcaption class="text-muted mt-2 text-sm">
      {{ caption ?? `Play ${project.title}` }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    slug: string
    caption?: string
  }>(),
  { caption: undefined },
)

const { data: project } = await useAsyncData(`project-link-${props.slug}`, () =>
  queryCollection('portfolio').path(`/portfolio/${props.slug}`).first(),
)
</script>
