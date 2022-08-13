<!--
  This content is follow the instructions from
  https://v2.vuepress.vuejs.org/reference/default-theme/extending.html
-->
<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">&copy; 2022 Teerachai Laothong</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>