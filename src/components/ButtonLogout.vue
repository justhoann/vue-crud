<template>
  <button
    @click="handleLogout"
    class="px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out bg-red-500 text-white border-2 border-transparent hover:bg-white hover:text-red-500 hover:border-red-500 hover:shadow-md transform hover:scale-105 active:scale-95"
  >
    Logout
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogout = async () => {
  await localStorage.removeItem('access-token')
  await router.push('/login')
}
</script>
