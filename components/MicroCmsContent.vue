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
  <v-app :id=content.id class="content rounded-xl">
      <h1 class="content-h1">{{ content.title }}</h1>
      <div v-html="content.body" />
  </v-app>
</template>

<style>
.content {
  height: 650px;
  opacity: 0.6;
}

.content-h1 {
  margin: 8px 0;
}

</style>