const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({

  name: {
    type: String,
  },

  description: {
    type: String,
  },

  email: {
    type: String,
  },

  ingredients : {
    type: Array ,
},

  category: {
    type : String,
    enun : ['Thai' , 'American', 'chinese' , "Mexican", "Indian"]

  }, 

  image: {
    type : String,
  }, 

  

});


module.exports = mongoose.model('Recipe', RecipeSchema);