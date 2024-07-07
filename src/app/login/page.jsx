'use client'
import Form from "../../../components/login/Form";
import Head from "../../../components/login/Head";
import { useState } from "react";
export default function Login() {
  const [login,setLogin] = useState(true)
  const isLogin = ()=>{
      setLogin(!login)
  }
  return (
    <section className="container">
       <Head login = {login} handleLogin = {isLogin}/>
       <Form login = {login} handleLogin = {isLogin}/>
    </section>
  )
}
