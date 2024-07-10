"use client"
import colors from "../../styles/colors"
import { useEffect } from "react"
import {motion , useInView,useAnimate} from 'framer-motion'
export default function ThirdCard() {
  const [reference,animate] = useAnimate()
  const isInView = useInView(reference)
  useEffect(()=>{
     if(isInView){
       animate(reference.current,{transform:'scale(1)'})
     }else{
      animate(reference.current,{transform:'scale(0.7)'})
     }
  },[isInView])
  return (
    <div ref={reference} className="thirdCard rounded hover:border" style={{backgroundColor : 'rgb(246,246,246)'}}>
        
          <img loading="lazy" src="./images/T-shirt/nike2.webp" className="rounded" alt="" />
          <div className="d-flex flex-column align-items-center mt-2" >
             <h6 className="productName text-capitalize fw-bold">ProductName</h6>
             <p className="productDesc text-capitalize px-2" style={{color : 'rgb(162, 162, 162)'}}>this t-shirt have a good quality</p>
             <p className="productPrice text-uppercase" style={{color : colors.one,fontWeight : '500 !important'}}>2800 da</p>
          </div>
    </div>
  )
}
