<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  id: Number,
  title: String,
  body: String
})
</script>

<template>
  <div>
    <p class="font-semibold">Post ID: {{ id }}</p>
    <p class="text-xl mt-3 mb-1 font-semibold text-blue-400">{{ title }}</p>
    <p>{{ body }}</p>
  </div>
</template>
