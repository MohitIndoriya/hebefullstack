const { default: mongoose } = require("mongoose");


//Cart Products Schema 

const cartSchema = new mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    quantity:Number,
    image:String,
    userId:{type:mongoose.Types.ObjectId,ref:"user"},
    productId:String
})


//Cart Product Model

const cartModel = mongoose.model("cart",cartSchema);


module.exports={cartModel};