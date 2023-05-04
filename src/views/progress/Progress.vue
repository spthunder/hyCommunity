<template>
  <div id="progress">
    <nav-bar class="navbar"><div slot="center">帮扶进度</div></nav-bar>
    <div class="item">

      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
      <van-steps :active="active">
        <van-step>帮扶请求</van-step>
        <van-step>帮扶建立</van-step>
        <van-step>平台审核</van-step>
        <van-step>帮扶完成</van-step>
      </van-steps>
    </div>
    <div class="item">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
      <van-steps :active="active">
        <van-step>帮扶请求</van-step>
        <van-step>帮扶建立</van-step>
        <van-step>平台审核</van-step>
        <van-step>帮扶完成</van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "progress",
  components: {NavBar},
  data(){
    return{
      active: 1,
      currentContact: {
        name: '张三',
        tel: '13000000000',
      },
    }
  },
  methods:{
    onEdit() {
      Toast('编辑');
    },
  }
}
</script>

<style scoped>
#progress{
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
