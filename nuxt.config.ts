import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/fonts'],

  fonts: {
    families: [
      { name: 'Lato', provider: 'google', weights: [400, 700], styles: ['normal', 'italic'] },
    ],
  },

  content: {
    build: {
      markdown: {
        highlight: { theme: 'github-light' },
      },
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})
