import axios from 'axios'
import qs from 'qs'
import router from '@/router'

// axios 配置
axios.defaults = {
  ...axios.defaults,
  ...{
    timeout: 6000,
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.demo.com' : '/',
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'indices' }),
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  },
  d
}
axios.create({
  headers: {
    'Content-Type': 'application/json;charset:UTF-8',
    token: ''
  }
})

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
