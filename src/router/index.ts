import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savePosition) => {
    console.log(savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 0,
      }
    }
  },
})

export default router
