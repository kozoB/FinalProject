const express = require("express");
const router = express.Router();

const authController = require ('../controllers/AuthController')




router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/signin' , authController.login);
router.post('/signup' , authController.signup);


module.exports = router