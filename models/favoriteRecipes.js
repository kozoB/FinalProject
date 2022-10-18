const mongoose = require('mongoose');
const Recipe = require('./Recipe');

const FavoriteSchema = new mongoose.Schema({
  recipes: {
    type: Recipe, // Needs to be an array of Recipes
    required: 'This field is required.'
  },
});

module.exports = mongoose.model('favoriteRecipes', FavoriteSchema);