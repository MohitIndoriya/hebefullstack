const express=require("express");
const User = require("../database/user");
let jwt=require("jsonwebtoken")
let argon2=require("argon2");
const { checkToken } = require("../miscFunction/CommonFunction");
const app=express.Router();
app.post("/signup",async(req,res)=>{
    let {email,password,firstName,lastName,contact}=req.body;
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

app.get('/loggedIn/:token',async(req,res)=>{
    let token = req.params.token;
    try{
        let data= await checkToken(token);
        res.send({
            data:data
        })
    }catch(err){
        res.send({
            err:err.message
        })
    }
})
app.post("/admin/login",(req,res)=>{
let {email,password}=req.body
try {
    if(email==process.env.Admin_email && password==process.env.Admin_password){
        let token=jwt.sign({"role":"admin"},process.env.Admin_secret)
  return   res.status(200).send(token)
} else{
return res.status(400).send("wrong credential")
}
}catch (error) {
   return  res.status(400).send("wrong credentials") 
}


})



module.exports=app