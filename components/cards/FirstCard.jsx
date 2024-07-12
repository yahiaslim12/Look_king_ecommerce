"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating , Box } from '@mui/material';
import { useState , useRef, useEffect, useContext } from 'react';
import colors from '../../styles/colors';
import {motion,useInView,useAnimate,useAnimation} from "framer-motion"
import { pathContext } from '../providers/GlobalProvider';
export default function FirstCard() {
  const {productEnter , productLeave} = useContext(pathContext)
  const [value,setValue] = useState(1)
  const [heart,setHeart] = useState(false)
  const [status,setStatus] = useState('new')
  const [reference,animate] = useAnimate()
  const isInView = useInView(reference)
  useEffect(()=>{
      if(isInView){
        animate(reference.current,{transform : 'scale(1)'})
        animate(reference.current,{transition : '1s'})
      }else{
        animate(reference.current,{transform : 'scale(0.5)'})
      }
  },[isInView])
  return (
    <motion.div className="firstCard p-1 rounded hover:border" ref={reference} onMouseEnter={productEnter} onMouseLeave={productLeave} >
      <span className='rounded px-2 py-1 text-uppercase' style={{backgroundColor : status === 'new' ? '#28a745' : '#dc3545' }}>{status}</span>
        <img loading='lazy' className='rounded' src="./images/T-shirt/nike1.webp" alt="" />
        <div className='d-flex justify-content-between'>
        <div className='pt-2 bg-white'>
          <h6 className='productName'>Product Name</h6>
          <p className="productStatus text-capitalize">This T-shirt have a good quality</p>
          <p className='productPrice' style={{color : colors.one}}>2800 DA</p>
        </div>
       {
        heart ? <FavoriteIcon className='pt-2' style={{color: 'red'}} onClick= {()=>setHeart(false)}/> : <FavoriteBorderIcon className='pt-2' onClick = {()=> setHeart(true)}/>
       }
       </div>
        
    </motion.div>
  )
}
