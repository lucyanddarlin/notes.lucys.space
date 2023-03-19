<template>
  <div fixed top-37 left-0 w-full>
    <div class="post-catalogue" w-full hidden lg:block>
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
  width: 22%;
  padding: 10px 0px 0px 32px;
  box-sizing: border-box;
  user-select: none;
  .common-anchor {
    @apply mb-10px text-black/50 cursor-pointer hover:text-main transition duration-300;
  }
}
</style>
