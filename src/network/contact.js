import axios from "@/network/axios";

let contactById = function(id){
  return axios({
    url:"/contact/"+id,
    method:"get"
  })
}

export {
  contactById
}
