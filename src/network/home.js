import axios from './axios.js'
let getCommondata = function(){
  return axios({
    url:'/event/common',
    method:'get'
  })
}
let getUrgentdata = function () {
  return axios({
    url:'/event/urgent',
    method:'get'
  })
}
let getSwipperdata = function () {
  return axios({
    url: '/extra/swipperData/query',
    method: 'get'
  })
}
export {
  getCommondata,
  getUrgentdata,
  getSwipperdata
}
