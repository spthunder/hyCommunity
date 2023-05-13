<template>
  <div id="publish">
    <nav-bar class="nav-bar"><div slot="center">发布中心</div></nav-bar>
    <van-form validate-first  @submit="onSubmit" @failed="onFailed" class="form" >
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="item.title"
          name="title"
          label="标题"
          placeholder="起一个合适的标题吧"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <van-field name="type" label="类型">
          <template #input>
            <van-radio-group v-model="item.type" direction="horizontal">
              <van-radio name="0">日常</van-radio>
              <van-radio name="1" style="color: red">加急</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      <van-field
        v-model="item.location"
        name="location"
        label="联系地址"
        placeholder="输入详细地址"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
        <van-field
          v-model="item.tel"
          name="tel"
          label="联系方式"
          placeholder="输入手机号"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader :after-read="afterRead" :max-count="1"  v-model="item.uploader" />
          </template>
        </van-field>
        <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="this.$store.state.result"
        name="content"
        rows="2"
        autosize
        label="内容"
        type="textarea"
        maxlength="100"
        placeholder="请详细描述您的情况"
        show-word-limit
        :rules="[{ message: '点击下方尝试语音输入！' }]"
      />
        <!-- 通过 validator 进行异步函数校验 -->
        <div style="margin: 16px;">
          <van-button round color="#FFBE71" block type="info" native-type="submit">发布</van-button>
        </div>
      </van-form>
    <div>
      <xunfei></xunfei>
    </div>


  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import {publish} from "@/network/publish";
  import {getImgUrl} from "@/network/upload";
  import TabMenu from './childComps/TabMenu'
  import TabControl from 'content/tabControl/TabControl'
  import Scroll from 'common/scroll/Scroll'
  import TabContentCategory from './childComps/TabContentCategory'
  import TabContentDetail from './childComps/TabContentDetail'
  import {Toast} from "vant";
  import Xunfei from "@/views/publish/childComps/Xunfei";


  export default {
		name: "Category",
    components: {
      Xunfei,
		  NavBar,

    },
    data() {
		  return {
        currentIndex: -1,
        pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,100}$/,
        username: this.$store.state.name,
        img:'',
        item:{
          title: '',
          tag: '',
          tel: '',
          location: '',
          type: '',
          uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
        },
      }
    },
    created() {
		  // 1.请求分类数据
    },
    computed: {

    },
    methods: {

      validator(val) {
        return /\d{10}/.test(val);
      },
      // 异步校验函数返回 Promise
      onFailed(errorInfo) {
        console.log('failed', errorInfo);
      },
      onSubmit(value){
        console.log(value)
        let imgList = value.uploader
        function getFormatDate() {
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          // let hour = date.getHours();
          // let minutes = date.getMinutes();
          // let seconds = date.getSeconds();
          month = (month<10)? '0'+ month : month;
          day = (day<10)? '0'+ day : day;
          // hour = (hour<10)? '0'+ hour : hour;
          // minutes = (minutes<10)? '0'+ minutes : minutes;
          // seconds = (seconds<10)? '0'+ seconds : seconds;
          let currentDate = year + "-" + month + "-" + day;
          return currentDate;
        }
        let time = getFormatDate()
        let params = {
          userId: this.$store.state.id,
          name: this.$store.state.name,
          title: value.title,
          content: value.content,
          type: parseInt(value.type),
          tel: value.tel,
          location: value.location,
          img: this.img,
          time: time,
          collect: 0,
          love: 0
        }
        publish(params).then(res => {
          setTimeout(()=>{
            Toast('发布成功');

            console.log(this.$store.state.name)
            //item还原
            this.item = {
              title: '',
              tag: '',
              tel: '',
              location: '',
              type: '',
              uploader: [],
            }
            this.$store.state.content=""
          },500)
          console.log(res)
        }).catch(err => {
          Toast('发布失败')
          console.log(err)
        })
      },
      afterRead(file){
        console.log(file.file)
        getImgUrl(file.file).then(res => {
          console.log(res)
          this.img = res.data.data.url
          console.log(this.img)
          Toast.success('图片上传成功')
        }).catch(err => {
          Toast.success('图片上传失败')
        })

      }
    }
	}
</script>

<style scoped>
  #publish{
    background-color: #f6f6f6;
    width: 100vw;
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .form{
    width: 95vw;
    margin-top: 10vh;
    border-radius: 30%;
  }


</style>
