const express = require("express");
const { connect } = require("./database/connect");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const { cartRouter } = require("./routes/cart.routes");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const oathRouter = require("./routes/oath.routes");
const expressSession = require("express-session");
const { googleAuth } = require("./controllers/user.controller");
const productRouter = require("./routes/product.router");
const { orderRouter } = require("./routes/order.routes");
require("dotenv").config();
require("./routes/oath.routes");
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
app.use("/users", userRouter);
app.use(cartRouter);

app.use(express.static("./build"));
app.use(
  expressSession({
    secret: data.SECRET_KEY,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new googleStrategy(
    {
      clientID: data.GOOGLE_CLIENT_ID,
      clientSecret: data.GOOGLE_SECRET,
      callbackURL: data.GOOGLE_CALLBACK,
      passReqToCallback: "true",
    },
    googleAuth
  )
);
app.use(oathRouter);
app.use(cartRouter);
app.use("/",productRouter)
app.use(orderRouter)

const PORT = process.argv[2] || 8080;
connect()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(res);
      console.log("Connected To Server");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
