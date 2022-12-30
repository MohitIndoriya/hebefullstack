require("dotenv").config();

const express = require("express");

const app = express();

require("./passport-setup");

const passport = require("passport");

const session = require("express-session");

app.use(session({ secret: "melody hensley is my spirit animal" }));

app.set("view engine", "ejs");


app.get("/", (req, res) => [res.render("pages/index")]);

app.get("/success", (req, res) => {
  res.render("pages/profile.ejs");
});

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/success");
  }
);

app.listen(5000, () => {
  console.log("App is runnig on port 5000");
});
