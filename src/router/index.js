import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: () => import('../views/AddNewView.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail-post',
      component: () => import('../views/DetailPostView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit-post',
      component: () => import('../views/EditPostView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-page',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
