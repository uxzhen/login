import Router from 'koa-router'
const router = new Router()
import {base_API} from '../config'
//引入注册登录控制qi
import userContorller from '../Controller/UserContorller'
//所有前端请求过来的时候，就会加上api
router.prefix(`${base_API}`)

//注册
router.post('/register',userContorller.register)
//登录
router.post('/login',userContorller.login)
export default router 