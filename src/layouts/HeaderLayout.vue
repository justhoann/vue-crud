<script setup>
import { RouterLink } from 'vue-router'
import ButtonLogout from '/src/components/ButtonLogout.vue'
</script>

<template>
  <div class="h-full w flex items-center justify-between bg-white">
    <div class="h-full flex items-center gap-10">
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
    <div>
      <ButtonLogout />
    </div>
  </div>
</template>

<style scoped></style>
