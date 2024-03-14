import React, { useEffect, useState } from 'react'
import img from '../booklogo.webp'
import { Link } from 'react-router-dom'
import { VscAccount, VscSearch } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs"
import { FiMoon, FiSun } from "react-icons/fi"
import { Search } from './Search';
import { useCart } from '../context/CartContext';
import { DropdownLoggedIn } from './elements/Dropdown';
import { DropdownLoggedOut } from './elements/DropdownLoggedout';

export const Header = () => {

  const {cartList} =useCart();

  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false)

  const [search ,setsearch] = useState(false);

  const [dropdown,setdropdown] =useState(false)

  const token= JSON.parse(sessionStorage.getItem('token'));

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
    <header className='z-10'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eBookShop</span>
          </Link>
          <div className="flex items-center ">
            <span className='m-2 text-2xl font-semibold dark:text-white' onClick={() =>setisDark(!isDark)}>{isDark ? <FiSun /> : <FiMoon />}</span>
            <span className='m-2 text-2xl font-semibold dark:text-white' onClick={()=>setsearch(!search)}><VscSearch /></span>
            <Link to="/cart" className="text-gray-700 dark:text-white m-2">
              <span className="text-2xl relative"><BsCart2/>
                <span className="text-white text-sm absolute -top-1.5 left-3 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
              </span>
            </Link>
            <span onClick={()=> setdropdown(!dropdown)} className='m-2 text-2xl font-semibold dark:text-white'><VscAccount /></span>
            {dropdown && (token ? <DropdownLoggedIn setdropdown={setdropdown}/>:<DropdownLoggedOut setdropdown={setdropdown}/>)}
          </div>
        </div>
      </nav>
     { search?<Search/>:""}
    </header>
  )
}
