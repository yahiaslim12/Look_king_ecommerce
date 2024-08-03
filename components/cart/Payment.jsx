'use client'

import { Modal ,Box} from '@mui/material'
import {useContext, useEffect, useState} from 'react'
import { Close, Errors ,Success} from '../../svg'
import baladiya from '../../public/baladiya.json'
import Title from '../title/Title'
import { lineSpinner } from 'ldrs'
import { useSession } from 'next-auth/react'
import { pathContext } from '../providers/GlobalProvider'
lineSpinner.register()
export default function Payment({total,subTotal,shipping,tax}) {
    const {carts,handleCarts} = useContext(pathContext)
    const [ids,setIds] = useState([])
    const [open,setOpen] = useState(false)
    const [wilaya,setWilaya] = useState('')
    const [mairie,setMairie] = useState([])
    const [b,setB] = useState('')
    const [number,setNumber] = useState('')
    const [date,setDate] = useState(new Date())
    const [isValidNumber,setIsValidNumber] = useState({
        empty : false,
        inValid : false,
    })
    const [validB,setValidB] = useState(false)
    const [validW,setValidW] = useState(false)    
    const [validT,setValidT] = useState(false)    
    const [type,setType] = useState('')
    const [loading,setLoading] = useState(true)
    const [alert,setAlert] = useState({
        open : false,
        type : '',
        message : '',
    })
    const {data : session,status} = useSession()

    const handleWilaya = (data) => {
        setWilaya(data)
        setMairie(baladiya[data])
    }
    const handleOpen = () => {
        if(session && carts.length > 0){
            setOpen(true)
        }else{
            setAlert({
                open : true,
                type : 'error',
                message : 'You have any product in the cart !',
                })
            setTimeout(() => {
                setAlert(prev =>({
                    ...prev,
                    open : false
                }))
            }, 3000);
        }
    }
    const handleNumber = (value) => {
        if(!isNaN(Number(value))) setNumber(value)
    }
    const isValid = (n)=>{
        if(n.length === 10 && n[0] == '0' && (n[1] == '5' || n[1] === '7' || n[1] === '6')){
            return true
        }
        return
    }
    const handleSubmit = async(e) => {
        console.log(ids);
        e.preventDefault()
        if(!isValid(number)){
            setIsValidNumber(prev =>({
                ...prev,
                inValid : true
            }))
        }else{
            if(wilaya === ''){
                setValidW(true)
                setValidB(true)
            }else if(b === ''){
                setValidB(true)
            }else if(type === ''){
                setValidT(true)
            }else{
                setValidB(false)
                setValidT(false)
                setValidW(false)
                try {
                    setLoading(true);
                    const date = new Date();
                    const res = await fetch('http://localhost:8000/commande/add/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            ids,
                            status: 'pending',
                            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                            email: session.user.email,
                            wilaya,
                            municipal: b,
                            typee: type,
                            number,
                            price: total.toString()
                        })
                        
                    });
                    
                    if (!res.ok) {
                        const error = await res.json();
                        console.log(res.status + ' - ' + error.detail);
                        throw new Error(res.status + ' - ' + error.detail);
                    }
                    
                    const data = await res.json();
                    setTimeout(() => {
                        setAlert({ open: true, type: 'success', message: 'Order added successfully' });
                    }, 1000);
                    handleCarts([]);
                    setTimeout(() => {
                        setAlert(prev => ({ ...prev, open: false }));
                    }, 2000);
                } catch (error) {
                    setOpen(false);
                    setAlert({ open: true, type: 'error', message: error.message });
                    console.log(error);
                    setTimeout(() => {
                        setAlert(prev => ({ ...prev, open: false }));
                    }, 3000);
                } finally {
                    setTimeout(() => {
                        setOpen(false);
                    }, 1000);
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                }
                
            } 
        }
    }
    const GET_USER = async() => {
     setLoading(true)
     let user
      try {
        const res = await fetch('http://localhost:8000/getuser/',{method : 'POST',headers : {'Content-Type' : 'application/json'},body : JSON.stringify( {email : session.user.email})})
        if(res.ok){
            user = await res.json()
            setNumber(user.number)
        }else{
            console.log(`Error : ${res.status} - ${res.statusText}`);
        }
      } catch (error) {
        console.log(error);
      }finally{
          setLoading(false)
          setIsValidNumber(prev => ({
            ...prev,
            empty : user.number === null
          }))
      }
      
    }
  useEffect(()=>{
    GET_USER()
    const temp = []
    carts.map(cart =>{
        temp.push(cart.id_product)
    })
    setIds(temp)
  },[session,status,carts])
  useEffect(()=>{
    const temp = []
    carts.map(cart =>{
        temp.push(cart.id_product)
    })
    setIds(temp)
  },[])
  return (
    <div className='lg:w-4/12 w-full '>
        {
                alert.open && (
                    <div style={{transform : 'translate(-50%,-50%)'}} className={`w-11/12 sm:w-6/12 md:w-auto rounded ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex gap-3 items-center fixed top-32 left-1/2 px-3 py-3 text-white`}>
                        {alert.type !== 'error' ?  <Success width={20} height={20} color={'white'}/> : <Errors  width={20} height={20} color={'white'}/>} 
                        <span>{alert.message}</span>
                    </div>
                )
        }
        <h1 style={{fontWeight : '500 !important'}} className='text-gray-700 font-medium mb-0 pb-3 border-bottom w-100 text-xl'>Cart Totals</h1>
        <ul className='pl-0'>
            <li className='d-flex justify-between items-center mt-4'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Sub total</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{subTotal} DA</span>
            </li>
            <li className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Tax</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{tax} DA</span>
            </li>
            <li className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Shipping</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{shipping} DA</span>
            </li>
        </ul>
        <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Do you have a code promo</h6>
        <div className='d-flex w-100 gap-3 mt-2 pb-3 border-bottom'>
            <input type="text" name="" id="" placeholder='xyz' className='px-2 py-1 border rounded w-10/12'/>
            <button className='font-semibold text-white rounded bg-one px-2 py-1 w-2/12'>Add</button>
        </div>
        <div className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-base'>Total</h6>
               <span className='text-base font-semibold' style={{fontWeight : '500 !important'}}>{total} DA</span>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <button onClick = {()=>handleOpen()} className='text-capitalize rounded-pill bg-one text-white font-semibold px-2 py-2.5 w-100'>
                Proceed to checkout
            </button>
        </div>
        <Modal open = {open} onClose={()=>setOpen(false)}>
            <Box className = 'commande_modal'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-medium text-gray-900 mb-0 text-2xl'>Add your information</h1>
                        <p className='mb-0 text-sm text-gray-500'>you must complete your information to add order</p>
                    </div>
                    <button onClick={()=>setOpen(false)}><Close width={15} height={15} color={'black'}/></button>
                </div>
                <div>
                <form action="" className='my-4' onSubmit={(e)=>handleSubmit(e)}>
                        <div className='flex gap-8 items-center w-full'>
                            <div className='flex flex-col gap-2 w-1/2'>
                            <label htmlFor="email" className="text-gray_text font-medium text-sm text-capitalize">
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
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="name" className="text-gray_text text-sm font-medium text-capitalize">
                                    name*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`rounded border px-3 py-2 outline-none`}
                                    value={session.user.name}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='flex gap-8 items-center w-full mt-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="number" className="text-gray_text text-sm font-medium text-capitalize">
                                    number*
                                </label>
                                <div className="flex gap-2 items-center w-full">
                                
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        className={`rounded border px-3 py-2 outline-none w-full ${isValidNumber.inValid && 'border-red-500 border-2'}`}
                                        value={number}
                                        onChange={(e)=>handleNumber(e.target.value)}
                                    />
                                {loading && <l-line-spinner size = {20} color={'gray'} speed={1}></l-line-spinner>}
                            </div>
                            
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="wilaya" className="text-gray_text text-sm font-medium text-capitalize">wilaya</label>
                                <select id='wilaya' value={wilaya} onChange={(e)=>handleWilaya(e.target.value)} className={`w-full px-2 py-2 rounded border-gray-200 border-2 ${validW && 'border-red-500 border-2'} focus-within:border-3 hover:border-one focus-within:border-one outline-none`}>
                                    <option value="" className='text-gray_text' disabled selected>Select wilaya</option>
                                    <option value="1">1 - Adrar</option>
                                    <option value="2">2 - Chlef</option>
                                    <option value="3">3 - Laghouat</option>
                                    <option value="4">4 - Oum El Bouaghi</option>
                                    <option value="5">5 - Batna</option>
                                    <option value="6">6 - Béjaïa</option>
                                    <option value="7">7 - Biskra</option>
                                    <option value="8">8 - Béchar</option>
                                    <option value="9">9 - Blida</option>
                                    <option value="10">10 - Bouira</option>
                                    <option value="11">11 - Tamanrasset</option>
                                    <option value="12">12 - Tébessa</option>
                                    <option value="13">13 - Tlemcen</option>
                                    <option value="14">14 - Tiaret</option>
                                    <option value="15">15 - Tizi Ouzou</option>
                                    <option value="16">16 - Alger</option>
                                    <option value="17">17 - Djelfa</option>
                                    <option value="18">18 - Jijel</option>
                                    <option value="19">19 - Sétif</option>
                                    <option value="20">20 - Saïda</option>
                                    <option value="21">21 - Skikda</option>
                                    <option value="22">22 - Sidi Bel Abbès</option>
                                    <option value="23">23 - Annaba</option>
                                    <option value="24">24 - Guelma</option>
                                    <option value="25">25 - Constantine</option>
                                    <option value="26">26 - Médéa</option>
                                    <option value="27">27 - Mostaganem</option>
                                    <option value="28">28 - M'Sila</option>
                                    <option value="29">29 - Mascara</option>
                                    <option value="30">30 - Ouargla</option>
                                    <option value="31">31 - Oran</option>
                                    <option value="32">32 - El Bayadh</option>
                                    <option value="33">33 - Illizi</option>
                                    <option value="34">34 - Bordj Bou Arreridj</option>
                                    <option value="35">35 - Boumerdès</option>
                                    <option value="36">36 - El Tarf</option>
                                    <option value="37">37 - Tindouf</option>
                                    <option value="38">38 - Tissemsilt</option>
                                    <option value="39">39 - El Oued</option>
                                    <option value="40">40 - Khenchela</option>
                                    <option value="41">41 - Souk Ahras</option>
                                    <option value="42">42 - Tipaza</option>
                                    <option value="43">43 - Mila</option>
                                    <option value="44">44 - Aïn Defla</option>
                                    <option value="45">45 - Naâma</option>
                                    <option value="46">46 - Aïn Témouchent</option>
                                    <option value="47">47 - Ghardaïa</option>
                                    <option value="48">48 - Relizane</option>
                                    <option value="49">49 - El M'Ghair</option>
                                    <option value="50">50 - El Menia</option>
                                    <option value="51">51 - Ouled Djellal</option>
                                    <option value="52">52 - Bordj Baji Mokhtar</option>
                                    <option value="53">53 - Beni Abbes</option>
                                    <option value="54">54 - Timimoun</option>
                                    <option value="55">55 - Touggourt</option>
                                    <option value="56">56 - Djanet</option>
                                    <option value="57">57 - In Salah</option>
                                    <option value="58">58 - In Guezzam</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className='flex gap-8 items-center w-full mt-3'>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="b" className="text-gray_text text-sm font-medium text-capitalize">municipal*</label>
                                {
                                    mairie.length === 0 ? (
                                       
                                        
                                            <div className='w-full px-2 py-2 rounded border-gray-200 text-gray-400 border-2 cursor-not-allowed'>
                                                Select municipal
                                            </div>
                                        


                                    ):(
                                        <select id='b' value={b} onChange ={(e)=>setB(e.target.value)} className={`w-full px-2 py-2 rounded border-gray-200 border-2 ${validB && 'border-red-500 border-2'} focus-within:border-3 hover:border-one focus-within:border-one outline-none`}>
                                            <option value="" className='text-gray_text' disabled selected>Select municipal</option>
                                            {
                                                mairie.map((item,index)=>(
                                                    <option key={index} value={item} className='text-gray_text'>{item}</option>
                                                ))
                                            }
                                        </select>
                                    )
                                }
                                
                                
                            </div>
                            <div className='flex flex-col gap-2 w-1/2'>
                                <label htmlFor="wilaya" className="text-gray_text text-sm font-medium text-capitalize">livraison*</label>
                                <select id='b' value={type} onChange={(e)=>setType(e.target.value)} className={`w-full px-2 py-2 rounded border-gray-200 border-2 ${validT && 'border-red-500 border-2'} focus-within:border-3 hover:border-one focus-within:border-one outline-none`}>
                                    <option value="" className='text-gray_text' disabled selected>Select livraison type</option>
                                    <option value="to home">To home</option>
                                    <option value="to agence">To bureau</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <button className='p-2.5 rounded bg-red-500 text-white font-medium' onClick={()=>setOpen(false)}>Cancel</button>
                            {
                                loading ? (
                                    <div className='flex items-center justify-center p-2.5 rounded bg-one text-white font-medium cursor-wait'><l-line-spinner size = {20} color={'white'} speed={1}></l-line-spinner></div>
                                ) : (
                                    <button type='submit' className='p-2.5 rounded bg-one text-white font-medium'>Add order</button>
                                )
                            }
                        </div>
                </form>
                </div>
            </Box>
        </Modal>
    </div>

  )
}
