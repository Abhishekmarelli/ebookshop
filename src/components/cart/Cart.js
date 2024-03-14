import React from 'react'
import { Cartlist } from './Cartlist'
import { useCart } from "../../context/CartContext";
import { EmptyCart } from './EmptyCart';

export const Cart = () => {
const {cartList} =useCart()
  return (
    <main >
      {cartList.length === 0 ? <EmptyCart/>:<Cartlist/>}
     
    </main>
  )
}
