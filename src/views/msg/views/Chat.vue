<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="咕咕咕"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "chat.vue",
  created() {
    this.$store.commit('hideTabbar')
    console.log("进来咯")
  },
  methods:{
    onClickLeft() {
      this.$router.back()
      this.$store.commit('showTabbar')
    },
  }
}
</script>

<style scoped>
.nav-bar{
  position: sticky;
  top: 0;
}
</style>
