import mysql from 'mysql2/promise'

export default async function Connection(){
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'yahia',
            database: 'lookkingdb'
            })
        if(connection){
            console.log('connected to database')
        }else{
            console.log('not connected to database')
        }
        return connection
    } catch (error) {
        console.log(error);
        throw error
    }
}
