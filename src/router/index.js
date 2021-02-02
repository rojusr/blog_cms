import Vue from 'vue'
import VueRouter from 'vue-router'
import Preview from '../views/Preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    props: true,
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    props(route) {
      const props = { ...route.params }
      props.id = +props.id
      return props
    },
    component: () => import('../views/PostPreview.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: 'blog_cms',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

export default router
