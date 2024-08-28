<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-full flex items-center gap-10 bg-white">
    <RouterLink to="/">
      <div class="hover:text-blue-500 hover:font-semibold text-lg transition duration-500">
        Home
      </div>
    </RouterLink>
    <div>|</div>
    <RouterLink to="/add-new-post">
      <div class="hover:text-blue-500 hover:font-semibold text-lg transition duration-500">
        Add New Post
      </div>
    </RouterLink>
    <div>|</div>
  </div>
</template>

<style scoped></style>
