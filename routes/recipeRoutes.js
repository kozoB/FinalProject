const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
const loginController = require ('../controllers/loginController')
const registerController = require ('../controllers/registerCnotroller')
const signupController = require ('../controllers/signupController')
const mapController = require ('../controllers/mapController')



//  app Routes

 router.get('/' , recipeController.homepage);
 router.get('/login' , loginController.LoginPage);
 router.get('/register' , registerController.RegisterPage);
 router.get('/ExploreCategories' , recipeController.ExploreCategories);
 router.get('/recipe/:id' , recipeController.ExploreRecipe);
 router.get('/map' , mapController.MapPage); /////////////////////////// BAR - Added map page route


 router.post('/signup' , signupController.signup);

 
module.exports = router