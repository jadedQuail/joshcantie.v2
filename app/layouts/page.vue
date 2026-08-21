<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="bg-beige text-ink flex min-h-screen flex-col">
    <header class="border-line border-b">
      <div class="mx-auto flex max-w-2xl items-baseline justify-between gap-6 px-6 py-6">
        <NuxtLink
          to="/"
          class="font-display text-accent text-lg font-bold tracking-tight underline-offset-4 hover:underline"
        >
          Josh Cantie
        </NuxtLink>

        <nav class="flex gap-6 text-sm">
          <NuxtLink to="/blog" class="text-accent underline-offset-4 hover:underline">Blog</NuxtLink>
          <NuxtLink to="/portfolio" class="text-accent underline-offset-4 hover:underline">Portfolio</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-2xl grow px-6 py-16">
      <slot />
    </main>

    <footer class="border-line border-t">
      <div class="text-muted mx-auto max-w-2xl px-6 py-6 text-sm">
        <!-- TODO-JOSH: social/contact links go here. -->
        &copy; {{ year }} Josh Cantie
      </div>
    </footer>
  </div>
</template>
