<template>
  <div>
    <van-cell-group inset>
      <van-cell :title=item.name @click="toDetail" :value=item.time :label=item.message v-for="(item,index) in messageList" :key="index" >
        <template #icon>
          <van-image style="margin-right: 1rem"
                     round
                     width="3rem"
                     height="3rem"
                     :src=item.figure
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "MsgList",
  data(){
    return{
      messageList:[
        {
          name:"西华",
          figure:"https://img2.baidu.com/it/u=1619929019,1234523232&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          time:"4-05",
          message:"获得了你的联系方式"
        },
        {
          name:"子月啼啼",
          figure:"https://img2.baidu.com/it/u=1578370331,2005553669&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          time:"3-25",
          message:"获得了你的联系方式"
        },
        {
          name:"小小仙",
          figure:"https://img1.baidu.com/it/u=1338830027,2021379704&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          time:"3-21",
          message:"给你点了喜欢"
        },
        {
          name:"咕咕咕",
          figure:"https://img01.yzcdn.cn/vant/cat.jpeg",
          time:"3-16",
          message:"你在干嘛"
        },
      ],
    }
  },
  methods:{
    toDetail(){
      this.$router.push({
        name:'chat',
        params:{
          id:111
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
