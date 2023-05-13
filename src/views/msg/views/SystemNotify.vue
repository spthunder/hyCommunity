<template>
  <div id="notify">
    <van-nav-bar
      class="nav-bar"
      title="系统通知"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="option">
      <span class="allMessage">全部消息</span>
      <span class="edit">编辑</span>
    </div>
    <system-list :list=list></system-list>
  </div>
</template>

<script>
import SystemList from "@/views/msg/childComps/SystemList";
export default {
  name: "SystemNotify",
  components: {SystemList},
  data(){
    return{
      list:[]
    }
  },
  created() {
    console.log(this.$store.state.showTabbar)
    console.log("进来咯")

  },
  mounted() {
    console.log("mounted")
    // this.$bus.$on("getNotify", (list) => {
    //   console.log(list)
    //   this.list.push(...list)
    // })
    this.list.push(...this.$store.state.notify)
    console.log(this.$store.state.notify)
  },
  methods:{
    onClickLeft() {
      this.$router.back()
      this.$store.commit('showTabbar')
    },
  }
}
</script>

<style lang="less" scoped>
#notify{
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
}
#notify::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.nav-bar{
  position: sticky;
  top: 0;
}
.option{
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  //border-bottom: 2px solid #f6f6f6;
  font-size: 1.1rem;
  .allMessage{
    color: #888888;
  }
  .edit{
    color: rgb(250,85,37);
  }
}


</style>
