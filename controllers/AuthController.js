const loginService = require("../services/signup");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");

exports.getLoginPage = async (req, res) => {
  //
  const { isAdmin, isLoggedIn } = req.session;
  res.render("LoginPage", { isAdmin, isLoggedIn });
};

exports.getRegisterPage = async (req, res) => {
  const { isAdmin, isLoggedIn } = req.session;
  res.render("RegisterPage", { pageTitle: "Signup", isAdmin, isLoggedIn });
};

exports.Postlogin = async (req, res) => {
  const { username, password } = req.body;

  if (username.length === 0 || password.length === 0) {
    return res.redirect("/login");
  }
  try {
    const { result, user } = await loginService.login(username, password);
    if (!result) {
      return res.redirect("/login?passwordDoesNotMatch");
    }
    console.log(password, user.password)
    if(user.password != password){
      return res.redirect("/login?passwordDoesNotMatch");
    }

    console.log("success to connect");
    req.session.isLoggedIn = true;
    req.session.user = user;
    if (user.username === "shovalash1@gmail.com") {
      req.session.isAdmin = true;
      console.log("admin");
    }
    return req.session.save((err) => {
      if (err) return res.json({ message: "Something went wrong!" });
      res.redirect("/");
    });
  } catch (err) {}
};

exports.signup = async (req, res, next) => {
  const { username, password, confirmPassword } = req.body;
  const { isAdmin, isLoggedIn } = req.session;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render("RegisterPage", {
      path: "/signup",
      pageTitle: "signup",
      errorMessage: errors.array()[0].msg,
      isAdmin,
      isLoggedIn,
    });
  }
  try {
    const userDoc = await User.findOne({ username });
    if (userDoc) {
      console.log("E-Mail exists already, please pick a different one.");
      return res.redirect("/register");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      password: hashedPassword,
    });
    console.log("user created");
    await user.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/signup");
  }
};

function info(req, res) {
  res.send("THESE ARE FAVORITES OF THIS USER");
}
