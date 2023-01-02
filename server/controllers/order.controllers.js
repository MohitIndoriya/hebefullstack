const { orderModel } = require("../database/order");




const postOrder=async(user,body)=>{

    if(user.id!=body.userId){
        throw new Error('Not Authorized');
    }

    
    const postedOrder = await orderModel.create(body);
    return postedOrder;

}


module.exports={postOrder};