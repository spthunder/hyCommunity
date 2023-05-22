<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">帮扶推荐</div>
    </nav-bar>
    <div>
      <van-search @search="onSearch" show-action @cancel="onCancel" v-model="value" placeholder="请输入搜索关键词" />
      <home-swiper :banners="banners" :test="test"
                   ref="hSwiper">
      </home-swiper>
      <div v-if="!isSearching">
        <tab-control @itemClick="tabClick"
                     :titles="['社区日常', '社区紧急', '推荐']"
                     ref="tabControl">
        </tab-control>
        <goods-list :list="showGoodsList" class="list"></goods-list>
      </div>
      <div v-else>
        <goods-list :list="searchList" class="list"></goods-list>
      </div>

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
  getUserByName,

} from "@/network/user";
import {getRecommendByUser} from "@/network/recommend";

export default {
  name: "Recommend",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    GoodsList,
  },
  data() {
    return {
      isSearching:false,
      value:'',
      banners: [],
      recommends: [],
      test:"dhjkasdadh",
      searchList:[],
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
    onSearch(){
      getUserByName(this.value).then(res => {
        console.log(res)
        if(res.status === 200){
          this.isSearching = true
          this.searchList = []
          this.searchList.push(...res.data)
        }
      })
    },
    onCancel(){
      this.isSearching = false
      console.log("我取消了")
    },
    tabClick(index) {
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
