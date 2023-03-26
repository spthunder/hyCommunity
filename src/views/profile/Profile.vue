<template>
  <div id="profile">
    <div class="header">
      <div class="main">
        <div class="img">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="welcome">
          <div>Hi~，小甜甜</div>
          <div class="certify">已实名认证</div>
        </div>
      </div>
    </div>
    <div class="container">
      <van-cell title="个人信息设置" is-link to="index" size="large" icon="setting" />
      <van-cell title="收藏列表" is-link to="index" size="large" icon="like"/>
      <van-cell title="发布管理" is-link to="index" size="large" icon="bell" />
      <van-cell title="分享" is-link url="https://chinavolunteer.mca.gov.cn/site/home" size="large" icon="share" />
      <van-cell title="加入我们" is-link url="/vant/mobile.html" size="large" icon="good-job" />
      <van-cell title="中国志愿服务网" is-link url="https://chinavolunteer.mca.gov.cn/site/home" size="large" icon="hot" />
      <van-cell title="退出登录" is-link url="https://chinavolunteer.mca.gov.cn/site/home" size="large" icon="warning" />
    </div>
    <!--1.单独封装一个组件: 利用slot知识点-->
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from 'common/navbar/NavBar'

	export default {
		name: "Profile",
    components: {
		  UserInfo, ListView, NavBar
    },
    data: function () {
		  return {

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
