'use client'
import { Rating } from "@mui/material";
import colors from "../../styles/colors";
import { useContext } from "react";
import { pathContext } from "../providers/GlobalProvider";
import { useRouter } from "next/navigation";

export default function CategoryCard({id,name,category,price,img,rating}) {
   const {productEnter,productLeave} = useContext(pathContext)
   const router = useRouter()
  return (
   <div onClick={()=>router.push('/product/'+id)} className="categoryCardContent rounded p-2" onMouseEnter={productEnter} onMouseLeave={productLeave}>
      <img className="rounded" src={"."+img} alt="" />
         <small className="categoryName text-capitalize d-block my-2" style={{color : 'rgb(162, 162, 162)'}}><b>{category}</b></small>
         <h6 className="productName text-capitalize fw-bold">{name}</h6>
         <Rating value={rating} readOnly style={{fontSize : '18px'}}/>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
         <p className="productPrice text-uppercase" style={{marginBottom : "0"}}><b>{price} da</b></p>
         <button className="btn text-capitalize d-flex align-items-center" style={{backgroundColor : colors.one , color : colors.three}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg> add</button>
      </div>
   </div>
  )
}
