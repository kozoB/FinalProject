const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check")

const authController = require('../controllers/AuthController')




router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/signin', authController.login);
router.post(
  '/signup',
  [
    check('username').isEmail().withMessage('Please enter a valid email.'),
    check('password','Please enter a password with only numbers and text and at least 5 characters.').isLength({ min: 5 }).isAlphanumeric(),
    check('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.signup
);



module.exports = router