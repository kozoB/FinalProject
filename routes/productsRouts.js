const express = require("express");
const router = express.Router();

const productsController = require ('../controllers/productsController')


router.get('/products/:id', productsController.exploreCategoriesById);















module.exports = router