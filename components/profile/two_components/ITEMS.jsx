'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {useEffect, useState} from 'react';

export default function ITEMS({ item, tab }) {
  const [products,setProducts] = useState([])
  const {data:session,status} = useSession()
  const router = useRouter()
  const GET = async () => {
    try {
        const res = await fetch('http://localhost:8000/commande/products/'+session.user.email+'/'+item.id_cmd,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        if(!res.ok){
            const error = await res.json()
            throw new Error(`${res.status} - ${error.detail}`)
        }
        const data = await res.json()
        setProducts(data)
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    GET()
  },[])
  return (
    <div
      style={{
        width: '450px',
        height: '230px',
        top: '20%',
        left: '200%',
        transform: 'translate(-50%,-50%)',
        overflowY: 'auto'
      }}
      className="rounded absolute px-3 py-2 bg-white z-50 shadow-lg border border-gray-300"
    >
      <h5 className="mb-0 text-base text-gray-700 font-semibold">Commande {item.id_cmd}</h5>
      <p className="mb-0 text-xs text-gray-500 font-semibold">You have {item.count} items</p>
      <div className="flex mt-3 flex-wrap justify-between gap-y-3.5">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex gap-1 border rounded p-2 hover:cursor-pointer w-[48%] border-gray-300"
            onClick={()=>router.push('/product/'+product.id_product)}
          >
            <img
              src={`.${product.img1}`}
              alt="product images"
              width={40}
              height={40}
              className="rounded object-contain"
            />
            <div>
              <h6 className="mb-0 text-xs text-gray-700 font-semibold">
                {product.name}
              </h6>
              <p className="text-xs text-gray-500">{product.size},{product.qte}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
