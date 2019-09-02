import Vue from 'vue'
import Router from 'vue-router'
//1. 加载路由组件
import Main from "../components/Main/Main";
import aboutus from "../components/aboutus/aboutus"
import like from "../components/like/like"
import news from "../components/news/news"
import reverse from "../components/reverse/reverse"
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect:"/Main",
      component: Main
    },
    {
      path: '/Main',
      component: Main
    },
    {
      path:'/aboutus',
      component:aboutus
    },
    {
      path:'/like',
      component:like
    },
    {
      path:'/news',
      component:news
    },
    {
      path:'/reverse',
      component:reverse
    }
  ]
})
