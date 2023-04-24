import axios from './axios.js'
let login = function(params){
  return axios({
    url:'/login',
    method:'post',
    params: params
  })
}
export {
  login
}
