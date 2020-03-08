import Vue from "vue";
import VueRouter from "vue-router";
import GoodsList from "../views/GoodsList.vue";
import Cart from "../views/Cart.vue";
import Address from "../views/Address.vue";
import AddressEdit from "../views/AddrEdit.vue";
import OrderConfirm from "../views/OrderConfirm.vue";
import OrderSuccess from "../views/OrderSuccess.vue";

import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "GoodsList",
    component: GoodsList
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      login: true
    }
  },
  {
    path: "/address",
    name: "Address",
    component: Address,
    meta: {
      login: true
    }
  },
  {
    path: "/address-edit",
    name: "AddressEdit",
    component: AddressEdit,
    meta: {
      login: true
    }
  },
  {
    path: "/orderConfirm",
    name: "OrderConfirm",
    component: OrderConfirm,
    meta: {
      login: true
    }
  },
  {
    path: "/orderSuccess",
    name: "OrderSuccess",
    component: OrderSuccess,
    meta: {
      login: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.userId) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
