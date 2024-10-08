"use client"

import Link from 'next/link';
import {motion,useInView,useAnimate,useAnimation} from "framer-motion"
import { useEffect } from 'react';
import Image from 'next/image';
export default function Couv2() {
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
    <Link ref={reference} className="couv2 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>Nike solo swoosh</h5>
        <small>Shop Now</small>
       </div>
       <Image src={"/images/T-shirt/nike4.webp"} width={280} height={280} priority alt='couv 2'/>
    </Link>
  )
}
