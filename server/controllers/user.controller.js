const userModel = require("../db/user")
const bcrypt = require('bcrypt');
const  {generateToken}  = require("../CommonFunction/CommonFunction");
const axios = require('axios');
require('dotenv').config();

const signUp =async(body)=>{
    // console.log(body);
    let user =await userModel.findOne({email:body.email});
    if(user){
        throw new Error('Email Already Registered');
    }
    const salt= 10;
    body.password = bcrypt.hashSync(body.password,salt);
    let newUser = await userModel.create(body);
    newUser.authType="normal"
    return "Sucessfully Sign Up";

}

const login=async(body)=>{

    let user = await userModel.findOne({email:body.email});
    if(!user){
        throw new Error('User Not Found');
    }

    let password= bcrypt.compareSync(body.password,user.password);
    if(!password){

        throw new Error('Incorrect Password');

    }
    return generateToken(user.toJSON());
}
module.exports = {signUp,login}