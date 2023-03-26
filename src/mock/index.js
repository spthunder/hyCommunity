
import Mock from 'mockjs'
import {commonData, urgentData} from './event/event-mock.js'
import { swipperData } from './extra-mock.js'
//全局设置：设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  //延时200-400s请求到数据
  timeout: 200 - 400
})
Mock.mock(/\/event\/commonData\/query/, "get", commonData)
Mock.mock(/\/event\/urgentData\/query/, "get", urgentData)
Mock.mock(/\/extra\/swipperData\/query/, "get", swipperData)
