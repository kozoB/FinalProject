require("../database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");
const product = require("../models/product");
const Pn = require("../models/Pn");

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  try {
    const categories = await Category.find({});
    const products = await product.find({});

    const food = await Recipe.find({}).sort({ _id: -1 }).limit(5);
    res.render("index", {
      title: "Cooking Blog - Home",
      categories,
      food,
      products,
    });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", {
      title: "Cooking Blog - Categoreis",
      categories,
    });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * GET /categories/:id
 * Categories By Id
 */
exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Recipe.find({ category: categoryId }).limit(
      limitNumber
    );
    res.render("categories", {
      title: "Cooking Blog - Categoreis",
      categoryById,
    });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

/**
 * GET /recipe/:id
 * Recipe
 */
exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.render("recipe", { title: "Cooking Blog - Recipe", recipe });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

/**
 * POST /search
 * Search
 */
exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("search", { title: "Cooking Blog - Search", recipe });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};




async function insertDymmyCategoryData() {
  try {
    await Pn.insertMany([


      {
        name: "נורת לד ליבון - ירוק",
        category:"נורות לד",
        image: "products/נורות/925334.jpg",
        price:"19",
        id:"925334"
      }

    ]);
  } catch (error) {
    console.log("err", +error);
  }
}

insertDymmyCategoryData()
