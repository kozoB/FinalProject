const express = require("express");
const router = express.Router();

const ShopController = require ('../controllers/ShopController')
const statisticsController = require ('../controllers/statisticsController')
const mapController = require ('../controllers/mapController')


router.get('/', ShopController.homepage);
router.get('/categories/:id', ShopController.exploreCategoriesById);
router.get('/statistics' , statisticsController.exploreStatistics);
router.get('/map' , mapController.MapPage);

module.exports = router