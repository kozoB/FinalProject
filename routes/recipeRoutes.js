const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
const loginController = require ('../controllers/loginController')
const registerController = require ('../controllers/registerCnotroller')
const signupController = require ('../controllers/signupController')
const mapController = require ('../controllers/mapController')



//  app Routes

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);

 router.get('/login' , loginController.LoginPage);
 router.get('/register' , registerController.RegisterPage);

 
 router.post('/map' , mapController.MapPage); /////////////////////////// BAR - Added map page route
 router.post('/signup' , signupController.signup);
    


module.exports = router