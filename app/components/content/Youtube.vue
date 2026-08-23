<template>
  <div class="border-line my-8 aspect-video overflow-hidden rounded-lg border">
    <iframe
      :src="src"
      :title="title ?? 'Embedded video'"
      class="h-full w-full"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  title?: string
}>()

const src = computed(() => `https://www.youtube-nocookie.com/embed/${props.id}`)
</script>
