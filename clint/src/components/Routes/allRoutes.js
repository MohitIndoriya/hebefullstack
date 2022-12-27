import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"



import Home from "../home/home"
import Productpage from "../productpages/Productpage"
import Product from "../Product Page/Product"
import Checkout from "../checkout/checkout"



export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />

        
     
     
      <Route path="/checkout" element={<Checkout/>}/>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/products/:category" element={<Productpage/>}/>
        <Route path="product/:id" element={<Product/>}/>
       
        <Route path="/" element={<Home/>}/>

    </Routes>
  )
}
