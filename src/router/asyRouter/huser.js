//帮助他人的人
const menu = function (){
  let list =   [
    {
      name:"首页",
      icon: "wap-home",
      url:'/recommend'
    },
    {
      name:"进度",
      icon: "underway",
      url:'/progress'
    },
    {
      name:"消息",
      icon: "chat",
      url:'/msg'
    },

    {
      name:"我的",
      icon: "manager",
      url:'/profile'
    },
  ]
  return list

}
export default menu
