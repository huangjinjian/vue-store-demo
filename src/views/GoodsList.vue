<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price sort-up" @click="sort">
            Price
            <svg class="icon icon-arrow-short cur">
              <use xlink:href="#icon-arrow-short" />
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd v-for="(item, index) in priceFilter" :key="index">
                <a
                  v-if="item.tex"
                  href="javascript:void(0)"
                  :class="[priceFilterIndex == index ? 'cur' : '']"
                  v-on:click="choosePrice(index)"
                >{{ item.tex }}</a>
                <a
                  v-else
                  href="javascript:void(0)"
                  class
                  :class="[priceFilterIndex == index ? 'cur' : '']"
                  v-on:click="choosePrice(index)"
                >{{ item.startPrice }} - {{ item.endPrice }}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in productList" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'images/' + item.prodcutImg" />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{ item.productName }}</div>
                    <div class="price">{{ item.prodcutPrice | currency() }}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="busy"
                infinite-scroll-distance="10"
              >
                <div style="font-size:20px;text-align:center">
                  <!-- <span v-show='busy' >加载更多...</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :mdShow="mdShow" v-on:close="closeModal">
      <p slot="message">请先登录，否则无法加入到购物车！</p>
      <div slot="btnGroup">
        <button class="btn" @click="closeModal">关闭</button>
      </div>
    </modal>
    <modal :mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">商品成功加入购物车！</p>
      <div slot="btnGroup">
        <button class="btn btn--m" @click="closeModal">继续购物</button>
        <router-link tag="button" class="btn btn--m btn--red" :to="{ path: '/cart' }">查看购物车</router-link>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavBread from "../components/NavBread";
import NavFooter from "../components/NavFooter";
import { currency } from "../util/currency";
import Modal from "../components/Modal";

/**
 * sortIndex  0 代表不排序  1 正  -1 倒序
 * sortOnoff  正倒序开关
 *
 *
 */

export default {
  data() {
    return {
      sortIndex: 0,
      sortOnoff: false,
      busy: false,
      mdShow: false,
      mdShowCart: false,
      productList: [],
      page: 1,
      size: 4,
      priceFilterIndex: 0,
      priceFilter: [
        {
          tex: "all",
          startPrice: 0,
          endPrice: 200000
        },
        {
          startPrice: 0,
          endPrice: 100
        },
        {
          startPrice: 100,
          endPrice: 500
        },
        {
          startPrice: 500,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 2000
        }
      ]
    };
  },
  mounted() {
    this.init();
    this.$store.dispatch("login", this);
    this.getGoodList();
  },
  filters: {
    currency
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter,
    Modal
  },
  methods: {
    async getGoodList() {
      this.busy = true;
      const GoodsList = await this.$http.get(this.$api.Goods.GoodsList, {
        startPrice: this.priceFilter[this.priceFilterIndex].startPrice,
        endPrice: this.priceFilter[this.priceFilterIndex].endPrice,
        page: this.page,
        size: this.size,
        sort: this.sortIndex
      });
      if (GoodsList.data.length < this.size) {
        this.busy = true;
      } else {
        this.busy = false;
      }
      this.page++;
      this.productList = [...this.productList, ...GoodsList.data];
    },
    async addCart(item) {
      if (this.$store.state.userId) {
        let addRes = await this.$http.post(this.$api.Goods.GoodsAdd, {
          userId: this.$store.state.userId,
          ...item
        });
        if (addRes.state == 1) {
          this.mdShowCart = true;
          this.$store.dispatch("cart");
        }
      } else {
        this.mdShow = true;
      }
    },
    sort() {
      this.sortIndex = this.sortOnoff ? 1 : -1;
      this.sortOnoff = !this.sortOnoff;
      this.init();
    },
    loadMore() {
      this.getGoodList();
    },
    choosePrice(index) {
      this.priceFilterIndex = index;
      this.init();
    },
    init() {
      this.busy = false;
      this.page = 1;
      this.productList = [];
      this.getGoodList();
    },
    closeModal() {
      this.mdShow = false;
      this.mdShowCart = false;
    }
  }
};
</script>

<style scoped lang="scss"></style>
