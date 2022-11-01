require("../database");
const Category = require("../models/Category");
const product = require("../models/product");


exports.exploreStatistics = async (req, res) => {
    try {
      const limitNumber = 20;
      const products = await product.find({}).limit(limitNumber);
      res.render("StatisticsPage", {
        title: "Statistics",
        products,
      });
    } catch (error) {
      res.satus(500).send({ message: error.message || "Error Occured" });
    }
  };