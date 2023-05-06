import axios from "@/network/axios";

let getCollect = function (ids){
  return axios({
    url:"/event/ids/" + ids,
    method:"get"
  })
}
export {
  getCollect
}
