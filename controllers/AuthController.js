const loginService = require('../services/signup')
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator/check")


exports.getLoginPage = async (req, res) => {

    res.render('LoginPage');
}

exports.getRegisterPage = async (req, res) => {

    res.render('RegisterPage');

}

exports.login = async (req, res) => {
    const result = loginService.login(req.body.username, req.body.password) // returns "promise"
    result.then(r => {
        console.error(r)
        res.end()
    }
    )

}


exports.signup = async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).render('RegisterPage', {
            path: '/register',
            pageTitle: 'register',
            errorMessage: error.array()[0].msg
        })
    }
    User.findOne({ username: username })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/register')
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {

                    const user = new User({
                        username: username,
                        password: hashedPassword
                    })
                    console.log('success create user')
                    return user.save()
                })
        })
        .then(result => {
            res.redirect("/login")
        })
        .catch(err => {
            console.log('try another username')
        })

}


