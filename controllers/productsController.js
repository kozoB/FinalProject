require('../database')
const product = require("../models/product");
const Pn = require("../models/Pn");



exports.exploreCategoriesById = async (req, res) => {
    try {
      let categoryId = req.params.id;
      const limitNumber = 20;
      const categoryById = await Pn.find({ category: categoryId });
      
      res.render("Pn", {categoryById});
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