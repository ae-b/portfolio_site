const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: BASE_URL,
      apiKey: API_KEY,
    }
  }
})