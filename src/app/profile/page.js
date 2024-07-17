'use client'
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ONE from "../../../components/profile/ONE"
import TWO from "../../../components/profile/TWO"
import { CircularProgress } from "@mui/material"
export default function Profile() {
  const {data: session,status} = useSession()
  const router = useRouter()
  const [list,setList] = useState({
    settings : true,
    commands : false,
    logout : false
  })
  const handleList = (type) => {
    if(type === 'settings'){
      setList({...list,settings:true,commands:false,logout:false})
    }else if (type === 'commands'){
      setList({...list,settings:false,commands:true,logout:false})
    }else{
      setList({...list,settings:false,commands:false,logout:true})
    }
  }
  useEffect(()=>{
    if(status === "loading") return
    if(!session) router.push('/login')
  },[status,session])
  useEffect(()=>{
    console.log(list);
  },[list])
  if(status==='unauthenticated'){
    return <div className="flex justify-center items-center" style={{height : '400px'}}>
             <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}}/></h1>
           </div>
  }
  if(status === 'loading'){
    return <div className="flex justify-center items-center" style={{height : '400px'}}>
        <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}}/></h1>
    </div>
  }
  if(session){
      return (
         <section className="flex container">
            <ONE list = {list} handleList = {handleList}/>
            <TWO list = {list}/>
         </section>
      )
  }
  
}
