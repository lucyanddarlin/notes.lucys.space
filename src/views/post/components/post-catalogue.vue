<template>
  <div fixed top-37 left-0 class="w-22%">
    <div class="post-catalogue" hidden lg:block>
      <div flex items-center text-main text-lg mb-10px>
        <span class="i-ri-bookmark-fill mr-4px"></span>
        <span>目录</span>
      </div>
      <div
        v-for="anchor in anchorsList"
        :key="anchor.lineIndex"
        class="common-anchor"
        :class="`anchor-title-${anchor.indent}`"
        @click="handleClickAnchor(anchor.lineIndex)"
      >
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAnchor } from '@/typings'
defineProps<{ anchorsList: Array<IAnchor> }>()
const emit = defineEmits(['click-anchor'])

const handleClickAnchor = (lineIndex: number) => {
  emit('click-anchor', lineIndex)
}
</script>

<style lang="scss">
.post-catalogue {
  border-right: rgba(88, 88, 88, 0.1) 1px solid;
  width: 100%;
  height: 70vh;
  padding: 10px 0px 50px 32px;
  box-sizing: border-box;
  user-select: none;
  overflow: auto;
  .common-anchor {
    @apply mb-10px text-black/50 cursor-pointer hover:text-main transition duration-300;
  }
}
</style>
