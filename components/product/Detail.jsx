'use client'
import { Bottom, Cart, Heart, Heart2, Tags ,Etoile, Errors, Success} from "../../svg";
import { useContext, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { lineSpinner } from "ldrs";
import { pathContext } from "../providers/GlobalProvider";
lineSpinner.register()
export default function Detail({id,small,big,name,price,category,qte,sizes}) {
   const {data:session,status} = useSession()
   const {CHECK} = useContext(pathContext)
   const router = useRouter()
   const [addWishList,setAddWishList] = useState(false)
   const [size,setSize] = useState({value : '' , show : false})
   const [alert,setAlert] = useState({
      open : false,
      message : '',
      type: ''
   })
  const handleWishList = async() => {
    
    if(!session){
        router.push('/login')
    }else{
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
                console.log(errorData);
                throw new Error(errorData.detail || 'An error occurred');
              }
              const data = await res.json();
              setAlert({ open: true, message: 'Product added to cart', type: 'success' });
              setTimeout(() => {
                setAlert(prev => ({open : false,...prev}));
              }, 3000);
        } catch (error) {
            console.log(error);
            setAlert({open : true, message : error.message,type : 'error'})
            setTimeout(() => {
                setAlert({open : false, message : '', type: ''})
            }, 3000);
        }
    }
  }
  const addCart = async() => {
    console.log(size);
     if(!session){
        router.push('/login')
     }else if (size.value === ''){
        setSize(prev => ({
            ...prev,
            show : true
        }))
     }else{
        try {
            const res = await fetch('http://localhost:8000/products/addcart/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id_product: id, email: session.user.email,size:size.value })
            });
            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.detail || 'An error occurred');
            }
            const data = await res.json();
            setAlert({ open: true, message: 'Product added to cart', type: 'success' });
            setTimeout(() => {
                setAlert({ open: false, message: '', type: '' });
              }, 3000);
          } catch (error) {
            console.log(error);
            setAlert({ open: true, message: error.message, type: 'error' });
            setTimeout(() => {
              setAlert({ open: false, message: '', type: '' });
            }, 3000);
          }
     }
  }
  const check = async()=>{
    const bool = await CHECK(id,session.user.email)
    setAddWishList(bool)
  }
  useEffect(()=>{
    if(id && session){
        check()
    }else{
        setAddWishList(false)
    }
  },[session,id])
  return (
    <div className="detail w-full lg:w-1/2">
        {
                alert.open && (
                    <div style={{transform : 'translate(-50%,-50%)'}} className={`w-11/12 sm:w-6/12 md:w-auto rounded ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex gap-3 items-center fixed top-32 left-1/2 px-3 py-3 text-white`}>
                        {alert.type !== 'error' ?  <Success width={20} height={20} color={'white'}/> : <Errors  width={20} height={20} color={'white'}/>} 
                        <span>{alert.message}</span>
                    </div>
                )
        }
        <div className="w-full">
            <h2 className="text-3xl mb-0 font-bold capitalize">{name}</h2>
            <p className="mb-0 capitalize text-base pb-8 border-b-2" style={{color : '#484848'}}>{small}</p>
        </div>
        <div className="w-full pt-5 pb-8">
            <h2 className="text-3xl mb-0 font-bold capitalize">{price} DA</h2>
            <p className="mb-0 capitalize text-sm text-green-600">Inclusive of all taxes</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-between" >
                <span className="text-gray-800 text-sm" style={{fontWeight : '500 !important'}}>Select size</span>
                <span className="text-gray-800 text-xs underline hover:text-one" >size guide</span>
            </div>
            {
              size.show && <p className="text-red-500 mb-0 text-sm flex items-center gap-1"><Errors width={12} height={12} color={'red'}/>You must select a size before</p>
            }
            <div className="size flex gap-3 flex-wrap">
                {sizes && sizes.map((size,index) =>{
                    return <div key={index} tabIndex={0} onClick={()=>setSize(prev => ({show : false,value : size.size}))} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>{size.size}</span></div>
                })}
            </div>
        </div>
        <div className="flex gap-4 mt-5 pb-5 border-b-2 border-gray-200 flex-col sm:flex-row">
            {status === 'loading' ? (
                <>
                    <div className="flex px-2 py-2.5 text-lg bg-one text-white w-full sm:w-1/2 items-center justify-center gap-1 rounded cursor-wait">
                        <l-line-spinner size="20" stroke="3" speed="1"  color="white" ></l-line-spinner>
                    </div>
                    <div className="cursor-wait flex px-2 py-2.5 text-lg items-center justify-center w-full sm:w-1/2 gap-1 rounded border-2 border-gray-200 hover:border-one hover:text-one">
                        <l-line-spinner size="20" stroke="3" speed="1"  color="black" ></l-line-spinner>
                    </div>
                </>
            ):(
                <>
                    <button onClick={addCart} className="flex px-2 py-2.5 text-lg bg-one text-white w-full sm:w-1/2 items-center justify-center gap-1 rounded">
                        <Cart width={20} height={20} color={'white'}/>
                        Add Cart
                    </button>
                    <button className="flex px-2 py-2.5 text-lg items-center justify-center w-full sm:w-1/2 gap-1 rounded border-2 border-gray-200 hover:border-one hover:text-one" onClick={handleWishList}>
                        {!addWishList ? <Heart width={20} height={20} color={'black'}/> : <Heart2 color={'red'} width={20} height={20}/>}
                        Add Wishlist
                    </button>
                </>
            )}
            
        </div>
        <div className="mt-4 pb-7 border-b-2 border-gray-200">
            <div className="flex justify-between items-center">
                <h2 className="text-xl mb-0 font-semibold capitalize">Delivery Option</h2>
                <select tabIndex={0} name="" id="" className="border-2 w-1/2 border-gray-200 rounded px-2 py-2 hover:border-2 hover:border-one outline-none focus-within:border-2 focus-within:border-one">
                    <option value="">Choose One</option>
                    <option value="">Yalidin</option>
                    <option value="">Expo Go</option>
                    <option value="">other</option>
                </select>
            </div>
            <p className="text-gray-500 text-xs mb-0 pt-2">please select a delivery option from this propositions</p>
            <p className="mb-3 mt-4 text-sm" style={{color : '#484848'}}>100% Original Products </p> 
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Pay on delivery might be available </p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Easy 14 days returns and exchanges</p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Try & Buy might be available for some products</p>

        </div>
        <div>
            <h2 className="text-xl mb-0 font-semibold capitalize py-6">Product Details</h2>
            <p className="mb-0" style={{color : '#484848',fontSize : '15px'}}>{big}</p>
            <p className="mb-3 mt-4 text-sm" style={{color : '#484848'}}>Available : <span className={`${Number(qte) > 0  ?'text-green-600' : 'text-red-600'} font-medium`}>{Number(qte) > 0 ? 'Yes'+' ('+qte+')' : 'No'}</span></p> 
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Cushioned footbed : <span className="text-red-600 font-medium">No</span></p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Easy 14 days returns and exchanges</p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Category: <span className="text-green-600 font-medium">{category}</span></p>
            <div className="mt-3 flex gap-2 items-center">
                <span className="flex items-center gap-1 font-medium"><Tags width={20} height={20} color={'black'}/> Tags:</span>
                <span className="bg-gray-200 rounded px-3 py-1">Men</span>
                <span className="bg-gray-200 rounded px-3 py-1">Nike</span>
                <span className="bg-gray-200 rounded px-3 py-1">Original</span>
            </div>
        </div>
        <div className='mt-3 block lg:hidden w-full'>
            <h2 className="text-xl mb-0 font-semibold capitalize py-6">Ratings & Reviews</h2>
            <h1 className='text-5xl mb-0 mt-3 text-gray-900 font-bold'>4.1</h1>
            <p className='text-gray-600 text-sm mt-2'>12 Verified Buyers</p>
            <div className='w-full flex items-center gap-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>5 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-full sm:w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-1/3 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>4</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>4 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-full sm:w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-2/3 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>4</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>3 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-full sm:w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>0</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>2 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-full sm:w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>0</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3 pb-5 border-b-2 border-gray-200'>
                <span className='flex text-sm items-center gap-1 font-semibold'>1 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-full sm:w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-8/12 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>10</span>
            </div>
            <div className='flex flex-col justify-center py-3'>
                <h2 className="text-xl mb-0 font-semibold capitalize">Add Ratings</h2>
                <p className='text-sm mb-0 text-gray-500'>You must buy this product before add a rating</p>
                <div className='flex gap-3 items-center mt-3'>
                    <Rating/> 
                    <button className='bg-one rounded px-4 py-2 text-white font-medium'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}
