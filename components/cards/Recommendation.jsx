import React from 'react'

export default function Recommendation({src}) {
  return (
    <div>
        <img src={src} className='rounded' style={{width : '100%'}}/>
        <h6 className='capitalize text-sm lg:text-base mb-0 text-gray-900 pt-3 font-bold'>Casio Watch</h6>
        <p className='mb-0 text-sm lg:text-base' style={{color : '#484848'}}>This is the part of small description</p>
        <span className='font-semibold'>2800 DA</span>
        <div className='flex gap-2 items-center'>
            <span className='bg-gray-200 px-1 py-0.5 text-sm sm:text-base sm:px-1.5 font-medium sm:py-1 rounded'>39</span>
            <span className='bg-gray-200 px-1 py-0.5 text-sm sm:text-base sm:px-1.5 font-medium sm:py-1 rounded'>40</span>
            <span className='bg-gray-200 px-1 py-0.5 text-sm sm:text-base sm:px-1.5 font-medium sm:py-1 rounded'>41</span>
            <span className='bg-gray-200 px-1 py-0.5 text-sm sm:text-base sm:px-1.5 font-medium sm:py-1 rounded'>42</span>
            <span className='bg-gray-200 px-1 py-0.5 text-sm sm:text-base sm:px-1.5 font-medium sm:py-1 rounded'>43</span>
        </div>
        <span className='text-gray-500 text-xs'>5 Size avaible</span>
    </div>
  )
}
