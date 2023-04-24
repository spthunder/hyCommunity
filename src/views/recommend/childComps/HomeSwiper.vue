<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in data1" :key="index" >
        <div class="img">
          <img :src= "item.img" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

	export default {
		name: "HomeSwiper",
    props: {
		  banners: {
		    type: Array,
        default: []
      },
      test:String
    },
    data(){
      return{
        data1:[]
      }
    },
    mounted() {
      console.warn(this.banners[1])
      console.log(this.test)
    },
    watch:{
      banners(newV,oldV){
        this.data1.push(...newV)
        console.log(this.data1,1111)
      }
    }
  }
</script>

<style scoped>
.img{
  width: 100vw;
  height: 18vh;
}
</style>
