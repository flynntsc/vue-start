import axios from 'axios'

// Defined
const prefix = '/api'
const fp = url => prefix + url
const fn = (url, method) => params => {
  switch (method) {
    case 'post':
      return axios.post(prefix + url, params)
    case 'put':
      return axios.put(prefix + url, params)
    case 'del':
      return axios.delete(prefix + url, params)
    default:
      return axios.get(prefix + url, params)
  }
}

// 获取用户信息 ->查
export const getUser = fn('/user')
// 新增用户信息 ->增
export const postUser = fn('/user', 'post')
// 更改用户信息 ->改
export const putUser = fn('/user', 'put')
// 删除用户信息 ->删
export const delUser = fn('/user', 'del')

// 上传地址
export const pathFileUpload = fp('/uploadfile')
