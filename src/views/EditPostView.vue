<script setup>
import FormPost from '/src/components/FormPost.vue'
import ButtonBack from '/src/components/ButtonBack.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="px-5 py-4">
    <div>
      <h1 class="font-semibold text-2xl pb-4">Edit Post: {{ id }}</h1>

      <div class="my-1">
        <FormPost />
      </div>

      <div class="flex gap-5 mt-6">
        <ButtonBack />
      </div>
    </div>
  </div>
</template>
