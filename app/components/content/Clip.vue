<template>
  <figure class="my-8">
    <video
      ref="videoPlayer"
      :src="props.srcPath"
      :aria-label="props.alt"
      :controls="reducedMotion"
      class="border-line h-auto w-full overflow-hidden rounded-lg border"
      muted
      loop
      playsinline
      preload="none"
    />
    <figcaption v-if="props.caption" class="text-muted mt-2 text-sm">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    srcPath: string
    alt?: string
    caption?: string
  }>(),
  { alt: undefined, caption: undefined },
)

const videoPlayer = useTemplateRef<HTMLVideoElement>('videoPlayer')
const reducedMotion = ref(false)

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value || !videoPlayer.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          void (entry.target as HTMLVideoElement).play().catch(() => {})
        } else {
          ;(entry.target as HTMLVideoElement).pause()
        }
      }
    },
    { rootMargin: '200px' },
  )

  observer.observe(videoPlayer.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>
