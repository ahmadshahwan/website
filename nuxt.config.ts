// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css', ],
  nitro: {
    output: {
      publicDir: '../dist',
    },
  }
})
