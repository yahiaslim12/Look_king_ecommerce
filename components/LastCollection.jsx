"use client"
import FirstCard from "./cards/FirstCard";
import { useInView ,useAnimate} from "framer-motion";
import { useContext, useRef ,useState,useEffect,Suspense} from "react";
import colors from "../styles/colors";
import CardsSkeleton from "./skeleton/cards";
import { pathContext } from "./providers/GlobalProvider";
export default function LastCollection() {
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
     
        setLoading(false)
    }
  }
  useEffect(()=>{
    GET()
  },[])
  return (
      <div className="LastCollection mt-4">
        <div className="flex justify-center">

          <div className="title flex justify-cente items-center flex-col" onMouseEnter={textEnter} onMouseLeave={textLeave}>
               <h1 ref={titleRef} style={{transform: isInView ? "none" : "translateX(-200px)",opacity: isInView ? 1 : 0,transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className=" text-capitalize text-3xl">Other Product</h1>
               <p style={{transform: isInView ? "none" : "translateY(10px)",opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}} className="text-capitalize">Show this product probably you like it</p>
          </div>
        </div>
          
          <Suspense fallback = {<div className="w-full h-60 flex justify-center items-center"><l-hourglass size={30} color={colors.one} bg-opacity={0.1} speed={1.75}></l-hourglass></div>}>
            {loading ? (
              <div className="cardContent px-2 d-flex gap-3 gap-md-5 flex-wrap justify-content-center mt-4">
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
                <CardsSkeleton/>
              </div>) :  <div className="cardContent px-2 d-flex gap-3 gap-md-5 flex-wrap justify-content-center mt-4">
                {products.map((product)=>(
                  <FirstCard key={product.id_product} id={product.id_product} price={product.price} src={product.img1 && product.img1} small={product.desc_small} name={product.name}/>))}
                  </div>
                }
        </Suspense>

      </div>
  )
}
