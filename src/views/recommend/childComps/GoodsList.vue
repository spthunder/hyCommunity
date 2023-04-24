<template>
  <div >
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card v-for="(item,index) in list" :key="index"
        :desc = "item.name"
        thumb= "https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #title>
          <div style="font-size: 1.1em; font-weight: bold">
            {{item.title}}
          </div>
        </template>
        <template #price>
          <div style="font-size: 1.1em">
            发布于{{item.time}}
          </div>
        </template>
        <template #tags>
          <van-tag plain type="danger" style="margin-right: 0.6rem">生活</van-tag>
          <van-tag plain type="danger">搬运</van-tag>
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
        finished: false,
      }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          // for (let i = 0; i < 10; i++) {
          //   this.list.push(this.list.length + 1);
          // }
          //
          // // 加载状态结束
          // this.loading = false;
          //
          // // 数据全部加载完成
          // if (this.list.length >= 40) {
          //   this.finished = true;
          // }
        }, 1000);
      },
    },
  }
</script>

<style scoped>

</style>
