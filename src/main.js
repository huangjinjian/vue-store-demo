import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './http/api'
import http from './http/http'

// 引入css
import '@/assets/css/init.css'

// axios 拦截器
import './http/axios'

// 对后端接口 进行全局注册
Vue.prototype.$api = api
// 对请求方式 进行全局注册
Vue.prototype.$http = http
Vue.prototype.$tex = {
  a: 123
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
