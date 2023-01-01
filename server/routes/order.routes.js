const {Router} = require('express');
const { postOrder } = require('../controllers/order.controllers');
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

module.exports={orderRouter}