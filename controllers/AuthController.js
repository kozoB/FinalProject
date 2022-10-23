const loginService = require('../services/signup')
const User = require("../models/user");


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

    User.findOne({ username: username })
        .then(userDoc => {
            if (userDoc) {
                console.log('username already exsit')
                return res.redirect('/register?err1')
            }

            const user = new User({
                username: username,
                password: password
            });

            return user.save()
            
            
        })
        .then(result => {
       
            res.redirect("/login")
        })
        .catch(err=>{
            console.log(err)
        })

}


