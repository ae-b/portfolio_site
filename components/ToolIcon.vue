// pages/skill.vue

<script setup>
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiEmailNewsletter } from '@mdi/js';
import { mdiImageFilterHdr } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';
import { mdiPost } from '@mdi/js';
import { mdiPostOutline } from '@mdi/js';
</script>

<template>
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
</template>

<style lang="scss" scoped>
:deep() {

}
</style>