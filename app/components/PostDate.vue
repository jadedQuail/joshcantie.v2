<template>
  <time :datetime="date" class="text-muted text-sm">{{ formatDate(date) }}</time>
</template>

<script setup lang="ts">
defineProps<{ date: string }>()
</script>
