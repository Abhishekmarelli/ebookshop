import React, { useEffect, useState } from 'react'
import img from '../booklogo.webp'
import { Link} from 'react-router-dom'
import { VscAccount, VscSearch } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs"
import { FiMoon, FiSun } from "react-icons/fi"

export const Header = () => {

  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false)


  useEffect(() => {

    localStorage.setItem("isDark", JSON.stringify(isDark))

    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark]);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eBookShop</span>
          </Link>
          <div className="flex items-center ">
            <span className='m-2 text-2xl font-semibold dark:text-white' onClick={() => setisDark(!isDark)}>{isDark ? <FiSun /> : <FiMoon />}</span>
            <span className='m-2 text-2xl font-semibold dark:text-white'><VscSearch /></span>
            <span className='m-2 text-2xl font-semibold dark:text-white'><BsCart2 /></span>
            <span className='m-2 text-2xl font-semibold dark:text-white'><VscAccount /></span>
          </div>
        </div>
      </nav>
    </header>
  )
}
