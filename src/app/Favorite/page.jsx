'use client'
import SearchFilter from "../../../components/favorite/Search&Filter"
import Table from "../../../components/favorite/Table"
import Paths from "../../../components/Paths"
import { pathContext } from "../../../components/providers/GlobalProvider"
import colors from "../../../styles/colors"
import { useContext, useState } from "react"
export default function Favorite() {
  const {textEnter,textLeave} = useContext(pathContext)
  return (
    <section className='FavoriteContainer mt-5'>
       <div className="flex justify-start">
        <h1 className='text-capitalize fw-bold md:text-4xl text-xl' onMouseEnter={textEnter} onMouseLeave={textLeave}>my favorite products</h1>
       </div>
       <Paths/>
       <SearchFilter/>
       <div className="table_container">
         <Table/>
       </div>
    </section>
  )
}
