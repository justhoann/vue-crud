<template>
  <button
    @click="goToHomePage"
    class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Back to home
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToHomePage = () => {
  router.push(`/`)
}
</script>
