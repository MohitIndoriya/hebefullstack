const mongoose =require("mongoose")



let userschema=mongoose.Schema({
    name:{
        type:String,required:true
    },

    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String ,required:true
    },
    contact:{
        type:String
    }
})
let User=mongoose.model("user",userschema)
module.exports=User