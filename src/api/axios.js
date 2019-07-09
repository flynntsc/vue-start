import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.3.10' : ''
const api = axios.create({
  timeout: 180000,
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset:UTF-8',
  },
})

api.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
