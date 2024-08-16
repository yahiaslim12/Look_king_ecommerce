'use client'

import { createContext, useState, useEffect, Suspense} from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import { motion } from 'framer-motion'
import colors from "../../styles/colors"
import { throttle } from "lodash"
import { SessionProvider } from "next-auth/react"

export const pathContext = createContext()

export default function GlobalProvider({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursor, setCursor] = useState('default')
  const [path, setPath] = useState(['Home'])
  const [carts, setCarts] = useState([])
  const [favs, setFavs] = useState([])

  const handleCarts = (data) => {
    setCarts(data)
  }
  const handleFavs = (data) => {
    setFavs(data)
  }
  const CHECK = async (id, email) => {
    try {
      const res = await fetch('http://localhost:8000/isInFav/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_product: id, email })
      })
      if (res.ok) {
        const data = await res.json()
        return true
      } else {
        const error = await res.json()
        
        return false
      }
    } catch (error) {
    }
  }
  const variantsOne = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      border: "1px solid var(--one)",
      backgroundColor : colors.three,
      width: "8px",
      height: "8px",
      mixBlendMode : 'difference'
    },
    text: {
      x: position.x - 50,
      y: position.y - 50,
      backgroundColor: colors.three,
      width: "100px",
      height: "100px",
      mixBlendMode: 'difference',
    },
    product: {
      x: position.x - 16,
      y: position.y - 16,
      border: "1px solid var(--one)",
      width: "32px",
      backgroundColor: 'var(--one)',
      height: "32px",
      mixBlendMode: 'difference',
    }
  }

  const addPath = (item) => {
    if (!path.includes(item)) {
      setPath(prev => [...prev, item])
    }
  }

  const removePath = () => {
    if (path.length > 2) {
      const temp = [...path]
      temp.pop()
      setPath(temp)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener('mousemove', onMove)
      return () => {
        window.removeEventListener('mousemove', onMove)
      }
    }
  }, [])

  const textEnter = () => {
    setCursor('text')
  }
  const textLeave = () => {
    setCursor('default')
  }
  const productEnter = () => {
    setCursor('product')
  }
  const productLeave = () => {
    setCursor('default')
  }

  return (
    <SessionProvider>
      <pathContext.Provider value={{ path, addPath, removePath, textEnter, textLeave, productEnter, productLeave, handleCarts, handleFavs, carts, favs, CHECK }}>
          <motion.div
            className="fixed rounded-full"
            style={{ zIndex: '2', pointerEvents: 'none' }}
            variants={variantsOne}
            animate={cursor}
          />
        <Nav />
          {children}
        <Footer />
      </pathContext.Provider>
    </SessionProvider>
  )
}
