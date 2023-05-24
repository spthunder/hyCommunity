<template>
  <div id="detail">
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="showImg">
      <img :src="item.img">
    </div>
    <div class="main">
      <div class="content">
        <h2 style="text-align: center">{{item.title}}</h2>
        <h5 style="text-align: center; margin-top: 10px;color: #888888">发布于 {{item.time? item.time.slice(0,10): item.time}}</h5>
        <div style="padding: 0.5rem 1rem">
          <p>{{item.content}}</p>
        </div>
      </div>
      <div class="option">
        <van-button @click="toContact" round color="rgb(250,85,37)" style="width: 40%" type="info">{{btnText}}</van-button>
        <div class="func star">
          <van-icon @click="toCollect" v-if="!isCollected" name="star-o" size="2rem" />
          <van-icon @click="toCollect" v-else name="star" size="2rem"/>
          <p>收藏</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {eventById} from "@/network/event";
  import {addContact, isContacted} from "@/network/contact";
  import {addCollect, cancleCollect, queryIsCollected} from "@/network/collect";
  import {curTime} from "@/util/getTime";
  import Scroll from 'common/scroll/Scroll'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'

  import DetailBottomBar from './childComps/DetailBottomBar'
  import BackTop from 'content/backTop/BackTop'
  import {NEW} from "@/common/const";
  import {Toast} from "vant";
  import {addScore} from "@/network/recommend";



  export default {
		name: "Detail",
    components: {
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
		  Scroll,
		  DetailNavBar,
      DetailSwiper,
      BackTop
    },
    data() {
		  return {
        btnText:'一键帮扶',
        id:'',
        item:{},
        themeTops: [],
        currentIndex: 0,
        isCollected: false
      }
    },
    created() {
      this.$store.commit('hideTabbar')
      this.id = this.$route.params.id
      eventById(this.id).then(res => {
        console.log(res)
        this.item = res.data[0]
        isContacted(this.$store.state.id, this.item.id).then(res => {  //判断是否已经帮扶
          console.log(res)
          if(res.data.length > 0){
            this.btnText = "已建立帮扶"
          }
        })
        addScore(this.$store.state.id, this.item.id).then(res => {
          console.log(res)
        })
        queryIsCollected(this.$store.state.id, this.item.id).then(res => {
          console.log(res)
          if(res.data.length > 0){
            this.isCollected = true
          }
        })
      })

      console.log(this.content)
    },
    updated() {
		  // 获取需要的四个offsetTop
    },
    methods: {
      toCollect(){
        console.log(this.isCollected)
        if(this.isCollected === false){
          let params = {
            event: this.item.id,
            time: curTime,
            user: this.$store.state.id,
            userName: this.$store.state.name
          }
          addCollect(params).then(res => {
            console.log(res)
            this.isCollected = true
            Toast.success("收藏成功！")
          })
        }else{
          cancleCollect(this.$store.state.id, this.item.id).then(res => {
            console.log(res)
            this.isCollected = false
            Toast.success("取消收藏成功")
          })
        }

      },
      onClickLeft() {
        this.$router.back()
        this.$store.commit('showTabbar')
      },
      toContact(){
        if(this.btnText === "已建立帮扶"){
          Toast.fail({
            message:"等待管理员审核中，不能重复帮扶！",
            duration: 1000
          })
        }else{
          let beContacted = this.item.userId
          let contact = this.$store.state.id
          let contactName = this.$store.state.name
          let event = this.item.id
          let time = curTime
          let params = {
            beContacted: beContacted,
            contact: contact,
            contactName: contactName,
            event: event,
            time: time
          }
          addContact(params).then(res => {
            console.log(res)
            Toast.success("帮扶建立")
            isContacted(this.$store.state.id, this.item.id).then(res => {  //判断是否已经帮扶
              console.log(res)
              if(res.data.length > 0){
                this.btnText = "已建立帮扶"
              }
            })
          })
        }

      }

    }
	}
</script>

<style scoped>
  #detail {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  .showImg{
    width: 100vw;
    height: 30vh;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .main{
    flex: 1;
    position: relative;
  }
  .option{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-top: 3px solid #f6f6f6;
  }
  .func{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
