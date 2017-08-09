import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
