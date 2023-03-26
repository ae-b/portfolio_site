import vuetify from 'vite-plugin-vuetify'
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: BASE_URL,
      apiKey: API_KEY,
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: [
    '@/assets/main.scss',
  ],
})