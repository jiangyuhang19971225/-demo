import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import elUpload from '@/views/elupload'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/excel',
    name: 'excel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/excel.vue')
  },
  {
    path: '/excel1',
    name: 'excel1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/excelexport.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tuopu.vue')
  },
  {
    path: '/liu',
    name: 'liu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/liukun.vue')
  },
  {
    path: '/biaodan',
    name: 'biaodan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/biaodan.vue')
  },
  {
    path: '/elupload',
    name: 'elupload',
    component: elUpload
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('../views/pagination.vue')
  },
  {
    path: '/uploadImg',
    name: 'uploadImg',
    component: () => import('../views/uploadImg.vue')
  },
  {
    path: '/quill',
    name: 'quill',
    component: () => import('../views/quill.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
