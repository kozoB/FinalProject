const User = require("../models/user");
const mongoose = require('mongoose');

// function signup(username,password) {

//     const user = new User({
//         username : username,
//         password : password
//     });

    return user.save() 
}

function login(username,password) {
    return User.findOne({
        "username" : username,
        "password" : password
    })
}

module.exports = { signup, login }