"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating , Box } from '@mui/material';
import { useState , useRef, useEffect, useContext } from 'react';
import colors from '../../styles/colors';
import {motion,useInView,useAnimate,useAnimation} from "framer-motion"
import { pathContext } from '../providers/GlobalProvider';
import CardsSkeleton from '../skeleton/cards';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
export default function FirstCard({id,src,name,small,price}) {
  const {productEnter , productLeave,CHECK,handleFavs} = useContext(pathContext)
  const {data : session,status} = useSession()
  const [value,setValue] = useState(1)
  const [heart,setHeart] = useState(false)
  const [statuss,setStatuss] = useState('new')
  const [reference,animate] = useAnimate()
  const handleWishList = async() => {
    
    if(!session){
        router.push('/login')
    }else{
      if(!heart){
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
              handleFavs(data)
              check()
              console.log(data);
        } catch (error) {
            console.log(error);
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
            console.log(data);
            handleFavs(data)
            check()
          }else{
            throw new Error(`${res.status} - ${res.statusText}`)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  const isInView = useInView(reference)
  useEffect(()=>{
     
       if(isInView){
         animate(reference.current,{transform : 'scale(1)'})
         animate(reference.current,{transition : '1s'})
       }else{
         animate(reference.current,{transform : 'scale(0.5)'})
       }
     
  },[isInView])
  const router = useRouter()
  const toDetailPage = ()=>{
    router.push(`/product/${id}`)
  }
  const check = async()=>{
   
      const bool = await CHECK(id,session.user.email)
      setHeart(bool)
}
  useEffect(()=>{
    if(id && session){
      check()
    }else{
      setHeart(false)
    }
  },[session,id])
  return (
    <motion.div className="firstCard p-1 rounded hover:border" ref={reference} onMouseEnter={productEnter} onMouseLeave={productLeave} >
      <span className='rounded px-2 py-1 text-uppercase' style={{backgroundColor : statuss === 'new' ? '#28a745' : '#dc3545' }}>{statuss}</span>
        <Image src={src} width={280} height={280} onClick={toDetailPage} className='rounded' alt={'produit '+id} loading='lazy' placeholder='blur' blurDataURL='/images/loading.jpg'/>
        <div className='d-flex justify-content-between'>
        <div className='pt-2 bg-white'>
          <h6 className='productName'>{name}</h6>
          <p className="productStatus text-capitalize">{small}</p>
          <p className='productPrice' style={{color : colors.one}}>{price} DA</p>
        </div>
       {
        heart ? <FavoriteIcon className='pt-2' style={{color: 'red'}} onClick = {handleWishList}/> : <FavoriteBorderIcon className='pt-2' onClick = {handleWishList}/>
       }
       </div>
        
    </motion.div>
  )
}
