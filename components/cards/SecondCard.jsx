"use client"
import { Rating } from "@mui/material";
import colors from "../../styles/colors";
import { useInView,useAnimate ,motion} from "framer-motion";
import { useEffect ,useContext} from "react";
import { pathContext } from "../providers/GlobalProvider";
export default function SecondCard() {
  const {productEnter,productLeave} = useContext(pathContext)
  const [reference,animate] = useAnimate()
  const isInView = useInView(reference)
  useEffect(()=>{
      if(isInView){
        animate(reference.current,{transform : 'scale(1)'})
        animate(reference.current,{transition : '1s'})
      }else{
        animate(reference.current,{transform : 'scale(0.5)'})
      }
  },[isInView])
  return (
    <div className="secondCard hover:border rounded p-2 bg-white" ref={reference} onMouseEnter={productEnter} onMouseLeave={productLeave}>
      <div>
      <img loading="lazy" src="./images/T-shirt/nike3.webp" className="rounded" alt="" />
        <div className="d-flex justify-content-between mt-2">
           <h6 className="productName">Tshirt Nike black</h6>
           <Rating className="productRating"value={5} readOnly/>
        </div>
            <div>
                <p className="productDesc" style={{color: "rgb(162, 162, 162)"}}>This Tshirt have a good quality</p>
                <p className="productPrice text-uppercase" style={{color : colors.one}}>2800 da</p>
            </div>
      </div>
        
    </div>
  )
}
