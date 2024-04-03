'use client'

import { useEffect, useState } from "react"

const Navbar = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient && <header className="w-full absolute z-10 border-solid-black">
        <nav className="max-w-[50vw] mx-auto flex justify-between items-center sm:px-16 px-6 border-solid-black">
          hellooo ghihihth
        </nav>
      </header>}
    </div>


  )
}

export default Navbar
