// todo-> 分别import再操作 VS 统一import再操作 ？？？
import Vue from 'vue'
import App from './App.vue'

// 路由
import VueRouter from 'vue-router'
import routes from './router'
const router = new VueRouter({
  routes
})

// 原型挂载api对象，避免频繁加载
import * as api from '~/api/index'
Vue.prototype.$api = api

// 引入饿了么框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
