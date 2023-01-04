<template>
  <div max-w-70ch mx-auto px-6 md:px-0 min-h-full>
    <v-md-preview :text="currentPost?.attributes.content"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'
const route = useRoute()
const { getPostById, cleanCurrentPost } = usePostStore()
const { currentPost } = storeToRefs(usePostStore())
onMounted(async () => {
  await getPostById(route.query.id as string)
})

onUnmounted(() => {
  cleanCurrentPost()
})
</script>

<style scoped></style>
