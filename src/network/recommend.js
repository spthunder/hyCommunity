import axios from './axios.js'
let getRecommendByUser = function(userId){
  return axios({
    url:'/recommend/listByUser/' + userId,
    method:'get',
  })
}
export {
  getRecommendByUser
}
