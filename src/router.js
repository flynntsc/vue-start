import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/index',
    component: resolve => require(['./views/Index.vue'], resolve),
    meta: {title: '首页'}, // 方便动态修改 document title
    name: '首页'
  },
  {
    path: '/list',
    component: resolve => require(['./views/List.vue'], resolve),
    meta: {title: '列表页'},
    name: '列表页'
  }
]

export default routes
