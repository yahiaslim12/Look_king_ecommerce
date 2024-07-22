import { Skeleton } from '@mui/material'
import {motion} from 'framer-motion'
export default function CardsSkeleton() {
  return (
    <div className='card_skeleton'>
        <Skeleton animation = {'wave'} width={"100%"} height={200} variant='rectangle' className='rounded'/>
        <Skeleton animation = {'wave'} width={'40%'} height={20} variant='text' className='mt-3'/>
        <Skeleton animation = {'wave'} width={'100%'} height={15} variant='text'/>
        <Skeleton animation = {'wave'} width={"20%"} height={30} variant='text'/>
    </div>
  )
}
