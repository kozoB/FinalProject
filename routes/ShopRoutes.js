const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/ShopController");
const adminController = require("../controllers/adminController");

const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { isAdmin } = require("../middlewares/isAdmin");
const { initCart } = require("../middlewares/initCart");


// get request
router.get("/", isLoggedIn, ShopController.homepage);
router.get("/categories/:id", ShopController.exploreCategoriesById);
router.get("/add-product", adminController.getAddProduct);
router.get("/logout", adminController.logOut);
router.get("/cart", initCart ,ShopController.getCart);
router.get("/D3",isLoggedIn,ShopController.getStatic);
router.get("/about",ShopController.getAbout);
router.get("/admin-dashboard",isLoggedIn,isAdmin,adminController.getDashboard);

// post request
router.post("/add-product", adminController.postAddProduct);
router.post("/add-to-cart", initCart, ShopController.addToCart);
router.post("/checkout",ShopController.checkout);
router.post("/delete-product/",adminController.deleteProduct);

module.exports = router;
