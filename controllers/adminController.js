const Product = require("../models/Product");

exports.getAddProduct = async (req, res) => {
  const {isAdmin, isLoggedIn} = req.session;
    res.render("add-product", {isAdmin, isLoggedIn})

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
            res.redirect('https://twitter.com/intent/tweet?button_hashtag=addItems&ref_src=twsrc%5Etfw');
          })
          .catch(err => {
            console.log(err);
          });
      };        
        
        
    exports.logOut = async(req,res) => {
      req.session.destroy();
      res.redirect('/login')

    }
    

    exports.deleteProduct = async (req,res)=> {
      const {productId} = req.body;
      await Product.findByIdAndDelete(productId)
      res.redirect("/")

    }

   