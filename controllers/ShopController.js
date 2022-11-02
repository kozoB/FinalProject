require('../database')
const Category = require("../models/Category");
const Product = require("../models/Product");



exports.homepage = async (req, res) => {
  try {

    const categories = await Category.find({});

    res.render( "index", { title: "Cooking Blog - Home", categories} );
  } catch (error) {
    res.status(404).send({message: error.message || "Error Occured"});
  }

};


exports.exploreCategoriesById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryById = await Product.find({ "category" : categoryId })
    res.render("Products", {categoryById} );
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};


















// async function insertDymmyCategoryData() {
//   try {
//     await products.insertMany([
//       {
//         name: "אינסטלציה חשמלית",
//         image: "אינסטלציה חשמלית.jpg",
//       },

//       {
//         name: "גלאים ושעונים",
//         image: "גלאים ושעונים.jpg",
//       },

//       {
//         name: "מפסקים ושקעים",
//         image: "מפסקים ושקעים.jpg",
//       },
//       {
//         name: "נורות לד",
//         image: "נורות לד.jpg",
//       },

//       {
//         name: "פעמונים",
//         image: "פעמונים.jpg",
//       },

//       {
//         name: "תאורה",
//         image: "תאורה.jpg",
//       },
//     ]);
//   } catch (error) {
//     console.log("err", +error);
//   }
// }

//  insertDymmyCategoryData ()