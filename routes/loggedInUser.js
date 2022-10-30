const express = require("express");
const router = express.Router();

const authController = require ('../controllers/AuthController')

router.post('/favorites' , authController.info);


module.exports = router