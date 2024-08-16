"use client"
import Link from 'next/link';
import {motion,useInView,useAnimate,useAnimation} from "framer-motion"
import { useEffect } from 'react';
import Image from 'next/image';
export default function Couv4() {
  const [reference,animate] = useAnimate()
  const isInView = useInView(reference)
  useEffect(()=>{
    if(isInView){
      animate(reference.current,{transition : '10s'})
      animate(reference.current,{transform : 'scale(1)'})
    }else{
      animate(reference.current,{transform : 'scale(0.8)'})
    }
},[isInView])
  return (
    <Link ref={reference} className="couv4 d-flex justify-content-between" href = "./" style={{textDecoration : "none", color : "black"}}>
       <div className='pt-2 px-2 px-sm-5'>
        <h5 className='text-capitalize'>simple snapback</h5>
        <small>Shop Now</small>
       </div>
       <Image src={"/images/T-shirt/nike2.webp"} width={280} height={280} priority alt='couv 4'/>
    </Link>
  )
}
