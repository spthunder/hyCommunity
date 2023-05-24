import axios from "@/network/axios";

let contactById = function(id){
  return axios({
    url:"/contact/"+id,
    method:"get"
  })
}
let addContact = function (params){
  return axios({
    method:'post',
    url:"/contact",
    params: params
  })
}
let isContacted = function (userId,eventId){
  return axios({
    method: 'get',
    url: "/contact/"+userId+"/"+eventId
  })
}
export {
  contactById,
  addContact,
  isContacted
}
