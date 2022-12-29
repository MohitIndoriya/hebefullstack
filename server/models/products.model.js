const mongoose = require('mongoose');
// "id": 1,
//       "title": "Adelade Skirt // Clay",
//       "price": 168,
//       "desciption": "The Adelade skirt is guaranteed to be your go to for everything! Pair it with a tank or tee for a look that’s all about ease. A stunning feminine skirt with a wide waist yoke. A perfect style that will take you from day to night for any occasion.",
//       "category": "skirts",
//       "quantity": 1,
//       "rating": {
//         "rate": 3.9,
//         "count": 70
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
    rating:{
        type:Number,
        required:true
    },
    product_id:{
        type:String,
        required:true
    }
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel