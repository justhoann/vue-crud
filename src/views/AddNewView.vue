<script setup>
import ButtonHome from '/src/components/ButtonHome.vue'
import FormPost from '/src/components/FormPost.vue'
</script>

<template>
  <div class="px-5 py-4">
    <h1 class="font-semibold text-2xl pb-4">New Post:</h1>
    <div class="my-1">
      <FormPost />
    </div>
    <div class="flex gap-5 mt-6">
      <ButtonHome />
    </div>
  </div>
</template>
