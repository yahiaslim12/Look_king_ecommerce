'use server'
import { compare, genSalt, hash } from "bcrypt"
export default async function passwordUpdate(data) {
    try {
        const email = data[2]
        const cpassword = data[0]
        const npassword = data[1]
        const response = await fetch('http://localhost:8000/getuser/',{method : 'POST',headers : {'Content-Type' : 'application/json'},body : JSON.stringify({email})})
        const user = await response.json()
        console.log(user);
        const valid_user = await compare(cpassword,user.password)
        if(valid_user){
            console.log('hih');
            const gen = await genSalt(10)
            const hash_password = await hash(npassword,gen)
            console.log(hash_password);
            const res = await fetch('http://localhost:8000/updatepassword',{method : 'PUT',headers : {'Content-Type' : 'application/json'},body : JSON.stringify({email:email,password : hash_password})})
            if(res.ok){
                const data = await res.json()
                console.log(data);
                return {status : res.status,msg : 'Password updated successfuly'}
            }else{
                console.log(`Error: ${res.status} - ${res.statusText}`);
                return {status : res.status,msg : res.statusText}
            }
        }else{
            return {status : '401',msg : 'Incorrect password'}
        }
    } catch (error) {
        console.log(error);
        return {status : '' , msg : error}
    }
}
