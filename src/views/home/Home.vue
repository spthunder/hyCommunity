<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">红心社区帮扶中心</div>
    </nav-bar>
    <div>
      <home-swiper :banners="banners" :test="test"
                    ref="hSwiper">
      </home-swiper>
      <tab-control @itemClick="tabClick"
                    :titles="['社区日常', '社区紧急', '推荐']"
                    ref="tabControl">
      </tab-control>
      <goods-list :list="showGoodsList" class="list"></goods-list>
    </div>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabControl/TabControl'
  import HomeSwiper from './childComps/HomeSwiper'
  import GoodsList from './childComps/GoodsList'
  import {
    getCommondata,
    getUrgentdata,
    getSwipperdata
  } from "network/home";
  import {
    getRecommendByUser
  } from "@/network/recommend";

  export default {
		name: "Home",
    components: {
		  NavBar,
      TabControl,
      HomeSwiper,
      GoodsList,
    },
    data() {
		  return {
		    banners: [],
        recommends: [],
        test:"dhjkasdadh",
        goodsList: {
          'common': {page: 1, list: []},
          'urgent': {page: 1, list: []},
          'recommend': {page: 1, list: []},
        },
        currentType: 'common',
        isTabFixed: false,
        tabOffsetTop: 0,
        showBackTop: false
      }
    },
    computed: {
		  showGoodsList() {
        console.log(this.goodsList[this.currentType].list)
		    return this.goodsList[this.currentType].list
      }
    },
    created() {
      console.log('创建Home');
      getSwipperdata().then(res => {
        this.banners.push(...res.data.list)
        this.test = '777'
        console.log(this.banners)
      })
      getCommondata().then(res => {
        this.goodsList['common'].list = res.data
        console.log(res)
      })
      getUrgentdata().then(res => {
        this.goodsList['urgent'].list = res.data
      })
      getRecommendByUser(this.$store.state.id).then(res => {
        let arr = res.data.event_list
        this.goodsList['recommend'].list = res.data.event_list
        console.log(arr)
      })
    },
    methods: {
		  tabClick(index) {
        console.log(index)
		    switch (index) {
          case 0:
            this.currentType = 'common'
            break
          case 1:
            this.currentType = 'urgent'
            break
          case 2:
            this.currentType = 'recommend'
            break
        }
      },
      /**
       * 网络请求相关方法
       */
    }
	}
</script>

<style scoped>
  .home {
    /*position: relative;*/
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 44px;
    height: calc(100vh - 49px - 44px );
    overflow: scroll;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .list{
    position: absolute;
    width: 100%;
    height: calc(100vh - 44px - 49px - 18vh - 49px);
    overflow: scroll;
  }
</style>
