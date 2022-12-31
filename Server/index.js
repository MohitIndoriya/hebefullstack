const express = require('express');
const { connect } = require('./database/connect');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const { cartRouter } = require('./routes/cart.route');
const passport = require('passport');
const googleStrategy =require('passport-google-oauth20').Strategy;
const oathRouter = require('./routes/oath.route');
const expressSession = require('express-session');
const {generateToken} = require('./miscFunction/CommonFunction')
const { googleAuth } = require('./controllers/user.controller');
const { request } = require('express');
require('dotenv').config();
require("./routes/oath.route")
const data = process.env;





const app = express();
app.use(express.static("./build"))
app.use(expressSession({
    secret:data.SECRET_KEY
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
passport.use(new googleStrategy({
    clientID:data.GOOGLE_CLIENT_ID,
    clientSecret:data.GOOGLE_SECRET,
    callbackURL:data.GOOGLE_CALLBACK,
    passReqToCallback: "true"

},googleAuth));
app.use(oathRouter);
app.use(userRouter);
app.use(cartRouter);


const PORT = process.argv[2] || 3000;
connect().then(res=>{
    app.listen(PORT,()=>{
        console.log(res);
        console.log("Connected To Server");
    })
})
.catch((err)=>{
    console.log(err.message);
})