<script setup lang="ts">
defineProps<{ date: string }>()
</script>

<template>
  <time :datetime="date" class="text-sm text-white/50">{{ formatDate(date) }}</time>
</template>
