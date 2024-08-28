<template>
  <div>
    <p class="text-red-500">Status: {{ status }}</p>
    <p class="text-red-500">Message: {{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  status: String || Number,
  message: String
})
</script>

<style lang="scss" scoped></style>
