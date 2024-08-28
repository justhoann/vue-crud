<template>
  <button
    @click="goToEditPage"
    class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Edit Post
  </button>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const id = route.params.id

const goToEditPage = () => {
  router.push(`/edit/${id}`)
}
</script>
