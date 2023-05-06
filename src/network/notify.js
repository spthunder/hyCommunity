import axios from "@/network/axios";
let showNotify = function(){
  return axios({
    url:"/notify",
    method: "get"
  })
}
let deleteNotify = function (id){
  return axios({
    url:"/notify/"+ id,
    method:"delete"
  })
}
export {
  showNotify,
  deleteNotify
}
