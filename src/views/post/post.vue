<template>
  <div max-w-70ch mx-auto px-6 md:px-0>
    <v-md-preview :text="currentPost?.attributes.content"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'
const route = useRoute()
const { getPostById } = usePostStore()
const { currentPost } = storeToRefs(usePostStore())
onMounted(async () => {
  await getPostById(route.params.id as string)
})
</script>

<style scoped></style>
