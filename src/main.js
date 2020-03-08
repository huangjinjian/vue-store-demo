import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './http/api'
import http from './http/http'

import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

// 引入css
import '@/assets/css/init.css'

//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios 拦截器
import './http/axios'

Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  loading: 'load.gif',
  try: 3
})

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
