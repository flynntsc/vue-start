import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import './assets/styles/element-ui-reset.less'
import './assets/styles/style.less'
Vue.use(Element, { size: 'medium', zIndex: 3000 })

import api from './api'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
