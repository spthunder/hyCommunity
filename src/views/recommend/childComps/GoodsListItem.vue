<template>
  <div>
    <van-card
      :price= "this.time"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  data(){
    return{
      title: this.goods.title,
      time: this.goods.time,
      img: this.goods.img
    }
  },
  mounted: function () {
    // console.log(this.goods);
  },
  methods: {
    // goToDetail: function () {
    //   // 1.获取iid
    //   let iid = this.goods.iid;
    //
    //   // 2.跳转到详情页面
    //   this.$router.push({path: '/detail', query: {iid}})
    // }
  },
  computed: {
    // getImg() {
    //   return this.goods.img || this.goods.image || this.goods.show.img
    // }
  }
}
</script>

<style scoped>

</style>
