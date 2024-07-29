"use client"
import colors from "../../styles/colors"
import { useEffect ,useContext} from "react"
import {motion , useInView,useAnimate} from 'framer-motion'
import { pathContext } from "../providers/GlobalProvider"
import { useRouter } from "next/navigation"

export default function ThirdCard({id,name,price,img,desc_small}) {
  const {productEnter,productLeave} = useContext(pathContext)
  const [reference,animate] = useAnimate()
  const router = useRouter()
  const isInView = useInView(reference)
  useEffect(()=>{
     if(isInView){
       animate(reference.current,{transform:'scale(1)'})
     }else{
      animate(reference.current,{transform:'scale(0.7)'})
     }
  },[isInView])
  return (
    <div onClick={()=>router.push('/product/'+id)} ref={reference} className="thirdCard rounded hover:border" style={{backgroundColor : 'rgb(246,246,246)'}} onMouseEnter={productEnter} onMouseLeave={productLeave}>
        
          <img loading="lazy" src={"."+img} className="rounded" alt="" />
          <div className="d-flex flex-column align-items-center mt-2" >
             <h6 className="productName text-capitalize fw-bold">{name}</h6>
             <p className="productDesc text-capitalize px-2" style={{color : 'rgb(162, 162, 162)'}}>{desc_small}</p>
             <p className="productPrice text-uppercase" style={{color : colors.one,fontWeight : '500 !important'}}>{price} da</p>
          </div>
    </div>
  )
}
