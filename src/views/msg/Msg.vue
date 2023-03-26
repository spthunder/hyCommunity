<template>
  <div id="msg">
    <nav-bar class="nav-bar"><div slot="center">消息</div></nav-bar>
    <div class="system">
      <div class="icon">
        <img class="notify" src="~assets/img/message/notify2.svg">
      </div>
      <div class="tip">您还有{{num}}条未读系统通知</div>
    </div>
    <div class="list">
      <van-cell-group inset>
        <van-cell :title=item.name :value=item.time :label=item.message v-for="(item,index) in messageList" :key="index" >
          <template #icon>
            <van-image style="margin-right: 1rem"
              round
              width="3rem"
              height="3rem"
              :src=item.figure
            />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'

	export default {
		name: "Msg",
    data(){
      return{
        num: 1,
        systemList:[],
        messageList:[
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          },
          {
            name:"咕咕咕",
            figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
            time:"3-16",
            message:"你在干嘛"
          }
        ],
      }
    },
    components: {
		  NavBar,
    },
    computed: {

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
    overflow: scroll;
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
  .tx{
    height: 3rem;
    width: 3rem;
  }
</style>
