const userModel = require("../database/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../miscFunction/CommonFunction");
const User = require("../database/user");
require("dotenv").config();

const signUp = async (body) => {
  // console.log(body);
  let user = await userModel.findOne({ email: body.email });
  if (user) {
    throw new Error("Email Already Registered");
  }
  const salt = 10;
  body.password = bcrypt.hashSync(body.password, salt);
  body.authType = "normal";
  let newUser = await userModel.create(body);
  return "Sucessfully Sign Up";
};

const googleAuth = async (reqest, accessToken, refreshToken, profile, done) => {
  let user = await userModel.findOne({ email: profile.emails[0].value });
  
  console.log(profile);
  if (!user) {
    let body = {
      authType: "google",
      firstName: profile.name.givenName,
      image: profile.photos[0].value,
      email: profile.emails[0].value,
    };
    let newUser = await User.create(body);
  }

  return done(null, profile);
};

const login = async (body) => {
  let user = await userModel.findOne({ email: body.email });
  if (!user) {
    throw new Error("User Not Found");
  }

  let password = bcrypt.compareSync(body.password, user.password);
  if (!password) {
    throw new Error("Incorrect Password");
  }
  return generateToken(user.toJSON());
};
module.exports = { signUp, login, googleAuth };
