<script setup>
import { RouterView } from 'vue-router'
import HeaderLayout from './HeaderLayout.vue'
</script>

<template>
  <div>
    <div class="h-[60px] border border-b-black px-5 sticky top-0">
      <HeaderLayout />
    </div>
    <div class="min-h-[calc(100vh-60px)]">
      <RouterView />
    </div>
  </div>
</template>
