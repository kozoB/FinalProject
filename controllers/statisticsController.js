require("../database");
//const { db } = require("../models/Category");
const Category = require("../models/Category");
const Product = require("../models/Product");

exports.StatisticsPage = async (req, res) => {
  const {isAdmin,isLoggedIn} = req.session;

/*  var id = '635fed5cc033aded00284329';
  Product.findById(id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        //console.log("Result : ", docs);
        Category.aggregate([
          { $match: {} }
        ])
    }
});
*/

const cursor= await Product.aggregate([ // Group products by category so you can view statistics of each category
  { $group: { "_id": "$category" }}
])

console.log("Result : ", cursor);

  res.render('StatisticsPage',isAdmin,isLoggedIn);
}
