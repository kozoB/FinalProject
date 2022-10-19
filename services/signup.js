const User = require("../models/user");
const mongoose = require('mongoose');
const user = require("../models/user");

function signup(username,password) {

    const user = new User({
        username : username,
        password : password
    });

    user.save() 
}

function login(username,password) {
    user.findOne({
        "username" : username,
        "password" : password
    })
}

module.exports = { signup, login }