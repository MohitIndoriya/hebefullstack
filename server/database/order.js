
const { default: mongoose } = require("mongoose");


//Cart Products Schema 

const orderSchema = new mongoose.Schema({
    userId:mongoose.Types.ObjectId,
    cartData:[Object],
    address:Object
})


//Cart Product Model

const orderModel = mongoose.model("order",orderSchema);


module.exports={orderModel};