<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index" >
        <div class="img">
          <img v-lazy="item.img" />
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
      }
    },
	}
</script>

<style scoped>
.img{
  width: 100vw;
  height: 18vh;
}
</style>
