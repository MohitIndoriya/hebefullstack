const {Router} =require('express');
const { getAllCartData, addToCart, updateCart, deleteCartProduct } = require('../controllers/cart.controllers');
const { authentication } = require('../middleware/authentication');


//Creating Router for Cart

const cartRouter = Router();

//Endpoints ------------------


cartRouter.get('/cart',authentication,async(req,res)=>{
    
    try{

        const user = req.user;
        const cartData= await getAllCartData(user);
        res.send({
            data:cartData
        })

    }catch(err){

        res.status(500).send({
            err:err.message
        })


    }


})


cartRouter.post("/cart",authentication,async(req,res)=>{

    try{

        const user = req.user;
        const body = req.body;
        const cartData= await addToCart(body,user);
        res.send({
            data:cartData
        })

    }catch(err){

        res.status(500).send({
            err:err.message
        })


    }


})



cartRouter.patch('/cart/:productId',authentication,async(req,res)=>{

    try{

        const productId= req.params.productId;
        const body = req.body;
        const user = req.user;
        
        const cartData= await updateCart(body,user,productId);
        res.send({
            data:cartData
        })


    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }


})


cartRouter.delete('/cart/:productId',authentication,async(req,res)=>{

    try{

        const productId= req.params.productId;
        const user = req.user;
        const cartData= await deleteCartProduct(user,productId);
        res.send({
            data:cartData
        })


    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }


})


module.exports ={cartRouter}