<template>
  <div id="profile">
    <div class="header">
      <div class="main">
        <div class="img">
          <van-image
            round
            width="5rem"
            height="5rem"
            :src=this.$store.state.img
          />
        </div>
        <div class="welcome">
          <div>Hi~，{{this.$store.state.name}}</div>
          <div class="certify">已实名认证</div>
        </div>
      </div>
    </div>
    <div class="container">
      <van-cell title="收藏列表" @click="toNext" is-link to="collect" size="large" icon="like"/>
      <van-cell v-if="this.$store.state.role === 0" title="发布管理" @click="toNext" is-link to="publishList" size="large" icon="bell" />
      <van-cell title="分享" is-link @click="showShare = true"  size="large" icon="share" />
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
      <van-cell title="加入我们" @click="showToast" is-link  size="large" icon="good-job" />
      <van-cell title="退出登录" is-link @click="exit" size="large" icon="warning" />
    </div>
    <!--1.单独封装一个组件: 利用slot知识点-->
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from 'common/navbar/NavBar'
  import { Toast } from 'vant';

	export default {
		name: "Profile",
    components: {
		  UserInfo, ListView, NavBar
    },
    created() {

    },
    data: function () {
		  return {
        showShare: false,
        options: [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      }
    },
    methods:{
      showToast(){
        Toast('投递消息至wpjcode@163.com')
      },
      onSelect(option) {
        Toast(option.name);
        this.showShare = false;
      },
      exit(){

        this.$store.state.isLogin = false

        this.$router.push('/login')
        this.$store.commit('hideTabbar')
      },
      toNext(){
        this.$store.commit("hideTabbar")
      }
    },
    mounted: function () {
    }
	}
</script>

<style scoped>
  .header{
    height: 20vh;
    width: 100vw;
    background: linear-gradient(#FFBE71,#FF626E);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
    width: 80%;
    height: 39%;
    /*background-color: black;*/
    display: flex;
    align-items: center;
  }
  .welcome{
    font-size: 1.8rem;
    color: #ffffff;
    margin-left: 2rem;
  }
  .certify{
    font-size: 1rem;
    border: 1px solid ;
    width: 6rem;
    height: 1.5rem;
    border-radius: 5px;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }
  .container{
    margin-top: 1vh;
  }

</style>
