import axios from "@/network/axios";

let getUserByName = function (name){
  return axios({
    url:"/user/" + name,
    method:"get"
  })
}
export {
  getUserByName
}
