import query from '../utils/query'

class UserNameModel{
    async getUserByName(username){
        return await query(`SELECT * FROM USER WHERE username = '${username}'`)
    }
    async addUserName(doc){
        return await query(`INSERT INTO USER SET  USERNAME = '${doc.username}',  PASSWORD = '${doc.password}', token = '${doc.token}'`)
    }
}
export default new UserNameModel()