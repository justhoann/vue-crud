<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  password: ''
})

const errors = ref({
  password: ''
})

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const validateForm = () => {
  errors.value = {
    password: ''
  }

  let isValid = true

  if (!form.value.password) {
    errors.value.password = 'Password is required'
    isValid = false
    return isValid
  }

  if (form.value.password !== 'hoannv22') {
    errors.value.password = 'Incorrect password, please try again!'
    isValid = false
  }
  return isValid
}

const handleLogin = () => {
  const isValid = validateForm()

  if (!isValid) {
    return
  }

  localStorage.setItem('access-token', 'Logged in')
  router.push('/')
}

watchEffect(() => {
  const token = localStorage.getItem('access-token')
  if (token) {
    router.push('/')
  }
})
</script>

<template>
  <div class="px-5 py-4">
    <h1 class="font-semibold text-2xl pb-4">Login Page</h1>
    <p class="my-4">Nhập <span class="font-semibold">hoannv22</span> để đăng nhập !!!</p>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password: </label>
        <div class="flex gap-4">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            id="title"
            class="p-1 mt-1 block min-w-[300px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            :class="{ 'border-red-500': errors.password }"
          />
          <button
            @click.prevent="togglePasswordVisibility"
            class="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3"
          >
            <p v-if="showPassword">Hide</p>
            <p v-if="!showPassword">Show</p>
          </button>
        </div>
        <p v-if="errors.password" class="mt-2 text-sm text-red-600">{{ errors.password }}</p>
      </div>

      <div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <p>Login</p>
        </button>
      </div>
    </form>
  </div>
</template>
