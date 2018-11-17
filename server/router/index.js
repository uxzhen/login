import Router from 'koa-router'
const router = new Router()
import {base_API} from '../config'
//所有前端请求过来的时候，就会加上api
router.prefix(`${base_API}`)
router.post('/register',async ctx=>{
    console.log(ctx.request.body)
})
export default router 