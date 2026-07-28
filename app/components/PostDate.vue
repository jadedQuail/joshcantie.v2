<script setup lang="ts">
defineProps<{ date: string }>()
</script>

<template>
  <time :datetime="date" class="text-graphite text-sm">{{ formatDate(date) }}</time>
</template>
