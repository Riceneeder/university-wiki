<!-- 轮播图组件 -->
<script setup lang="ts">
import { NCarousel, NImage, NConfigProvider, darkTheme } from "naive-ui";
import { useData } from "vitepress";
defineProps(["imgs"]);
const { isDark } = useData();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-carousel show-arrow :dot-type="'line'">
      <template v-for="img in imgs">
        <n-image :src="img" :object-fit="'cover'" :lazy="true" width="100%" />
      </template>
    </n-carousel>
  </n-config-provider>
</template>

<style>
.n-carousel {
  margin-top: 10px;
  margin-bottom: 10px;
}
.n-image {
  width: 100%;
  height: 30vh;
}
</style>
