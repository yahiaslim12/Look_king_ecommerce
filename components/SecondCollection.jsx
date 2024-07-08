'use client'
import { useState ,useRef} from "react"
import colors from "../styles/colors"
import SecondCard from "./cards/SecondCard"
import ThirdCard from "./cards/ThirdCard"
import {motion,useInView} from 'framer-motion'
export default function SecondCollection() {
    const [colorButton,setColorButton] = useState(1)
    const titleRef = useRef(null)
    const buttonsRef = useRef(null)
    const isInView1 = useInView(titleRef,{once : true})
    const isInView2 = useInView(buttonsRef,{once : true})
  return (
    <div className="secondCollection mt-4">
        <h1 ref={titleRef} className="text-capitalize px-2 text-center text-3xl" style={{
          transform: isInView1 ? "none" : "translateX(-200px)",
          opacity: isInView1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>Best seeling</h1>
        <p ref={titleRef} style={{transform: isInView1 ? "none" : "translateY(10px)",opacity: isInView1 ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",color: "rgb(162, 162, 162)"}} className="text-capitalize text-center" >top view in this week</p>
        <div ref={buttonsRef} style={{transform:isInView2 ? "none" : "translateY(30px)",opacity: isInView2 ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className="d-flex justify-content-center gap-5 mt-4">
            <button className="btn" onClick={(e)=>setColorButton(1)} autoFocus>Featured</button>
            <button className="btn" onClick={(e)=>setColorButton(2)}>Top Rated</button>
            <button className="btn" onClick={(e)=>setColorButton(3)}>On Sale</button>
        </div>
        <div className="d-flex gap-2 px-lg-3 px-2 flex-wrap flex-md-nowrap justify-content-center mt-4">
          <SecondCard/>
          <div className="thirdCardContent d-flex gap-3 flex-wrap justify-content-center">
            <ThirdCard/>
            <ThirdCard/>
            <ThirdCard/>
            <ThirdCard/>
            <ThirdCard/>
            <ThirdCard/>
          </div>
        </div>
    </div>
  )
}
