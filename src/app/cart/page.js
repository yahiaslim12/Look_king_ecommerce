'use client'
import Card from "../../../components/cart/Card";
import Head from "../../../components/cart/Head";
import Payment from "../../../components/cart/Payment";
import Recommendation from "../../../components/cards/Recommendation";
import { useState,useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { bouncy } from "ldrs";
import { pathContext } from "../../../components/providers/GlobalProvider";
bouncy.register()
export default function Index() {
  const [count,setCount] = useState(0)
  const [total,setTotal] = useState(0)
  const [subTotal,setSubTotal] = useState(0)
  const [tax,setTax] = useState(100)
  const [shipping,setShipping] = useState(300)
  const {handleCarts,carts} = useContext(pathContext)
  const router = useRouter()
  const {data: session, status} = useSession()
  const GET = async ()=>{
    try {
      const res = await fetch("http://localhost:8000/products/getCarts/"+session?.user.email,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
      })
      if(res.ok){
        const data = await res.json()
        handleCarts(data)
      }else{
        throw new Error(`${res.status} - ${res.statusText}`)
      }
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect(()=>{
    if (status === 'loading') return
    if (!session) router.push('/login')
    if(session){
      GET()
    }
  },[session,status])
  useEffect(()=>{
    setCount(carts.length)
    let newSubTotal = 0;
    carts.forEach((item) => {
      newSubTotal += Number(item.price) * Number(item.qte_cart);
    });
    setSubTotal(newSubTotal);
    setTotal(newSubTotal + tax + shipping);
  }, [carts]);
  
  if(status === 'loading'){
    return <div className="flex justify-center items-center gap-2" style={{height : '600px'}}>
        <h1 className="mb-0">Loading<l-bouncy size="20" speed="1.75" color="black" ></l-bouncy></h1>
    </div>
  }
  if(!session){
    return <div className="flex justify-center items-center gap-2" style={{height : '600px'}}>
        <h1 className="mb-0">Loading<l-bouncy size="20" speed="1.75" color="black" ></l-bouncy></h1>
    </div>
  }
  return (
    <section className="mt-5 FavoriteContainer">
        <Head/>
        <div className="mt-4 flex gap-8 flex-wrap flex-lg-nowrap">
            <div className="lg:w-8/12 flex-justify-center items-center w-full flex-col">
                <small className="font-semibold">{count}</small>
                {
                  carts.map((cart)=>(
                    <Card key={cart.id_product} qte_cart={cart.qte_cart} handleCarts = {handleCarts} id={cart.id_product} src = {cart.img1} name = {cart.name} price = {cart.price} small = {cart.desc_small} qte = {cart.qte} size = {cart.size}/>
                  ))
                }
            </div>
            <Payment total = {total} subTotal = {subTotal} tax = {tax} shipping = {shipping}/>
        </div>
        <div className='mt-3'>
            <h3 className='capitalize text-gray-900 text-2xl font-semibold pb-3'>similar products</h3>
            <div className='recommendation flex gap-5 overflow-x-auto'>
                <Recommendation src={'.././images/products/1.webp'}/>
                <Recommendation src={'.././images/products/2.webp'}/>
                <Recommendation src={'.././images/products/3.webp'}/>
                <Recommendation src={'.././images/products/4.webp'}/>
            </div>
        </div>
    </section>
  )
}
