import { ProductCard } from "../../components/ProductCard"
import { useState,useEffect } from "react";


export const FeaturedeBooks = () => {

  const featured_products = [
    {
      "id": 10004,
      "name": "The Complete Guide to Backend Development",
      "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
      "price": 99,
      "poster": "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10004.avif",
      "rating": 5,
      "in_stock": true,
      "size": 7,
      "best_seller": true
    },
    {
      "id": 10006,
      "name": "Frontend Fastlane Plan With Projects",
      "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
      "price": 99,
      "poster": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10006.avif",
      "rating": 5,
      "in_stock": true,
      "size": 10,
      "best_seller": false
    },
    {
      "id": 10008,
      "name": "JavaScript Basics To Advance With Shubham",
      "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
      "price": 29,
      "poster": "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      "image_local": "/assets/images/10008.avif",
      "rating": 5,
      "in_stock": true,
      "size": 3,
      "best_seller": true
    }
  ]

  const [books, setbooks] = useState([]);
 
 
  try {
  useEffect(() => {
    const fetchfeaturedbooks = async()=>{
      const respones = await fetch("http://localhost:8000/featured_products")
      if(respones){
      const data = await respones.json();
      setbooks(data)
      }
      else{
        setbooks(featured_products);
      }
    } 
    fetchfeaturedbooks()
  });
  }
  catch (error) {

    console.log(error)
    
}
 

  return (

    <section className="my-20">
        <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8'>FeaturedeBooks</h1>
    <div className="flex flex-wrap justify-center lg:flex-row">
      {books.map((book)=><ProductCard product={book} key={book.id}/>)}
    </div>
    </section>
  )
}
