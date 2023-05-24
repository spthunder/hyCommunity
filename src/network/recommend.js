import axios from './axios.js'
let getRecommendByUser = function(userId){
  return axios({
    url:'/recommend/listByUser/' + userId,
    method:'get',
  })
}
let addScore = function (userId, eventId){
  return  axios({
    url:'/recommend/' + userId + '/' + eventId,
    method: 'get'
  })
}
export {
  getRecommendByUser,
  addScore
}
