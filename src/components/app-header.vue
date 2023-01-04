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
    <div>
      <a href="https://notes.lucys.space/">
        <span hover:text-main font-medium text-sm>Lucy.notes</span>
      </a>
    </div>
    <div flex-1></div>
    <div sm:hidden>phone</div>
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
import type { IHeaderItem } from '@/typings'

const buttonList: IHeaderItem[] = [
  {
    name: 'Portfolio',
    url: 'https://lucys.space/',
    id: 0,
  },
  {
    name: 'Posts',
    url: 'https://notes.lucys.space/',
    id: 0,
  },
]
</script>

<style scoped></style>
