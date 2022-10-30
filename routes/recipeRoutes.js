const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
const mapController = require ('../controllers/mapController')



//  app Routes

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);

 router.get('/map' , mapController.MapPage);



module.exports = router