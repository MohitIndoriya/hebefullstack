import {Routes,Route} from "react-router-dom"
import React from 'react'
import Signup from "../login/Signup"
import Login from "../login/login"
import { Cart } from "../cart/cart"



import Home from "../home/home"
import Productpage from "../productpages/Productpage"
import Product from "../Product Page/Product"
// import Checkout from "../checkout/checkout"
import Address from "../Address/Address"
import Payment from "../Payment/Payment"
import AdminLogin from "../admin/adminlogin"
import Dashboard from "../admin/adminDashboard"
import NewProduct from "../admin/adminProduct"
import Orders from "../admin/adminOrder"



export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/createAccount" element={<Signup/>} />

        
     
     
      {/* <Route path="/checkout" element={<Checkout/>}/> */}

        <Route path="/Login" element={<Login/>}/>
        <Route path="/products/:category" element={<Productpage/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/product" element={<NewProduct/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        <Route path="/" element={<Home/>}/>

    </Routes>
  )
}
