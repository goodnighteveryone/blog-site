import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 * 先写死，后面再根据登录信息动态组合
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/Index.vue'), //布局页
    meta: {
      title: '首页',
    },
  },
]

export default routes
