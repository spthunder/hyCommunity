<template>
  <div id="detail">
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="showImg">
      <img :src="img">
    </div>
    <div class="main">
      <div class="content">
        <h2 style="text-align: center">{{title}}</h2>
        <div style="padding: 0.5rem 1rem">
          <p>{{content}}</p>
        </div>
      </div>
      <div class="option">
        <van-button round color="rgb(250,85,37)" style="width: 40%" type="info">一键帮扶</van-button>
        <div class="func star">
          <van-icon name="star-o" size="2rem" />
          <p>{{collect}}</p>
        </div>
        <div class="func like">
          <van-icon name="good-job-o" size="2rem" />
          <p>{{love}}</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Scroll from 'common/scroll/Scroll'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'

  import DetailBottomBar from './childComps/DetailBottomBar'
  import BackTop from 'content/backTop/BackTop'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";
  import {backTopMixin} from "@/common/mixin";
  import {BACKTOP_DISTANCE} from "@/common/const";
  import {Toast} from "vant";

  export default {
		name: "Detail",
    components: {
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
		  Scroll,
		  DetailNavBar,
      DetailSwiper,
      BackTop
    },
    data() {
		  return {
        content: '',
        title: '',
        themeTops: [],
        currentIndex: 0,
        img:'',
        love:'',
        collect:''
      }
    },
    created() {
      this.img = this.$route.params.img
      this.title = this.$route.params.title
      this.content = this.$route.params.content
      this.love = this.$route.params.love
      this.collect = this.$route.params.collect
      this.$store.commit('hideTabbar')
      console.log(this.content)
    },
    updated() {
		  // 获取需要的四个offsetTop
    },
    methods: {
      onClickLeft() {
        this.$router.back()
        this.$store.commit('showTabbar')
      },

    }
	}
</script>

<style scoped>
  #detail {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  .showImg{
    width: 100vw;
    height: 30vh;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .main{
    flex: 1;
    position: relative;
  }
  .option{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-top: 3px solid #f6f6f6;
  }
  .func{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
