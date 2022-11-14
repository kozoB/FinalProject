const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/ShopController");
const statisticsController = require("../controllers/statisticsController");
const mapController = require("../controllers/mapController");
const adminController = require("../controllers/adminController");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { isAdmin } = require("../middlewares/isAdmin");
const { initCart } = require("../middlewares/initCart");

router.get("/", isLoggedIn, ShopController.homepage);
router.get("/categories/:id", ShopController.exploreCategoriesById);
router.get("/statistics", statisticsController.StatisticsPage);
router.get("/map", mapController.MapPage);
router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.post("/add-to-cart", initCart, ShopController.addToCart);
router.get("/logout", adminController.logOut);
router.get("/cart", initCart ,ShopController.getCart);
router.post("/checkout",ShopController.checkout);
router.post("/delete-product/",adminController.deleteProduct);

router.get(
  "/admin-dashboard",
  isLoggedIn,
  isAdmin,
  adminController.getDashboard
);

module.exports = router;
