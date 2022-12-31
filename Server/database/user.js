const { default: mongoose } = require("mongoose");





const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    authType:String,
    img:String
    
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;

