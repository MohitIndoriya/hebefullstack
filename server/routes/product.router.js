const express = require('express');
const {getData,getDataByID} = require('../controllers/product.controller');
const productmodel =require( "../database/products.model")
let jwt =require("jsonwebtoken")
const productRouter = express.Router();



productRouter.get('/products', getData);
productRouter.get('/products/:id',getDataByID);
productRouter.post("/products",async (req,res)=>{
    let {token} =req.headers
    
    try {
     let verify= jwt.verify(token ,process.env.Admin_Secret)
     if(verify){
        console.log(verify);
      let data= await  productmodel.create({...req.body})
     return  res.status(201).send(data)
     }else{
      return   res.status(400).send("user not found")
     }
    } catch (error) {
      return   res.status(400).send(error.message)
    }

})

module.exports = productRouter;