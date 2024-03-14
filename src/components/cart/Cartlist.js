import { Cartcard } from "./Cartcard"
import { useCart } from "../../context/CartContext";


export const Cartlist = () => {

  const{cartList,total} =useCart();

  

  return (
    <>
    <section>
    <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
      My Cart : {cartList.length}
    </p>
    {cartList.map((product)=><Cartcard product={product} key={product.id}/>)}
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
    <p className="text-2xl font-semibold text-right dark:text-slate-100 ">Total:</p>
    <p className="text-xl font-semibold text-right dark:text-slate-100 ">
      ${total}
    </p>

    </div>
    
  </section>

  
  </>
  )
}
