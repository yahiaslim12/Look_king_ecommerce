'use client'
import { useState ,useRef, useContext,useEffect} from "react"
import colors from "../styles/colors"
import SecondCard from "./cards/SecondCard"
import ThirdCard from "./cards/ThirdCard"
import {motion,useInView} from 'framer-motion'
import { pathContext } from "./providers/GlobalProvider"
import CardsSkeleton from "./skeleton/cards"
export default function SecondCollection() {
    const [colorButton,setColorButton] = useState(1)
    const titleRef = useRef(null)
    const buttonsRef = useRef(null)
    const isInView1 = useInView(titleRef,{once : true})
    const isInView2 = useInView(buttonsRef,{once : true})
    const {textEnter,textLeave} = useContext(pathContext)
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const GET = async()=>{
        setLoading(true)
        try {
          const res = await fetch('http://localhost:8000/topProduct/get/',{
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
    <div className="secondCollection mt-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h1 ref={titleRef} className="text-capitalize px-2 text-3xl" style={{
            transform: isInView1 ? "none" : "translateX(-200px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>Best seeling</h1>
          <p ref={titleRef} style={{transform: isInView1 ? "none" : "translateY(10px)",opacity: isInView1 ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}} className="text-capitalize" >top view in this week</p>
        </div>
      </div>
        <div ref={buttonsRef} style={{transform:isInView2 ? "none" : "translateY(30px)",opacity: isInView2 ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="d-flex justify-content-center gap-5 mt-4 px-2">
            <button className="btn" onClick={(e)=>setColorButton(1)} autoFocus>Featured</button>
            <button className="btn" onClick={(e)=>setColorButton(2)}>Top Rated</button>
            <button className="btn" onClick={(e)=>setColorButton(3)}>On Sale</button>
        </div>
        <div className="d-flex gap-2 px-lg-3 px-2 flex-wrap flex-lg-nowrap justify-content-center mt-3">
          <SecondCard/>
          <div className="thirdCardContent d-flex gap-3  flex-wrap justify-between md_ta3i:justify-center py-2">
            {
              !loading ? (
                products.map((item,index)=>(
                  <ThirdCard key={index} id={item.id_product} name={item.name} desc_small={item.desc_small} img={item.img1} price={item.price}/>
                ))
              ) : (
                 <>
                 <CardsSkeleton/>
                 <CardsSkeleton/>
                 <CardsSkeleton/>
                 <CardsSkeleton/>
                 <CardsSkeleton/>
                 <CardsSkeleton/>
                 </>
              )
            }
          </div>
        </div>
    </div>
  )
}
