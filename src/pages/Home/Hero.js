import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row item-center dark:text-slate-100 p-5 '>
      <div className=' my-5'>
        <h1 className="text-5xl font-bold">The EbookShop</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">CodeBook is the world's most popular and authoritative source for computer science ebooks.
          Find ratings and access to the newest books digitally.</p>
        <Link to="/products" type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-6'>Explore Ebooks</Link>

      </div>
      <div className='my-5 lg:max-w-xl'>
        <img className="rounded-lg max-h-full" src='../../assests/hero.avif' alt='hero img' />
      </div>

    </div>
  )
}
