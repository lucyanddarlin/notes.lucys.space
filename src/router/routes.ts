import Index from '@/views/index/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/:id',
    component: () => import('@/views/post/post.vue'),
  },
]

export default router
