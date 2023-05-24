import axios from "@/network/axios";

let collectById = function(id){
  return axios({
    url:"/collect/"+id,
    method:"get"
  })
}
let queryIsCollected = function (userId, eventId){
  return axios({
    url:"/collect/" + userId + "/" + eventId,
    method:"get"
  })
}
let addCollect = function (params){
  return axios({
    url:"/collect/add",
    method:"post",
    params: params
  })
}
let cancleCollect = function (userId, eventId){
  return axios({
    url:'/collect/' + userId + "/" + eventId,
    method:"delete"
  })
}
export {
  collectById,
  queryIsCollected,
  addCollect,
  cancleCollect
}
