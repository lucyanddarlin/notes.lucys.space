import Index from '@/views/index/index.vue'
import Post from '@/views/post/post.vue'
import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/post',
    component: Post,
  },
]

export default router
