import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import { Home , Products, PageNotFound,ProductDetails} from '../pages/index'
import { Cart,Orders,Login,SignUp } from '../components/index'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<ProtectedRoutes><Cart/></ProtectedRoutes>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='/orders' element ={<ProtectedRoutes><Orders/></ProtectedRoutes>}/>
        <Route path='*' element={<PageNotFound/> }/>    
    </Routes>)}