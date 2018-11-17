import Vue from 'vue'
import Router from 'vue-router'
// import Register from '@/components/Register'
// import Login from '@/components/Login'
// 路由懒加载
const Login = resovle => {
  require.ensure(['@/components/Login.vue'], () => {
    resovle(require('@/components/Login.vue'))
  })
}
const Register = resovle => {
  require.ensure(['@/components/Register.vue'], () => {
    resovle(require('@/components/Register.vue'))
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '*',
      component: Login
    }
  ]
})
