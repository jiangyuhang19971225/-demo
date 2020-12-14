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
    path: '/quill/:id',
    name: 'quill',
    component: () => import('../views/quill.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/input.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/vuex/index')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/slot/slot.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('../views/checkbox.vue')
  },
  {
    path: '/echarts1',
    name: 'echarts1',
    component: () => import('../views/echarts/index')
  },
  {
    path: '/echarts2',
    name: 'echarts2',
    component: () => import('../views/echarts/newEcharts.vue')
  },
  {
    path: '/numAdd',
    name: 'numAdd',
    component: () => import('../views/numAdd/index')
  },
  {
    path: '/qrcodejs2',
    name: 'qrcodejs2',
    component: () => import('../views/qrcodejs2/index')
  },

  {
    path: '/elmenu',
    name: 'elmenu',
    component: () => import('../views/el-meun.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
