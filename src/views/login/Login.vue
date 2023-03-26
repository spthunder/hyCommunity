<template>
  <div class="login">
    <div class="bgc">
      <img src="~assets/img/login/bgc.jpg">
    </div>
    <div class="icon">
      <van-image
        round
        fit="cover"
        width="6rem"
        height="6rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>

    <div class="main">
      <div class="title">红心社区帮扶系统</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      tel:'',
      password:'',
    };
  },
  created() {},
  methods: {
    // login() {
    //   this.$http
    //     .login({
    //       url: "/user/login",
    //       data: {
    //         userName: this.$store.state.aid,
    //         userPassword: this.$store.state.password,
    //       },
    //     })
    //     .then((res) => {
    //       let userInfo = res.data.data;
    //       console.log(res.data)
    //       if (res.data.code == 200) {
    //         this.$store.commit("$_setValue", userInfo);
    //         this.$message.success("登录成功");
    //         this.$router.push("/home");
    //       } else {
    //         this.$message.error("请检查您的账号和密码");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>
<style scoped lang="less">
.login{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  .bgc{
    height: 25vh;
    width: 100vw;
    img {
      width: 100%;
      height: 100%;
      -webkit-filter: blur(1px); /* chrome, opera */
      -ms-filter: blur(1px);
      -moz-filter: blur(1px);
    }

  }
  .main{
    height: 80vh;
    width: 100vw;
    background-color: #fff;
    position: fixed;
    top: 20vh;
    left: 0;
    right: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    flex-direction: column;
  }
  .icon{
    position: fixed;
    top: 20vh;
    left: 50vw;
    transform: translate(-50%, -50%); //第一个参数控制左右，第二个上下  左移动和上移动都是负值
    z-index: 10;
  }
}
</style>
