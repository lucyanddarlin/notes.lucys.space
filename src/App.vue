<template>
  <AppHeader />
  <router-view v-slot="{ Component }" mt-12>
    <Transition>
      <component :is="Component" />
    </Transition>
  </router-view>
  <!-- <RouterView mt-12 /> -->
  <AppFooter />
  <AppMask />
</template>

<script setup lang="ts"></script>

<style scoped>
.v-enter-active {
  transition: opacity 0.3s ease-in;
}
.v-enter-from {
  opacity: 0;
}
</style>
