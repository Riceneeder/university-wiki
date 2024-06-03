<script setup lang="ts">
import {
  NTag,
  NPageHeader,
  NSpace,
  NDivider,
  NAvatar,
  NConfigProvider,
  darkTheme
} from "naive-ui";
import DefaultTheme from "vitepress/theme";
import { useData } from 'vitepress';
import { data as universityList } from "../universitiesList.data.mts";
import json2map from "../json2map.mts";
import Comment from "./Comment.vue";

const { Layout } = DefaultTheme;
const universityMap = json2map(universityList);
const { isDark } = useData();
</script>

<template>
  <Layout>
    <template #doc-before v-if="$frontmatter.isUniversity">
      <n-config-provider :theme="isDark ? darkTheme : null">
        <NPageHeader>
          <template #avatar>
            <n-avatar round :src="$frontmatter.logo" />
          </template>
          <template #title>
            <b>{{ $frontmatter.title }}</b>
          </template>
          <template #footer>
            <n-space>
              <n-tag :bordered="false" type="info">
                {{ universityMap.get($frontmatter.title)["location"] }}
              </n-tag>
              <n-tag :bordered="false" type="success">
                {{ universityMap.get($frontmatter.title)["level"] }}
              </n-tag>
              <template
                v-for="Info in universityMap.get($frontmatter.title)[
                  'otherInfo'
                ]"
              >
                <n-tag :bordered="false">
                  {{ Info }}
                </n-tag>
              </template>
            </n-space>
          </template>
        </NPageHeader>
        <n-divider />
      </n-config-provider>
    </template>
    <template #doc-after>
      <Comment/>
    </template>
  </Layout>
</template>

<style scoped>
.doc-title {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
