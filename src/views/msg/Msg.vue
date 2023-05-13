<template>
  <div id="msg">
    <nav-bar class="nav-bar"><div slot="center">消息</div></nav-bar>
    <div class="system" @click="toNotify">
      <div class="icon">
        <img class="notify" src="~assets/img/message/notify2.svg">
      </div>
      <div class="tip">您还有{{num}}条未读系统通知</div>
    </div>
    <div class="list">
      <MsgList></MsgList>
    </div>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import MsgList from "@/views/msg/childComps/MsgList";
  import {showNotify} from "@/network/notify";

  export default {
		name: "Msg",
    data(){
      return{
        num: "-",
        systemList:[],
      }
    },
    components: {
      MsgList,
		  NavBar,
    },
    created() {
      showNotify().then(res => {
        this.systemList.push(...res.data)
        console.log("系统通知内容:"+this.systemList)
        // this.$bus.$emit("getNotify", this.systemList)
        // this.$store.state.notify = this.systemList
        this.$store.commit("addNotify", this.systemList)
        this.num = this.systemList.length
      })
    },
    mounted() {
      this.$bus.$on("showNum",(num)=>{
        this.num = num
      })
    },
    computed: {

    },
    methods:{
      toNotify(){
        this.$router.push('/snotify')
        this.$store.commit("hideTabbar")
      },
    }
	}
</script>

<style scoped>
  #msg{
    background-color: #f6f6f6;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .notify{
    height: 2.5rem;
  }
  .system{
    margin-top: 52px;
    width: 90vw;
    height: 10vh;
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  .notify{
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .tip{
    font-size: 1rem;
    height: 1rem;
    line-height: 1rem;
    width: 15rem;
  }
  .list{
    width: 100vw;
    margin-top: 2vh;
    height: 75vh;
    overflow: scroll;
  }
  .list::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
</style>
