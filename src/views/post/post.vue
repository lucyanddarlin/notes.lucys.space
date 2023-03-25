<template>
  <div>
    <PostCatalogue
      :anchors-list="anchorsList"
      @click-anchor="handleClickAnchor"
    />
    <div h-full max-w-110ch mx-auto class="lg:pl-70">
      <div class="px-3 md:px-0">
        <div>
          <PostHeader
            v-if="currentPost"
            :title="currentPost?.attributes.title"
            :desc="currentPost?.attributes.desc"
            :create-at="new Date(currentPost?.attributes.createdAt!).getTime()"
          />
        </div>
        <div>
          <v-md-preview
            ref="preview"
            :text="currentPost?.attributes.content"
          ></v-md-preview>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'

import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'
import type { IAnchor } from '@/typings'

// 页面代理
const { proxy }: any = getCurrentInstance()
const route = useRoute()
const { getPostById, cleanCurrentPost } = usePostStore()
const { currentPost, postHeaderHeightValue, showTitle } = storeToRefs(
  usePostStore()
)
const scrollValue = ref()

onMounted(async () => {
  await getPostById(route.params.id as string)
  handleBuildDirectory()
})

const watchScroll = () => {
  scrollValue.value =
    document.documentElement.scrollTop || document.body.scrollTop
  if (scrollValue.value >= postHeaderHeightValue.value) {
    showTitle.value = true
  } else {
    showTitle.value = false
  }
}

const anchorsList = ref<Array<IAnchor>>([])
/**
 * @description: 解析 markdown 生成目录数组
 * @return void
 */
const handleBuildDirectory = () => {
  const data = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  let titles = []
  titles = Array.from(data).filter((title: any) => !!title.textContent.trim())
  if (titles.length === 0) {
    anchorsList.value = []
    return
  }
  const hTags = Array.from(
    new Set(titles.map((title: any) => title.tagName))
  ).sort()
  anchorsList.value = titles.map((el: any) => ({
    title: el.textContent,
    lineIndex: el.dataset.vMdLine,
    indent: String(hTags.indexOf(el.tagName)),
  }))
}
/**
 * @description: 点击目录页面滚动
 * @return void
 */
const handleClickAnchor = (lineIndex: number): any => {
  const { preview } = proxy.$refs
  const targetPosition = preview.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  ).offsetTop

  console.log(targetPosition)
  const scrollValue = targetPosition - 70
  document.documentElement.scrollTop = scrollValue
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
