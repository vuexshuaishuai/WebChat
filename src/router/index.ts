import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/chatWebHome",
  },
  {
    path: '/chatWebHome',
    name: 'ChatWebHome',
    component: () => import('../views/chatWebHome/index.vue'),
  },
  {
    path: "/chatAppHome",
    name: 'ChatAppHome',
    component: () => import('../views/chatAppHome/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
