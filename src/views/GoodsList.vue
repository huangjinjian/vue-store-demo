<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">
            Price
            <svg class="icon icon-arrow-short">
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
              <dd>
                <a href="javascript:void(0)">All</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="../../public/img/1.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">999</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="../../public/img/2.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">1000</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="../../public/img/3.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">500</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="../../public/img/4.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">2499</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :mdShow="mdShow" v-on:close="closeModal">
      <p slot="message">请先登录，否则无法加入到购物车！</p>
      <div slot="btnGroup">
        <button class="btn">关闭</button>
      </div>
    </modal>
    <modal :mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">商品成功加入购物车！</p>
      <div slot="btnGroup">
        <button class="btn btn--m">继续购物</button>
        <button class="btn btn--m btn--red">查看购物车</button>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavBread from '../components/NavBread'
import NavFooter from '../components/NavFooter'
import Modal from '../components/Modal'

export default {
  data () {
    return {
      mdShow: false,
      mdShowCart: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getGoodList(this)
    })
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter,
    Modal
  },
  methods: {
    getGoodList: async (vm) => {
      const goodsList = await vm.$http.get(vm.$api.Goods.GoodsList)
      console.log(goodsList)
    },
    closeModal () {
      this.mdShow = false
      this.mdShowCart = false
    }
  }
}
</script>

<style scoped lang="scss"></style>
