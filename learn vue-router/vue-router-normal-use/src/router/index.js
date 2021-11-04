// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')

// 1. 通过 vue.use 安装插件
Vue.use(VueRouter)

// 2. 创建 router 对象
const router = new VueRouter({
  // 配置 router 和 components 之间的映射关系
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home',
          redirect: '/home/message'
        },
        {
          path: 'message',
          component: HomeMessage
        },
        {
          path: 'news',
          component: HomeNews
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      // 动态路径参数 以 ':' 开头
      path: '/user/:userId',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 改变路径的方式有两种: URL 的 hash 和 HTML5 的 history
  // 可以在 routes 里面通过 mode 改变， 默认情况下使用 hash
  mode: 'history',
  linkActiveClass: 'active'
})

// 3. 将 router 对象传入到 Vue 实例中
export default router
