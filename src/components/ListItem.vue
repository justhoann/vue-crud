<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  data: Array
})
</script>

<template>
  <ul>
    <li
      v-for="post in props.data"
      :key="post.id"
      class="transition duration-500 hover:text-blue-500 hover:font-semibold"
    >
      <RouterLink :to="`/detail/${post.id}`"> {{ post.id }}: {{ post.title }} </RouterLink>
    </li>
  </ul>
</template>
