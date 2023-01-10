<template>
  <RouterLink :to="{ path: `/${post.id}` }">
    <div v-if="post.categories.data.length > 0" flex>
      <div
        v-for="cate in post.categories.data"
        :key="cate.id"
        text-sm
        text-gray-500
        mr-4
      >
        {{ cate.attributes.name }}
      </div>
    </div>
    <div text-xl font-bold hover:text-main transition-colors duration-300>
      {{ post.title }}
    </div>
    <div text-sm my-2 text-gray-500>{{ post.desc }}</div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { IPostMeta } from '@/typings'

defineProps<{ post: IPostMeta }>()
</script>

<style scoped></style>
