<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="tabbar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar,
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
