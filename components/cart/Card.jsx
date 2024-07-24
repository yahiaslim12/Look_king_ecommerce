'use client'
import { Heart, Heart2, Remove } from "../../svg";
import { useContext, useEffect, useState } from "react";
import Title from "../title/Title";
import { useSession } from "next-auth/react";
import { pathContext } from "../providers/GlobalProvider";
export default function Card({id,name,small,price,qte,src,get,handleCarts,size,qte_cart}) {
  const {CHECK,handleFavs} = useContext(pathContext)
  const [favorite,setFavorite] = useState(false)
  const {data : session , status} = useSession()
  const [sizes,setSizes] = useState([])
  const DELETE = async ()=>{
    try {
        const res = await fetch("http://localhost:8000/products/deletecart/",{
          method:"DELETE",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify({id_product : id,email : session.user.email})
        })
        if(res.ok){
          const data = await res.json()
          handleCarts(data)
        }else{
          throw new Error(`${res.status} - ${res.statusText}`)
        }
      } catch (error) {
      }
  }
  const GET_SIZE = async ()=>{
    try {
        const res = await fetch('http://localhost:8000/products/'+id+'/size',{method : 'GET',headers : {'Content-Type' : 'application/json'}})
        if(res.ok){
            const data = await res.json()
            setSizes(data)
        }else{
            throw new Error(`Error ${res.status} - ${res.statusText}`)
        }
    } catch (error) {

    }
  }
  const check = async() => {
    if(session) {
        var bool =await CHECK(id,session.user.email)
        setFavorite(bool)
    }
  }
  const handleWishList = async() => {
    
    if(!session){
        router.push('/login')
    }else{
        if(!favorite){
            try {
                const res = await fetch('http://localhost:8000/products/addfavorite/',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                        },
                    body : JSON.stringify({id_product : id,email : session.user.email})
                })
                if (!res.ok) {
                    const errorData = await res.json();
                    
                    throw new Error(errorData.detail || 'An error occurred');
                  }
                  const data = await res.json();
                  check()
                  
            } catch (error) {
               
            }
        }else{
           
                try {
                    const res = await fetch("http://localhost:8000/products/deletefavorite/",{
                      method:"DELETE",
                      headers:{"Content-Type":"application/json"},
                      body : JSON.stringify({id_product : id,email : session.user.email})
                    })
                    if(res.ok){
                      const data = await res.json()
                      handleFavs(data)
                      check()
                    }else{
                      throw new Error(`${res.status} - ${res.statusText}`)
                    }
                  } catch (error) {
                    
                  }
            
        }
    }
  }
  const handleChange = async (type) => {
     if(type === '+' && qte_cart < qte){
        try {
            const res = await fetch('http://localhost:8000/updateCart/',
                {
                    method : 'PUT',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({id_product : id,qte_cart : `${Number(qte_cart) + 1}`,email : session.user.email})
                }
            )
            if(!res.ok){
                const error = await res.json()
                throw new Error(`${res.status} - ${error.detail}`)
            }
            const data = await res.json()
            handleCarts(data)
            check()
        } catch (error) {
        }
     }else if(qte_cart > 1){
        try {
            const res = await fetch('http://localhost:8000/updateCart/',
                {
                    method : 'PUT',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({id_product : id,qte_cart : `${Number(qte_cart) - 1}`,email : session.user.email})
                }
            )
            if(!res.ok){
                const error = await res.json()
                throw new Error(`${res.status} - ${error.detail}`)
            }
            const data = await res.json()
            handleCarts(data)
            check()
        } catch (error) {
        }
     }
  }
  
  useEffect(()=>{
    GET_SIZE()
    check()
  },[session,status])
  return (
    <div className="cartcard flex flex-col gap-3 py-3 border-bottom">
        <div className="flex gap-3 w-100">
            <img src={`.${src}`} alt="" className="rounded"/>
            <div className="flex flex-col w-100">
                <div className="flex justify-between w-100">
                    <div>
                        <h6 className="text-base font-semibold mb-0 hover:text-one text-gray-700 hover:cursor-pointer">{name}</h6>
                        <p style={{color :'#484848'}} className="mb-0 text-sm">{small}</p>
                    </div>
                    <h6 className="text-uppercase mb-0 font-semibold">{price} da</h6>
                </div>
                <div className="flex gap-2 items-center mt-3">
                    <p className="mb-0">Size : </p>
                    <select name="" id="" className="rounded border px-2 py-1">
                       <option value={size}>{size}</option>
                       {
                            sizes.map((item,index)=>(
                                item.size !== size && <option key={index} value={item.size}>{item.size}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="justify-between items-center mt-3 hidden sm:flex">
                    <div className="rounded border flex gap-3 items-center px-2 py-1">
                        <button className="btn rounded border mr-4" onClick={()=>handleChange('-')}>-</button>
                        <p className="mb-0">{qte_cart}</p>
                        <button className="btn rounded border ml-4" onClick={()=>handleChange('+')}>+</button>
                    </div>
                    <div className="flex gap-3">
                        <Title text={"Add to wishlist"}>
                            <button className="flex justify-center items-center border rounded-full p-2" onClick={handleWishList}>
                                {!favorite ? <Heart width={20} height={20} color={'black'}/> : <Heart2 width={20} height={20} color={'red'}/>}
                            </button>
                        </Title>
                        <Title text={'Delete'}>
                            <button className="flex justify-center items-center border rounded-full p-2" onClick={DELETE}>
                                <Remove width={20} height={20}/>
                            </button>
                        </Title>
                    </div>
                </div>
            </div>
        </div>
        <div className="justify-between items-center mt-3 flex sm:hidden">
                    <div className="rounded border flex gap-3 items-center px-2 py-1">
                    <button className="btn rounded border mr-4" onClick={()=>handleChange('-')}>-</button>
                        <p className="mb-0">{qte_cart}</p>
                    <button className="btn rounded border ml-4" onClick={()=>handleChange('+')}>+</button>
                    </div>
                    <div className="flex gap-3">
                        <Title text={"Add to wishlist"}>
                            <button className="flex justify-center items-center border rounded-full p-2" onClick={handleWishList}>
                                {!favorite ? <Heart width={20} height={20} color={'black'}/> : <Heart2 width={20} height={20} color={'red'}/>}
                            </button>
                        </Title>
                        <Title text={'Delete'}>
                            <button onClick={DELETE} className="flex justify-center items-center border rounded-full p-2">
                                <Remove width={20} height={20}/>
                            </button>
                        </Title>
                    </div>
            </div>
    </div>
  )
}
