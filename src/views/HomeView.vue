<script setup>
import LoadingData from '@/components/LoadingData.vue'
import ErrorData from '@/components/ErrorData.vue'
import ListItem from '@/components/ListItem.vue'
import { useQueryAllPosts } from '@/queries/posts.query.js'

const { data, isPending, error } = useQueryAllPosts()
</script>

<template>
  <div class="px-5 py-4">
    <div v-if="isPending">
      <LoadingData />
    </div>
    <div v-if="error">
      <ErrorData :status="error.status" :message="error.message" />
    </div>
    <div v-if="data">
      <h1 class="font-semibold text-2xl pb-4">All Posts</h1>
      <ListItem :data="data" />
    </div>
  </div>
</template>

<style scoped></style>
