import { createRouter, createWebHistory } from 'vue-router'
import progress from '@bassist/progress'
import routes from './routes'
import { APP_NAME } from '@/constants'

progress.configure({ showSpinner: false })
progress.setColor('$brand')

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_DEPLOY_BASE_URL),
  // history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ? savedPosition : { top: 0, left: 0 }
  },
})
router.beforeEach((to, from, next) => {
  progress.start()
  next()
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
  progress.done()
})

export default router
