const User = require("../models/User");


function login(username,password) {
    return User.findOne({
        "username" : username,
        "password" : password
    })
}

module.exports = { login }