const signupService = require("../services/signup")


async function signup(req, res) {
   
  const result = signupService.signup(req.body.username , req.body.password)
  res.redirect('/');
}

  module.exports = { signup }