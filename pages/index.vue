// pages/index.vue

<script setup>
import ToolIcon from "@/components/ToolIcon.vue";
import MicroCmsContent from '@/components/MicroCmsContent.vue';

const config = useRuntimeConfig();
const { data } = await useFetch("/portfolio_site", {
  baseURL: config.public.baseUrl,
  headers: {
    "X-MICROCMS-API-KEY": config.public.apiKey,
  },
});
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list style="text-align: center;">
          <img
            src="@/assets/K2.png"
            alt="avatarImage"
            class="avatar-image"
            :width="30"
          />
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav v-for="content in data.contents" :key="content.id">
          <v-list-item v-bind:href="`#${content.id}`">
            <v-list-item-title>{{ content.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar-title>Shiga Anna's Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <ToolIcon />
    </v-app-bar>

    <v-main class="main-background">
      <v-container v-for="content in data.contents" :key="content.id">
        <MicroCmsContent :title="content.id" class="main-content" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>

h1 {
  text-align: center;
}

.main-background {
  min-height:50vh;
  width: 100%;
  background-image: url(@/assets/tanigawa.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.main-content {
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 40px 0 16px;
  border-bottom: 1px solid #ddd;
}

p {
  line-height: 1.8;
  letter-spacing: 0.2px;
}

</style>