const {Router} =require('express');
const passport=require('passport')
require('dotenv').config();
const data = process.env;


//Creating Router for OAUTH

const oathRouter = Router();

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
  done(null, user);
});

oathRouter.get('/google',passport.authenticate('google',{scope:["email"]}))

oathRouter.get(data.GOOGLE_CALLBACK,passport.authenticate("google",{ successRedirect:"/",failureRedirect: '/login' }))

module.exports=oathRouter;