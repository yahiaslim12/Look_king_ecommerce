import React from 'react'
import Head from '../../../../components/product/Head'
import Images from '../../../../components/product/Images'
import Detail from '../../../../components/product/Detail'

export default function index({params}) {
    const {id} = params
  return (
    <section className='mt-5 container'>
        <Head id={id}/>
        <main className='mt-3 flex gap-5'>
            <Images/>
            <Detail/>
        </main>
    </section>
  )
}
