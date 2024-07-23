"use client"
import FirstCard from "./cards/FirstCard";
import {motion,useInView,useAnimate, animate} from 'framer-motion'
import { useRef ,useEffect, useContext,useState, Suspense} from "react";
import { pathContext } from "./providers/GlobalProvider";
import { hourglass } from "ldrs";
import CardsSkeleton from "./skeleton/cards";
import colors from "../styles/colors";
hourglass.register()
export default function FirstCollection() {
  const [scop,animate] = useAnimate()
  const variants = {
    hidden : {opacity : 0,y:75},
    visible : {opacity : 1,y:0}
  }
  const titleRef = useRef(null)
  const isInView = useInView(titleRef,{once : true})
  const {textEnter,textLeave} = useContext(pathContext)
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const GET = async()=>{
    setLoading(true)
    try {
      const res = await fetch('http://localhost:8000/products/',{
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
          }
  
      })
      if(res.ok){
         const data = await res.json()
         setProducts(data)
      }else{
        throw new Error(`${res.status} - ${res.statusText}`)
      }
    } catch (error) {
       console.log(error);
    }finally{
      setTimeout(() => {
        setLoading(false)
      }, 500); 
    }
  }
  useEffect(()=>{
    GET()
  },[])

  return (
    <div ref={scop} className="firstCollection mt-4 ">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h1 style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              
            }} ref={titleRef}  className="text-capitalize px-2 text-xl sm:text-3xl text-center">Products Recommended for You</h1>
          <p className="text-capitalize text-center text-sm sm:text-base" style={{transform: isInView ? "none" : "translateY(10px)",opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}}>This section features products you might be interested in.</p>
        </div>
      </div>
        <Suspense fallback = {<div className="w-full h-60 flex justify-center items-center"><l-hourglass size={30} color={colors.one} bg-opacity={0.1} speed={1.75}></l-hourglass></div>}>
            {loading ? (
              <div className="d-flex gap-3 gap-md-5 mx-2 flex-wrap  md_ta3i:justify-center justify-between mt-4">
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
              </div>) :  <div className="d-flex gap-3 gap-md-5 mx-2 flex-wrap  md_ta3i:justify-center justify-between mt-4">
                {products.map((product)=>(
                  <FirstCard id = {product.id_product} price={product.price} src={product.img1 && product.img1} small={product.desc_small} name={product.name}/>))}
                  </div>
                }
        </Suspense>
          
      <div className="d-flex justify-content-center mt-3">
        <button className="text-uppercase px-2 rounded btn">see more</button>
      </div>
    </div>
  )
}
