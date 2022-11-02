const express = require("express");
const router = express.Router();

const ShopController = require ('../controllers/ShopController')


router.get('/', ShopController.homepage);
router.get('/categories/:id', ShopController.exploreCategoriesById);


module.exports = router