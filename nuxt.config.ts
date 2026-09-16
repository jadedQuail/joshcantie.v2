import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/fonts'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

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

  nitro: {
    preset: 'static',
    prerender: { autoSubfolderIndex: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
