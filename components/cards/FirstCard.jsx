"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating , Box } from '@mui/material';
import { useState } from 'react';
import colors from '../../styles/colors';

export default function FirstCard() {
  const [value,setValue] = useState(1)
  const [heart,setHeart] = useState(false)
  const [status,setStatus] = useState('new')
  return (
    <div className="firstCard p-1">
      <span className='rounded px-2 py-1 text-uppercase' style={{backgroundColor : status === 'new' ? '#28a745' : '#dc3545' }}>{status}</span>
        <img src="./images/T-shirt/nike1.webp" alt="" />
        <div className='d-flex justify-content-between'>
        <div className='pt-2'>
          <h6 className='productName'>Product Name</h6>
          <p className="productStatus text-capitalize">This T-shirt have a good quality</p>
          <p className='productPrice' style={{color : colors.one}}>2800 DA</p>
        </div>
       {
        heart ? <FavoriteIcon className='pt-2' style={{color: 'red'}} onClick= {()=>setHeart(false)}/> : <FavoriteBorderIcon className='pt-2' onClick = {()=> setHeart(true)}/>
       }
       </div>
        
    </div>
  )
}
