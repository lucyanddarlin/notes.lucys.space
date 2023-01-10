<template>
  <div
    fixed
    top-12
    left-0
    right-0
    bottom-0
    sm:hidden
    class="-z-1"
    :class="{ 'z-9': showMenu }"
  >
    <div
      relative
      px-6
      sm:px-8
      py-3
      backdrop-blur-xl
      duration-300
      class="bg-white/80 -translate-y-full transition-all z-1"
      :class="{ 'translate-y-0': showMenu }"
    >
      <div flex flex-col>
        <div
          v-for="btn in buttonList"
          :key="btn.id"
          border-b
          text-sm
          font-medium
          border-solid
          py-4
          class="border-black/5"
        >
          <a :href="btn.url" target="_blank">{{ btn.name }}</a>
        </div>
      </div>
    </div>
    <div
      opacity-0
      absolute
      inset-0
      class="bg-black/20"
      :class="{ 'opacity-100': showMenu }"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post'

const { showMenu, buttonList } = storeToRefs(usePostStore())
const { closeMenu } = usePostStore()
</script>

<style scoped></style>
