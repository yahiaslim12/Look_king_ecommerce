import React from 'react'

export default function Payment({total,subTotal,shipping,tax}) {
  return (
    <div className='lg:w-4/12 w-full '>
        <h1 style={{fontWeight : '500 !important'}} className='text-gray-700 font-medium mb-0 pb-3 border-bottom w-100 text-xl'>Cart Totals</h1>
        <ul className='pl-0'>
            <li className='d-flex justify-between items-center mt-4'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Sub total</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{subTotal} DA</span>
            </li>
            <li className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Tax</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{tax} DA</span>
            </li>
            <li className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Shipping</h6>
               <span className='text-sm' style={{fontWeight : '500 !important'}}>{shipping} DA</span>
            </li>
        </ul>
        <h6 className='mb-0 text-sm' style={{color : '#484848'}}>Do you have a code promo</h6>
        <div className='d-flex w-100 gap-3 mt-2 pb-3 border-bottom'>
            <input type="text" name="" id="" placeholder='xyz' className='px-2 py-1 border rounded w-10/12'/>
            <button className='font-semibold text-white rounded bg-one px-2 py-1 w-2/12'>Add</button>
        </div>
        <div className='d-flex justify-between items-center mt-2'>
               <h6 className='mb-0 text-base'>Total</h6>
               <span className='text-base font-semibold' style={{fontWeight : '500 !important'}}>{total} DA</span>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <button className='text-capitalize rounded-pill bg-one text-white font-semibold px-2 py-2.5 w-100'>
                Proceed to checkout
            </button>
        </div>
    </div>

  )
}
