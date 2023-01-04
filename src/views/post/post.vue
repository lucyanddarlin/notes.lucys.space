<template>
  <div max-w-70ch mx-auto px-6 md:px-0 min-h-100vh>
    <PostHeader
      v-if="currentPost"
      :title="currentPost?.attributes.title"
      :desc="currentPost?.attributes.desc"
      :create-at="new Date(currentPost?.attributes.createdAt!).getTime()"
    />
    <v-md-preview :text="currentPost?.attributes.content"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'
const route = useRoute()
const { getPostById, cleanCurrentPost } = usePostStore()
const { currentPost } = storeToRefs(usePostStore())

getPostById(route.query.id as string)
onUnmounted(() => {
  cleanCurrentPost()
})
</script>

<style scoped></style>
