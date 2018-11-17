import UserName from '../model/Usermodel'
import md5 from 'md5'
class Uesrcontorller {
    async register(ctx){
        let { username,password } = ctx.request.body
        //1判断是否存在用户名
        //2密码是否正确
        let sqlusername = await UserName.getUserByName(username)
        //数据库返回的是一个查询到的数组
        if(sqlusername.length !== 0){
            console.log(password)
        }else{
            console.log(sqlusername)
        }
    }
}   
export default new Uesrcontorller