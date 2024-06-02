<script setup lang="ts">
import { useRouter, useData } from "vitepress";
import {
  NCard,
  NEllipsis,
  NAvatar,
  NButton,
  NConfigProvider,
  darkTheme,
} from "naive-ui";
defineProps(["university", "logo", "url"]);

const { isDark } = useData();
const router = useRouter();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-card hoverable @click="router.go(url)">
      <template #header>
        <b>{{ university }}</b>
      </template>
      <template #header-extra>
        <n-avatar
          lazy
          round
          :size="48"
          :src="logo"
          fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </template>
    </n-card>
  </n-config-provider>
</template>
