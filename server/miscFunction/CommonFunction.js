const jwt = require('jsonwebtoken');
require('dotenv').config();
const env = process.env.SECRET_KEY;


const generateToken=(obj)=>{
    if(obj.password){
        delete obj.password;
    }
    const token = jwt.sign(obj,env);
    return token;
}

const checkToken =(token)=>{
    let valid = jwt.verify(token,env);
    if(!valid){
        throw new Error('Invalid User');   
    }
    let obj = jwt.decode(token);
    
    return obj;

}

module.exports= {generateToken,checkToken};