<template>
  <div id="notify">
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    系统通知哈哈哈哈
  </div>
</template>

<script>
export default {
  name: "Systemnotify",
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
