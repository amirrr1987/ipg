import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ThePayment',
      component: () => import('@/views/ThePayment')
    },
    // {
    //   path: '/success',
    //   name: 'ThePayment',
    //   component: () => import('@/views/TheSuccess')
    // },
    // {
    //   path: '/error',
    //   name: 'ThePayment',
    //   component: () => import('@/views/TheError')
    // }
  ]
})

export default router
