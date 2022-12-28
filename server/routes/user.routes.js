const express=require("express");
const User = require("../model/user.model");
let jwt=require("jsonwebtoken")
let argon2=require("argon2")
const app=express.Router();
app.post("/signup",async(req,res)=>{
    let {email,password,name}=req.body;
console.log("yes")
    try {
        password=await argon2.hash(password)
        let ip=req.socket.remoteAddress;
       let data=await User.create({email,password,name,ip})
       return res.status(201).send(data)
    } catch (errr) {
        res.status(400).send(errr.message)
    }
})
app.post("/login",async(req,res)=>{
    let {email,password}=req.body
    console.log(email)
try{

    let user=await User.findOne({email})

    if(user){
      let varifieduser=  await argon2.verify(user.password, password)
    if(varifieduser){
        let token=jwt.sign({id:user._id,email:user.email,role:user.role},process.env.secret)
        
      
       res.status(200).send(token)
    
        
    }else{
        return res.status(404).send("Invalid credentials")
    }
    
    }else{
        return res.status(404).send("user not found")
    }

}catch(e){
   
    res.status(401).send(e.message)
}
})
module.exports=app