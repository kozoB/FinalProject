const express = require("express");
const router = express.Router();
const {check,body} = require("express-validator/check")

const authController = require ('../controllers/AuthController')




router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);

router.post('/signin' , authController.login);

router.post('/signup',
[
check('username')
.isEmail()
.withMessage('please enter valid email'),

body(
    'password',
    'please enter a password with only numbers and text at least 5 characters'
    )
    .isLength({min:5})
    .isAlphanumeric() ,
    body('confirmPassword').custom((value,{req})=>{
        if(value!==req.body.password){
            throw new Error('passwords have to match')
        }
        return true
    })
]
, authController.signup)




module.exports = router