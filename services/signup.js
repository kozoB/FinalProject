const User = require("../models/user");


function signup(res,req) {

    const user = new User({
        username : res,
        password : req
    });


    user.save() 
}

module.exports = { signup }