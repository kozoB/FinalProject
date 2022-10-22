const loginService = require('../services/signup')


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
   
    const result = loginService.signup(req.body.username , req.body.password)
    res.redirect('/');
    
  }
  

