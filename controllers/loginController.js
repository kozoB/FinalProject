
exports.LoginPage = async (req, res) => {

    res.render('LoginPage');

}

const loginService = require('../services/signup')

function login(req, res){
    const result = loginService.login(req, res) // returns "promise"
    result.then(r=>{
        console.log(r)
    })
}

module.exports = { login }