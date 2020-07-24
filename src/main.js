import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import JsonExcel from 'vue-json-excel'
require('./mock.js')
require('echarts')
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
