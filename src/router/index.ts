import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/eurojackpot',
      name: 'eurojackpot',
      component: () => import('../views/EuroJackpotView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
