<template>
  <tab-bar >
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/nhome.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/nhome_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/publish">
      <img slot="icon" src="~assets/img/tabbar/publish.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/publish_active.svg" alt="">
      <div slot="text">发布</div>
    </tab-bar-item>
    <tab-bar-item link="/msg">
      <img slot="icon" src="~assets/img/tabbar/nmessage.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/nmessage_active.svg" alt="">
      <div slot="text">通知</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/nprofile.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/nprofile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from 'common/tabbar/TabBar'
    import TabBarItem from 'common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
