'use client'

import { useContext, useEffect } from "react"
import { pathContext } from "./providers/GlobalProvider"
export default function Paths() {
  const {path,addPath,removePath} = useContext(pathContext)
  
  return (
    <div className="flex gap-1 items-center">
        {path.map((item)=>(
            <>
            <p className="mb-0 text-gray-500">{item}</p>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </>
        ))}
    </div>
  )
}
