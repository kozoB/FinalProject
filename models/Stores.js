const mongoose = require('mongoose');

const Store = new mongoose.Schema({
    name: {
        type: String,
        enun : ['Rishon store' , 'Ashdod store']
      },
    
      description: {
        type: String,
        enun : ['Street 1' , 'Street 2']
      },

 });

module.exports = mongoose.model('Stores', Store)

