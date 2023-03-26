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
    <div class="container"></div>
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
    font-size: 2rem;
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
  }

</style>
