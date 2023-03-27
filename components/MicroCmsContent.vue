// components/MicroCmsContent.vue

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'top'
  },
});

const config = useRuntimeConfig();
const { data: content } = await useFetch(`/portfolio_site/${props.title}`, {
  baseURL: config.public.baseUrl,
  headers: {
    "X-MICROCMS-API-KEY": config.public.apiKey,
  },
});
</script>

<template>
  <v-app :id=content.id>
    <h1>{{ content.title }}</h1>
    <div v-html="content.body" />
  </v-app>
</template>

<style>
h1 {
}
</style>