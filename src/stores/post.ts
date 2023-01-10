import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { reqGetAllPosts, reqGetPostsById } from '@/api'
import type { IHeaderItem, IPost, IPostMeta } from '@/typings'

export const usePostStore = defineStore('post', () => {
  const currentPost = ref<IPost>()
  const postList = ref<IPostMeta[]>([])
  const postHeaderHeightValue = ref()
  const showTitle = ref<boolean>(false)
  const showMenu = ref<boolean>(false)
  const buttonList = ref<IHeaderItem[]>([
    {
      name: 'Portfolio',
      url: 'https://lucys.space/',
      id: 0,
    },
    {
      name: 'Posts',
      url: 'https://notes.lucys.space/',
      id: 0,
    },
  ])
  const postTitle = computed(() => currentPost.value?.attributes.title)
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
  const closeMenu = () => {
    showMenu.value = false
  }

  return {
    postList,
    getALLPosts,
    getPostById,
    currentPost,
    cleanCurrentPost,
    postHeaderHeightValue,
    showTitle,
    postTitle,
    showMenu,
    buttonList,
    closeMenu,
  }
})
