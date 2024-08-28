import API from '@/ultis/app'
import { useMutation, useQuery } from '@tanstack/vue-query'

export const useQueryAllPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      API.request({
        url: '/posts'
      })
  })
}

export const useQueryDetailPost = (id) => {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () =>
      API.request({
        url: `/posts/${id}`
      }),
    enabled: !!id
  })
}

export const useMutateDeletePost = (id) => {
  return useMutation({
    mutationFn: () => {
      return API.request({
        url: `posts/${id}`,
        method: 'DELETE'
      })
    },
    enabled: !!id
  })
}

export const useMutateCreatePost = () => {
  return useMutation({
    mutationFn: (body) => {
      return API.request({
        url: `/posts`,
        method: 'POST',
        params: body
      })
    }
  })
}

export const useMutateUpdatePost = (id) => {
  return useMutation({
    mutationFn: (body) => {
      return API.request({
        url: `/posts/${id}`,
        method: 'PUT',
        params: body
      })
    },
    enabled: !!id
  })
}
