<template>
  <div>
    <div class="voice-input-button-wrapper">
      <voice-input-button
        appId="055830d2"
        apiKey="85b2875dd0b6df938f87a1b9cfb65e6b"
        apiSecret="ODA0MGQxNzliOWQxNGZlMDgyMTRlMWVm"
        @record="showResult"
        @record-start="recordStart"
        @record-stop="recordStop"
        @record-blank="recordNoResult"
        @record-failed="recordFailed"
        @record-ready="recordReady"
        @record-complete="recordComplete"
        interactiveMode="touch"
        color="#fff"
        tipPosition="top"
      >
        <template slot="no-speak">没听清您说的什么</template>
      </voice-input-button>
    </div>
  </div>

</template>

<script>
import voiceInputButton from 'voice-input-button2'
export default {
  name: "Xunfei",
  components:{
    voiceInputButton
  },
  data(){
    return{
      result: '',
    }
  },
  methods:{
    recordReady () {
      console.info('按钮就绪!')
    },
    recordStart () {
      console.info('录音开始')
    },
    showResult (text) {
      console.info('收到识别结果：', text)
    },
    recordStop () {
      console.info('录音结束')
    },
    recordNoResult () {
      console.info('没有录到什么，请重试')
    },
    recordComplete (text) {
      this.$store.state.result = this.$store.state.result + text
      console.info('识别完成! 最终结果：', text)
    },
    recordFailed (error) {
      console.info('识别失败，错误栈：', error)
    },
  }
}
</script>

<style scoped>
.voice-input-button-wrapper{
  width: 42px;
  height: 42px;
  background-color: mediumpurple;
  border-radius: 50%;
}
.result{
  width: 10rem;
  padding: 25px;
  border: #e2e2e2 1px solid;
  border-radius: 5px;
  line-height: 2;
  font-size: 16px;
  color: #727272;
  min-height: 24px;
  margin-bottom: 25px;
}
</style>
