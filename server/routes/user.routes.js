const express=require("express");
const User = require("../database/user");
let jwt=require("jsonwebtoken")
let argon2=require("argon2")
const app=express.Router();
app.post("/signup",async(req,res)=>{
    let {email,password,firstName,lastName,contact}=req.body;
console.log("yes")
console.log(req.body);
    try {
        password=await argon2.hash(password)
        
       let data=await User.create({email,password,firstName,contact,lastName})
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
        let token=jwt.sign({id:user._id,email:user.email},process.env.secret)
        
      
     // localStorage.setItem("token",token)
       return  res.status(200).send(token)
    
        
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