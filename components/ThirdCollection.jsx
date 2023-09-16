"use client"
import Link from "next/link"
import colors from "../styles/colors"
import { useEffect } from "react"
import { useInView,useAnimate } from "framer-motion"
export default function ThirdCollection() {
  const [reference1,animate1] = useAnimate()
  const [reference2,animate2] = useAnimate()
  const [reference3,animate3] = useAnimate()
  const [reference4,animate4] = useAnimate()
  const isInView1 = useInView(reference1)
  const isInView2 = useInView(reference2)
  const isInView3 = useInView(reference3)
  const isInView4 = useInView(reference4)
  useEffect(()=>{
      if(isInView1){
        animate1(reference1.current,{transform : 'scale(1)'})
        animate1(reference1.current,{transition : '1s'})
      }else{
        animate1(reference1.current,{transform : 'scale(0.2)'})
      }
  },[isInView1])
  useEffect(()=>{
      if(isInView2){
        animate2(reference2.current,{transform : 'scale(1)'})
        animate2(reference2.current,{transition : '1s'})
      }else{
        animate2(reference2.current,{transform : 'scale(0.2)'})
      }
  },[isInView2])
  useEffect(()=>{
      if(isInView3){
        animate3(reference3.current,{transform : 'scale(1)'})
        animate3(reference3.current,{transition : '1s'})
      }else{
        animate3(reference3.current,{transform : 'scale(0.2)'})
      }
  },[isInView3])
  useEffect(()=>{
      if(isInView4){
        animate4(reference4.current,{transform : 'scale(1)'})
        animate4(reference4.current,{transition : '1s'})
      }else{
        animate4(reference4.current,{transform : 'scale(0.2)'})
      }
  },[isInView4])
  return (
    <div className="thirdCollection d-flex justify-content-center gap-5 mt-4 flex-wrap flex-sm-nowrap">
        <div className="livraison text-center py-1" ref={reference1}>
            <img src="./images/icons/livraison-rapide.png" alt="" />
            <h6 style={{color: colors.one}} className="mt-1">Yalidin Livraison</h6>
        <p style={{fontSize : '14px'}}>Quick delivery to your home or your community.</p>
        </div>
        <div className="instagram text-center py-1" ref={reference2}>
            <Link href={'./'}>
            <img src="./images/icons/instagram.png" alt="" />
            </Link>
            <h6 style={{color: colors.one}} className="mt-1">Look King Store</h6>
        <p style={{fontSize : '14px'}}>Click on the logo to visit our Instagram page.</p>
            
        </div>
        <div className="serviceClient text-center py-1" ref={reference3}>
            <img src="./images/icons/fidelisation-de-la-clientele.png" alt="" />
            <h6 style={{color: colors.one}} className="mt-1">Customer Service</h6>
        <p style={{fontSize : '14px'}}>We provide excellent customer service.</p>
        </div>
        <div className="vitesse text-center py-1" ref={reference4}>
            <img src="./images/icons/compteur-de-vitesse.png" alt="" />
            <h6 style={{color: colors.one}} className="mt-1">Fast Response</h6>
        <p style={{fontSize : '14px'}}>We respond quickly to our clients' needs.</p>
        </div>
    </div>
  )
}
