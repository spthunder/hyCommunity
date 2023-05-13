import axios from "@/network/axios";

let getCollect = function (ids){
  return axios({
    url:"/event/ids/" + ids,
    method:"get"
  })
}
let getPublish = function (userId){
  return axios({
    url:"/event/fromById/" + userId,
    method:"get"
  })
}
export {
  getCollect,
  getPublish
}
