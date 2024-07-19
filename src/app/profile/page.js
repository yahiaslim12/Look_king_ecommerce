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
  const [openDrawer,setOpenDrawer] = useState(false)
  const handleOpen = () => {
    setOpenDrawer(true)
  }
  const handleClose = () => {
    setOpenDrawer(false)
  }
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
  if(status==='unauthenticated'){
    return <div className="flex justify-center items-center" style={{height : '600px'}}>
             <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}} className="text-one"/></h1>
           </div>
  }
  if(status === 'loading'){
    return <div className="flex justify-center items-center" style={{height : '600px'}}>
        <h1 className="mb-0">Loading... <CircularProgress style={{width:"20px",height : '20px'}} className="text-one"/></h1>
    </div>
  }
  if(session){
      return (
         <section className="flex container">
            <ONE list = {list} handleList = {handleList} handleOpen = {handleOpen} handleClose = {handleClose} open ={openDrawer}/>
            <TWO list = {list} handleOpen={handleOpen}/>
         </section>
      )
  }
  
}
