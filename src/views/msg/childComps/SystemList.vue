<template>
  <div class="messageList">
    <div class="item" v-for="(item) in  list" :key="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="detail">{{item.content}}</div>
      <div class="time">{{ item.time.split(" ")[0] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemList",
  props:{
    list:{
      type:Array,
    }
  }
}
</script>

<style lang="less" scoped>
.messageList{
.item{
  border-top: 2px solid #f6f6f6;
.title{
  font-size: 1.2rem;
  line-height: 3rem;
  padding: 0 0.8rem;
}
.detail{
  padding: 0 0.8rem;
  line-height: 1.2rem;
}
.time{
  color: #888888;
  padding: 0.5rem 1rem 0.5rem ;
  text-align: right;
}
}
}
</style>
