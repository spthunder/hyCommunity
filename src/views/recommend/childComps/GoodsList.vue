<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card v-for="(item,index) in list" :key="index" @click="itemClick(item.id,item.content, item.title, item.img, item.love, item.collect)"
                :desc = "item.name"
                :thumb= item.img
      >
        <template #title>
          <div style="font-size: 1.1em; font-weight: bold">
            {{item.title}}
          </div>
        </template>
        <template #price>
          <div style="font-size: 1.1em">
            发布于{{item.time? (item.time).slice(0,10): item.time}}
          </div>
        </template>
        <template #tags>
          <van-tag plain type="danger" style="margin-right: 0.6rem">{{transNum(item.tag)}}</van-tag>
          <van-tag plain type="danger">已认证</van-tag>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import GoodsListItem from "@/views/home/childComps/GoodsListItem";
export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data(){
    return{
      loading: false,
      finished: true,
    }
  },
  computed:{
    transNum(){
      return function(num){
        if(num === 0){
          return "行动不便"
        }else if(num === 1){
          return "老人"
        }else if(num === 2){
          return "小孩"
        }else {
          return "其他"
        }
      }
    }
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    },
    itemClick(id,content, title,img, love, collect){
      this.$router.push({
        name:"detail",
        params:{
          id: id,
        }
      })
      this.$store.commit("hideTabbar")
    }
  },
}
</script>

<style scoped>

</style>
