const {Router} = require('express');
const { postOrder, getAllOrder } = require('../controllers/order.controllers');
const { authentication } = require('../middleware/authentication');


const orderRouter = Router();


orderRouter.post('/order',authentication,async(req,res)=>{

    try{
        const user = req.user;
        const body = req.body;
        const postData = await postOrder(user,body);

        res.send({
            data:postData
        })




    }catch(err){
        res.send({
            err:err.message
        })
    }



})

orderRouter.get('/order',async(req,res)=>{

    try{

        const data = await getAllOrder();
        res.send({
            data:data
        })

    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }


})



module.exports={orderRouter}