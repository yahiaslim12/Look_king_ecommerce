'use client'
import SearchFilter from "../../../components/favorite/Search&Filter"
import Table from "../../../components/favorite/Table"
import Paths from "../../../components/Paths"
import { pathContext } from "../../../components/providers/GlobalProvider"
import colors from "../../../styles/colors"
import { useContext, useEffect } from "react"

export default function Favorite() {
  const { textEnter, textLeave, path, addPath, removePath } = useContext(pathContext)

  useEffect(() => {
    console.log('Favorite component mounted')
    if (!path.includes('favorite')) {
      addPath('favorite')
      console.log('Added favorite to path')
    } else {
      console.log('Favorite already in path')
    }
    return () => {
      console.log('Favorite component unmounted')
    }
  }, [])

  return (
    <section className='FavoriteContainer mt-5'>
      <div className="flex justify-start">
        <h1 className='text-capitalize fw-bold md:text-4xl text-xl' onMouseEnter={textEnter} onMouseLeave={textLeave}>
          my favorite products
        </h1>
      </div>
      <Paths />
      <SearchFilter />
      <div className="table_container">
        <Table />
      </div>
    </section>
  )
}
