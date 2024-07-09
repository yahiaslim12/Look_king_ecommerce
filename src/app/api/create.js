'use server'
import Connection from "./db";
import { hash,genSalt } from "bcrypt";
export async function create(data) {
    try {
        const query = `insert into users (name,email,password) values (?,?,?)`
        const con = await Connection()
        const salt = await genSalt(10)
        const [name,email,password] = data
        const passwordHashed = await hash(password,salt)
        const result = await con.query(query,[name,email,passwordHashed])
    } catch (error) {
        console.log(error);
        throw error;
    }
}
