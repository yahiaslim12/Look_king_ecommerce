"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import colors from '../styles/colors';
import Link from 'next/link';
import {motion,useInView,useAnimate,useAnimation} from "framer-motion"
import { useEffect } from 'react';
export default function Couv1() {
  const [reference,animate] = useAnimate()
  const isInView = useInView(reference)
  useEffect(()=>{
    if(isInView){
      animate(reference.current,{transform : 'scale(1)'})
      animate(reference.current,{transition : '1s'})
    }else{
      animate(reference.current,{transform : 'scale(0.8)'})
    }
},[isInView])
  return (
    <Link ref={reference} className="couv1 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>Short T-shirts</h5>
        <small>Shop Now</small>
       </div>
       <img src="./images/T-shirt/nike3.webp" alt="" />
    </Link>
  )
}
