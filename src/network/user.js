import axios from "@/network/axios";

let getUserByName = function (name){
  return axios({
    url:"/event/search/" + name,
    method:"get"
  })
}
export {
  getUserByName
}
