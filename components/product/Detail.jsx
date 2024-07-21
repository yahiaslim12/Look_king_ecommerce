'use client'
import { Bottom, Cart, Heart, Heart2, Tags } from "../../svg";
import { useState } from "react";

export default function Detail() {
   const [addWishList,setAddWishList] = useState(false)

  return (
    <div className="detail w-1/2">
        <div className="w-full">
            <h2 className="text-3xl mb-0 font-bold capitalize">Casio watch</h2>
            <p className="mb-0 capitalize text-base pb-8 border-b-2" style={{color : '#484848'}}>casio classic watch</p>
        </div>
        <div className="w-full pt-5 pb-8">
            <h2 className="text-3xl mb-0 font-bold capitalize">2800 DA</h2>
            <p className="mb-0 capitalize text-sm text-green-600">Inclusive of all taxes</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-between" >
                <span className="text-gray-800 text-sm" style={{fontWeight : '500 !important'}}>Select size</span>
                <span className="text-gray-800 text-xs underline hover:text-one" >size guide</span>
            </div>
            <div className="size flex gap-3">
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>39</span></div>
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>40</span></div>
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>41</span></div>
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>42</span></div>
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>43</span></div>
                <div tabIndex={0} className="rounded bg-white py-1.5 px-2 hover:cursor-pointer border-2 border-gray-200"><span>44</span></div>
            </div>
        </div>
        <div className="flex gap-4 mt-5 pb-5 border-b-2 border-gray-200">
            <button className="flex px-2 py-2.5 text-lg bg-one text-white w-1/2 items-center justify-center gap-1 rounded">
                <Cart width={20} height={20} color={'white'}/>
                Add Cart
            </button>
            <button className="flex px-2 py-2.5 text-lg items-center justify-center w-1/2 gap-1 rounded border-2 border-gray-200 hover:border-one hover:text-one" onClick={()=>setAddWishList(!addWishList)}>
                {!addWishList ? <Heart width={20} height={20} color={'black'}/> : <Heart2 color={'red'} width={20} height={20}/>}
                Add Wishlist
            </button>
        </div>
        <div className="mt-4 pb-7 border-b-2 border-gray-200">
            <div className="flex justify-between items-center">
                <h2 className="text-xl mb-0 font-semibold capitalize">Delivery Option</h2>
                <select tabIndex={0} name="" id="" className="border-2 w-1/2 border-gray-200 rounded px-2 py-2 hover:border-2 hover:border-one outline-none focus-within:border-2 focus-within:border-one">
                    <option value="">Choose One</option>
                    <option value="">Yalidin</option>
                    <option value="">Expo Go</option>
                    <option value="">other</option>
                </select>
            </div>
            <p className="text-gray-500 text-xs mb-0 pt-2">please select a delivery option from this propositions</p>
            <p className="mb-3 mt-4 text-sm" style={{color : '#484848'}}>100% Original Products </p> 
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Pay on delivery might be available </p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Easy 14 days returns and exchanges</p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Try & Buy might be available for some products</p>

        </div>
        <div>
            <h2 className="text-xl mb-0 font-semibold capitalize py-6">Product Details</h2>
            <p className="mb-0" style={{color : '#484848',fontSize : '15px'}}>Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.</p>
            <p className="mb-3 mt-4 text-sm" style={{color : '#484848'}}>Available : <span className="text-green-600 font-medium">Yes</span></p> 
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Cushioned footbed : <span className="text-red-600 font-medium">No</span></p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Easy 14 days returns and exchanges</p>
            <p className="mb-3 text-sm" style={{color : '#484848'}}>Warranty: <span className="text-green-600 font-medium">1 Month</span></p>
            <div className="mt-3 flex gap-2 items-center">
                <span className="flex items-center gap-1 font-medium"><Tags width={20} height={20} color={'black'}/> Tags:</span>
                <span className="bg-gray-200 rounded px-3 py-1">Men</span>
                <span className="bg-gray-200 rounded px-3 py-1">Nike</span>
                <span className="bg-gray-200 rounded px-3 py-1">Original</span>
            </div>
        </div>
    </div>
  )
}
