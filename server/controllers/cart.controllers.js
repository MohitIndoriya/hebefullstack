const { cartModel } = require("../database/cart");
const userModel = require("../database/user");




const getAllCartData=async(user)=>{
    
    // Getting User For UserId
    const getUser = await userModel.findOne({email:email});
    
    //Getting CartData by userId
    const cartData = await cartModel.find({userId:getUser['_id']});

    return cartData;
}


const addToCart=async(user)=>{

    

}


module.exports={getAllCartData,addToCart};