'use client'
import { useEffect, useState } from 'react'
import { Etoile ,Errors,Success} from '../../svg'
import { Rating } from '@mui/material'
import { lineSpinner } from 'ldrs'
import colors from '../../styles/colors'
import { useSession } from 'next-auth/react'
lineSpinner.register()
export default function Images({id,img1,img2,img3,img4,handleRating,isBuy,ADD_RATING,counts,handleCounts}) {
  const {data: session,status} = useSession()
  const [isLoading,setIsLoading] = useState({one : true,two : true,three : true, four : true})
  const [rating,setRating] = useState(0)
  const [alert,setAlert] = useState({
    open : false,
    message : '',
    type: ''
 })
  const handleADD_RATING = async()=>{
    const result = await ADD_RATING(id,session.user.email,rating)
    if(result[0]){
      setAlert({ open: true, message: result[1], type: 'success' });
      setTimeout(() => {
          setAlert({ open: false, message: '', type: '' });
        }, 3000);
    }else{
      setAlert({ open: true, message: result[1], type: 'error' });
          setTimeout(() => {
              setAlert({ open: false, message: '', type: '' });
            }, 3000);
    }
}
  useEffect(()=>{
      if(id && session){   
          handleRating(id,session.user.email)
      }
    },[session,id])
  useEffect(()=>{
    if(img1 && img1.includes('/')) setIsLoading(prev => ({...prev,one : false}))
    if(img2 && img2.includes('/')) setIsLoading(prev => ({...prev,two : false}))
    if(img3 && img3.includes('/')) setIsLoading(prev => ({...prev,three : false}))
    if(img4 && img4.includes('/')) setIsLoading(prev => ({...prev,four : false}))
  },[img1,img2,img3,img4])
  useEffect(()=>{
    handleCounts(id)
  },[])
  return (
    <div className='images lg:w-1/2 w-full'>
         {
                alert.open && (
                    <div style={{transform : 'translate(-50%,-50%)'}} className={`w-11/12 sm:w-6/12 md:w-auto rounded ${alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex gap-3 items-center fixed top-32 left-1/2 px-3 py-3 text-white z-50`}>
                        {alert.type !== 'error' ?  <Success width={20} height={20} color={'white'}/> : <Errors  width={20} height={20} color={'white'}/>} 
                        <span>{alert.message}</span>
                    </div>
                )
        }
        <div className='w-full flex justify-between gap-3 flex-col'>
            <div className='flex gap-3 w-full'>
                {!isLoading.one ? <img src={`../.${img1}`} alt="image 1"  className='rounded'/> : <div style={{width : 'calc(50% - .5rem)'}} className='h-40 flex justify-center items-center'><l-line-spinner size="40" stroke="3" speed="1"  color="black" ></l-line-spinner></div>}
                {!isLoading.two ? <img src={`../.${img2}`} alt="image 2"  className='rounded'/> : <div style={{width : 'calc(50% - .5rem)'}} className='h-40 flex justify-center items-center'><l-line-spinner size="40" stroke="3" speed="1"  color="black" ></l-line-spinner></div>}
            </div>
            <div className='w-full flex gap-3'>
            {!isLoading.three ? <img src={`../.${img3}`} alt="image 3"  className='rounded'/> : <div style={{width : 'calc(50% - .5rem)'}} className='h-40 flex justify-center items-center'><l-line-spinner size="40" stroke="3" speed="1"  color="black" ></l-line-spinner></div>}
            {!isLoading.four ? <img src={`../.${img4}`} alt="image 4"  className='rounded'/> :  <div style={{width : 'calc(50% - .5rem)'}} className='h-40 flex justify-center items-center'><l-line-spinner size="40" stroke="3" speed="1"  color="black" ></l-line-spinner></div>}
            </div>
        </div>
        <div className='mt-3 hidden lg:block'>
            <h2 className="text-xl mb-0 font-semibold capitalize py-6">Ratings & Reviews</h2>
            <h1 className='text-5xl mb-0 mt-3 text-gray-900 font-bold'>{counts.value}</h1>
            <p className='text-gray-600 text-sm mt-2'>{counts.value} Verified Buyers</p>
            <div className='w-full flex items-center gap-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>5 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div style={{width: `${(counts.five/counts.countALL)*100}%`}} className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>{counts.five}</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>4 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div style={{width: `${(counts.four/counts.countALL)*100}%`}} className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>{counts.four}</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>3 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div style={{width: `${(counts.three/counts.countALL)*100}%`}} className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>{counts.three}</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3'>
                <span className='flex text-sm items-center gap-1 font-semibold'>2 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div style={{width: `${(counts.two/counts.countALL)*100}%`}} className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>{counts.two}</span>
            </div>
            <div className='w-full flex items-center gap-3 mt-3 pb-5 border-b-2 border-gray-200'>
                <span className='flex text-sm items-center gap-1 font-semibold'>1 <Etoile width={15} height={15} color={'orange'}/></span>
                <div className='h-1 w-1/3 bg-blue-300 relative rounded'>
                    <div style={{width: `${(counts.one/counts.countALL)*100}%`}} className='h-1 bg-blue-500 absolute top-0 left-0 rounded'>

                    </div>
                </div>
                <span className='text-sm' style={{color :'#484848'}}>{counts.one}</span>
            </div>
            <div className='flex flex-col justify-center py-3'>
                <h2 className="text-xl mb-0 font-semibold capitalize">Add Ratings</h2>
                <p className='text-sm mb-0 text-gray-500'>You must buy this product before add a rating</p>
                <div className='flex gap-3 items-center mt-3'>
                <Rating value={rating} onChange={(e)=>setRating(e.target.value)}/> 
                   {isBuy ? (
                     <button onClick={handleADD_RATING} className="text-white font-medium rounded px-4 py-2 bg-blue-500">
                        ADD RATING
                     </button>
                   ):
                   (
                    <div className="text-white font-medium rounded px-4 py-2 bg-blue-200 cursor-not-allowed">
                        ADD RATING
                    </div>
                   )}
                </div>
            </div>
        </div>
    </div>
  )
}
