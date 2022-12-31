const mongoose = require("mongoose");

let userschema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },

<<<<<<< HEAD



const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    authType:String,
    img:String
    
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;

=======
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  contact: {
    type: String,
  },
  img: {
    type: String,
  },
  authType: {
    type: String,
  },
});
let User = mongoose.model("user", userschema);
module.exports = User;
>>>>>>> 99e968932101a44aea4b1e5141590e9af1ef494b
