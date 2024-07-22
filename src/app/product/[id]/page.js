'use client'
import {useEffect, useState}from 'react'
import Head from '../../../../components/product/Head'
import Images from '../../../../components/product/Images'
import Detail from '../../../../components/product/Detail'
import FirstCollection from '../../../../components/FirstCollection'
import FirstCard from '../../../../components/cards/FirstCard'
import Recommendation from '../../../../components/cards/Recommendation'

export default function index({params}) {
  const {id} = params
  const [product,setProduct] = useState({})
  const [sizes,setSizes] = useState([{}])
  const [loading,setLoading] = useState(false)

  const GET = async () => {
    try {
        setLoading(true)
        const res = await fetch('http://localhost:8000/products/'+id,{method : 'GET',headers : {'Content-Type' : 'application/json'}})
        if(res.ok){
            const data = await res.json()
            console.log(data);
            setProduct(data)
        }else{
            throw new Error(`Error ${res.status} - ${res.statusText}`)
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false)
    }
  }
  const GET_SIZE = async ()=>{
    try {
        setLoading(true)
        const res = await fetch('http://localhost:8000/products/'+id+'/size',{method : 'GET',headers : {'Content-Type' : 'application/json'}})
        if(res.ok){
            const data = await res.json()
            console.log(data);
            setSizes(data)
        }else{
            throw new Error(`Error ${res.status} - ${res.statusText}`)
        }
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    GET()
    GET_SIZE()
  },[])
  return (
    <section className='product mt-5 container'>
        <Head id={id}/>
        <main className='mt-3 flex gap-5 flex-wrap flex-lg-nowrap'>
            <Images img1={product.img1} img2={product.img2} img3={product.img3} img4={product.img4}/>
            <Detail name = {product.name} small = {product.desc_small} big = {product.desc_big} price = {product.price} category = {product.category} qte = {product.qte} sizes={sizes}/>
        </main>
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
