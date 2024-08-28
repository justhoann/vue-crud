<script setup>
import { useQueryClient } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import { useMutateDeletePost } from '/src/queries/posts.query.js'
const route = useRoute()
const router = useRouter()
const id = route.params.id
const queryClient = useQueryClient()

const { mutateAsync: dlt, isPending, error } = useMutateDeletePost(id)

const deletePost = () => {
  dlt()
    .then(() => {
      queryClient.invalidateQueries(['posts'])
      router.back()
    })
    .catch((e) => {
      console.log(`Lỗi khi xóa bài post, ${e}`)
    })
}
</script>

<template>
  <button
    @click="deletePost"
    class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <p v-if="isPending">Deleting...</p>
    <p v-if="error">Error...</p>
    <p v-if="!isPending">Delete Post</p>
  </button>
</template>

<style lang="scss" scoped></style>
