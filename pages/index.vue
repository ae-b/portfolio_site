// pages/index.vue

<script setup>
const config = useRuntimeConfig();

const { data } = await useFetch("/portfolio_site", {
  baseURL: config.public.baseUrl,
  headers: {
    "X-MICROCMS-API-KEY": config.public.apiKey,
  },
});
</script>

<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>