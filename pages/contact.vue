// pages/contact.vue

<script setup>
const config = useRuntimeConfig();

const { data: article } = await useFetch(`/portfolio_site/contact`, {
  baseURL: config.public.baseUrl,
  headers: {
    "X-MICROCMS-API-KEY": config.public.apiKey,
  },
});
</script>

<template>
    <h1>{{ article.title }}</h1>
    <div v-html="article.body" />
</template>

<style lang="scss" scoped>
:deep(.post) {

}
</style>