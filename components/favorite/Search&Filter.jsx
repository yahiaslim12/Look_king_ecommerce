import React from 'react'
import { Filter, Search } from '../../svg'

export default function SearchFilter() {
  return (
    <div className='SearchFilter flex justify-between my-3'>
        <div className="Search flex gap-2 px-3 py-1.5 border rounded items-center hover:outline hover:outline-one hover:outline-1">
            <Search width={20} height={20} color="#484848" />
            <input type="text" name="" id="" placeholder="Search..." className="outline-none" />
        </div>
        <div className='d-flex font-bold gap-3 items-center'>
            <small className='text-gray-500'>0</small>
            <button className='d-flex items-center gap-2 btn rounded border text-capitalize text-gray-600 font-semibold'>
                <Filter width={15} height={15} />filter
            </button>
        </div>
    </div>
  )
}
