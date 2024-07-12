'use client'

import { createContext, useState, useEffect } from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import { motion } from 'framer-motion'
import colors from "../../styles/colors"
import { throttle } from "lodash"

export const pathContext = createContext()

export default function GlobalProvider({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursor, setCursor] = useState('default')
  const [path, setPath] = useState(['Home'])

  const variantsOne = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      border: "1px solid var(--one)",
      width: "16px",
      height: "16px",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    text: {
      x: position.x - 50,
      y: position.y - 50,
      backgroundColor: colors.three,
      width: "100px",
      height: "100px",
      mixBlendMode: 'difference',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    product: {
      x: position.x - 8,
      y: position.y - 8,
      border: "1px solid var(--one)",
      width: "16px",
      backgroundColor : 'var(--one)',
      height: "16px",
      mixBlendMode: 'difference',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }
  }

  const addPath = (item) => {
    if (!path.includes(item)) {
      setPath(prev => [...prev, item])
    }
  }

  const removePath = () => {
    const temp = [...path]
    temp.pop()
    setPath(temp)
  }

  useEffect(() => {
    const onMove = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }, 2) // Adjust the throttling interval as needed

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
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

  useEffect(() => {
    console.log('Cursor state:', cursor)
  }, [cursor])

  return (
    <pathContext.Provider value={{ path, addPath, removePath, textEnter, textLeave, productEnter, productLeave }}>
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
  )
}
