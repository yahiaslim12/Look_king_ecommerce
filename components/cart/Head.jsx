'use client'
import { useContext } from "react";
import Paths from "../Paths";
import { pathContext } from "../providers/GlobalProvider";

export default function Head() {
  const {path,addPath,removePath,textEnter,textLeave} = useContext(pathContext)
  return (
    <div className="flex items-center">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 className="sm:text-4xl text-2xl font-bold">Cart</h1>
            <Paths/>
        </div>
    </div>
  )
}
