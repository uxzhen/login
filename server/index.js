import koa from "koa"
import koabodyParser from 'koa-bodyparser'
import cors from 'koa-cors'
import router from './router/index'
const app = new koa()
app.use(cors())
app.use(koabodyParser())
app.use(router.routes())
app.listen(3000,()=>{
    console.log('node已启动')
})