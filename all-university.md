---
title: 全国高校
layout: page
---

<script setup>
import {data as universites} from './.vitepress/universities.data.mts'
import { NGrid, NGridItem } from 'naive-ui'
</script>

<n-grid :x-gap="12" :y-gap="8" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" class="universities-box">
    <n-grid-item v-for="university of universites">
        <UniversitiesInfoCard 
        :university="university.frontmatter.title"
        :logo="university.frontmatter.logo"
        :url="university.url"
        />
    </n-grid-item>
</n-grid>

<style>
.universities-box {
    padding: 1vh 1vw;
}
</style>