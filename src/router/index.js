import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
const Home = () => import('views/home/Home')
const Publish = () => import('views/publish/Publish')
const Msg = () => import('views/msg/Msg')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/login/Login')
const Recommend = () => import('views/recommend/Recommend')
const Progress = () => import('views/progress/Progress')
const SystemNotify = () => import('views/msg/views/SystemNotify')
const Collect = () => import('views/profile/views/Collect')
const Chat = () => import('views/msg/views/Chat.vue')
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/login',
    component: Login,
    meta:{
      isAuth: true
    }
  },
  {
    path: '/',
    redirect: '/home',
    meta:{
      isAuth: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      isAuth: true
    }
  },

  {
    path: '/publish',
    component: Publish,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/msg',
    component: Msg,
    meta:{
      isAuth: false
    },
  },
  {
    path: '/snotify',
    name:'SystemNotify',
    component: SystemNotify
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      isAuth: false
    }
  },
  {
    name:"detail",
    path: '/detail/:id',
    component: Detail,
    meta:{
      isAuth: false,
      index: 'detail'
    }
  },
  {
    name:"chat",
    path: '/chat/:id',
    component: Chat,
    meta:{
      isAuth: false,
      index: 'detail'
    }
  },
  {
    name:"collect",
    path:'/collect',
    component: Collect
  },
  {
    path: '/recommend',
    component:Recommend,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/progress',
    component:Progress,
    meta:{
      isAuth: false
    }
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next) => {
  if(!to.meta.isAuth && store.state.isLogin === false){
    store.state.showToast = true
    setTimeout(()=>{
      next("/login")
      store.commit('hideTabbar')
      store.state.showToast = false
    },2000)
  }else{
    next()
  }
})

// 4.导出
export default router
