const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
// const signupController = require ('../controllers/signupController')
const mapController = require ('../controllers/mapController')
// const signInController = require ('../controllers/signInController')



//  app Routes

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);


 router.post('/map' , mapController.MapPage); /////////////////////////// BAR - Added map page route
//  router.post('/signup' , signupController.signup);
//  router.post('/signin' , signInController.login);

module.exports = router