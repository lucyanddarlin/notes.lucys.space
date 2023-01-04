<template>
  <header px-2rem py-6 md:pt-12>
    <div pt-4 md:pt-6>
      <h1
        text-2rem
        text-zinc-800
        font-bold
        leading-snug
        mb-4
        md:mb-6
        md:text-2.6rem
      >
        {{ title }}
      </h1>
      <p class="text-black/40 mb-6">{{ desc }}</p>
      <div class="text-black/80">
        <section flex items-center text-sm gap-3>
          <div inline-flex items-center>
            <img w-24px h-24px src="@/assets/angel.png" alt="" />
          </div>
          <div>
            <div>{{ format(Number(createAt), 'yyyy-MM-dd') }}</div>
          </div>
        </section>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
defineProps<{ title?: string; desc?: string; createAt?: number }>()
</script>

<style scoped></style>
