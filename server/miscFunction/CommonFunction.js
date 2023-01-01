const jwt = require('jsonwebtoken');
const User = require('../database/user');
require('dotenv').config();
const env = process.env.SECRET_KEY;


const generateToken=(obj)=>{
    
    if(obj.password){
        delete obj.password;
    }
    const token = jwt.sign(obj,env);
    return token;
}

const checkToken =async(token)=>{
    let valid = jwt.verify(token,env);
    if(!valid){
        throw new Error('Invalid User');   
    }
    
    
    let user = await User.findOne({email:valid.email});
    // console.log(user);
    if(user.password){
        delete user.password;
    }
    
    return user;

}

module.exports= {generateToken,checkToken};