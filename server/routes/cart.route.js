const {Router} =require('express');
const { getAllCartData, addToCart } = require('../controllers/cart.controllers');
const { authentication } = require('../middleware/authentication');


//Creating Router for Cart

const cartRouter = Router();

//Endpoints ------------------


cartRouter.get('/cart',authentication,async(req,res)=>{
    
    try{

        let user = req.user;
        let cartData= await getAllCartData(user);
        res.send({
            data:data
        })

    }catch(err){

        res.status(500).send({
            err:err.message
        })


    }


})


cartRouter.post("/cart",authentication,async(req,res)=>{

    try{

        let user = req.user;
        let cartData= await addToCart(user);
        res.send({
            data:data
        })

    }catch(err){

        res.status(500).send({
            err:err.message
        })


    }


})


// cartRouter.update('/cart/:productId')
