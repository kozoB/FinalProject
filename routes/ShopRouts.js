const express = require("express");
const router = express.Router();

const ShopController = require ('../controllers/ShopController')
const statisticsController = require ('../controllers/statisticsController')
const mapController = require ('../controllers/mapController')
const adminController = require ('../controllers/adminController')



router.get('/', ShopController.homepage);
router.get('/categories/:id', ShopController.exploreCategoriesById);
router.get('/statistics' , statisticsController.exploreStatistics);
router.get('/map' , mapController.MapPage);
router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);



module.exports = router