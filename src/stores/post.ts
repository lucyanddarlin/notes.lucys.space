import { ref } from 'vue'
import { defineStore } from 'pinia'
import { reqGetAllPosts, reqGetPostsById } from '@/api'
import type { IPost, IPostMeta } from '@/typings'

export const usePostStore = defineStore('post', () => {
  const currentPost = ref<IPost>()
  const postList = ref<IPostMeta[]>([])
  const getALLPosts = async () => {
    const { data } = await reqGetAllPosts()
    if (data) {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      postList.value = data
    }
  }
  const getPostById = async (id: number | string) => {
    const { data } = await reqGetPostsById(id)
    currentPost.value = data
  }
  const cleanCurrentPost = () => {
    currentPost.value = undefined
  }

  return { postList, getALLPosts, getPostById, currentPost, cleanCurrentPost }
})
