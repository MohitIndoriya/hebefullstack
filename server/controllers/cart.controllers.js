const { cartModel } = require("../database/cart");
const userModel = require("../database/user");




const getAllCartData=async(user)=>{
    
    // Getting User For UserId
    const getUser = await userModel.findOne({email:user.email});
    
    //Getting CartData by userId
    const cartData = await cartModel.find({userId:getUser.id});

    return cartData;
}


const addToCart=async(body,user)=>{

    
    
    // Getting User Id
    const getUser = await userModel.findOne({email:user.email});
    
    const products = await cartModel.findOne({productId:body.productId,userId:getUser.id});
    if(products){
        throw new Error('Already In Cart');
    }


    //Adding To Cart
    body.userId=getUser.id;
    const newProduct = await cartModel.create(body);
    

    return newProduct;

}

const updateCart=async(body,user,productId)=>{

    // Getting User Id
    const getUser = await userModel.findOne({email:user.email});


    //Finding Product
    const product = await cartModel.findOne({"_id":productId});

    
    //Checking Valid Product 
    if(!product){
        throw new Error('Product Not Found in Cart');
    }


    //Checking Authorization
    if(product.userId!=getUser.id){
        
        throw new Error('Not Authorized User');
    }


    
    //Updating Product
    let updatedProduct = await cartModel.updateOne({"_id":productId},{
        ...body
    })

    // console.log("hello");



    return updatedProduct;



}

const deleteCartProduct =async(user,productId)=>{

    // Getting User Id
    const getUser = await userModel.findOne({email:user.email});

    //Finding Product
    const product = await cartModel.findOne({"_id":productId});

    //Checking Valid Product 
    if(!product){
        throw new Error('Product Not Found in Cart');
    }

    //Checking Authorization
    if(product.userId!=getUser.id){
        throw new Error('Not Authorized User');
    }

    //Delete Product
    let deletedProduct = await cartModel.deleteOne({"_id":productId});

    return deletedProduct;

}

const deleteCart=async(user)=>{

    const deleteCart = await cartModel.deleteMany({userId:user.id});

    return deleteCart;


}


module.exports={getAllCartData,addToCart,updateCart,deleteCartProduct,deleteCart};