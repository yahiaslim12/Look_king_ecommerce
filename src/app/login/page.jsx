'use client'
import { useSession } from "next-auth/react";
import Form from "../../../components/login/Form";
import Head from "../../../components/login/Head";
import { useState,useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Login() {
  const [login,setLogin] = useState(true)
  const isLogin = ()=>{
      setLogin(!login)
  }
  const {data:session,status} = useSession()
  const router = useRouter()
  useEffect(()=>{
    if(status === 'loading')return
    if(session){
      router.push('/profile')
    }
 },[status,session])

  if(status === 'authenticated'){
    return <div className="flex justify-center items-center" style={{height : '400px'}}>
        <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}}/></h1>
    </div>
  }
  if(status === 'loading'){
    return <div className="flex justify-center items-center" style={{height : '400px'}}>
        <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}}/></h1>
    </div>
  }
  return (
    <section className="container">
       <Head login = {login} handleLogin = {isLogin}/>
       <Form login = {login} handleLogin = {isLogin}/>
    </section>
  )
}
