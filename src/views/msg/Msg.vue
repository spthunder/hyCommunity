<template>
  <div id="msg">
    <nav-bar class="nav-bar"><div slot="center">消息</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'

	export default {
		name: "Msg",
    components: {
		  NavBar,
    },
    computed: {

    }
	}
</script>

<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }


</style>
