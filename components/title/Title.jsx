'use client'
import { useState } from "react"

export default function Title({text,children}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="relative flex flex-col items-center group z-20">
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children}
        </div>
        {isVisible && (
          <div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md">
            {text}
          </div>
        )}
      </div>
    );
}
