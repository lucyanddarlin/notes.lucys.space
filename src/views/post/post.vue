<template>
  <div max-w-70ch mx-auto px-6 md:px-0 min-h-100vh>
    <div ref="postHeader">
      <PostHeader
        v-if="currentPost"
        :title="currentPost?.attributes.title"
        :desc="currentPost?.attributes.desc"
        :create-at="new Date(currentPost?.attributes.createdAt!).getTime()"
      />
    </div>
    <v-md-preview :text="currentPost?.attributes.content"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'
const route = useRoute()
const { getPostById, cleanCurrentPost } = usePostStore()
const { currentPost, postHeaderHeightValue, showTitle } = storeToRefs(
  usePostStore()
)
const scrollValue = ref()

getPostById(route.params.id as string)
const watchScroll = () => {
  scrollValue.value =
    document.documentElement.scrollTop || document.body.scrollTop
  if (scrollValue.value >= postHeaderHeightValue.value) {
    showTitle.value = true
  } else {
    showTitle.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', watchScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', watchScroll)
  showTitle.value = false
  cleanCurrentPost()
})
</script>

<style scoped></style>
