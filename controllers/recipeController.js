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






























// async function insert() {
//   try {
//     await Pn.insertMany([

//       {
//         name: "פוטוצל",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/9521.jpg",
//         price: "32",
//         id: "9521",
//       },

//       {
//         name: "פוטוצל",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/9522.jpg",
//         price: "54",
//         id: "9522",
//       },

//       {
//         name: "גלאי תנועה לקיר",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/9523.jpg",
//         price: "87",
//         id: "9523",
//       },

//       {
//         name: "גלאי תנועה לתקרה",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/9524.jpg",
//         price: "109",
//         id: "9524",
//       },

//       {
//         name: "גלאי עשן פוטו אלקטרוני",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/6000.jpg",
//         price: "196",
//         id: "6000",
//       },

//       {
//         name: "גלאי עשן פוטו אלקטרוני",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/6001.jpg",
//         price: "50",
//         id: "6001",
//       },

//       {
//         name: "שעון לדוד 24 שעות מרובע",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5400.jpg",
//         price: "98",
//         id: "5400",
//       },

//       {
//         name: "שעון לדוד 24 שעות מלבני",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5401.jpg",
//         price: "98",
//         id: "5401",
//       },

//       {
//         name: "שעון לדוד 24 שעות מלבני על הטיח",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5402.jpg",
//         price: "98",
//         id: "5402",
//       },

//       {
//         name: "טיימר מכני 180 דק",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5403.jpg",
//         price: "98",
//         id: "5403",
//       },

//       {
//         name: "טיימר מכני 180 דק מרובע תחת הטיח",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5404.jpg",
//         price: "54",
//         id: "5404",
//       },

//       {
//         name: "טיימר מכני לדוד 120 דק תחת הטיח",
//         category: "גלאים ושעונים",
//         image: "/products/גלאים ושעונים/5409.jpg",
//         price: "152",
//         id: "5409",
//       },

//     ]); 

//   } catch (error) {
//     console.log("err", +error);
//   }
// }

//  insert()
