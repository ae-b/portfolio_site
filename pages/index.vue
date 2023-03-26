// pages/index.vue

<script setup>
import Contact from "./contact.vue";
import Skill from "./skill.vue";
import Career from "./career.vue";
import About from "./about.vue";
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiEmailNewsletter } from '@mdi/js';
import { mdiImageFilterHdr } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';
import { mdiPost } from '@mdi/js';
import { mdiPostOutline } from '@mdi/js';

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

        <v-list density="compact" nav v-for="article in data.contents" :key="article.id">
          <v-list-item v-bind:href="`#${article.id}`">
            <v-list-item-title>{{ article.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar-title>Shiga Anna's Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip text="Twitter" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://twitter.com/ae__B_" target="_blank">
            <v-icon :icon="mdiTwitter" />
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="Instagram" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://www.instagram.com/ae__b_/" target="_blank">
            <v-icon :icon="mdiInstagram" />
          </v-btn>
        </template>
      </v-tooltip>

      <!-- もう少しまともな内容書くようになってから公開する.... -->
      <!-- <v-tooltip text="Substack" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://aeb1.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile" target="_blank">
            <v-icon :icon="mdiEmailNewsletter" />
          </v-btn>
        </template>
      </v-tooltip> -->

      <v-tooltip text="Zenn" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://zenn.dev/ae__b" target="_blank">
            <v-icon :icon="mdiPost" />
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="ヤマレコ" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://www.yamareco.com/modules/yamareco/userinfo-662552-prof.html" target="_blank">
            <v-icon :icon="mdiImageFilterHdr" />
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="読書記録" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://bookmeter.com/users/1383993" target="_blank">
            <v-icon :icon="mdiBookOpenVariant" />
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="はてなブログ" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" href="https://ae-b.hatenablog.jp/" target="_blank">
            <v-icon :icon="mdiPostOutline" />
          </v-btn>
        </template>
      </v-tooltip>
    </v-app-bar>

    <v-main class="main-background">
      <div class="main-content">
        <div id="contact"><Contact /></div>
        <div id="skill"><Skill /></div>
        <div id="career"><Career /></div>
        <div id="about"><About /></div>
      </div>
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