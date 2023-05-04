<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-popup round v-model="this.$store.state.showToast" style="height: 10vh; width: 80vw; font-size: 2rem;text-align: center;line-height: 10vh">
        请先登录！
    </van-popup>
    <tabbar v-if="this.$store.state.showTabbar" class="tabbar"></tabbar>
<!--    <main-tab-bar  v-if="this.$route.path!=='/login'" class="tabbar"></main-tab-bar>-->
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'
  import Tabbar from "@/components/content/tabbar/tabbar";
  export default {
    name: 'app',
    components: {
      Tabbar,
      MainTabBar,
    },
    data(){
      return{
      }
    },
    created() {
      document.title="红心社区"
      if(this.$route.path === '/login'){
        console.log(this.$store.state.showTabbar)
      }
    }
  }
</script>
<style>
  @import "assets/css/base.css";
  #app{
    height: 100vh;
    overflow: scroll;
    margin: auto;
    padding: 0;
    position: relative;
  }
</style>
