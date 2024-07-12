"use client"
import FirstCard from "./cards/FirstCard";
import { useInView ,useAnimate} from "framer-motion";
import { useContext, useRef } from "react";
import { pathContext } from "./providers/GlobalProvider";
export default function LastCollection() {
    const titleRef = useRef(null)
    const isInView = useInView(titleRef,{once : true})
    const {textEnter,textLeave} = useContext(pathContext)
  return (
      <div className="LastCollection mt-4">
          <div className="title" onMouseEnter={textEnter} onMouseLeave={textLeave}>
               <h1 ref={titleRef} style={{transform: isInView ? "none" : "translateX(-200px)",opacity: isInView ? 1 : 0,transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className="text-center text-capitalize text-3xl">Other Product</h1>
               <p style={{transform: isInView ? "none" : "translateY(10px)",opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}} className="text-center text-capitalize">Show this product probably you like it</p>
          </div>
          <div className="cardContent px-2 d-flex gap-3 gap-md-5 flex-wrap justify-content-center mt-4">
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
              <FirstCard/>
             
          </div>
      </div>
  )
}
