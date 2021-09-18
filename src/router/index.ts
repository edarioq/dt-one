import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import User from '../views/User.vue';
import Admin from '../views/Admin.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'User',
    component: User,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
