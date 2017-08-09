import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['./views/Index.vue'], resolve),
    name: '首页'
  },
  {
    path: '/list',
    component: resolve => require(['./views/List.vue'], resolve),
    name: '列表页'
  }
]

export default routes
