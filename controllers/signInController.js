const loginService = require('../services/signup')

function login(req, res){
    const result = loginService.login(req.body.username, req.body.password) // returns "promise"
    result.then(r=>{
        print(r)
        res.end()
    })
}

module.exports = { login }