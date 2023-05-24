<template>
<div id="collect">
  <van-nav-bar
    class="nav"
    title="收藏列表"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <goods-list :list="list"></goods-list>
</div>
</template>

<script>
import GoodsList from "@/views/profile/childComps/GoodsList";
import {getCollect} from "@/network/event";
import {collectById} from "@/network/collect";

export default {
  name: "collect",
  components: {GoodsList},
  data(){
    return{
      list:[],
      collectList: ""
    }
  },
  created() {
    collectById(this.$store.state.id).then(res=>{
      console.log(res)
      let data = res.data.event_list
      this.list.push(...data)
    })
  },
  methods:{
    onClickLeft() {
      this.$router.back()
      this.$store.commit('showTabbar')
    },
  }
}
</script>

<style scoped>
#collect{
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
}
.nav{
  position: sticky;
  top: 0;
}
</style>
