<template>
  <div :class="$style.container">
    <Giscus
      id="comments"
      repo="mark-lauq/mark-lauq.github.io"
      repoid="R_kgDON8pnkQ"
      category="General"
      categoryid="DIC_kwDON8pnkc4CnK-W"
      mapping="title"
      term="Welcome to giscus!"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      loading="lazy"
      :theme="isDark ? 'dark' : 'light'"
      :key="route.path"
    ></Giscus>
  </div>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { isDark } = useData()
</script>

<style module>
.container {
  margin-top: 24px;
}
</style>
