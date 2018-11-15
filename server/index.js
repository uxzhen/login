import koa from "koa"
import koabodyParser from 'koa-bodyparser'
import cors from 'koa-cors'
import './router/index'

const app = new koa()
app.listen(3000,()=>{
    console.log('node已启动')
})