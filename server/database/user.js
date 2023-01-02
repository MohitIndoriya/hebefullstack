const mongoose = require("mongoose");

let userschema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },

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
  image: {
    type: String,
  },
  authType: {
    type: String,
  },
  role:{
    type:String,
     enum:["admin","consumer"],
     default:"consumer"
  }
});
let User = mongoose.model("user", userschema);
module.exports = User;
