<template>
<div>
  <van-nav-bar
    title="详情"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  收藏列表
</div>
</template>

<script>
export default {
  name: "collect",
  methods:{
    onClickLeft() {
      this.$router.back()
      this.$store.commit('showTabbar')
    },
  }
}
</script>

<style scoped>

</style>
