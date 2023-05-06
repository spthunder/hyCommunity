<template>
  <div >
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item,index) in list" :key="index">
        <van-card  @click="itemClick(item.id,item.content, item.title, item.img)"
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
              发布于{{item.time}}
            </div>
          </template>
        </van-card>
        <van-steps :active="item.process" active-icon="success" active-color="#38f">
          <van-step>帮扶请求</van-step>
          <van-step>帮扶建立</van-step>
          <van-step>平台审核</van-step>
          <van-step>帮扶完成</van-step>
        </van-steps>
      </div>

    </van-list>
  </div>
</template>

<script>
import GoodsListItem from "@/views/home/childComps/GoodsListItem";

export default {
  name: "ProcessList",
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
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    },
    itemClick(id,content, title,img){
      this.$router.push({
        name:"detail",
        params:{
          id: id,
          img: img,
          content: content,
          title: title
        }
      })
      this.$store.commit("hideTabbar")
    }
  },
}
}
</script>

<style scoped>

</style>
