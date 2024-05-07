import { ProductCard } from "../../components/ProductCard"
import { useState,useEffect } from "react";


export const FeaturedeBooks = () => {

  const [books, setbooks] = useState([]);
 
  useEffect(() => {
    const fetchfeaturedbooks = async()=>{
      const respones = await fetch("http://localhost:8000/featured_products")
      const data = await respones.json();
      setbooks(data)
    } 
    fetchfeaturedbooks()
  },[]);
  return (
    <section className="my-20">
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8'>FeaturedeBooks</h1>
    <div className="flex flex-wrap justify-center lg:flex-row">
      {books.map((book)=><ProductCard product={book} key={book.id}/>)}
    </div>
    </section>
  )
}
