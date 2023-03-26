import { createRouter, createWebHistory } from 'vue-router';

const Error = () => import("@/pages/error.vue");
const Home = () => import('@/pages/index.vue');
const Dashboard = () => import('@/pages/app/dashboard.vue');
const Conversations = () => import('@/pages/app/conversations.vue');
const Settings = () => import('@/pages/app/settings.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:patchmatch(.*)*",
      name: "error",
      component: Error,
    },
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/app',
      redirect: '/app/dashboard',
      meta: {
        layout: 'app'
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/conversations',
          redirect: 'app/conversations'
        },
        {
          path: 'conversations',
          name: 'conversations',
          component: Conversations,
          alias: ['/app/chats', '/app/messages']
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        },
      ]
    }
  ]
})

export default router
