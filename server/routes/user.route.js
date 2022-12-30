const express = require('express');
const { checkToken } = require('../miscFunction/CommonFunction');
const { signUp, login } = require('../controllers/user.controller');


const userRouter = express.Router();


userRouter.get('/googleSignin',async(req,res)=>{
    // console.log(req);
    res.send('Login')
})

userRouter.post('/signup',async(req,res)=>{
    let body = req.body;
    try{
        let data =await signUp(body);
        res.send({
            data:data
        })
    }catch(err){
        // console.log(err.message);
        res.status(500).send({
            err:err.message
        })
    }



})

userRouter.post('/login',async(req,res)=>{

    const body = req.body;
    try{
        const token = await login(body);
        res.send({
            token:token
        })
    }
    catch(err){
        res.status(404).send({
            err:err.message
        })
    }
})

userRouter.get('/loggedIn/:token',async(req,res)=>{
    let token = req.params.token;
    try{
        let data= checkToken(token);
        res.send({
            data:data
        })
    }catch(err){
        res.send({
            err:err.message
        })
    }
})




module.exports = userRouter;