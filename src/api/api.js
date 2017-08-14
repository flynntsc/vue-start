import axios from 'axios'

// Defined
const prefix = '/api'
const link = url => prefix + url
const get = (url, method) => params => axios.get(prefix + url, params)
const post = (url, method) => params => axios.post(prefix + url, params)
const put = (url, method) => params => axios.put(prefix + url, params)
const del = (url, method) => params => axios.delete(prefix + url, params)

// 获取用户信息 ->查
export const getUser = get('/user')
// 新增用户信息 ->增
export const postUser = post('/user')
// 更改用户信息 ->改
export const putUser = put('/user')
// 删除用户信息 ->删
export const delUser = del('/user')

// 上传地址
export const pathFileUpload = link('/uploadfile')
