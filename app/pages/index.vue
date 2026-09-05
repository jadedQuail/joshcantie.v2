<template>
  <div class="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-12">
    <img
      src="/images/coffee_shop_photo.jpeg"
      alt="Josh Cantie"
      width="320"
      height="427"
      class="home-photo w-64 shrink-0 object-cover shadow-[8px_8px_0_0_var(--color-accent)] sm:w-80 sm:shadow-[10px_10px_0_0_var(--color-accent)]"
    />

    <div class="flex flex-col items-center text-center sm:items-start sm:text-left">
      <h1 class="text-accent font-display text-4xl font-normal tracking-tight sm:text-5xl">
        Josh Cantie
      </h1>

      <a
        href="mailto:jcantie3@gmail.com"
        class="text-muted mt-2 underline-offset-4 hover:underline"
      >
        jcantie3@gmail.com
      </a>

      <div class="mt-6 space-y-1">
        <p>University of Notre Dame, Class of 2020</p>
        <p>Oregon State University, Class of 2026</p>
      </div>

      <p class="mt-4 text-balance">
        I like digital arts, software development, and other tech projects.
      </p>

      <nav class="mt-8 flex flex-wrap items-center justify-center gap-5 sm:justify-start">
        <a
          href="https://www.linkedin.com/in/josh-cantie/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-accent hover:text-muted transition-colors"
        >
          <IconLinkedIn class="size-6" />
        </a>

        <a
          href="https://github.com/jadedQuail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-accent hover:text-muted transition-colors"
        >
          <IconGitHub class="size-6" />
        </a>

        <a
          href="https://jadedquail.itch.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="itch.io"
          class="text-accent hover:text-muted transition-colors"
        >
          <IconItch class="size-6" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'page', center: true, wide: true })

useSeoMeta({ title: 'Josh Cantie' })
</script>
