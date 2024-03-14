import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { ProductCard } from '../../components/ProductCard';
import { Filter } from './Filter';
import { useEffect } from 'react';
import { useFillter } from '../../context/FilterContext';

export const Products = () => {
  const {productlist ,intialproducts} =useFillter();
  const [show ,setshow] = useState(false)


  useEffect(()=>{
    const fetchproduct =async()=>{
    const respones = await fetch('http://localhost:8000/products')
    const data = await respones.json();
    intialproducts(data)
 }
  
  fetchproduct();
  }
  ,[])
  return (
    <main>
      <section className="dark:bg-gray-800">
        <div className="p-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks:({productlist.length})</span>
          <span>
            <button onClick={()=> setshow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <BsThreeDotsVertical />
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productlist.map((product)=> (<ProductCard product={product} key={product.id} />))}
        </div>
        <div>
        <Filter show={show } set={setshow}/>
        </div>
      </section>
     
    </main>
  )
}
