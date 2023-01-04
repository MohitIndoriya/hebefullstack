const { Router } = require("express");
const passport = require("passport");
const { generateToken } = require("../miscFunction/CommonFunction");
require("dotenv").config();
const data = process.env;

//Creating Router for OAUTH

const oathRouter = Router();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

oathRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email","profile"] })
);

oathRouter.get("/googleLoginSucess", (req, res) => {
  try {
    // console.log(req.user);
    let token = generateToken({ email: req.user.emails[0].value,image:req.user.photos[0].value,firstName:req.user.emails[0].value.split('@')[0]});
    res.redirect(`${data.WEBSITE_REDIRECT_URL}?token=${token}`);
  } catch (err) {
    res.send("<h1>Page Not Found</h1>");
  }
});

oathRouter.get(
  data.GOOGLE_CALLBACK,
  passport.authenticate("google", {
    successRedirect: "/googleLoginSucess",
    failureRedirect: "/login",
  })
);

module.exports = oathRouter;
