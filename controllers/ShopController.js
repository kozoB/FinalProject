require("../database");
const Category = require("../models/Category");
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.homepage = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

  try {
    const categories = await Category.find({});
    res.render("index", { title: "Cooking Blog - Home", categories,isAdmin,isLoggedIn });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreCategoriesById = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

  try {
    const categoryId = req.params.id;
    const products = await Product.find({ category: categoryId });
    res.render("Products", { products,isAdmin,isLoggedIn });
  } catch (error) {
    res.status(404).send({ message: error.message || "Error Occured" });
  }
};

exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  const prod = await Product.findById(productId);
  // [...[1,2,3], 4] => [1,2,3,4]
  req.session.cart = [...req.session.cart, prod];
  req.session.save((err) => {
    res.redirect("/cart");
  });
};

exports.getCart = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

  const cartItems = [...req.session.cart];
  res.render("cart", { cartItems,isAdmin,isLoggedIn });
};

exports.checkout = async (req, res) => {
  const cartItems = [...req.session.cart];
  const totalPrice = cartItems.reduce((sum, item) => (sum += item.price), 0);
  const userEmail = req.session.user.username;
  const newOrder = new Order({ cartItems, totalPrice, userEmail });
  await newOrder.save();
  req.session.cart=[]
  res.redirect("/");
};
exports.getStatic = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

  res.render("D3", { isAdmin,isLoggedIn });
};

exports.getAbout = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

  res.render("about", { isAdmin,isLoggedIn });
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
