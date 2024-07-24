'use client'
import { Rating } from '@mui/material'
import {useState,useEffect, useContext}from 'react'
import { useSession } from 'next-auth/react'
import { Cart, Delete } from '../../svg'
import Title from '../title/Title'
import { pathContext } from '../providers/GlobalProvider'

export default function Table() {
    const {data : session , status} = useSession()
    const {handleFavs,favs} = useContext(pathContext)
    const DELETE = async (id)=>{
      try {
          const res = await fetch("http://localhost:8000/products/deletefavorite/",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify({id_product : id,email : session.user.email})
          })
          if(res.ok){
            const data = await res.json()
            handleFavs(data)
          }else{
            throw new Error(`${res.status} - ${res.statusText}`)
          }
        } catch (error) {
          console.log(error);
        }
    }
    const addCart = async(id) => {
      try {
        const res = await fetch('http://localhost:8000/products/addcart/',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
                },
            body : JSON.stringify({id_product : id,email : session.user.email})
        })
        if(res.ok){
            const data = await res.json()
            setAlert({open : true,message : 'Product add to cart',type: 'success'})
            console.log(res);
        }else{
            console.log(`${res.status} - ${res.text}`);
            throw new Error(`${res.status} - ${res.text}`)
        }
    } catch (error) {
        console.log(error);
        setAlert({open : true, message : error,type : 'error'})
        setTimeout(() => {
            setAlert({open : false, message : '', type: ''})
        }, 3000);
    }
  }
  return (
    <div className='myTable'>
        <div className='thead flex items-center bg-gray_table px-6 py-3 rounded-top'>
             <div className='th'>
                <input type="checkbox" name="" id="" />
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Product</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>id</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Stock</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>price</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>rating</p>
             </div>
             <div className='th flex  items-center text-uppercase '>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>Action</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>status</p>
             </div>
             <div className='th flex  items-center text-uppercase'>
                <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>delete</p>
             </div>
             
        </div>
        <div className='tbody'>
            {
               favs && favs.map((fav,index) => {
                    return (
                        <div key={fav.id_product} className='tr flex px-6 py-2'>
                <div className='td flex items-center p-0'>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='td flex  items-center'>
                    <div className='flex gap-3 border-none'>
                        <img src={`.${fav.img1}`} alt="" width={50} height={50} className='rounded object-contain'/>
                        <div>
                            <h6 className='mb-0 text-sm text-gray-700 font-semibold'>{fav.name}</h6>
                            <p className='text-xs text-gray_text_table capitalize'>{fav.category}</p>
                        </div>
                    </div>
                </div>
                <div className='td flex  items-center text-uppercase'>
                    <p className='mb-0 text-sm' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>#{fav.id_product}</p>
                </div>
                <div className='td flex flex-col justify-content-center gap-2'>
                    <div className='bg-green-200 relative h-1.5 w-8/12 rounded'>
                        <div style = {{backgroundColor : "#11A849",width : '50%'}}className=' absolute z-10 h-1.5 rounded'></div>
                    </div>
                    <p className='text-xs text-gray_text_table mb-0'>{fav.qte} in stock</p>
                </div>
                <div className='td flex  items-center text-uppercase'>
                    <p className='mb-0 text-sm text-gray-700' style={{borderBottom : 'none',fontWeight :'500 !important'}}>{fav.price} DA</p>
                </div>
                <div className='td flex flex-col justify-center text-capitalize'>
                    
                        <Rating value={4} readOnly size='small'/>
                        <p className='mb-0 ml-1 text-sm text-gray-600'>(14) Person</p>
                </div>
                <div className='td flex items-center text-capitalize'>
                        <button  className='mb-0 text-sm flex justify-center gap-2 items-center rounded bg-green-500 text-white font-semibold px-2 py-2 text-capitalize' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}} onClick={()=>addCart(fav.id_product)}>Add <Cart width={20} height={20}  color={'white'}/></button>
                   
                </div>
                <div className='td flex  items-center text-capitalize'>
                    <div className='d-flex gap-1 text-green_dark items-center text-sm'>
                        <div className='w-2 h-2 rounded-full bg-green_dark'></div>
                        <p className='mb-0' style={{fontWeight : '500 !important'}}>Pending</p>
                    </div>
                </div>
                <div className='td flex  items-center'>
                    
                        <button onClick={()=>DELETE(fav.id_product)} className='mb-0 text-sm flex  justify-center items-center gap-2 rounded bg-red-500 text-white font-semibold px-2 py-2 text-capitalize' style={{borderBottom : 'none',fontWeight :'500 !important',color : '#666666'}}>delete <Delete width={20} height={20} color={'white'}/></button>
                </div>
            </div>
                    )
            })}
            
        </div>
    </div>
  )
}
