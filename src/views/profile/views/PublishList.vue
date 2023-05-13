<template>
  <div id="publish-list">
    <van-nav-bar
      class="nav"
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <goods-list :list="list"></goods-list>
  </div>
</template>

<script>
import {getCollect, getPublish} from "@/network/event";
import GoodsList from "@/views/profile/childComps/GoodsList";

export default {
  name: "PublishList",
  components: {GoodsList},
  data(){
    return{
      list:[]
    }
  },
  created() {
    let userId = this.$store.state.id
    getPublish(userId).then(res => {
      this.list.push(...res.data)
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
#publish-list{
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
