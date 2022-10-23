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
    if (req.cookies != null){
        console.log('cookies: ' + req.cookies + ' connected')
    }
    
    const result = loginService.login(req.body.username, req.body.password) // returns "promise"
    result.then(r => {
        console.log(r)
        if (r){
            res.cookie('foo', 'bar')
            console.log('cookies: ' + req.cookies)
            res.send('Login Successful')
        }

        else{
            res.redirect('/login?err1')
        }
        //res.end()
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

function info(req, res){
    res.send("THESE ARE FAVORITES OF THIS USER")
}


