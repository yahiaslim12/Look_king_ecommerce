"use client"
import FirstCard from "./cards/FirstCard";
import {motion,useInView,useAnimate, animate} from 'framer-motion'
import { useRef ,useEffect} from "react";
export default function FirstCollection() {
  const [scop,animate] = useAnimate()
  const variants = {
    hidden : {opacity : 0,y:75},
    visible : {opacity : 1,y:0}
  }
  const titleRef = useRef(null)
  const isInView = useInView(titleRef,{once : true})
 
 
  return (
    <div ref={scop} className="firstCollection mt-4 container ">
      <h1 style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          
        }} ref={titleRef}  className="text-capitalize text-center px-2 text-3xl">Products Recommended for You</h1>
      <p className="text-center text-capitalize" style={{transform: isInView ? "none" : "translateY(10px)",opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}}>This section features products you might be interested in.</p>
      <div className="d-flex gap-3 gap-md-5 mx-2 flex-wrap  justify-content-center mt-4">
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
        <FirstCard/>
      </div>
      <div className="d-flex justify-content-center">
        <button className="text-uppercase px-2 rounded btn">see more</button>
      </div>
    </div>
  )
}
