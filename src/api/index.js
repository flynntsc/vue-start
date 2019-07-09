import axios from './axios'

const format = url => `/api/v1${url}`
const get = url => params => axios.get(format(url), { params })
const post = url => params => axios.post(format(url), params)
// const put = url => params => axios.put(format(url), params)
// const del = url => params => axios.delete(format(url), { params })

export default {
  login: post('/login'), // 登录
  logout: get('/logout'), // 登出
}
