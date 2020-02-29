import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList.vue'
import Cart from '../views/Cart.vue'
import Address from '../views/Address.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'GoodsList',
  component: GoodsList
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart
}, {
  path: '/address',
  name: 'Address',
  component: Address
}, {
  path: '/orderConfirm',
  name: 'OrderConfirm',
  component: OrderConfirm
}, {
  path: '/orderSuccess',
  name: 'OrderSuccess',
  component: OrderSuccess
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
