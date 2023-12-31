import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheCheckout',
      component: () => import('@/views/TheCheckout.vue')
    },
    {
      path: '/payment',
      name: 'ThePayment',
      component: () => import('@/views/ThePayment.vue')
    }
  ]
})

export default router
