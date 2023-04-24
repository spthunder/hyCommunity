//受助人
//首先拿到路由列表
//遍历路由列表
//在白名单中 且无token放行
//不在白名单，且有token放行
const menu = function (){
  let list =   [
    {
      name:"首页",
      icon: "home-o",
      url:'/home'
    },
    {
      name:"发布",
      icon: "upgrade",
      url:'/publish'
    },
    {
      name:"消息",
      icon: "envelop-o",
      url:'/msg'
    },

    {
      name:"我的",
      icon: "user-circle-o",
      url:'/profile'
    },
  ]
  return list

}
export default menu
