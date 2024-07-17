'use server'
import { hash,genSalt } from "bcrypt";
export async function create(data) {
    try {
        const salt = await genSalt(10)
        const [name,email,password] = data
        const passwordHashed = await hash(password,salt)
        const res = await fetch('http://localhost:8000/createUser/',
          {
          method : 'post',
          body : JSON.stringify({name,email,password : passwordHashed}),headers : {'Content-Type' : 'application/json'}
        })
        const user = await res.json()
        if(res.status === 201){
           console.log('user created successfuly');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
