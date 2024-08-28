<script setup>
import { useRoute } from 'vue-router'
import { useQueryDetailPost } from '/src/queries/posts.query.js'
import LoadingData from '@/components/LoadingData.vue'
import ErrorData from '@/components/ErrorData.vue'
import DetailPost from '/src/components/DetailPost.vue'
import ButtonBack from '/src/components/ButtonBack.vue'
import ButtonEdit from '/src/components/ButtonEdit.vue'
import ButtonDelete from '/src/components/ButtonDelete.vue'

const route = useRoute()
const id = route.params.id
const { data, isPending, error } = useQueryDetailPost(id)
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
      <h1 class="font-semibold text-2xl pb-4">Detail Post:</h1>
      <DetailPost :id="data.id" :title="data.title" :body="data.body" />
      <div class="flex gap-5 mt-6">
        <ButtonBack />
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </div>
  </div>
</template>
