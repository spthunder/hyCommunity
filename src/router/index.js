import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Publish = () => import('views/publish/Publish')
const Msg = () => import('views/msg/Msg')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/login/Login')
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
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
    path: '/login',
    component: Login,
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
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/detail',
    component: Detail,
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
  if(!to.meta.isAuth){
    alert('抱歉，请先登录')
    next("/login")
  }else{
    next()
  }
})

// 4.导出
export default router
