import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ThePayment',
      component: () => import('@/views/ThePayment')
    }
  ]
})

export default router
