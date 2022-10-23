const loginService = require('../services/signup')
const User = require("../models/user");
const bcrypt = require('bcryptjs')


exports.getLoginPage = async (req, res) => {

    res.render('LoginPage');
}

exports.getRegisterPage = async (req, res) => {

    res.render('RegisterPage');

}

exports.login = async (req, res) => {
    const result = loginService.login(req.body.username, req.body.password) // returns "promise"
    result.then(r => {
        console.log(r)
        if (r){
            res.send('Login Successful')
        }

        else{
            res.redirect('/login?err1')
        }
        res.end()
    }
    )

}


exports.signup = async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    User.findOne({ username: username })
        .then(userDoc => {

            if (userDoc) {
                return res.redirect('/register?err1')
            }

            const user = new User({
                username: username,
                password: password
            });
            return user.save()
        } )
        .then(result => {
            console.log('create user')
            res.redirect("/login")
        })
        .catch(err => {
            console.log('try another username')
        })

}


