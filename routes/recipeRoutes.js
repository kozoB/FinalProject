const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
const loginController = require ('../controllers/loginController')
const registerController = require ('../controllers/registerCnotroller')
const signupController = require ('../controllers/signupController')
const mapController = require ('../controllers/mapController')



//  app Routes

router.post('/', recipeController.homepage);
router.post('/recipe/:id', recipeController.exploreRecipe );
router.post('/categories', recipeController.exploreCategories);
router.post('/categories/:id', recipeController.exploreCategoriesById);


 router.post('/login' , loginController.LoginPage);
 router.post('/register' , registerController.RegisterPage);
 router.post('/map' , mapController.MapPage); /////////////////////////// BAR - Added map page route
 
 router.post('/signup' , signupController.signup);
 router.post('/search', recipeController.searchRecipe);
    


module.exports = router