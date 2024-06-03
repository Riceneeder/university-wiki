<!-- Comment.vue -->
<script setup lang="ts">
import Giscus from "@giscus/vue";
import { nextTick } from 'vue'

nextTick(()=>{
    const giscusIframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (!giscusIframe) return;
    giscusIframe.contentWindow?.location.reload();
})
</script>

<template>
  <Giscus
    id="comments"
    repo="Riceneeder/university-wiki"
    repoId="R_kgDOMD7Pbg"
    category="Announcements"
    categoryId="DIC_kwDOMD7Pbs4Cf0NN"
    mapping="url"
    strict="1"
    reactionsEnabled="1"
    emitMetadata="1"
    inputPosition="top"
    theme="preferred_color_scheme"
    lang="zh-CN"
    loading="lazy"
    crossorigin="anonymous"
  />
</template>
