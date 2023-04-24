<template>
  <div id="detail">
    <van-nav-bar
      title="详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main">
      {{title}}
      {{content}}
    </div>
    <div class="option">
      <van-button type="primary" style="margin-right: 2rem">一键收藏</van-button>
      <van-button type="info">联系Ta</van-button>
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
        currentIndex: 0
      }
    },
    created() {
      this.title = this.$route.params.title
      this.content = this.$route.params.content
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
    background-color: #f6f6f6;
  }

  .main{
    width: 95vw;
    border-radius: 2rem;
    height: 80vh;
  }
  .option{
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

</style>
