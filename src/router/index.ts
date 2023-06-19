import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/chatWebHome",
    name: 'ChatWebHome',
    component: () => import('../views/chatWebHome/index.vue'),
    children: []
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
