const express = require("express");
const router = express.Router();

const recipeController = require ('../controllers/recipeController')
const mapController = require ('../controllers/mapController')
const statisticsController = require ('../controllers/statisticsController')

//  app Routes

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);

router.get('/map' , mapController.MapPage);
router.get('/statistics' , statisticsController.exploreStatistics);

module.exports = router