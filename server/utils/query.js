import mysql from 'mysql'
import { db,dbName } from '../config'
import path from 'path'

let pool
const init = mysql.createConnection(db)//连接数据库
init.connect()
Object.assign(db,dbName)
pool = mysql.createPool(db)
init.end()

export default function query(sql,values){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                reject(err);
            }else{
                connection.query(sql,values,(err,data)=>{
                    
               
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release()
                })
            }
        })
    })
}
