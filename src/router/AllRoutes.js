import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import { Home , Products, PageNotFound} from '../pages/index'
import { Cart,Orders,Login,SignUp } from '../components/index'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='/orders' element ={<Orders/>}/>
        <Route path='*' element={<PageNotFound/> }/>    
    </Routes>)}