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
      let data= await  productmodel.create({...req.body})
      req.status(201).send(data)
     }else{
        res.status(400).send("user not found")
     }
    } catch (error) {
        res.status(400).send("inavlid input")
    }

})

module.exports = productRouter;