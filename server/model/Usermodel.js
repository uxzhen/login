import query from '../utils/query'

class UserNameModel{
    async getUserByName(username){
        return await query(`SELECT * FROM USER WHERE username = '${username}'`)
    }
}
export default new UserNameModel()