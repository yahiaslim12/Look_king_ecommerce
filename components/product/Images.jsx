import React from 'react'
import { Etoile } from '../../svg'
import { Rating } from '@mui/material'

export default function Images() {
  return (
    <div className='w-1/2'>
        <div className='w-full flex gap-3 flex-wrap'>
            <img src={'.././images/products/1.webp'} alt="" width={300} height={300} className='rounded'/>
            <img src={'.././images/products/2.webp'} alt="" width={300} height={300} className='rounded'/>
            <img src={'.././images/products/3.webp'} alt="" width={300} height={300} className='rounded'/>
            <img src={'.././images/products/4.webp'} alt="" width={300} height={300} className='rounded'/>
        </div>
        <div className='mt-3'>
            <h2 className="text-xl mb-0 font-semibold capitalize py-6">Ratings & Reviews</h2>
            <h1 className='text-5xl mb-0 mt-3 text-gray-900 font-bold'>4.1</h1>
            <p className='text-gray-600 text-sm mt-2'>12 Verified Buyers</p>
            <div className='w-full flex items-center gap-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>5 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-1/3 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>4</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>4 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-2/3 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>4</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>3 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>0</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>2 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>0</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3 pb-5 border-b-2 border-gray-200'>
                <span className='flex text-sm items-center gap-1 font-semibold'>1 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div className='h-1 w-8/12 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>10</span>
            </div>
            <div className='flex flex-col justify-center py-3'>
                <h2 className="text-xl mb-0 font-semibold capitalize">Add Ratings</h2>
                <p className='text-sm mb-0 text-gray-500'>You must buy this product before add a rating</p>
                <div className='flex gap-3 items-center mt-3'>
                    <Rating/> 
                    <button className='bg-one rounded px-4 py-2 text-white font-medium'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}
