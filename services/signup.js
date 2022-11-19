const User = require("../models/User");
const bcrypt = require("bcryptjs");

async function login(username, password) {
  const user = await User.findOne({ username });
  const result = bcrypt.compare(password, user.password)
  
  return  {result, user}
}

module.exports = { login };
