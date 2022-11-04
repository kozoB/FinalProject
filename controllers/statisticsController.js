require("../database");
const Category = require("../models/Category");
const Product = require("../models/Product");


exports.exploreCategoriesById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryById = await Product.find({ "category" : categoryId })
    res.render("Products", {categoryById} );
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};