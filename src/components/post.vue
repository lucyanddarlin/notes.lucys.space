<template>
  <main
    max-w-55ch
    px-6
    mx-auto
    xl:text-xl
    dark:prose-invert
    grid
    grid-col-1
    gap-16
  >
    <PostItem v-for="post in postList" :key="post.id" :post="post" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'

const { getALLPosts } = usePostStore()
const { postList } = storeToRefs(usePostStore())
onMounted(() => {
  getALLPosts()
})
</script>

<style scoped></style>
