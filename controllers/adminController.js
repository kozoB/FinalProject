const Product = require("../models/Product");

exports.getAddProduct = async (req, res) => {

    res.render("add-product")
    
    }
    
    
    
    exports.postAddProduct = async (req, res) => {

        const name = req.body.name;
        const category = req.body.category;
        const image = req.body.image;
        const price = req.body.price;
        const id = req.body.id;

        const product = new Product({
            name: name,
            category: category,
            image: image,
            price: price,
            id: id

        });
        product.save()

        .then(result => {
            // console.log(result);
            console.log('Created Product');
            res.redirect('/admin/products');
          })
          .catch(err => {
            console.log(err);
          });
      };        
        
        
        
        