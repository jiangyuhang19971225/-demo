import axios from 'axios'
import store from '@/store'
// import router from '@/router'

// 全局的 axios 默认值
axios.defaults.timeout = 150000 // 请求超时的时间

// 创建一个axios的实例
const instance = axios.create({
  // 基准地址
  // baseURl: '',
  // 超时时间
  // timeout:10000
})

// 请求拦截器 追加token
instance.interceptors.request.use(config => {
  // 拦截成功
  if (store.state.data) {
    // 如果存在追加token
    config.hearders.Authorization = `Bearer ${store.state.data}`
  }
  return config
}, err => Promise.reject(err))

// 响应拦截器
instance.interceptors.response.use(res => {
  try {
    return res.data.data
  } catch (error) {
    return res
  }
}, err => {
  return Promise.reject(err)
})
