<script setup lang="ts">
import { NTag, NSpace, NConfigProvider, darkTheme } from "naive-ui";
defineProps(["tags"]);
import { useData } from "vitepress";
const { isDark } = useData();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-space class="tags">
      <template v-for="tag in tags">
        <n-tag :bordered="false">{{ tag }}</n-tag>
      </template>
    </n-space>
  </n-config-provider>
</template>

<style>
.tags {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
