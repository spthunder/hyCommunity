import axios from './axios.js'
let publish = function(params){
  return axios({
    url:'/event',
    method:'post',
    params: params
  })
}
export {
  publish
}
