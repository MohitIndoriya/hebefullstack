const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    },
    product_id:{
        type:String,
        required:true
    }
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel