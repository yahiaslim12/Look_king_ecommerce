'use client'

import { useContext} from "react"
import { pathContext } from "../providers/GlobalProvider"

export default function Head({login , handleLogin}) {
  const {textEnter,textLeave} = useContext(pathContext)
  return (
    <div className="flex justify-center flex-col items-center mt-20">
      <div className="flex justify-center items-center flex-col" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <h1 className="text-capitalize mb-0 text-4xl font-bold">
            {login ? 'Welcom back' : 'Create Account'}
        </h1>
        <p className="mb-0" style={{color : "#64748b"}}>{login ?'Don’t have an account yet?' : "Sign up now and get free account instant."} <button className="text-one" onClick={()=>handleLogin()}>{login ?'Register here' : 'Login'}</button></p>
      </div>
    </div>
  )
}
