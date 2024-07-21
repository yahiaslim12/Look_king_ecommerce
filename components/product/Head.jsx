'use client'

import { useContext } from "react"
import { pathContext } from "../providers/GlobalProvider"
import Paths from "../Paths"

export default function Head({id}) {
  const {textEnter,textLeave} = useContext(pathContext)
  return (
     <div className="flex items-center">
        <div className="flex flex-col justify-center w-auto" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 className="text-capitalize mb-0 sm:text-4xl text-2xl font-bold">Product {id}</h1>
            <Paths/>
        </div> 
     </div>
  )
}
