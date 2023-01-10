<template>
  <header
    fixed
    left-0
    right-0
    top-0
    px-6
    z-10
    flex
    items-center
    h-12
    border-b
    border-solid
    backdrop-blur-xl
    backdrop-saturate-150
    class="border-black/5 bg-white/70"
  >
    <div :class="{ 'hidden sm:!block': showTitle }">
      <a href="https://notes.lucys.space/">
        <span hover:text-main font-medium text-sm>Lucy.notes</span>
      </a>
    </div>
    <div
      mt-0.6
      mr-2
      opacity-0
      transition-all
      duration-300
      class="text-black/50 text-xs font-medium -translate-x-4"
      :class="{ 'opacity-100 translate-x-4': showTitle }"
    >
      <span>{{ postTitle }}</span>
    </div>
    <div flex-1></div>
    <div sm:hidden>
      <div
        text-xl
        transition-transform
        duration-400
        class="i-ri-menu-unfold-line"
        :class="{ 'rotate-90': showMenu }"
        @click="handleControlMenu"
      />
    </div>
    <div hidden sm:block>
      <ul flex flex-col sm:flex-row font-medium>
        <p
          v-for="btn in buttonList"
          :key="btn.id"
          border-b
          text-sm
          sm:mx-2
          sm:border-0
          hover:text-main
          class="border-black/5"
        >
          <a :href="btn.url" flex h-12 sm:h-auto items-center>{{ btn.name }}</a>
        </p>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'

const { showMenu, buttonList } = storeToRefs(usePostStore())
const handleControlMenu = () => {
  showMenu.value = !showMenu.value
}
const { showTitle, postTitle } = storeToRefs(usePostStore())
</script>

<style scoped></style>
