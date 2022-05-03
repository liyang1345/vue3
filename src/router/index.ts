import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 路由类型接口
const routes:RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: () => import('../view/home/HomeIndex.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../view/login/LoginIndex.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes,
});
export default router;
