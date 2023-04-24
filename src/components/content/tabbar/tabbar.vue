<template>
  <div class="wrapper">
    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000" >
      <van-tabbar-item v-for="(item,index) in menu" :key="index" :to=item.url :icon=item.icon>{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  // props:{
  //   menu: {
  //     type: Array,
  //     default: []
  //   },
  // },
  data(){
    return{
      active:0,
      menu:this.$store.state.tabbarList
      // menu:[
      //   {
      //     name:"首页",
      //     icon: "home-o",
      //     url:'/home'
      //   },
      //   {
      //     name:"发布",
      //     icon: "upgrade",
      //     url:'/publish'
      //   },
      //   {
      //     name:"消息",
      //     icon: "envelop-o",
      //     url:'/msg'
      //   },
      //
      //   {
      //     name:"我的",
      //     icon: "user-circle-o",
      //     url:'/profile'
      //   },
      // ]
    }
  }
}
</script>

<style scoped>

</style>
