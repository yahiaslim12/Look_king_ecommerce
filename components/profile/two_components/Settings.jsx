'use client'
import { signOut, useSession } from "next-auth/react"
import { Errors, List, Success } from "../../../svg"
import { useEffect, useState } from "react"
import { Box,Modal } from "@mui/material"
import passwordUpdate from "@/app/api/passwordUpdate"
export default function Settings() {
  /* variables and states */
  const {data:session,status} = useSession()
  const [loading,setLoading] = useState(false)
  const [alert,setAlert] = useState({
     open:false,
     message:"",
     type : ''
  })
  const [open,setOpen] = useState({
    open:false,
    type : ''
  })
  const [values,setValues] = useState({
    name : session?.user.name,
    cpassword : '',
    npassword : '',
    number : '',
    isEmptyc : false,
    isEmptyn : false,
    same : false,
    valid : true,
  })
  const [isEmptyNumber,setIsEmptyNumber] = useState(values.number !== '' ?  false : true)
  /* handle functions */

  const isValidPassword = (pass) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passRegex.test(pass);
  };
  const handleChange = (e)=>{
    if(e.target.name === 'number'){
        if(!isNaN(Number(e.target.value)))
        setValues(prev => ({
            ...prev,    
            [e.target.name] : e.target.value
        }))
    }else if(e.target.name === 'cpassword'){
        setValues(prev => ({
            ...prev,
            [e.target.name] : e.target.value,
            isEmptyc : false,
            same : false,
            valid : true,
        }))
    }else if(e.target.name === 'npassword'){
            setValues(prev => ({
                ...prev,
                [e.target.name] : e.target.value,
                isEmptyn : false,
                same : false,
                valid : true,
            }))
        }else{
            setValues(prev =>({
                ...prev,
                [e.target.name] : e.target.value
            }))
        }
  }
  const handleOpen = (e,type)=>{
    e.preventDefault()
    setOpen(prevValues => ({
        ...prevValues,
        open : true,
        type : type
    }))
  }
  const handleUpdate = () => {
    setOpen(prev => ({
        ...prev,
        open : false
    }))
    UPDATE(open.type)
  }

  /* fetch data */

  const GET_USER = async() => {
      try {
        const res = await fetch('http://localhost:8000/getuser/',{method : 'POST',headers : {'Content-Type' : 'application/json'},body : JSON.stringify( {email : session.user.email})})
        if(res.ok){
            const user = await res.json()
            setValues(prev => ({
                ...prev,
                name : user.name,
                number : user.number,
            }))
            console.log(user.number);
            console.log(user.number !== '' ? false : true);
            setIsEmptyNumber(user.number !== '' ? false : true)
        }else{
            console.log(`Error : ${res.status} - ${res.statusText}`);
        }
      } catch (error) {
        console.log(error);
      }
      
  }
  const UPDATE = async () => {
    if (open.type === 'details') {
        try {
            const res = await fetch('http://localhost:8000/userUpdate/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name : values.name,number : values.number , email : session.user.email}) 
            });

            if (res.ok) {
                const data = await res.json();
                setValues(prev => ({
                    ...prev,
                    name : data.name,
                    number : data.number,
                }))
                setIsEmptyNumber(data.number !== '' ?  false : true,)
                setAlert(prev => ({
                    ...prev,
                    open : true,
                    message : 'Details Updated Successfully',
                    type : 'success'
                }))
                setTimeout(() => {
                    setAlert(prev => ({
                        ...prev,
                        open : false,
                        message : 'Details Updated Successfully',
                        type : 'success'
                    }))
                }, 4000);
            } else {
                console.log(`Error: ${res.status} - ${res.statusText}`);
                setAlert(prev => ({
                    ...prev,
                    open : true,
                    message : `Error: ${res.status} - ${res.statusText}`,
                    type : 'error'
                }))
                setTimeout(() => {
                    setAlert(prev => ({
                        ...prev,
                        open : false,
                    }))
                }, 4000);
            }
        } catch (error) {
            console.log(error);
            setAlert(prev => ({
                ...prev,
                open : true,
                message : error,
                type : 'error'
            }))
            setTimeout(() => {
                setAlert(prev => ({
                    ...prev,
                    open : false,
                }))
            }, 4000);
        }
    }else if(open.type === 'daccount'){
        try {
            const res = await fetch('http://localhost:8000/delete/account',
                {
                    method : 'DELETE',
                    headers : {'Content-Type' : 'application/json'},
                    body : JSON.stringify({email : session?.user.email})
                }
            )
            const data = await res.json()
            console.log(data);
            if(res.ok){
                setAlert(prev => ({
                    ...prev,
                    open : true,
                    message : 'Account Deleted Successfully',
                    type : 'success'
                    }))
                setTimeout(() => {
                    setAlert(prev => ({
                        ...prev,
                        open : false,
                        }))
                }, 4000);
                await signOut()
            }else{
                setAlert(prev => ({
                    ...prev,
                    open : true,
                    message : `${res.status} - ${res.statusText}`,
                    type : 'error'
                    }))
                setTimeout(() => {
                    setAlert(prev => ({
                        ...prev,
                        open : false,
                        }))
                }, 4000);
            }
        } catch (error) {
            setAlert(prev => ({
                ...prev,
                open : true,
                message : `${error}`,
                type : 'error'
                }))
            setTimeout(() => {
                setAlert(prev => ({
                    ...prev,
                    open : false,
                    }))
            }, 4000);
        }
    }else{
        if(values.cpassword === '' && values.npassword === ''){
            setValues(prev => ({
                ...prev,
                isEmptyn : true,
                isEmptyc : true,
            }))
        }else if(values.cpassword === ''){
            setValues(prev =>({
                ...prev,
                isEmptyc : true,
        }))
        }else if(values.npassword === ''){
            setValues(prev => ({
                ...prev,
                isEmptyn : true,
            }))
        }else if(values.cpassword === values.npassword ){
            setValues(prev => ({
                ...prev,
                same : true,
            }))
        }else if(!isValidPassword(values.npassword))
        {
            setValues(prev => ({
                ...prev,
                valid : false,
            }))
        }
        else {
            try {
                const res = await passwordUpdate([values.cpassword,values.npassword,session?.user.email])
                if(res.status ===200){
                    setValues(prev => ({
                        ...prev,
                        cpassword : '',
                        npassword : ''
                    }))
                    setAlert(prev => ({
                        open : true,
                        message : res.msg,
                        type : 'success'
                    }))
                    setTimeout(() => {
                        setAlert(prev => ({
                            ...prev,
                            open : false,
                        }))
                    }, 4000);
                }else{
                    setAlert(prev => ({
                        ...prev,
                        open : true,
                        message : res.msg,
                        type : 'error'
                    }))
                    setTimeout(() => {
                        setAlert(prev => ({
                            ...prev,
                            open : false,
                        }))
                    }, 4000);
                }
            } catch (error) {
                setAlert(prev => ({
                    ...prev,
                    open : true,
                    message : error,
                    type : 'error'
                }))
                setTimeout(() => {
                    setAlert(prev => ({
                        ...prev,
                        open : false,
                    }))
                }, 4000);
            }
        }
    }
  }
  /* useEffect and rendring */

  useEffect(()=>{
    GET_USER()
  },[])

  return (
    <div className="w-full relative">
        {
            alert.open && (
                <div style={{transform : 'translate(-50%,-50%)'}} className={`w-11/12 sm:w-6/12 md:w-auto rounded ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex gap-3 items-center fixed top-32 left-1/2 px-3 py-3 text-white`}>
                    {alert.type !== 'error' ?  <Success width={20} height={20} color={'white'}/> : <Errors  width={20} height={20} color={'white'}/>} 
                    <span>{alert.message}</span>
                </div>
            )
        }
        <div className="flex items-center justify-between">
            <h1 className="text-gray-800 text-3xl">Account Settings</h1>
            <button className="btn d-block d-md-none"><List width={20} height={20} color={'gray'}/></button>
        </div>
        <div className="mt-3 pb-10 border-bottom w-full">
            <h3 className="text-gray-800 text-xl">Account Details</h3>
            <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="Dr. Johnnie Kassulke" title="Dr. Johnnie Kassulke" draggable="false" loading="lazy" width="50" height="50" className="rizzui-avatar-img mt-3 inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover" style={{width: "40px", height: "40px", backgroundColor: 'rgb(255, 104, 71)'}}/>
            <form action="" className="mt-3 lg:w-6/12 w-full sm:w-8/12">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray_text text-sm text-capitalize">
                    email*
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={session.user.email}
                    readOnly
                />
            </div>
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="name" className="text-gray_text text-sm text-capitalize">
                    name*
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={values.name}
                    onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="number" className="text-gray_text text-sm text-capitalize">
                    number*
                </label>
                <input
                    type="text"
                    name="number"
                    id="number"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={values.number}
                    onChange={(e)=>handleChange(e)}
                />
                {
                    isEmptyNumber &&  <small className="text-danger">You do not have a number in this account. Please add one.</small>
                }
            </div>
            <button type = 'submit' onClick={(e)=>handleOpen(e,'details')} className="text-capitalize rounded px-2.5 mt-3 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm">Save details</button>
            </form>
        </div>
        <div className="py-10 border-bottom">
            <h3 className="text-gray-800 text-xl">Password</h3>
            <form action="" className="w-full flex flex-col gap-3 gap-md-5 md:flex-row">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="npassword" className="text-gray_text text-sm text-capitalize">
                    new password*
                </label>
                <input
                    type="password"
                    name="npassword"
                    id="npassword"
                    className={`rounded border px-3 py-2 outline-none`}
                    placeholder="**********"
                    value={values.npassword}
                    onChange={(e)=>handleChange(e)}
                />
                {values.isEmptyn && <small className="text-danger">Empty value !</small>}
                {!values.valid && <small className="text-danger">Invalid password !</small>}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="cpassword" className="text-gray_text text-sm text-capitalize">
                    current password*
                </label>
                <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    className={`rounded border px-3 py-2 outline-none`}
                    placeholder="**********"
                    value={values.cpassword}
                    onChange={(e)=>handleChange(e)}
                />
                {values.isEmptyc && <small className="text-danger">Empty value !</small>}
            </div>
            </form>
            <div className="flex flex-col gap-0.5 items-start justify-center mt-2">
                {values.same && <small className="text-danger">The new password is the same as the current password.</small>}
                <button onClick={(e)=>handleOpen(e,'password')} className="text-capitalize rounded px-2.5 mt-3 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm">Save details</button>
            </div>
        </div>
        <div className="py-10">
            <h3 className="text-gray-800 text-xl">Delete Account</h3>
            <p className="mb-0 text-gray-500 text-sm" style={{fontWeight : '500 !important'}}>Would you like to delete your account? <br />
                This account contain 12 orders, Deleting your account will remove all the order details associated with it.</p>
        <button className="px-3 mt-3 py-2 rounded bg-red-500 text-white font-semibold" onClick={(e)=>handleOpen(e,'daccount')}>Delete Account</button>
        </div>
        <Modal open = {open.open} onClose={()=>setOpen(prev => ({...prev,open : false}))}>
            <Box className = 'confirmation_modal'>
                <div className="px-4 py-3">
                    <h1 className="text-gray-800 text-xl border-bottom pb-3">{open.type === 'daccount' ? 'Delete account confirmation' : 'Confirm your changements'}</h1>

                    <div className="flex gap-3 justify-start items-center mt-3">
                        <button onClick={()=>setOpen(prev => ({...prev,open : false}))} className="px-3 py-2 bg-red-500 text-white rounded font-semibold">Cancel</button>
                        <button onClick={()=>handleUpdate()} className="px-4 py-2 rounded bg-green-500 text-white font-semibold">{open.type === 'daccount' ? 'Delete' : 'Save'}</button>
                    </div>
                </div>
            </Box>
        </Modal>
        
    </div>
  )
}