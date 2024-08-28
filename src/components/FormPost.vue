<script setup>
import { ref, watch } from 'vue'
import { isEmpty } from 'lodash'
import {
  useMutateCreatePost,
  useMutateUpdatePost,
  useQueryDetailPost
} from '/src/queries/posts.query.js'

import LoadingData from '@/components/LoadingData.vue'
import ErrorData from '@/components/ErrorData.vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const {
  mutateAsync: create,
  isPending: isPendingCreate,
  error: errorCreate
} = useMutateCreatePost()
const {
  mutateAsync: update,
  isPending: isPendingUpdate,
  error: errorUpdate
} = useMutateUpdatePost(id)

const { data, isPending: isPendingInitUpdate, errorInitUpdate } = useQueryDetailPost(id)

watch(data, () => {
  if (!isEmpty(data)) {
    form.value.title = data.value.title
    form.value.body = data.value.body
  }
})

const form = ref({
  title: data?.value?.title || '',
  body: data?.value?.body || ''
})

const errors = ref({
  title: '',
  body: ''
})

const validateForm = () => {
  errors.value = { title: '', body: '' }
  let isValid = true

  if (!form.value.title) {
    errors.value.title = 'Title is required.'
    isValid = false
  }

  if (!form.value.body) {
    errors.value.body = 'Body is required.'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  const isValid = validateForm()

  if (!isValid) {
    return
  }

  if (id) {
    update({
      title: form.value.title,
      body: form.value.body
    }).then(() => {
      //   router.push('/')
    })
    return
  }

  create({
    title: form.value.title,
    body: form.value.body
  }).then(() => {
    router.push('/')
    return
  })
}
</script>

<template>
  <div>
    <div v-if="isPendingInitUpdate || isPendingCreate || isPendingUpdate">
      <LoadingData />
    </div>
    <div v-if="errorInitUpdate || errorCreate || errorUpdate">
      <ErrorData
        :status="errorInitUpdate.status || errorCreate.status || errorUpdate.status"
        :message="errorInitUpdate.message || errorCreate.message || errorUpdate.message"
      />
    </div>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input
          v-model="form.title"
          type="text"
          id="title"
          class="p-1 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          :class="{ 'border-red-500': errors.title }"
        />
        <p v-if="errors.title" class="mt-2 text-sm text-red-600">{{ errors.title }}</p>
      </div>

      <div>
        <label for="body" class="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          v-model="form.body"
          id="body"
          rows="4"
          class="p-1 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          :class="{ 'border-red-500': errors.body }"
        ></textarea>
        <p v-if="errors.body" class="mt-2 text-sm text-red-600">{{ errors.body }}</p>
      </div>

      <div v-if="!id">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <p>Create Post</p>
        </button>
      </div>

      <div v-if="id">
        <button
          type="submit"
          class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          <p>Update Post</p>
        </button>
      </div>
    </form>
  </div>
</template>
