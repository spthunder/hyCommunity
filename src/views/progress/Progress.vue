<template>
  <div id="contact">
    <nav-bar class="navbar"><div slot="center">帮扶进度</div></nav-bar>
    <div class="item" v-for="(item,index) in this.currentContact" :key="item.id">
      <van-contact-card
        type="edit"
        :name="item.name"
        :tel="item.tel"
      />
      <van-steps :active="item.process">
        <van-step>帮扶建立</van-step>
        <van-step>平台审核中</van-step>
        <van-step>流程中</van-step>
        <van-step>帮扶完成</van-step>
      </van-steps>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {contactById} from "@/network/contact";

export default {
  name: "progress",
  components: {NavBar},
  data(){
    return{
      active: 1,
      currentContact: []
    }
  },
  created() {
    this.currentContact = []
    contactById(this.$store.state.id).then(res =>{
      this.currentContact.push(...res.data)
      console.log(res.data)
    })
  },
  methods:{
  }
}
</script>

<style scoped>
#contact{
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.navbar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.item{
  width: 95vw;
  margin-bottom: 1vh;
}
</style>
