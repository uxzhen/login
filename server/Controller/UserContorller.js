import UserName from '../model/Usermodel'
import md5 from 'md5'
import moment from 'moment'
import createTokne from '../utils/createToken'
import Usermodel from '../model/Usermodel';
import { log } from 'util';
class Uesrcontorller {
    async register(ctx){
        let { username,password } = ctx.request.body
        //1判断是否存在用户名
        //2密码是否正确
        let sqlusername = await UserName.getUserByName(username)
        //数据库返回的是一个查询到的数组
        if(sqlusername.length !== 0){
            ctx.body = {
                success:false,
                message:'用户名已存在，请重新输入！'
            }
        }else{
            //不存在直接存入
            
            password = md5(password)
            let date = new Date()
            let token = createTokne(sqlusername.id + 1)
            let create_time = moment(date).format('YYYY-MM-DD HH:mm:ss')
            let doc = {
                username,
                password,
                create_time,
                token   
            }
            await Usermodel.addUserName(doc)
            ctx.body = {
                status:200,
                message:"注册成功，请登录！！",
                success:true
            }
        }
    }
    async login(ctx){
        let { username,password } = ctx.request.body
        console.log(username,password)
        let sqlUesrName = await UserName.getUserByName(username)
        if(sqlUesrName.length !== 0){
            if(sqlUesrName.password === md5(password)){
                let token = createTokne(username)
                sqlUesrName.token = token
                ctx.body = {
                    token:sqlUesrName.token ,
                    message:'登录成功',
                    status:200
                }
            }else{
                ctx.body = {
                    message:"用户名或者密码错误",
                    status:200
                }
            }
        }else{
            ctx.body = {
                message:'用户名或者密码错误',
                status:200
            }
        }
    }
}   
export default new Uesrcontorller