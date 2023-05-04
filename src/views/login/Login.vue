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
        :src= "require('@/assets/img/login/loginLogo.png')"
      />
    </div>

    <div class="main">
      <div class="title">红心社区</div>
      <div class="content">
        <van-cell-group style="margin-bottom: 3vh">
          <van-field v-model="name"  label="用户名" placeholder="请输入用户名"/>
          <van-field v-model="password" type="password" label="密码" placeholder="请输入6-16位密码"/>
          <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            label="角色"
            placeholder="点击选择角色"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        </van-cell-group>
        <div class="certify-code">
          <input v-model="inputCode"/>
          <identify @changeCode="changeCode" class="code" :content-height="38"></identify>
        </div>
        <van-button v-if="checked === false" disabled block type="info" native-type="submit">提交</van-button>
        <van-button v-else="" block type="info" native-type="submit" @click="toLogin">提交</van-button>
        <div class="forget" style="text-align: right;margin-top: 0.5rem">
          忘记密码
        </div>
      </div>
      <div class="protocol">
        <van-checkbox v-model="agree" checked-color="#ee0a24">
          我已阅读并同意<a style="color: blue">《用户协议》</a>和<a style="color: blue">《隐私政策》</a>
        </van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import hmenu from "../../router/asyRouter/huser"
import nmenu from "../../router/asyRouter/nuser"
import {login} from "@/network/login";
import Identify from "@/components/common/identify";

export default {
  name: "login",
  components: {Identify},
  data() {
    return {
      name: 'aa',
      password: '123456',
      agree: false,
      value: '',
      columns: ['普通用户', '爱心帮扶志愿者',],
      showPicker: false,
      inputCode:'',
      certifyCode:''
    };
  },
  computed: {
    checked() {
      return this.inputCode === this.certifyCode && this.name.length >= 1 && this.password.length >= 6 && this.agree === true && this.userType !== -1   ? true : false
    },
    userType(){
      if(this.value === ''){
        return -1
      }else{
        return this.value === "普通用户" ? 0:1
      }
    }
  },
  watch:{
    agree(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    changeCode(val){
      this.certifyCode = val
    },
    toLogin() {
      let params = {
        name: this.name,
        password: this.password
      }
      login(params).then(res => {
        if(res.status === 200){
          this.$store.state.isLogin = true
          let data = res.data
          console.log(data)
          this.$store.state.name = data[0].name
          console.log(this.$store.state.name)
          if(data[0].role === 0){ //是受助人
            this.$store.state.tabbarList = nmenu()
            this.$router.push('/home')
            this.$store.commit('showTabbar')
          }else{
            this.$store.state.tabbarList = hmenu()
            this.$router.push('/recommend')
            this.$store.commit('showTabbar')
          }
        }
      })


    },
  },
};
</script>
<style scoped lang="less">
.login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .bgc {
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

  .main {
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
    align-items: center;

    .title {
      margin-top: 3.5rem;
      margin-bottom: 2.5rem;
      font-weight: bold;
      font-size: 1.5rem;
      color: #222222;
    }

    .content {
      width: 94vw;
    }
  }

  .icon {
    position: fixed;
    top: 20vh;
    left: 50vw;
    transform: translate(-50%, -50%); //第一个参数控制左右，第二个上下  左移动和上移动都是负值
    z-index: 10;
  }

  .protocol {
    position: fixed;
    bottom: 3vh;
  }
  .certify-code{
    input{
      border-radius: 10px;
      border: 1px solid ;
      text-align: center;
    }
    input:hover{
      border:1px solid #1E90FF;
    }
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
}
</style>
